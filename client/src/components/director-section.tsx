import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export default function DirectorSection() {
  return (
    <section
      id="director"
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0B0B0B",
      }}
    >
      {/* 거대 배경 모노그램 — 'YU' (유영범) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-end pr-[5%]"
        style={{ overflow: "hidden" }}
      >
        <span
          className="select-none"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "min(46vw, 720px)",
            fontWeight: 300,
            lineHeight: 0.85,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.05em",
            transform: "translateY(2%)",
          }}
        >
          YU
        </span>
      </div>

      {/* 코랄 글로우 — 우상단 */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(199,121,101,0.18) 0%, rgba(199,121,101,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
        {/* 상단 풀폭 라벨 라인 */}
        <div
          className="flex items-center justify-between pb-4 mb-12 lg:mb-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
        >
          <div className="flex items-baseline gap-3">
            <span
              className="text-[11px] font-medium"
              style={{ color: "#E8B5A8", letterSpacing: "0.3em" }}
            >
              01
            </span>
            <span
              className="text-[11px] font-medium"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.3em" }}
            >
              ─ DIRECTOR
            </span>
          </div>
          <div
            className="text-[11px] font-medium hidden sm:block"
            style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.25em" }}
          >
            COCO ART ACADEMY · MASAN · GIMHAE
          </div>
        </div>

        {/* 메인 그리드: 좌 텍스트(5) + 우 사진(7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* 좌측 텍스트 — 절제된 폭 */}
          <div className="lg:col-span-5 lg:pt-8 order-2 lg:order-1">
            <h2
              className="font-light"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
                fontSize: "clamp(1.85rem, 3vw, 2.75rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
                fontWeight: 300,
              }}
              data-testid="text-director-headline"
            >
              그 모양을,
              <br />
              가장 먼저
              <br />
              보는 사람들
            </h2>

            <p
              className="mt-7 lg:mt-9 max-w-md"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              한 명마다 다른 모양을 먼저 보는 일,
              <br className="hidden sm:block" />
              그것이 코코의 시작입니다.
            </p>

            {/* 영문 부제 — 세리프 이탤릭 (대조) */}
            <div
              className="mt-8 lg:mt-10 text-sm italic"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                color: "rgba(232,181,168,0.85)",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              — A reading eye, before a teaching hand.
            </div>

            {/* 메타 박스 — 작고 정밀 */}
            <div className="mt-12 lg:mt-16 space-y-5">
              <MetaRow label="NAME" value="유영범 Young Bum Ryu" />
              <MetaRow label="ROLE" value="대표원장 · FOLLOW 설계" />
              <MetaRow label="SINCE" value="2010 — 마산 · 김해" />
              <MetaRow label="RECORD" value="서울대 누적 17명 · 1:1 케어" />
            </div>

            {/* CTA */}
            <div className="mt-12 lg:mt-14">
              <Link
                href="/director"
                className="inline-flex items-center gap-3 group border-b pb-3"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
                data-testid="link-director-detail"
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "#FFFFFF", letterSpacing: "0.02em" }}
                >
                  Read the Director's Story
                </span>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C77965", color: "#FFFFFF" }}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>

          {/* 우측 인물 사진 — 주인공 */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              {/* 사진 카드 */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4 / 5",
                  background:
                    "linear-gradient(160deg, #1F1F1F 0%, #141414 45%, #0A0A0A 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                data-testid="img-director-portrait"
              >
                {/* 코너 마크 */}
                <CornerMark position="tl" />
                <CornerMark position="tr" />
                <CornerMark position="bl" />
                <CornerMark position="br" />

                {/* 거대 모노그램 '유' */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="select-none"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "clamp(8rem, 22vw, 18rem)",
                      fontWeight: 200,
                      color: "rgba(232,181,168,0.08)",
                      lineHeight: 1,
                      WebkitTextStroke: "1px rgba(232,181,168,0.45)",
                    }}
                  >
                    유
                  </span>
                </div>

                {/* 상단 좌측 라벨 (촬영 메타 느낌) */}
                <div
                  className="absolute top-5 left-5 text-[10px]"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.25em",
                  }}
                >
                  PORTRAIT · 01 / 01
                </div>

                {/* 상단 우측: 연도 */}
                <div
                  className="absolute top-5 right-5 text-[10px]"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.2em",
                  }}
                >
                  ⊙ COCODIO 2026
                </div>

                {/* 하단 미세 텍스트 — 사진 미게재 안내 (해체적 캡션) */}
                <div
                  className="absolute bottom-5 left-5 text-[10px]"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.15em",
                  }}
                >
                  ── PHOTO FORTHCOMING
                </div>
              </div>

              {/* 박물관 라벨 — 사진 우하단 오버랩 */}
              <div
                className="absolute -bottom-6 lg:-bottom-8 right-4 lg:right-8 px-5 py-4 lg:px-6 lg:py-5"
                style={{
                  backgroundColor: "#E8B5A8",
                  color: "#1A1A1A",
                  boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
                  minWidth: "180px",
                }}
              >
                <div
                  className="text-[10px] font-semibold mb-1"
                  style={{ letterSpacing: "0.2em", color: "#7A3D2F" }}
                >
                  DIRECTOR
                </div>
                <div className="text-lg lg:text-xl font-medium leading-tight">
                  유영범
                </div>
                <div
                  className="text-[11px] mt-1"
                  style={{ color: "rgba(26,26,26,0.65)" }}
                >
                  Young Bum Ryu
                </div>
              </div>

              {/* 박물관 라벨 좌측 라인 액센트 */}
              <div
                className="hidden lg:block absolute -bottom-4 left-0"
                style={{
                  width: "80px",
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4 items-baseline">
      <div
        className="text-[10px] font-medium"
        style={{
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.25em",
        }}
      >
        {label}
      </div>
      <div
        className="text-sm"
        style={{
          color: "rgba(255,255,255,0.9)",
          fontWeight: 400,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "8px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function CornerMark({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const size = 14;
  const offset = 12;
  const style: React.CSSProperties = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    borderColor: "rgba(232,181,168,0.55)",
  };
  if (position === "tl") {
    style.top = offset;
    style.left = offset;
    style.borderTop = "1px solid";
    style.borderLeft = "1px solid";
  }
  if (position === "tr") {
    style.top = offset;
    style.right = offset;
    style.borderTop = "1px solid";
    style.borderRight = "1px solid";
  }
  if (position === "bl") {
    style.bottom = offset;
    style.left = offset;
    style.borderBottom = "1px solid";
    style.borderLeft = "1px solid";
  }
  if (position === "br") {
    style.bottom = offset;
    style.right = offset;
    style.borderBottom = "1px solid";
    style.borderRight = "1px solid";
  }
  return <span aria-hidden="true" style={style} />;
}
