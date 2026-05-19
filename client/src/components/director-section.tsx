import { Link } from "wouter";
import { ArrowRight, Plus } from "lucide-react";

export default function DirectorSection() {
  return (
    <section
      id="director"
      className="relative py-20 sm:py-24 lg:py-32"
      data-testid="section-director"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* 섹션 키커 */}
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <div className="flex items-baseline gap-3">
            <span
              className="text-[11px] font-medium"
              style={{ color: "#C77965", letterSpacing: "0.3em" }}
            >
              01
            </span>
            <span
              className="text-[11px] font-medium"
              style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.3em" }}
            >
              ─ DIRECTOR
            </span>
          </div>
          <div
            className="text-[11px] font-medium hidden sm:block"
            style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.25em" }}
          >
            COCO ART ACADEMY · SINCE 2010
          </div>
        </div>

        {/* 데스크탑: 비대칭 3카드 오버랩 그리드 / 모바일: 세로 스택 */}
        <div className="relative lg:min-h-[560px]">
          {/* 카드 A — 글래스 프로스트 (좌상단) */}
          <div
            className="glass-frost relative lg:absolute lg:left-0 lg:top-0 lg:w-[58%] lg:h-[360px] p-6 sm:p-7 lg:p-8 flex flex-col"
            style={{ zIndex: 2 }}
            data-testid="card-director-intro"
          >
            {/* 상단 라벨 행 */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-sm font-semibold tracking-tight"
                style={{ color: "#1A1A1A" }}
              >
                Cocodio<span style={{ color: "#C77965" }}>.</span>
              </span>
              <span
                className="text-[11px] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: "rgba(26,26,26,0.06)",
                  color: "#1A1A1A",
                  letterSpacing: "0.05em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#C77965" }}
                />
                Director
              </span>
            </div>

            {/* 메인 — Log in 자리 = 이름 */}
            <h2
              className="font-light"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                lineHeight: 1.1,
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
                fontWeight: 300,
              }}
              data-testid="text-director-name"
            >
              유영범
            </h2>
            <div
              className="mt-1 text-sm"
              style={{
                color: "rgba(26,26,26,0.55)",
                fontFamily: "'Noto Serif KR', serif",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Young Bum Ryu
            </div>

            {/* 입력 행 자리 = 인포 행 */}
            <div className="mt-5 space-y-2.5 flex-1">
              <InfoPill icon="role" value="대표원장 · FOLLOW 설계" />
              <InfoPill icon="place" value="마산 · 김해 · Since 2010" />
            </div>

            {/* 하단 행 — 좌측 카피 + 우측 원형 액션 */}
            <div className="mt-5 flex items-end justify-between gap-4">
              <p
                className="text-[12px] leading-relaxed max-w-[70%]"
                style={{ color: "rgba(26,26,26,0.65)" }}
              >
                한 명마다 다른 모양을 먼저 보는 일,
                <br />
                그것이 코코의 시작입니다.{" "}
                <Link
                  href="/director"
                  className="underline underline-offset-2"
                  style={{ color: "#1A1A1A" }}
                >
                  Click here for more info.
                </Link>
              </p>
              <Link
                href="/director"
                className="shrink-0 w-12 h-12 rounded-full inline-flex items-center justify-center transition-transform hover:scale-105"
                style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                aria-label="원장 상세"
                data-testid="link-director-detail-arrow"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* 카드 B — 잉크 카드 (좌하단) */}
          <div
            className="ink-card relative lg:absolute lg:left-0 lg:top-[400px] lg:w-[50%] mt-6 lg:mt-0 px-6 sm:px-7 lg:px-8 py-6 lg:py-7 flex items-end justify-between"
            style={{ zIndex: 1 }}
            data-testid="card-director-references"
          >
            <div>
              <h3
                className="font-light"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                }}
              >
                References
              </h3>
              <div
                className="mt-1 text-xs"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                서울대 17명 · FOLLOW 15Y · 1:1 케어
              </div>
            </div>
            <Link
              href="/director#records"
              className="text-xs font-medium group inline-flex items-center gap-1"
              style={{ color: "#FFFFFF", letterSpacing: "0.05em" }}
              data-testid="link-director-records"
            >
              Discover
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* 카드 C — 화이트 톨 카드 (우측, 두 카드 오버랩) */}
          <div
            className="relative lg:absolute lg:right-0 lg:top-[20px] lg:w-[44%] lg:h-[500px] mt-6 lg:mt-0 p-6 sm:p-7 lg:p-9 flex flex-col"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 30px 80px -30px rgba(199,121,101,0.35)",
              borderRadius: "20px",
              zIndex: 3,
            }}
            data-testid="card-director-feature"
          >
            {/* 상단 행 — 좌측 큰 숫자 + 우측 미니 카피 */}
            <div className="flex items-start justify-between">
              <div>
                <div
                  className="text-[11px] mb-1"
                  style={{
                    color: "rgba(26,26,26,0.45)",
                    letterSpacing: "0.2em",
                  }}
                >
                  SINCE
                </div>
                <div
                  className="font-light leading-none"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
                    color: "#1A1A1A",
                    letterSpacing: "-0.03em",
                    fontWeight: 300,
                  }}
                >
                  2010
                </div>
              </div>
              <div
                className="text-right text-[11px] leading-relaxed"
                style={{
                  color: "rgba(26,26,26,0.55)",
                  letterSpacing: "0.02em",
                }}
              >
                <div>4단계 사고 시스템</div>
                <div>Typography of Thought</div>
              </div>
            </div>

            {/* 중앙 — 코랄 그라데이션 블롭 (이미지 자리 / 무드) */}
            <div className="relative flex-1 my-4 lg:my-5 flex items-center justify-center">
              <div
                className="absolute"
                style={{
                  width: "75%",
                  aspectRatio: "1 / 1",
                  background:
                    "radial-gradient(circle at 35% 30%, #F5DDD4 0%, #E8B5A8 35%, #C77965 100%)",
                  borderRadius: "50%",
                  filter: "blur(0.5px)",
                  boxShadow: "inset -20px -30px 60px rgba(122,61,47,0.35)",
                }}
                aria-hidden="true"
              />
              {/* 모노그램 'Y' 오버레이 */}
              <span
                className="relative select-none"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(6rem, 12vw, 9rem)",
                  fontWeight: 200,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1,
                  zIndex: 1,
                }}
                aria-hidden="true"
              >
                유
              </span>
              {/* 우상단 십자 마크 */}
              <Plus
                aria-hidden="true"
                className="absolute top-2 right-2 w-4 h-4"
                style={{ color: "rgba(26,26,26,0.3)" }}
                strokeWidth={1.5}
              />
              <Plus
                aria-hidden="true"
                className="absolute bottom-2 left-2 w-4 h-4"
                style={{ color: "rgba(26,26,26,0.3)" }}
                strokeWidth={1.5}
              />
            </div>

            {/* 메타 — 날짜식 행 */}
            <div className="space-y-0.5 mb-4">
              <div
                className="text-xs"
                style={{ color: "rgba(26,26,26,0.85)", fontWeight: 500 }}
              >
                대표원장 유영범
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(26,26,26,0.55)" }}
              >
                마산 · 김해
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(26,26,26,0.55)" }}
              >
                COCO ART ACADEMY
              </div>
            </div>

            {/* 하단 — 좌측 시그니처 로고 + 우측 블랙 필 CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{
                    backgroundColor: "#1A1A1A",
                    color: "#FFFFFF",
                  }}
                >
                  Y
                </div>
                <div className="leading-tight">
                  <div
                    className="text-[11px] font-semibold"
                    style={{ color: "#1A1A1A" }}
                  >
                    Y.B Ryu
                  </div>
                  <div
                    className="text-[9px]"
                    style={{
                      color: "rgba(26,26,26,0.5)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    DIRECTOR
                  </div>
                </div>
              </div>
              <Link
                href="/director"
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105"
                style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                data-testid="link-director-cta"
              >
                <span className="text-[11px] font-medium">원장 인터뷰</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                >
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({
  icon,
  value,
}: {
  icon: "role" | "place";
  value: string;
}) {
  return (
    <div
      className="flex items-center gap-3 px-3.5 py-2.5 rounded-full"
      style={{
        backgroundColor: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(26,26,26,0.06)",
      }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]"
        style={{
          backgroundColor: "rgba(199,121,101,0.18)",
          color: "#C77965",
        }}
      >
        {icon === "role" ? "✦" : "◎"}
      </span>
      <span className="text-xs" style={{ color: "rgba(26,26,26,0.8)" }}>
        {value}
      </span>
    </div>
  );
}
