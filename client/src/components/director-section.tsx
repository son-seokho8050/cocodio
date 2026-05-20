import { Link } from "wouter";
import { ArrowRight, AtSign, Lock } from "lucide-react";

export default function DirectorSection() {
  return (
    <section
      id="director"
      className="relative py-20 sm:py-24 lg:py-32"
      data-testid="section-director"
    >
      <div className="mx-auto px-4 sm:px-6">
        {/* 컴포지션 컨테이너 — 레퍼런스 비율 1:1 (460:440 → 880:840 풀스케일, 절대 위치 컨텍스트) */}
        <div className="relative lg:h-[770px] lg:mx-auto" style={{ maxWidth: "630px" }}>
          {/* ───────────────── 카드 A — 글래스 LOG IN (포트레이트 0.625) ───────────────── */}
          <div
            className="relative lg:absolute lg:top-[10px] lg:left-0 lg:w-[350px] lg:h-[560px] p-7 flex flex-col"
            style={{
              backgroundColor: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 20px 60px -20px rgba(199,121,101,0.25)",
              zIndex: 2,
            }}
            data-testid="card-director-glass"
          >
            {/* 상단 행 */}
            <div className="flex items-center justify-between">
              <span
                className="text-sm font-medium"
                style={{
                  color: "rgba(26,26,26,0.3)",
                  textDecoration: "line-through",
                  textDecorationThickness: "1px",
                }}
              >
                Cocodio<span style={{ color: "#C77965" }}>.</span>
              </span>
              <Link
                href="/director"
                className="text-sm font-medium"
                style={{ color: "#1A1A1A" }}
              >
                Sign up
              </Link>
            </div>

            {/* 헤딩 + Pinterest-style 필 */}
            <div className="mt-4 flex items-center justify-between">
              <h2
                className="font-medium leading-none"
                style={{
                  fontSize: "clamp(2.25rem, 3.4vw, 2.625rem)",
                  color: "#1A1A1A",
                  letterSpacing: "-0.025em",
                }}
                data-testid="text-director-heading"
              >
                Director
              </h2>
              <span
                className="inline-flex items-center gap-1.5 pl-1 pr-3 py-1 rounded-full text-[12px] font-medium"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1A1A1A",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: "#C77965" }}
                  aria-hidden="true"
                >
                  F
                </span>
                FOLLOW
              </span>
            </div>

            {/* 인풋형 필 2줄 */}
            <div className="mt-5 space-y-2.5">
              <InputPill
                icon={<AtSign className="w-3.5 h-3.5" strokeWidth={2} />}
                value="유영범 Young Bum Ryu"
              />
              <InputPill
                icon={<Lock className="w-3.5 h-3.5" strokeWidth={2} />}
                value="대표원장 · 마산 · 김해"
                rightLink="interview"
              />
            </div>

            {/* 하단 — 좌측 이탤릭 + 우측 다크 원형 액션 */}
            <div className="mt-auto pt-5 flex items-end justify-between gap-4">
              <p
                className="text-[11px] italic leading-relaxed max-w-[68%]"
                style={{ color: "rgba(26,26,26,0.55)", fontWeight: 300 }}
              >
                다른 모양을 먼저 보는 일,
                <br />
                그것이 코코의 시작입니다.
                <br />
                마산·김해 코코미술학원 대표원장.
              </p>
              <Link
                href="/director"
                className="shrink-0 inline-flex items-center justify-center transition-transform hover:scale-105"
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  width: "72px",
                  height: "44px",
                  borderRadius: "22px",
                }}
                aria-label="원장 상세보기"
                data-testid="link-director-arrow"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>

            {/* 하단 중앙 — Click here */}
            <div className="mt-3 text-center">
              <Link
                href="/director"
                className="text-[11px] underline underline-offset-2"
                style={{ color: "rgba(26,26,26,0.5)" }}
                data-testid="link-director-more"
              >
                Click here for more info.
              </Link>
            </div>
          </div>

          {/* ───────────────── 카드 B — 다크 REFERENCES ───────────────── */}
          <div
            className="relative lg:absolute lg:left-0 lg:top-[580px] lg:w-[350px] lg:h-[190px] mt-5 lg:mt-0 px-8 py-7 flex items-end justify-between"
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: "28px",
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.4)",
              zIndex: 1,
            }}
            data-testid="card-director-references"
          >
            <div>
              <h3
                className="font-medium leading-tight"
                style={{
                  fontSize: "clamp(1.75rem, 2.6vw, 2.125rem)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                References
              </h3>
              <div
                className="mt-1 text-xs"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                By Cocodio · Since 2010
              </div>
            </div>
            <Link
              href="/director#records"
              className="text-sm font-medium"
              style={{ color: "#FFFFFF" }}
              data-testid="link-director-discover"
            >
              Discover
            </Link>
          </div>

          {/* ───────────────── 카드 C — 화이트 톨 (좌측 ~45% 글래스, 우측 ~55% 솔리드) ───────────────── */}
          <div
            className="relative lg:absolute lg:right-0 lg:top-0 lg:w-[260px] lg:h-[730px] mt-5 lg:mt-0 p-6 flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.99) 58%, rgba(255,255,255,1) 100%)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "28px",
              boxShadow: "0 30px 80px -25px rgba(220,140,150,0.35)",
              zIndex: 3,
            }}
            data-testid="card-director-feature"
          >
            {/* 상단 행 */}
            <div className="flex items-start justify-between">
              <div className="leading-none">
                <div
                  className="font-bold"
                  style={{
                    fontSize: "clamp(2.875rem, 4.6vw, 3.625rem)",
                    color: "#1A1A1A",
                    letterSpacing: "-0.035em",
                    lineHeight: 0.95,
                  }}
                >
                  Since
                </div>
                <div
                  className="font-light mt-1.5"
                  style={{
                    fontSize: "clamp(1.875rem, 3vw, 2.375rem)",
                    color: "rgba(26,26,26,0.22)",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.95,
                  }}
                >
                  2010
                </div>
              </div>
              <div
                className="text-right text-[11px] leading-snug"
                style={{ color: "rgba(26,26,26,0.6)" }}
              >
                <div>Minimalism style</div>
                <div>Typography</div>
              </div>
            </div>

            {/* 거대 핑크 그라데이션 원 — 카드 좌측 경계를 넘어 클리핑 */}
            <div className="relative flex-1 my-2">
              <div
                aria-hidden="true"
                className="absolute"
                style={{
                  top: "50%",
                  left: "-18%",
                  transform: "translateY(-50%)",
                  width: "118%",
                  aspectRatio: "1 / 1",
                  background:
                    "radial-gradient(circle at 38% 32%, #FDE9EC 0%, #F6C2CA 26%, #E693A0 58%, #B96074 100%)",
                  borderRadius: "50%",
                  boxShadow:
                    "inset -28px -42px 70px rgba(118,46,62,0.4), inset 18px 20px 50px rgba(255,255,255,0.45)",
                }}
              />
            </div>

            {/* 메타 3줄 — 좌측 정렬 */}
            <div className="text-left space-y-0.5">
              <div
                className="text-[12px]"
                style={{ color: "rgba(26,26,26,0.9)", fontWeight: 500 }}
              >
                Tuesday 19
              </div>
              <div
                className="text-[12px]"
                style={{ color: "rgba(26,26,26,0.55)" }}
              >
                May 2026
              </div>
              <div
                className="text-[12px]"
                style={{ color: "rgba(26,26,26,0.55)" }}
              >
                Cocodio
              </div>
            </div>

            {/* 하단 — 좌측 로고 마크 + 텍스트 세로 스택, 우측 블랙 필 CTA */}
            <div className="mt-5 flex items-end justify-between">
              <div className="flex flex-col items-start gap-1">
                <span
                  className="inline-flex items-center gap-1"
                  aria-hidden="true"
                >
                  <span
                    className="inline-block"
                    style={{
                      width: "16px",
                      height: "10px",
                      borderRadius: "999px",
                      backgroundColor: "#1A1A1A",
                    }}
                  />
                  <span
                    className="text-[11px] font-bold leading-none"
                    style={{ color: "#1A1A1A" }}
                  >
                    +
                  </span>
                </span>
                <span
                  className="text-[11px] italic leading-none"
                  style={{ color: "rgba(26,26,26,0.75)" }}
                >
                  Cocodio.style
                </span>
              </div>
              <Link
                href="/director"
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105"
                style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                data-testid="link-director-click"
              >
                <span className="text-[11px] font-medium">Click Here</span>
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

function InputPill({
  icon,
  value,
  rightLink,
}: {
  icon: React.ReactNode;
  value: string;
  rightLink?: string;
}) {
  return (
    <div
      className="flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full"
      style={{
        backgroundColor: "rgba(255,255,255,0.65)",
        border: "1px solid rgba(255,255,255,0.8)",
      }}
    >
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{
          backgroundColor: "#1A1A1A",
          color: "#FFFFFF",
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span
        className="flex-1 text-xs"
        style={{ color: "rgba(26,26,26,0.8)" }}
      >
        {value}
      </span>
      {rightLink && (
        <span
          className="text-[11px] px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: "#FFFFFF",
            color: "rgba(26,26,26,0.55)",
          }}
        >
          {rightLink}
        </span>
      )}
    </div>
  );
}
