import { Link } from "wouter";
import { ArrowUpRight, ImageIcon } from "lucide-react";

const stats = [
  { value: "15Y", label: "FOLLOW 설계 경력" },
  { value: "서울대 17명", label: "누적 합격" },
  { value: "1:1", label: "맞춤 케어" },
  { value: "FOLLOW", label: "창시자" },
];

export default function DirectorSection() {
  return (
    <section
      id="director"
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0E0E0E",
        backgroundImage:
          "radial-gradient(ellipse at 85% 15%, rgba(199,121,101,0.28) 0%, rgba(199,121,101,0) 55%), radial-gradient(ellipse at 10% 90%, rgba(110,201,163,0.08) 0%, rgba(0,0,0,0) 50%)",
      }}
    >
      {/* 미세 그레인 텍스처 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36">
        {/* 상단 카테고리 라벨 */}
        <div className="flex items-center justify-between mb-10 sm:mb-14 lg:mb-20">
          <div
            className="text-[10px] sm:text-[11px] font-medium"
            style={{ color: "#E8B5A8", letterSpacing: "0.3em" }}
          >
            01 ─ DIRECTOR
          </div>
          <div
            className="text-[10px] sm:text-[11px] font-medium"
            style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.25em" }}
          >
            마산 · 김해 · SINCE 2010
          </div>
        </div>

        {/* 메인 12-컬럼 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* 좌: 카피 영역 (lg col-7) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h2
              className="font-light"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
                fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
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

            <div
              className="my-8 lg:my-12"
              style={{ width: "72px", height: "1px", backgroundColor: "#C77965" }}
            />

            <p
              className="max-w-xl"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              <span
                style={{
                  color: "#E8B5A8",
                  fontSize: "1.5em",
                  lineHeight: 0,
                  position: "relative",
                  top: "0.15em",
                  marginRight: "0.1em",
                }}
              >
                "
              </span>
              한 명마다 다른 모양을 먼저 보는 일,
              <br className="hidden sm:block" />
              그것이 코코의 시작입니다.
              <span
                style={{
                  color: "#E8B5A8",
                  fontSize: "1.5em",
                  lineHeight: 0,
                  position: "relative",
                  top: "0.15em",
                  marginLeft: "0.1em",
                }}
              >
                "
              </span>
            </p>

            {/* 데스크톱 전용: 이름 블록을 카피 하단에 배치 */}
            <div className="hidden lg:block mt-16">
              <div
                className="text-3xl xl:text-4xl font-medium tracking-tight"
                style={{ color: "#FFFFFF" }}
              >
                유영범
              </div>
              <div
                className="mt-2 text-sm"
                style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}
              >
                코코미술학원 대표원장 · 마산 · 김해
              </div>
            </div>
          </div>

          {/* 우: 인물 사진 영역 (lg col-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:-mt-10">
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "4px",
                backgroundColor: "#1A1A1A",
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 60%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* 사진 자리 (현재는 자리 표시자) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                <ImageIcon
                  className="w-12 h-12 lg:w-16 lg:h-16"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                  strokeWidth={1}
                />
                <div
                  className="text-xs lg:text-sm"
                  style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}
                >
                  원장 인물 사진
                </div>
                <div
                  className="text-[10px] lg:text-xs"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  (흑백 톤 권장 · 세로 4:5)
                </div>
              </div>
              {/* 코랄 언더라인 */}
              <div
                className="absolute bottom-0 left-0"
                style={{ width: "40%", height: "2px", backgroundColor: "#C77965" }}
              />
            </div>

            {/* 모바일 전용: 사진 바로 아래 이름 블록 */}
            <div className="lg:hidden mt-6">
              <div className="text-2xl font-medium tracking-tight text-white">
                유영범
              </div>
              <div
                className="mt-1 text-xs"
                style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}
              >
                코코미술학원 대표원장 · 마산 · 김해
              </div>
            </div>
          </div>
        </div>

        {/* 가로 stat 라인 */}
        <div
          className="mt-14 sm:mt-20 lg:mt-28 pt-8 lg:pt-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1.5 ${i === 0 ? "" : "lg:pl-6"}`}
                data-testid={`stat-director-${i}`}
              >
                <div
                  className="flex items-center gap-2 text-2xl lg:text-3xl font-medium tracking-tight"
                  style={{ color: "#FFFFFF" }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#C77965" }}
                  />
                  {s.value}
                </div>
                <div
                  className="text-xs lg:text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 flex justify-end">
          <Link
            href="/director"
            className="inline-flex items-center gap-3 group"
            data-testid="link-director-detail"
          >
            <span
              className="text-sm lg:text-base font-medium"
              style={{ color: "#FFFFFF", letterSpacing: "0.02em" }}
            >
              원장 이야기 읽기
            </span>
            <span
              className="inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full transition-transform group-hover:translate-x-1"
              style={{ backgroundColor: "#C77965", color: "#FFFFFF" }}
            >
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
