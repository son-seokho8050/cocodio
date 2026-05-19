import { Link } from "wouter";
import { ArrowUpRight, User } from "lucide-react";

export default function DirectorSection() {
  return (
    <section
      id="director"
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0E0E0E",
        backgroundImage:
          "radial-gradient(ellipse at 85% 20%, rgba(199,121,101,0.22) 0%, rgba(199,121,101,0) 50%)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* 상단 라벨 라인 */}
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div
            className="text-[10px] font-medium"
            style={{ color: "#E8B5A8", letterSpacing: "0.3em" }}
          >
            01 ─ DIRECTOR
          </div>
          <div
            className="text-[10px] font-medium"
            style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.25em" }}
          >
            마산 · 김해 · SINCE 2010
          </div>
        </div>

        {/* 메인: 사진(좌) + 카피(우) 한 행 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 사진 — 컴팩트 */}
          <div className="lg:col-span-4">
            <div
              className="relative w-full max-w-[300px] mx-auto lg:max-w-none overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              data-testid="img-director-portrait"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <User
                  className="w-8 h-8"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                  strokeWidth={1.2}
                />
                <div
                  className="text-[10px]"
                  style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}
                >
                  PORTRAIT
                </div>
              </div>
              {/* 바닥 코랄 라인 */}
              <div
                className="absolute bottom-0 left-0"
                style={{ width: "32%", height: "2px", backgroundColor: "#C77965" }}
              />
            </div>
          </div>

          {/* 카피 영역 */}
          <div className="lg:col-span-8">
            <h2
              className="font-light"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
                fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                fontWeight: 300,
              }}
              data-testid="text-director-headline"
            >
              그 모양을, 가장 먼저 보는 사람들
            </h2>

            <p
              className="mt-5 lg:mt-6 max-w-xl"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              한 명마다 다른 모양을 먼저 보는 일, 그것이 코코의 시작입니다.
            </p>

            {/* 이름 + 메타 + 핵심 지표 한 줄 */}
            <div
              className="mt-8 lg:mt-10 pt-6 lg:pt-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div>
                <div
                  className="text-xl lg:text-2xl font-medium tracking-tight text-white"
                  data-testid="text-director-name"
                >
                  유영범
                </div>
                <div
                  className="mt-1 text-xs lg:text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  코코미술학원 대표원장 · 마산 · 김해
                </div>
              </div>

              {/* 지표 — 작은 캡션 한 줄 */}
              <div
                className="text-[11px] lg:text-xs flex items-center gap-3 lg:gap-4 flex-wrap"
                style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#C77965" }}
                  />
                  FOLLOW 15Y
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#C77965" }}
                  />
                  서울대 17명
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#C77965" }}
                  />
                  1:1 케어
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 lg:mt-8">
              <Link
                href="/director"
                className="inline-flex items-center gap-2.5 group"
                data-testid="link-director-detail"
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  원장 이야기 읽기
                </span>
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-transform group-hover:translate-x-0.5"
                  style={{ backgroundColor: "#C77965", color: "#FFFFFF" }}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
