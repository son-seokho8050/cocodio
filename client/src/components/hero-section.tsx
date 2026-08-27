import { useState, useEffect } from "react";
import { Calendar, Play } from "lucide-react";

const HERO_MP4 = "/videos/hero.mp4";
const HERO_WEBM = "/videos/hero.webm";
import heroPoster from "@assets/optimized/hero-cocodio.webp";

function HeroVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={heroPoster}
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
    >
      <source src={HERO_WEBM} type="video/webm" />
      <source src={HERO_MP4} type="video/mp4" />
    </video>
  );
}

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

  // Heading: 문서에 h1이 1개만 존재하도록 모바일 카드만 h1, 데스크톱 카드는 h2 (시각 동일)
  const card = (Heading: 'h1' | 'h2') => (
    <div
      className="ui-card p-3.5 sm:p-5 lg:p-7"
      style={{
        backdropFilter: 'blur(16px) saturate(1.4)',
        background: 'rgba(255,255,255,0.88)',
        boxShadow: '0 20px 60px -10px rgba(0,0,0,0.18)',
      }}
    >
      <div className="section-badge mb-2 sm:mb-3 inline-flex">재능의 출발점</div>
      <Heading
        className="text-sm sm:text-lg lg:text-2xl font-bold leading-snug mb-2.5 sm:mb-4"
        style={{ color: 'var(--text-heading)' }}
      >
        여러분의 재능은<br /> 어떤 모양인가요?
      </Heading>

      <div className="flex flex-col gap-1.5 sm:gap-2 mb-2.5 sm:mb-4">
        <button
          onClick={() => scrollTo('contact')}
          className="btn-primary flex items-center justify-center gap-2 px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm w-full"
        >
          <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 무료체험수업 신청
        </button>
        <button
          onClick={() => scrollTo('portfolio')}
          className="btn-ghost flex items-center justify-center gap-2 px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm w-full"
        >
          <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> FOLLOW 수업 보기
        </button>
      </div>

      <div
        className="rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3"
        style={{ background: 'rgba(0,0,0,0.04)' }}
      >
        <div className="text-[10px] tracking-wide mb-0.5 sm:mb-1" style={{ color: 'var(--text-subtle)' }}>
          인서울·수도권 미대 합격
        </div>
        <div
          className="text-xs sm:text-base font-black leading-tight transition-all duration-300"
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
      {/* === 모바일 (lg 미만) — 풀스크린 비디오 + 카드 하단 오버레이 === */}
      <section
        className="lg:hidden pt-16 relative overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        <div className="absolute inset-0 z-0">
          <HeroVideo />
        </div>
        <div className="absolute left-4 right-4 bottom-5 sm:bottom-8 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {card('h1')}
        </div>
      </section>

      {/* === 데스크톱 (lg 이상) — 비디오 배경 + 카드 sticky 스크롤 === */}
      <section
        className="hidden lg:block pt-16 relative"
        style={{
          minHeight: '100vh',
          aspectRatio: '4 / 5',
        }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroVideo />
        </div>
        {/* 우측 카드 컬럼 — 섹션 전체 높이를 차지, 내부 카드는 sticky로 스크롤 따라옴 */}
        <div className="absolute right-8 xl:right-16 top-0 bottom-0 z-10 w-[380px] max-w-[380px] pointer-events-none">
          <div
            className="sticky animate-in fade-in slide-in-from-right-4 duration-700 pointer-events-auto"
            style={{ top: '120px' }}
          >
            {card('h2')}
          </div>
        </div>
      </section>
    </>
  );
}
