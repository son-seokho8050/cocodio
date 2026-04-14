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

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="text-white pt-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #080B1A 0%, #0F1535 50%, #080B1A 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background ambient blobs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full pointer-events-none animate-float-medium"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="mb-8">
              <div
                className="text-sm font-light mb-1 tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                재능의 출발점
              </div>
              <h1
                className="text-6xl lg:text-8xl font-black mb-3 leading-none"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                코코
              </h1>
              <p className="text-lg lg:text-xl font-normal leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                여러분의 재능은 어떤 모양인가요?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
                style={{ borderRadius: '9999px' }}
              >
                <Calendar className="h-5 w-5" />
                무료체험수업 신청
              </button>
              <button
                onClick={scrollToPortfolio}
                className="btn-glass flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                <Play className="h-5 w-5" />
                FOLLOW 수업 보기
              </button>
            </div>
          </div>

          {/* Right: Image + floating glass cards */}
          <div className="relative animate-in slide-in-from-right duration-700">
            <img
              src="/student-celebration.png"
              alt="코코미술학원 합격자들"
              className="rounded-3xl w-full shadow-2xl"
              style={{ boxShadow: '0 0 60px rgba(139,92,246,0.3)' }}
              loading="eager"
              width="600"
              height="450"
            />

            {/* University badge */}
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 min-w-[170px]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className="text-xl font-black leading-tight transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(6px)',
                  background: 'linear-gradient(135deg, #A78BFA, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {list[index]}
              </div>
              <div className="text-[10px] mt-1 tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                인서울·수도권 미대
              </div>
            </div>

            {/* FOLLOW badge */}
            <div
              className="absolute -top-6 -right-6 p-4 text-white rounded-2xl"
              style={{
                background: 'rgba(139,92,246,0.15)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(139,92,246,0.35)',
                boxShadow: '0 0 30px rgba(139,92,246,0.25)',
              }}
            >
              <div className="text-xl font-bold text-center">FOLLOW</div>
              <div className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.6)' }}>ALL IN-ONE SYSTEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
