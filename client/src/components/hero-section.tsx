import { useState, useEffect } from "react";
import { Calendar, Play } from "lucide-react";
import heroBg from "@assets/optimized/hero-cocodio.webp";

const seoulMetroUniversities = [
  "서울대학교", "홍익대학교", "국민대학교", "이화여자대학교", "중앙대학교",
  "경희대학교", "한양대학교", "건국대학교", "서울여자대학교", "동덕여자대학교",
  "성신여자대학교", "덕성여자대학교", "단국대학교", "세종대학교", "상명대학교",
  "한성대학교", "서경대학교", "삼육대학교", "명지대학교", "숙명여자대학교",
  "서울과학기술대학교", "인하대학교", "인천대학교", "경기대학교", "수원대학교",
  "용인대학교", "한양대(에리카)", "계원예술대학교",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [list] = useState(() => shuffle(seoulMetroUniversities));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % list.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, [list.length]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const card = (
    <div
      className="ui-card p-5 sm:p-6 lg:p-7"
      style={{
        backdropFilter: 'blur(16px) saturate(1.4)',
        background: 'rgba(255,255,255,0.88)',
        boxShadow: '0 20px 60px -10px rgba(0,0,0,0.18)',
      }}
    >
      <div className="section-badge mb-3 inline-flex">재능의 출발점</div>
      <p
        className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug mb-4"
        style={{ color: 'var(--text-heading)' }}
      >
        여러분의 재능은<br /> 어떤 모양인가요?
      </p>

      <div className="flex flex-col gap-2 mb-4">
        <button
          onClick={() => scrollTo('contact')}
          className="btn-primary flex items-center justify-center gap-2 px-5 py-3 text-sm w-full"
        >
          <Calendar className="h-4 w-4" /> 무료체험수업 신청
        </button>
        <button
          onClick={() => scrollTo('portfolio')}
          className="btn-ghost flex items-center justify-center gap-2 px-5 py-3 text-sm w-full"
        >
          <Play className="h-4 w-4" /> FOLLOW 수업 보기
        </button>
      </div>

      <div
        className="rounded-xl px-4 py-3"
        style={{ background: 'rgba(0,0,0,0.04)' }}
      >
        <div className="text-[10px] tracking-wide mb-1" style={{ color: 'var(--text-subtle)' }}>
          인서울·수도권 미대 합격
        </div>
        <div
          className="text-base font-black leading-tight transition-all duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(4px)',
            color: 'var(--text-heading)',
          }}
        >
          {list[index]}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* === 모바일 (lg 미만) — 이미지 위 + 카드 자연흐름 아래 === */}
      <section className="lg:hidden pt-16 relative">
        <div
          className="w-full"
          style={{
            aspectRatio: '4 / 3',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="px-4 -mt-8 pb-10 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {card}
        </div>
      </section>

      {/* === 데스크톱 (lg 이상) — 기존 절대위치 오버레이 그대로 === */}
      <section
        className="hidden lg:block pt-16 relative overflow-hidden"
        style={{
          minHeight: '100vh',
          aspectRatio: '4 / 5',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute right-8 xl:right-16 animate-in fade-in slide-in-from-right-4 duration-700"
          style={{ top: '120px', width: '380px', maxWidth: '380px' }}
        >
          {card}
        </div>
      </section>
    </>
  );
}
