import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

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
  nested = false,
  testId,
  tabIndex,
}: {
  tag: string;
  href: string;
  nested?: boolean;
  testId: string;
  tabIndex?: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className="group relative overflow-hidden flex items-center justify-between gap-3 px-5 sm:px-6 py-4 transition-transform duration-300 hover:-translate-y-[2px] touch-manipulation"
      style={
        nested
          ? {
              backgroundColor: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(18px) saturate(160%)",
              WebkitBackdropFilter: "blur(18px) saturate(160%)",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 10px 30px -16px rgba(199,121,101,0.22)",
            }
          : glossyBar
      }
      data-testid={testId}
    >
      {!nested && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "55%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2.5">
        {nested && (
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: "var(--color-coral-deep)" }}
          />
        )}
        <span
          className="font-bold"
          style={{
            color: "#1A1A1A",
            letterSpacing: "0.06em",
            fontSize: nested ? "0.82rem" : "0.95rem",
          }}
        >
          {tag}
        </span>
      </span>
      <span
        className="relative z-10 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300"
        style={{
          width: nested ? "30px" : "36px",
          height: nested ? "30px" : "36px",
          backgroundColor: "#1A1A1A",
          color: "#FFFFFF",
        }}
      >
        <ArrowUpRight
          className={nested ? "w-3.5 h-3.5" : "w-4 h-4"}
          strokeWidth={2.2}
        />
      </span>
    </a>
  );
}

export default function CocodioLinks() {
  const [essayOpen, setEssayOpen] = useState(false);

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

      {/* 2번 버튼 - ESSAY_YB (펼침형) */}
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => setEssayOpen((v) => !v)}
          aria-expanded={essayOpen}
          aria-controls="essay-yb-panel"
          className="group relative overflow-hidden flex items-center justify-between gap-3 px-5 sm:px-6 py-4 transition-transform duration-300 hover:-translate-y-[2px] touch-manipulation"
          style={glossyBar}
          data-testid="button-essay-yb-toggle"
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
            ESSAY_YB
          </span>
          <span
            className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-transform duration-300"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.85)",
              transform: essayOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ChevronDown className="w-4 h-4" style={{ color: "#1A1A1A" }} />
          </span>
        </button>

        {/* 펼쳐지는 하위 버튼 */}
        <div
          id="essay-yb-panel"
          aria-hidden={!essayOpen}
          {...(!essayOpen ? { inert: "" as const } : {})}
          className={`overflow-hidden transition-all duration-400 ease-out flex flex-row flex-wrap justify-center gap-4 ${
            essayOpen ? "" : "pointer-events-none"
          }`}
          style={{
            maxHeight: essayOpen ? "340px" : "0px",
            opacity: essayOpen ? 1 : 0,
          }}
        >
          {[
            { n: "1", href: "https://cocodio-ybessay.netlify.app/", testId: "link-essay-yb-1" },
            { n: "2", href: "https://cocodio-ybessay2.netlify.app/", testId: "link-essay-yb-2" },
            { n: "3", href: "https://cocodio-ybessay3.netlify.app/", testId: "link-essay-yb-3" },
            { n: "4", href: "https://cocodio-ybessay4.netlify.app/", testId: "link-essay-yb-4" },
          ].map(({ n, href, testId }) => (
            <a
              key={n}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={essayOpen ? 0 : -1}
              className="group relative overflow-hidden flex flex-col items-center justify-center gap-1.5 aspect-square flex-1 max-w-[112px] transition-transform duration-300 hover:-translate-y-[2px] touch-manipulation"
              style={{
                backgroundColor: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(18px) saturate(160%)",
                WebkitBackdropFilter: "blur(18px) saturate(160%)",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 10px 30px -16px rgba(199,121,101,0.22)",
              }}
              data-testid={testId}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                  height: "45%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
                }}
              />
              <span className="relative z-10 flex flex-col items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-coral-deep)" }}
                />
                <span
                  className="font-bold text-center leading-tight"
                  style={{ color: "#1A1A1A", letterSpacing: "0.06em", fontSize: "0.82rem" }}
                >
                  ESSAY_YB {n}
                </span>
              </span>
              <span
                className="relative z-10 flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                }}
              >
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
