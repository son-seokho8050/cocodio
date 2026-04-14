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
  const [btnHovered, setBtnHovered] = useState(false);

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
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="mb-8">
              <div className="text-sm font-light mb-1 tracking-widest uppercase" style={{ color: '#4A4A6A' }}>
                재능의 출발점
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-3 leading-none" style={{ color: '#1A1A2E' }}>
                코코
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#4A4A6A' }}>
                여러분의 재능은 어떤 모양인가요?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* 무료체험수업 신청 — 다층 유리 글라스 버튼 */}
              <div style={{ position: 'relative', display: 'inline-flex' }}>
                {/* 캐스틱: 유리를 투과한 빛이 배경에 좌우 광점으로 맺힘 */}
                <div aria-hidden="true" style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-6%', right: '-6%',
                  height: '20px',
                  background: 'radial-gradient(ellipse at 22% 50%, rgba(195,155,255,0.70) 0%, transparent 55%), radial-gradient(ellipse at 78% 50%, rgba(195,155,255,0.52) 0%, transparent 55%)',
                  filter: 'blur(6px)',
                  pointerEvents: 'none',
                }} />

                <button
                  onClick={() => scrollTo('contact')}
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '9999px',
                    border: '1.5px solid rgba(255,255,255,0.62)',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.97)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    background: 'none',
                    outline: 'none',
                    letterSpacing: '0.01em',
                    transform: btnHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'transform 0.18s ease',
                  }}
                >
                  {/* L1: 유리 바디 — 반투명 보라, 배경 투과 */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'rgba(145, 85, 252, 0.68)',
                    backdropFilter: 'blur(14px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(14px) saturate(180%)',
                  }} />
                  {/* L2: 좌측 엣지 스페큘러 — 유리 곡면이 광원 정면으로 받는 밝은 크레센트 */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'radial-gradient(ellipse 40% 100% at 0% 50%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.22) 42%, transparent 70%)',
                  }} />
                  {/* L3: 우측 엣지 스페큘러 — 좌측의 약 55% */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'radial-gradient(ellipse 34% 100% at 100% 50%, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0.10) 42%, transparent 70%)',
                  }} />
                  {/* L4: 구면 상단 글로시 — 좌상단 집중, 우하단 소멸 */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'radial-gradient(ellipse 88% 54% at 26% -10%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.24) 34%, transparent 60%)',
                  }} />
                  {/* L5: 하단 내벽 — 유리 두께감, 어두운 rim */}
                  <span aria-hidden="true" style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'linear-gradient(to top, rgba(55,8,155,0.42) 0%, rgba(55,8,155,0.14) 20%, transparent 38%)',
                  }} />
                  {/* 콘텐츠 */}
                  <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar className="h-5 w-5" /> 무료체험수업 신청
                  </span>
                </button>
              </div>
              <button
                onClick={() => scrollTo('portfolio')}
                className="btn-glass flex items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                <Play className="h-5 w-5" /> FOLLOW 수업 보기
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-in slide-in-from-right duration-700">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl" style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(6,182,212,0.12))',
                filter: 'blur(24px)',
                transform: 'scale(0.95) translateY(10px)'
              }} />
              <img
                src="/student-celebration.png"
                alt="코코미술학원 합격자들"
                className="relative rounded-3xl w-full"
                style={{ boxShadow: '0 24px 56px rgba(0,0,0,0.16), 0 8px 20px rgba(0,0,0,0.10)' }}
                loading="eager" width="600" height="450"
              />
            </div>

            {/* University glass badge */}
            <div
              className="glass-card absolute -bottom-6 -left-6 px-5 py-4 min-w-[170px]"
            >
              <div
                className="text-xl font-black leading-tight transition-all duration-300"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)', color: '#1A1A2E' }}
              >
                {list[index]}
              </div>
              <div className="text-[10px] mt-1 tracking-wide" style={{ color: '#4A4A6A' }}>
                인서울·수도권 미대
              </div>
            </div>

            {/* FOLLOW badge */}
            <div
              className="glass-card-vivid absolute -top-6 -right-6 p-4"
            >
              <div className="text-xl font-bold text-center" style={{ color: '#1A1A2E' }}>FOLLOW</div>
              <div className="text-xs text-center" style={{ color: '#4A4A6A' }}>ALL IN-ONE SYSTEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
