import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

type VideoSlot = {
  youtubeId?: string;
  src?: string;
  poster?: string;
  title: string;
  caption: string;
};

const slots: VideoSlot[] = [
  {
    youtubeId: "KKUSSVxHNjo",
    title: "톤 (Tone)",
    caption: "명도의 단계, 톤의 원리를 노래로",
  },
  {
    youtubeId: "SjpCAe5-w6s",
    title: "채도 (Chroma)",
    caption: "색의 맑고 탁함, 채도를 멜로디로",
  },
  {
    youtubeId: "0C-9MKaTQfc",
    title: "뷰어 & 메이커",
    caption: "보는 눈과 만드는 손의 균형",
  },
];

function extractYouTubeId(input: string): string {
  if (!input) return "";
  if (/^[\w-]{11}$/.test(input)) return input;
  const m = input.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : input;
}

function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function VideoCard({
  slot,
  idx,
  onOpen,
}: {
  slot: VideoSlot;
  idx: number;
  onOpen: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

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

  const ytId = slot.youtubeId ? extractYouTubeId(slot.youtubeId) : "";
  const thumb = slot.poster || (ytId ? youtubeThumb(ytId) : "");
  const hasMedia = !!(slot.src || ytId);

  return (
    <div
      ref={wrapperRef}
      className="glass-frost group relative overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
      style={{ padding: 0, borderRadius: "20px" }}
      onClick={onOpen}
      data-testid={`video-card-${idx}`}
    >
      <div className="aspect-video overflow-hidden relative bg-black">
        {hasMedia && inView && thumb ? (
          <img
            src={thumb}
            alt={slot.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(199,121,101,0.20) 0%, rgba(60,30,40,0.50) 100%)",
            }}
          >
            <div className="text-white/55 text-xs font-medium tracking-widest uppercase">
              MV {idx + 1}
            </div>
          </div>
        )}

        {/* Play 버튼 오버레이 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
            style={{ background: "rgba(255,255,255,0.92)" }}
          >
            <Play className="h-7 w-7 ml-1" style={{ color: "#1A1A1A" }} fill="#1A1A1A" />
          </div>
        </div>

        {/* 타이틀 오버레이 */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 pt-12 pb-4 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.30) 80%, rgba(0,0,0,0) 100%)",
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

function VideoModal({
  slot,
  onClose,
}: {
  slot: VideoSlot;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const ytId = slot.youtubeId ? extractYouTubeId(slot.youtubeId) : "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
      data-testid="video-modal"
    >
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{
          background: "rgba(0,0,0,0.7)",
          border: "1.5px solid rgba(255,255,255,0.85)",
          color: "#FFFFFF",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        data-testid="button-close-modal"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full aspect-video overflow-hidden bg-black shadow-2xl"
          style={{ borderRadius: "16px" }}
        >
          {ytId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
              title={slot.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 0 }}
            />
          ) : slot.src ? (
            <video
              src={slot.src}
              poster={slot.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center text-center px-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(199,121,101,0.25) 0%, rgba(60,30,40,0.6) 100%)",
              }}
            >
              <div className="text-white/55 text-xs font-medium tracking-widest uppercase mb-3">
                Coming Soon
              </div>
              <div className="text-white text-2xl font-bold mb-2">{slot.title}</div>
              <div className="text-white/70 text-sm">{slot.caption}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcaseSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="section-badge-coral w-fit mb-4">코코 뮤직비디오</div>
            <h2
              className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              style={{ color: "#ffffff" }}
            >
              Theory in Music
            </h2>
          </div>
          <p
            className="lg:max-w-md lg:text-right"
            style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            책과 글로만 배우던 어려운 미술 이론을<br />
            코코는 노래로 재구성해 뮤직비디오로 전합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot, idx) => (
            <VideoCard
              key={idx}
              slot={slot}
              idx={idx}
              onOpen={() => setOpenIdx(idx)}
            />
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <VideoModal
          slot={slots[openIdx]}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </section>
  );
}
