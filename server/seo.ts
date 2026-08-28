// 라우트별 SEO 메타 주입 + 알 수 없는 경로 404 판정 (2026-08-27 SEO 감사 반영)
// serveStatic(vite.ts)의 catch-all에서 사용한다.

export const BASE_URL = "https://sketch-sage-magmaart2238050.replit.app";

interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

// 클라이언트 라우터(client/src/App.tsx)와 1:1로 유지할 것.
const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title:
      "코코미술학원 - 마산미술학원 김해미술학원 | 마산디지털드로잉 김해디지털드로잉 | 마산만화학원 김해만화학원",
    description:
      "마산미술학원 김해미술학원 코코미술학원. 마산디지털드로잉 김해디지털드로잉 전문. 마산만화학원 김해만화학원 웹툰 애니메이션 전문. FOLLOW 4단계 사고체계 미대입시, 디지털드로잉, 웹툰, 애니메이션 전문교육. 010-4472-2028",
  },
  "/admissions": {
    title: "합격·수상 실적 | 코코미술학원 마산·김해",
    description:
      "코코미술학원 연도별 미대입시 합격자와 수상 실적. 마산·김해 입시미술 FOLLOW 시스템의 결과를 확인하세요.",
  },
  "/admissions/overview": {
    title: "합격·수상 실적 한눈에 보기 | 코코미술학원 마산·김해",
    description:
      "코코미술학원 미대입시 합격·수상 실적 종합 페이지. 연도별 합격자 현황을 한눈에 확인할 수 있습니다.",
  },
  "/admissions/2026": {
    title: "2026 미대입시 합격자 | 코코미술학원 마산·김해",
    description: "2026학년도 코코미술학원 미대입시 합격자 명단과 합격 대학 현황.",
  },
  "/admissions/2025": {
    title: "2025 미대입시 합격자 | 코코미술학원 마산·김해",
    description: "2025학년도 코코미술학원 미대입시 합격자 명단과 합격 대학 현황.",
  },
  "/admissions/2024": {
    title: "2024 미대입시 합격자 | 코코미술학원 마산·김해",
    description: "2024학년도 코코미술학원 미대입시 합격자 명단과 합격 대학 현황.",
  },
  "/admissions/2023": {
    title: "2023 미대입시 합격자 | 코코미술학원 마산·김해",
    description: "2023학년도 코코미술학원 미대입시 합격자 명단과 합격 대학 현황.",
  },
  "/admissions/2022": {
    title: "2022 미대입시 합격자 | 코코미술학원 마산·김해",
    description: "2022학년도 코코미술학원 미대입시 합격자 명단과 합격 대학 현황.",
  },
  "/info/tuition": {
    title: "교습비 안내 (마산) | 코코미술학원",
    description: "코코미술학원 마산 캠퍼스 교습비 안내. 과정별 수강료를 확인하세요.",
  },
  "/info/tuition/gimhae": {
    title: "교습비 안내 (김해) | 코코미술학원",
    description: "코코미술학원 김해 캠퍼스 교습비 안내. 과정별 수강료를 확인하세요.",
  },
  "/info/transport": {
    title: "안전귀가 차량운행 (마산) | 코코미술학원",
    description: "코코미술학원 마산 캠퍼스 안전귀가 차량운행 안내.",
  },
  "/info/transport/gimhae": {
    title: "안전귀가 차량운행 (김해) | 코코미술학원",
    description: "코코미술학원 김해 캠퍼스 안전귀가 차량운행 안내.",
  },
  "/admin/consultations": {
    title: "상담 신청 관리 | 코코미술학원",
    description: "관리자 전용 페이지입니다.",
    noindex: true,
  },
};

// 프리렌더 스냅샷 (2026-08-28): client/public/prerendered/<slug>.html — 본문이 포함된 완성 HTML.
// 스냅샷의 에셋 참조(/assets/index-*.js·css)는 빌드마다 해시가 바뀌므로 서빙 시 현재 템플릿 값으로 치환한다.
export function prerenderSlug(path: string): string {
  return path === "/" ? "root" : path.slice(1).replace(/\//g, "_");
}

export function rewriteAssets(snapshot: string, template: string): string {
  const js = template.match(/\/assets\/index-[\w-]+\.js/)?.[0];
  const css = template.match(/\/assets\/index-[\w-]+\.css/)?.[0];
  let out = snapshot;
  if (js) out = out.replace(/\/assets\/index-[\w-]+\.js/g, js);
  if (css) out = out.replace(/\/assets\/index-[\w-]+\.css/g, css);
  // 캡처 시점 빌드의 지연 청크를 가리키는 modulepreload 힌트는 해시가 어긋나 404를 내므로 제거
  // (성능 힌트일 뿐, 실제 청크는 현재 빌드의 import 경로로 정상 로드된다)
  out = out.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, "");
  return out;
}

export function normalizePath(originalUrl: string): string {
  const p = originalUrl.split("?")[0].split("#")[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function isKnownRoute(path: string): boolean {
  return Object.prototype.hasOwnProperty.call(ROUTE_META, path);
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// index.html 원문(head에 기본 메타가 이미 존재)을 라우트별 값으로 치환하고
// canonical을 주입한다. 알 수 없는 경로에도 호출 가능(기본 메타 유지 + noindex).
export function applySeo(template: string, path: string): string {
  const meta = ROUTE_META[path];
  let html = template;

  if (meta) {
    const title = escapeAttr(meta.title);
    const desc = escapeAttr(meta.description);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${desc}$2`,
    );
    html = html.replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${title}$2`,
    );
    html = html.replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${desc}$2`,
    );
    html = html.replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${BASE_URL}${path === "/" ? "/" : path}$2`,
    );
    html = html.replace(
      /(<meta property="twitter:title" content=")[^"]*(")/,
      `$1${title}$2`,
    );
    html = html.replace(
      /(<meta property="twitter:url" content=")[^"]*(")/,
      `$1${BASE_URL}${path === "/" ? "/" : path}$2`,
    );
  }

  const robots =
    !meta || meta.noindex
      ? `<meta name="robots" content="noindex, nofollow">`
      : "";
  if (robots) {
    html = html.replace(
      /<meta name="robots" content="[^"]*">/,
      robots,
    );
    html = html.replace(
      /<meta name="googlebot" content="[^"]*">/,
      "",
    );
  }

  const canonical =
    meta && !meta.noindex
      ? `<link rel="canonical" href="${BASE_URL}${path === "/" ? "/" : path}">`
      : "";
  html = html.replace("</head>", `${canonical}\n  </head>`);

  return html;
}
