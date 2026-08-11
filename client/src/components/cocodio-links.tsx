import { ArrowUpRight, BookOpen } from "lucide-react";

const glossyBar: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(24px) saturate(180%)",
  WebkitBackdropFilter: "blur(24px) saturate(180%)",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.6)",
  boxShadow:
    "0 16px 48px -20px rgba(199,121,101,0.26), inset 0 1px 0 rgba(255,255,255,0.6)",
};

function ExternalLinkButton({
  tag,
  href,
  testId,
}: {
  tag: string;
  href: string;
  testId: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden flex items-center justify-between gap-3 px-5 sm:px-6 py-4 transition-transform duration-300 hover:-translate-y-[2px] touch-manipulation"
      style={glossyBar}
      data-testid={testId}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "55%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <span
        className="relative z-10 font-bold"
        style={{ color: "#1A1A1A", letterSpacing: "0.06em", fontSize: "0.95rem" }}
      >
        {tag}
      </span>
      <span
        className="relative z-10 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#1A1A1A",
          color: "#FFFFFF",
        }}
      >
        <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
      </span>
    </a>
  );
}

export default function CocodioLinks() {
  return (
    <div
      className="mx-auto mt-3 lg:mt-4 flex flex-col gap-3"
      style={{ maxWidth: "685px" }}
      data-testid="cocodio-links"
    >
      {/* 1번 버튼 - COCODIO_SPACE */}
      <ExternalLinkButton
        tag="COCODIO_SPACE"
        href="https://cocodio-space.netlify.app/"
        testId="link-cocodio-space"
      />

      {/* 2번 - ESSAY_YB 통합 이미지 카드 */}
      <a
        href="https://cocodio-ebook.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ESSAY_YB E-BOOK 전체 보기 - 새 탭에서 열림"
        className="group relative overflow-hidden flex items-stretch gap-0 transition-transform duration-300 hover:-translate-y-[2px] touch-manipulation"
        style={glossyBar}
        data-testid="link-essay-yb-ebook"
      >
        {/* 상단 글로시 하이라이트 */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none z-10"
          style={{
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* 좌측 비주얼 - 북커버 스택 */}
        <span
          aria-hidden="true"
          className="relative flex items-center justify-center flex-shrink-0 w-[110px] sm:w-[150px] self-stretch overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-coral-deep, #C77965) 0%, #E8A796 55%, #F5D9C8 100%)",
          }}
        >
          {/* 뒤 커버 */}
          <span
            className="absolute w-[44px] h-[60px] sm:w-[56px] sm:h-[76px] rounded-[6px] rotate-[-10deg] translate-x-[-14px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          />
          {/* 앞 커버 */}
          <span
            className="relative flex flex-col items-center justify-center w-[50px] h-[68px] sm:w-[64px] sm:h-[86px] rounded-[7px] rotate-[6deg] translate-x-[8px] transition-transform duration-300 group-hover:rotate-[2deg] group-hover:scale-105"
            style={{
              backgroundColor: "rgba(255,255,255,0.92)",
              boxShadow: "0 10px 24px -8px rgba(90,40,25,0.35)",
            }}
          >
            <BookOpen
              className="w-5 h-5 sm:w-6 sm:h-6"
              strokeWidth={1.8}
              style={{ color: "var(--color-coral-deep, #C77965)" }}
            />
            <span
              className="mt-1 font-bold text-[6px] sm:text-[7px] tracking-widest"
              style={{ color: "#1A1A1A" }}
            >
              ESSAY_YB
            </span>
          </span>
        </span>

        {/* 우측 내용 */}
        <span className="relative z-10 flex items-center justify-between flex-1 gap-3 px-4 sm:px-6 py-4 sm:py-5 min-w-0">
          <span className="flex flex-col gap-0.5 min-w-0">
            <span
              className="font-bold text-[0.95rem] sm:text-base"
              style={{ color: "#1A1A1A", letterSpacing: "0.06em" }}
            >
              ESSAY_YB E-BOOK
            </span>
            <span
              className="text-[11px] sm:text-xs leading-snug"
              style={{ color: "rgba(26,26,26,0.55)" }}
            >
              에세이 전권을 한 곳에서 — 통합 이북으로 보기
            </span>
          </span>
          <span
            className="flex items-center justify-center rounded-full flex-shrink-0 w-9 h-9 transition-transform duration-300 group-hover:rotate-45"
            style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
          >
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
          </span>
        </span>
      </a>
    </div>
  );
}
