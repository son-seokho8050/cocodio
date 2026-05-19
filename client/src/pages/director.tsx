import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Director() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>

        <div
          className="text-[11px] font-medium mb-6"
          style={{ color: "#C77965", letterSpacing: "0.3em" }}
        >
          01 ─ DIRECTOR
        </div>

        <h1
          className="font-light tracking-tight"
          style={{
            fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
            fontWeight: 300,
          }}
        >
          그 모양을,
          <br />
          가장 먼저 보는 사람들
        </h1>

        <div className="mt-8 mb-16">
          <div className="text-xl font-medium">유영범</div>
          <div className="text-sm text-neutral-500 mt-1">
            코코미술학원 대표원장 · 마산 · 김해
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
          <p className="text-neutral-400 italic">
            (원장 인사말 전문 · 교육 철학 · 약력 · 강의 영상 등이 들어갈 자리)
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
