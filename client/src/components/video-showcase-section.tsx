import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type VideoSlot = {
  src?: string;
  poster?: string;
  title: string;
  caption: string;
};

const slots: VideoSlot[] = [
  { title: "수업 현장", caption: "실제 수업의 생생한 모습" },
  { title: "학생 작품", caption: "완성된 작품과 제작 과정" },
  { title: "특강 & 이벤트", caption: "특별 프로그램 하이라이트" },
];

function LazyVideo({ slot, idx }: { slot: VideoSlot; idx: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="glass-frost group relative overflow-hidden cursor-pointer"
      style={{ padding: 0, borderRadius: "24px" }}
      onClick={togglePlay}
    >
      <div className="aspect-[4/5] overflow-hidden relative bg-black">
        {slot.src && inView ? (
          <video
            ref={videoRef}
            src={slot.src}
            poster={slot.poster}
            preload="metadata"
            playsInline
            muted
            loop
            className="w-full h-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(199,121,101,0.18) 0%, rgba(60,30,40,0.45) 100%)",
            }}
          >
            <div className="text-white/55 text-sm font-medium tracking-widest uppercase">
              Video {idx + 1}
            </div>
          </div>
        )}

        {/* Play 버튼 (영상이 정지 중일 때) */}
        {slot.src && !playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <Play className="h-7 w-7 ml-1" style={{ color: "#1A1A1A" }} fill="#1A1A1A" />
            </div>
          </div>
        )}

        {/* 타이틀 오버레이 (항상 표시) */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 pt-12 pb-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          <h3
            className="text-base lg:text-lg font-bold mb-1 leading-tight"
            style={{ color: "#FFFFFF", textShadow: "0 2px 6px rgba(0,0,0,0.85)" }}
          >
            {slot.title}
          </h3>
          <p
            className="text-xs lg:text-sm"
            style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 4px rgba(0,0,0,0.85)" }}
          >
            {slot.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcaseSection() {
  return (
    <section id="videos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="section-badge-coral w-fit mb-4">코코 영상</div>
            <h2
              className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              style={{ color: "#ffffff" }}
            >
              Live Studio
            </h2>
          </div>
          <p
            className="lg:max-w-sm lg:text-right"
            style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            수업 현장과 학생들의 생생한 작업 과정을<br />
            영상으로 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot, idx) => (
            <LazyVideo key={idx} slot={slot} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
