import { useState, useEffect, useRef } from "react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import cocodioVideo from "@assets/optimized/cocodio-popup.mp4";

interface VideoPopupProps {
  id?: string;
  videoUrl?: string;
  delay?: number;
}

export default function VideoPopup({
  id = "video-popup-main",
  videoUrl = cocodioVideo,
  delay = 1.5,
}: VideoPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const hasSeenToday = localStorage.getItem(`popup-${id}-seen`) === today;
    if (!hasSeenToday) {
      let innerTimer: ReturnType<typeof setTimeout>;
      const timer = setTimeout(() => {
        setIsVisible(true);
        innerTimer = setTimeout(() => setIsAnimating(true), 100);
      }, delay * 1000);
      return () => {
        clearTimeout(timer);
        clearTimeout(innerTimer);
      };
    }
  }, [id, delay]);

  // ESC 키로 닫기
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible]);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDontShowToday = () => {
    if (videoRef.current) videoRef.current.pause();
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem(`popup-${id}-seen`, new Date().toDateString());
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // 재생 버튼 클릭 → 사용자 제스처이므로 소리와 함께 재생됨
  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // 소리 자동재생이 막히면 음소거 상태로라도 재생
        video.muted = true;
        setIsMuted(true);
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      });
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      startPlayback();
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setIsMuted(next);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10010] flex items-center justify-center transition-all duration-300 ${
        isAnimating ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="코코디오 소개 영상"
      data-testid="video-popup-overlay"
    >
      <div
        className={`relative transform transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          width: "min(94vw, calc(86vh * 9 / 16))",
          aspectRatio: "9 / 16",
        }}
        onClick={(e) => e.stopPropagation()}
        data-testid="video-popup-card"
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform touch-manipulation"
          aria-label="닫기"
          data-testid="button-video-close"
        >
          <X className="h-5 w-5 text-black" />
        </button>

        {/* 영상 */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {/* 재생 버튼 오버레이 (정지 상태일 때) - 미니멀 글래스 링 */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="group absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors duration-300 hover:bg-black/30 touch-manipulation"
              aria-label="재생"
              data-testid="button-video-play"
            >
              <span className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border border-white/60 bg-white/10 backdrop-blur-md transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-white/20 group-hover:border-white/90">
                <Play
                  className="h-6 w-6 sm:h-7 sm:w-7 text-white translate-x-[2px]"
                  fill="currentColor"
                  strokeWidth={1}
                />
              </span>
            </button>
          )}

          {/* 일시정지 버튼 (재생 중 살짝 보이게) */}
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-3 left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/55 text-white hover:bg-black/70 transition-colors touch-manipulation"
              aria-label="일시정지"
              data-testid="button-video-pause"
            >
              <Pause className="h-5 w-5" fill="currentColor" />
            </button>
          )}

          {/* 음소거 토글 */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/55 text-white hover:bg-black/70 transition-colors touch-manipulation"
            aria-label={isMuted ? "음소거 해제" : "음소거"}
            data-testid="button-video-mute"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>

          {/* 오늘 그만보기 */}
          <button
            onClick={handleDontShowToday}
            className="absolute bottom-3 right-3 z-10 text-[11px] px-2.5 py-1 rounded bg-black/55 text-white hover:bg-black/70 transition-colors touch-manipulation"
            data-testid="button-video-dont-show"
          >
            오늘 그만보기
          </button>
        </div>
      </div>
    </div>
  );
}
