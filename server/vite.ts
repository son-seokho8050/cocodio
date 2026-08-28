import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import { applySeo, isKnownRoute, normalizePath, prerenderSlug, rewriteAssets } from "./seo";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // index: false — "/"도 아래 SEO 주입 폴백을 타게 한다
  app.use(express.static(distPath, { index: false }));

  // SPA 폴백: 알려진 라우트만 200 + 라우트별 SEO 메타 주입,
  // 그 외 경로는 404로 응답해 소프트 404를 막는다 (2026-08-27 SEO 감사).
  const template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  const snapshotCache = new Map<string, string | null>();
  app.use("*", (req, res) => {
    const p = normalizePath(req.originalUrl);
    const known = isKnownRoute(p);

    // 알려진 라우트는 본문이 담긴 프리렌더 스냅샷 우선 (없으면 SPA 셸 + 메타 주입)
    if (known && !snapshotCache.has(p)) {
      const file = path.resolve(distPath, "prerendered", `${prerenderSlug(p)}.html`);
      snapshotCache.set(
        p,
        fs.existsSync(file) ? rewriteAssets(fs.readFileSync(file, "utf-8"), template) : null,
      );
    }
    const snapshot = known ? snapshotCache.get(p) : null;
    const html = snapshot ?? applySeo(template, p);
    res
      .status(known ? 200 : 404)
      .set({ "Content-Type": "text/html" })
      .send(html);
  });
}
