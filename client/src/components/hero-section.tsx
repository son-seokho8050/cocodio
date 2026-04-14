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
      className="text-white pt-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #0F0A1E 0%, #1A0B3B 40%, #0A1628 70%, #071520 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-16 left-8 w-[500px] h-[500px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-12 right-8 w-[400px] h-[400px] rounded-full pointer-events-none animate-float-medium"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="mb-8">
              <div className="text-sm font-light mb-1 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                재능의 출발점
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-3 leading-none gradient-text">
                코코
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                여러분의 재능은 어떤 모양인가요?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('contact')} className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 text-lg">
                <Calendar className="h-5 w-5" /> 무료체험수업 신청
              </button>
              <button onClick={() => scrollTo('portfolio')} className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full"
                style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.22)', color: 'white' }}>
                <Play className="h-5 w-5" /> FOLLOW 수업 보기
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-in slide-in-from-right duration-700">
            <div className="relative">
              {/* Image glow */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.2))', filter: 'blur(20px)', transform: 'scale(0.95) translateY(8px)' }} />
              <img
                src="/student-celebration.png"
                alt="코코미술학원 합격자들"
                className="relative rounded-3xl w-full"
                style={{ boxShadow: '0 0 60px rgba(139,92,246,0.25), 0 30px 60px rgba(0,0,0,0.4)' }}
                loading="eager" width="600" height="450"
              />
            </div>

            {/* University glass badge */}
            <div className="glass-card absolute -bottom-6 -left-6 px-5 py-4 min-w-[170px]"
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none' }}>
              {/* Override ::before ::after for dark hero context */}
              <div
                className="text-xl font-black leading-tight transition-all duration-300 gradient-text"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
              >
                {list[index]}
              </div>
              <div className="text-[10px] mt-1 tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                인서울·수도권 미대
              </div>
            </div>

            {/* FOLLOW badge */}
            <div className="absolute -top-6 -right-6 p-4 text-white rounded-2xl"
              style={{ background: 'rgba(139,92,246,0.18)', backdropFilter: 'blur(16px)', border: '1px solid rgba(167,139,250,0.40)', boxShadow: '0 0 30px rgba(139,92,246,0.25)' }}>
              <div className="text-xl font-bold text-center">FOLLOW</div>
              <div className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>ALL IN-ONE SYSTEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
