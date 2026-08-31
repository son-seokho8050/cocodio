import { useEffect, useRef, useState } from "react";

// 총원장 유영범 인사말 플로팅 버튼 (2026-08-31)
// - 스크롤과 무관하게 항상 왼쪽 아래 고정(fixed)
// - 1번 음성 종료 → 2초 뒤 2번 음성 자동 연결
// - 파일은 /director/ 아래 사전 최적화본(webp 22KB·mono 64k mp3), preload로 버퍼링 최소화
export default function DirectorVoiceButton() {
  const [playing, setPlaying] = useState(false);
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  const gapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const a1 = new Audio("/director/greeting-1.mp3");
    const a2 = new Audio("/director/greeting-2.mp3");
    a1.preload = "auto";
    a2.preload = "auto";
    audio1Ref.current = a1;
    audio2Ref.current = a2;

    const onFirstEnded = () => {
      gapTimerRef.current = setTimeout(() => {
        a2.play().catch(() => setPlaying(false));
      }, 2000);
    };
    const onSecondEnded = () => setPlaying(false);
    a1.addEventListener("ended", onFirstEnded);
    a2.addEventListener("ended", onSecondEnded);

    return () => {
      a1.removeEventListener("ended", onFirstEnded);
      a2.removeEventListener("ended", onSecondEnded);
      if (gapTimerRef.current) clearTimeout(gapTimerRef.current);
      a1.pause();
      a2.pause();
    };
  }, []);

  const toggle = () => {
    const a1 = audio1Ref.current;
    const a2 = audio2Ref.current;
    if (!a1 || !a2) return;

    if (playing) {
      a1.pause();
      a2.pause();
      if (gapTimerRef.current) clearTimeout(gapTimerRef.current);
      a1.currentTime = 0;
      a2.currentTime = 0;
      setPlaying(false);
    } else {
      a1.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "총원장 인사말 정지" : "총원장 유영범 인사말 듣기"}
      className="relative block group"
      style={{ border: "none", background: "transparent", padding: 0 }}
    >
      <span
        className="block relative rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "64px",
          height: "64px",
          boxShadow: playing
            ? "0 0 0 3px rgba(199,121,101,0.9), 0 8px 24px rgba(0,0,0,0.25)"
            : "0 0 0 3px rgba(255,255,255,0.95), 0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src="/director/yoo-youngbeom.webp"
          alt="총원장 유영범"
          width={64}
          height={64}
          loading="eager"
          className="block w-full h-full rounded-full object-cover select-none"
          draggable={false}
        />
        {/* 재생/정지 미니멀 배지 */}
        <span
          className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full"
          style={{
            width: "24px",
            height: "24px",
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          }}
        >
          {playing ? (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <rect x="1" y="1" width="3" height="8" rx="0.8" fill="#1a1a1a" />
              <rect x="6" y="1" width="3" height="8" rx="0.8" fill="#1a1a1a" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2.2 1.2 L8.8 5 L2.2 8.8 Z" fill="#1a1a1a" />
            </svg>
          )}
        </span>
        {/* 이름 라벨 — 데스크톱 hover 시 */}
        <span
          className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{ background: "rgba(26,26,26,0.85)", color: "#fff" }}
        >
          총원장 유영범 인사말
        </span>
      </span>
    </button>
  );
}
