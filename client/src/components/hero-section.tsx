import { useState, useEffect } from "react";
import { Calendar, Play } from "lucide-react";

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

  return (
    <section
      className="pt-16 relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'transparent' }}
    >
      {/* 배경 민트 accent 원 — 소프트 */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,201,163,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,207,204,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-in slide-in-from-left duration-700">

            {/* Section badge */}
            <div className="section-badge mb-6">
              재능의 출발점
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-4 leading-none" style={{ color: 'var(--text-heading)' }}>
              코코
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-10" style={{ color: 'var(--text-body)' }}>
              여러분의 재능은 어떤 모양인가요?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Calendar className="h-5 w-5" /> 무료체험수업 신청
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Play className="h-5 w-5" /> FOLLOW 수업 보기
              </button>
            </div>

            {/* 통계 — 작은 수치 카드들 */}
            <div className="flex gap-6 mt-12">
              {[
                { num: '20+', label: '합격 대학' },
                { num: '95%', label: '재등록률' },
                { num: '4단계', label: 'FOLLOW 시스템' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black" style={{ color: 'var(--color-primary-dark)' }}>{num}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-in slide-in-from-right duration-700">
            <div className="relative">
              {/* 이미지 배경 민트 glow */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '24px',
                background: 'rgba(110,201,163,0.08)',
                filter: 'blur(20px)',
                transform: 'scale(0.96) translateY(12px)',
              }} />
              <img
                src="/student-celebration.png"
                alt="코코미술학원 합격자들"
                className="relative w-full"
                style={{
                  borderRadius: '24px',
                  boxShadow: 'var(--el-4)',
                }}
                loading="eager" width="600" height="450"
              />
            </div>

            {/* 합격 대학 badge — Level 2 카드 */}
            <div
              className="ui-card absolute -bottom-6 -left-6 px-5 py-4"
              style={{ minWidth: '170px' }}
            >
              <div
                className="text-lg font-black leading-tight transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(6px)',
                  color: 'var(--text-heading)',
                }}
              >
                {list[index]}
              </div>
              <div className="text-[10px] mt-1 tracking-wide" style={{ color: 'var(--text-subtle)' }}>
                인서울·수도권 미대
              </div>
            </div>

            {/* FOLLOW badge — accent 카드 */}
            <div
              className="ui-card-accent absolute -top-6 -right-6 p-4"
            >
              <div className="text-lg font-black text-center" style={{ color: 'var(--color-primary-dark)' }}>FOLLOW</div>
              <div className="text-xs text-center mt-0.5" style={{ color: 'var(--text-subtle)' }}>ALL IN-ONE SYSTEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
