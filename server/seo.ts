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

export function rewriteAssets(
  snapshot: string,
  template: string,
  assetExists?: (urlPath: string) => boolean,
): string {
  const js = template.match(/\/assets\/index-[\w-]+\.js/)?.[0];
  const css = template.match(/\/assets\/index-[\w-]+\.css/)?.[0];
  let out = snapshot;
  if (js) out = out.replace(/\/assets\/index-[\w-]+\.js/g, js);
  if (css) out = out.replace(/\/assets\/index-[\w-]+\.css/g, css);
  // 캡처 시점 빌드의 지연 청크를 가리키는 modulepreload 힌트는 해시가 어긋나 404를 내므로 제거
  // (성능 힌트일 뿐, 실제 청크는 현재 빌드의 import 경로로 정상 로드된다)
  out = out.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, "");
  const popupImages: string[] = [];
  out = stripPopupOverlays(out, popupImages);
  return injectImagePreloads(out, popupImages, assetExists);
}

// 걷어낸 팝업(첫 팝업)의 이미지는 원래 HTML을 읽는 동안 먼저 받아지던 것이다. 그 조기 다운로드만
// preload로 되살린다. 없으면 첫 방문에서 앱이 뜬 뒤에야 갤러리 사진들과 대역을 나눠 받느라
// 첫 팝업이 설정한 1초보다 수 초~20초 늦게 뜬다(2026-09-11 속도 제한 실측).
function injectImagePreloads(
  html: string,
  srcs: string[],
  assetExists?: (urlPath: string) => boolean,
): string {
  const links = Array.from(new Set(srcs))
    .filter(
      (s) =>
        /^\/assets\/[\w-]+(?:\.[\w-]+)*\.(?:webp|avif|png|jpe?g|gif)$/i.test(s) &&
        (!assetExists || assetExists(s)),
    )
    .map((s) => `<link rel="preload" as="image" href="${s}">`)
    .join("");
  return links ? html.replace("</head>", `${links}</head>`) : html;
}

// 팝업은 방문자마다 다른 클라이언트 상태(지연 표시·오늘 그만보기)라 스냅샷에 박제되면
// 로딩 직후 팝업이 떴다가 앱 시작과 함께 사라지고 다시 뜨는 깜빡임이 생긴다.
// 팝업 최상위 div의 data-popup-overlay 표지를 찾아 그 div 블록 전체를 걷어낸다.
export function stripPopupOverlays(html: string, foundImages?: string[]): string {
  const divTag = /<\/?div\b(?:[^>"']|"[^"]*"|'[^']*')*>/g;
  let out = html;
  let from = 0;
  for (;;) {
    const marker = out.indexOf("data-popup-overlay", from);
    if (marker === -1) return out;
    const start = out.lastIndexOf("<div", marker);
    divTag.lastIndex = start === -1 ? 0 : start;
    const open = start === -1 ? null : divTag.exec(out);
    // 표지가 바로 그 div의 여는 태그 안에 있을 때만 지운다. 본문 글자 등 태그 밖의 같은 문자열을
    // 표지로 오인하면 상위 블록(최악은 페이지 전체)을 지우게 되므로 건너뛴다.
    if (!open || open.index !== start || marker >= divTag.lastIndex) {
      from = marker + 1;
      continue;
    }
    let depth = 1;
    let end = -1;
    let m: RegExpExecArray | null;
    while ((m = divTag.exec(out))) {
      depth += m[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        end = divTag.lastIndex;
        break;
      }
    }
    if (end === -1) return out; // 짝이 안 맞는 비정상 문서는 손대지 않는다
    if (foundImages) {
      const block = out.slice(start, end);
      const imgSrc = /<img\b[^>]*?\bsrc="([^"]+)"/g;
      let img: RegExpExecArray | null;
      while ((img = imgSrc.exec(block))) foundImages.push(img[1]);
    }
    out = out.slice(0, start) + out.slice(end);
    from = start;
  }
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
