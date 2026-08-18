import { useState, useEffect, useRef, useCallback } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import awards2026PopupImage from "@assets/optimized/awards-2026-popup.webp";
import bisang8PopupImage from "@assets/optimized/bisang-8-popup.webp";
import directorYoungBeom from "@assets/2 (5)_1753939385447.jpg";
import directorJunSeok from "@assets/c3feaea2-d080-4c2c-9008-7f3de670d16a_1753939390587.jpg";
import exhibitionPoster from "@assets/관람시간  오전 11시 ~ 오후 7시 장소  창동 상상갤러리 입장료  무료 주차  갤러리 앞 주차가능_1755676342383.jpg";
import awards2025Image from "@assets/2 (4)_1764307355547.jpg";
import admissions2026Image from "@assets/마산_김해_미술학원__2025_동덕여대_실기대회_2년_연속_동상_수상,_총_28명_수상_1765776501233.jpg";

interface PopupModalProps {
  id: string;
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  delay?: number; // 팝업이 나타나는 지연 시간 (초)
  isLarge?: boolean; // 큰 크기로 표시할지 여부
  type?: 'image' | 'video'; // 미디어 타입
  position?: 'center' | 'left' | 'right'; // 팝업 위치
  ctaLabel?: string; // 이미지 위에 표시할 클릭 유도 버튼 문구 (기본 상태)
  ctaLabelActive?: string; // 클릭 후 바뀔 문구
  active?: boolean; // false면 타이머를 시작하지 않음 (순차 표시용)
  onClosed?: () => void; // 닫힘(또는 오늘 이미 본 경우) 알림 - 순차 표시용
}

export default function PopupModal({ 
  id, 
  title, 
  imageUrl, 
  videoUrl,
  description, 
  linkUrl, 
  linkText = "자세히 보기",
  delay = 0,
  isLarge = false,
  type = 'image',
  position = 'center',
  ctaLabel,
  ctaLabelActive,
  active = true,
  onClosed
}: PopupModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mediaDimensions, setMediaDimensions] = useState<{width: number, height: number} | null>(null);
  const [ctaExpanded, setCtaExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closedNotifiedRef = useRef(false); // onClosed 중복 호출 방지 (원샷)

  const notifyClosedOnce = () => {
    if (closedNotifiedRef.current) return;
    closedNotifiedRef.current = true;
    onClosed?.();
  };

  useEffect(() => {
    if (!active) return;
    // 오늘 하루 동안 이 팝업을 본 적이 있는지 확인
    const today = new Date().toDateString();
    const hasSeenToday = localStorage.getItem(`popup-${id}-seen`) === today;
    
    console.log(`Popup ${id}: hasSeenToday = ${hasSeenToday}, delay = ${delay}`);
    
    if (hasSeenToday) {
      // 이미 본 팝업이면 순차 체인을 다음으로 넘김
      notifyClosedOnce();
      return;
    }
    {
      console.log(`Setting timer for popup ${id} with ${delay} seconds delay`);
      const timer = setTimeout(() => {
        console.log(`Showing popup ${id}`);
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 100);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [id, delay, active, onClosed]);

  // 이미지 사전 로딩 - 팝업이 뜨는 순간 버퍼링/로딩 없이 즉시 표시
  useEffect(() => {
    if (type === 'image' && imageUrl) {
      const preload = new Image();
      preload.src = imageUrl;
    }
  }, [type, imageUrl]);

  const handleClose = () => {
    setIsAnimating(false);
    setCtaExpanded(false);
    setTimeout(() => {
      setIsVisible(false);
      notifyClosedOnce();
    }, 300);
  };

  const handleDontShowToday = () => {
    setIsAnimating(false);
    setCtaExpanded(false);
    setTimeout(() => {
      setIsVisible(false);
      // 오늘 하루 동안 이 팝업을 다시 보지 않도록 설정
      const today = new Date().toDateString();
      localStorage.setItem(`popup-${id}-seen`, today);
      notifyClosedOnce();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const navigateToLink = () => {
    if (linkUrl) {
      window.location.href = linkUrl;
    }
  };

  // 클릭 → 버튼 문구가 '코코 여름특강'으로 바뀐 뒤 URL로 이동
  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ctaExpanded) return;
    setCtaExpanded(true);
    window.setTimeout(navigateToLink, 900);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setMediaDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
  };

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setMediaDimensions({
      width: video.videoWidth,
      height: video.videoHeight
    });
    
    // 자동재생 강제 실행
    setTimeout(() => {
      video.play().catch(error => {
        console.log('자동재생이 차단되었습니다. 사용자가 수동으로 재생할 수 있습니다.', error);
      });
    }, 500);
  };

  const getModalStyle = () => {
    if (!mediaDimensions) return {};
    
    const { width, height } = mediaDimensions;
    const aspectRatio = width / height;
    
    // 모바일과 데스크톱 구분
    const isMobile = window.innerWidth <= 768;
    
    // 좌우 배치일 때는 더 작은 크기 사용
    const isPositioned = position === 'left' || position === 'right';
    
    // 강사 프로필 팝업들(popup1, popup2)은 기존 대비 15% 축소 (2.16 × 0.85 = 1.836)
    const isTeacherProfile = id === 'popup1' || id === 'popup2';
    // 2025 수상 실적 팝업(popup-awards-2025)과 2026 합격자 팝업(popup-admissions-2026)
    const isNewAnnouncementPopup = id === 'popup-awards-2025' || id === 'popup-admissions-2026';
    // 2026 수상 / BISANG 8월 팝업 - 크게 표시
    const isDualPopup2026 = id === 'popup-awards-2026' || id === 'popup-bisang-8';
    // 영상 팝업(popup4)은 1.2배 크게 표시 (닫기 버튼 접근성 개선)
    const isVideoPopup = id === 'popup4';
    // 전시회 팝업(popup5)은 1.8배 크게 표시 (글자 가독성 개선)
    const isExhibitionPopup = id === 'popup5';
    const sizeMultiplier = isTeacherProfile ? 1.836 : isNewAnnouncementPopup ? 1.5 : isDualPopup2026 ? 1.6 : isVideoPopup ? 1.2 : isExhibitionPopup ? 1.8 : 1.0;
    
    // 모바일에서는 더 작게, 좌우 배치일 때는 중간 크기
    const maxWidth = isMobile 
      ? Math.min(280 * sizeMultiplier, window.innerWidth * 0.9)  // 모바일에서 더 작게
      : isPositioned
        ? Math.min(350 * sizeMultiplier, window.innerWidth * 0.48)  // 좌우 배치시 크기 증가
        : isLarge 
          ? Math.min(550 * sizeMultiplier, window.innerWidth * 0.9) 
          : Math.min(400 * sizeMultiplier, window.innerWidth * 0.85);
        
    const maxHeight = Math.min(
      isMobile
        ? window.innerHeight * 0.6 * sizeMultiplier  // 모바일에서 높이도 증가
        : isPositioned
          ? window.innerHeight * 0.7 * sizeMultiplier  // 좌우 배치시 높이 증가
          : isLarge 
            ? window.innerHeight * 0.8 * sizeMultiplier 
            : window.innerHeight * 0.7 * sizeMultiplier,
      window.innerHeight * 0.85  // 화면을 넘지 않도록 상한
    );
    
    let finalWidth = maxWidth;
    let finalHeight = finalWidth / aspectRatio;
    
    if (finalHeight > maxHeight) {
      finalHeight = maxHeight;
      finalWidth = finalHeight * aspectRatio;
    }
    
    return {
      width: `${finalWidth}px`,
      maxWidth: 'none'
    };
  };

  if (!isVisible) return null;

  // z-index 계층 설정:
  // - 강사 프로필: popup1(왼쪽) > popup2(오른쪽)
  // - 나중 팝업들: 새 공지 팝업들 > 강사 프로필들
  const getZIndex = () => {
    if (id === 'popup5') return 'z-[10003]'; // 전시회 팝업 최상위
    if (id === 'popup-awards-2025') return 'z-[10002]'; // 2025 수상 실적 팝업
    if (id === 'popup-admissions-2026') return 'z-[10001]'; // 2026 합격자 팝업
    if (id === 'popup1') return 'z-[10000]'; // 총원장 유영범 (왼쪽)
    if (id === 'popup2') return 'z-[9999]'; // 말랑T 유준석 (오른쪽)
    if (id === 'popup-awards-2026') return 'z-[10005]'; // 2026 수상 팝업 (왼쪽)
    if (id === 'popup-bisang-8') return 'z-[10004]'; // BISANG 8월 팝업 (오른쪽)
    return 'z-[9998]'; // 기본값
  };
  const zIndex = getZIndex();

  // 모바일 여부 체크
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // 새 공지 팝업들의 모바일 위치 조정
  const getMobilePosition = () => {
    if (!isMobile) return '';
    if (id === 'popup-awards-2025') return 'translate-y-[-20%]'; // 위로
    if (id === 'popup-admissions-2026') return 'translate-y-[20%]'; // 아래로
    if (id === 'popup1') return 'translate-y-[-15%]'; // 위로
    if (id === 'popup2') return 'translate-y-[15%]'; // 아래로
    // popup-awards-2026 / popup-bisang-8 은 모바일에서 순차 표시라 중앙 배치
    return '';
  };

  return (
    <div 
      className={`fixed inset-0 ${zIndex} flex transition-all duration-300 ${
        position === 'left' || position === 'right' ? 'pointer-events-none' : ''
      } ${
        isAnimating
          ? (position === 'left' || position === 'right' ? 'bg-black/15' : 'bg-black/30')
          : 'bg-transparent'
      } ${
        isMobile 
          ? `items-center justify-center ${getMobilePosition()}`
          : position === 'left' ? 'items-center justify-start pl-[4%]' :
            position === 'right' ? 'items-center justify-end pr-[4%]' :
            'items-center justify-center'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative pointer-events-auto bg-white rounded-2xl shadow-2xl mx-4 transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={getModalStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 - 모바일 최적화 */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 z-10 rounded-full w-8 h-8 p-0 bg-white/80 hover:bg-white touch-manipulation"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* 오늘 하루 그만보기 버튼 - 모바일 최적화 */}
        <Button
          onClick={handleDontShowToday}
          variant="ghost"
          size="sm"
          className="absolute bottom-2 right-2 z-10 text-[10px] px-2 py-0.5 bg-black/70 text-white hover:bg-black/80 rounded text-nowrap h-auto min-h-0 touch-manipulation min-w-[44px] min-h-[30px]"
        >
          오늘 그만보기
        </Button>

        {/* 미디어 콘텐츠 */}
        <div className="relative overflow-hidden rounded-2xl" style={{ backgroundColor: 'transparent' }}>
          {type === 'video' && videoUrl ? (
            <video 
              ref={videoRef}
              src={videoUrl}
              className="w-full h-auto object-contain rounded-2xl"
              controls
              autoPlay={true}
              muted
              loop
              playsInline
              onLoadedMetadata={handleVideoLoad}
              onCanPlay={() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(error => {
                    console.log('자동재생이 차단되었습니다:', error);
                  });
                }
              }}
            />
          ) : linkUrl ? (
            ctaLabel ? (
              <div className="group relative block cursor-pointer" onClick={handleCtaClick}>
                <img 
                  src={imageUrl || ''}
                  alt={title}
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  style={{ 
                    filter: 'brightness(1) contrast(1)', 
                    imageRendering: 'auto',
                    opacity: 1,
                    colorAdjust: 'exact',
                    WebkitColorAdjust: 'exact'
                  } as React.CSSProperties}
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    console.log(`Image loaded for ${id}:`, imageUrl);
                    handleImageLoad(e);
                  }}
                  onError={(e) => {
                    console.error(`Image failed to load for ${id}:`, imageUrl);
                  }}
                />
                <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    aria-label={ctaExpanded ? (ctaLabelActive || ctaLabel) : ctaLabel}
                    className={`cta-glossy relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-bold ${ctaExpanded ? 'cta-active' : ''}`}
                  >
                    <span className="cta-sheen" aria-hidden="true" />
                    <span
                      className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 ease-out"
                      style={{ opacity: ctaExpanded ? 0 : 1, transform: ctaExpanded ? 'scale(0.96)' : 'scale(1)' }}
                    >
                      <span>{ctaLabel}</span>
                      <span className="cta-arrow inline-flex">
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                      </span>
                    </span>
                    {ctaLabelActive && (
                      <span
                        className="absolute inset-0 z-10 flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 ease-out"
                        style={{ opacity: ctaExpanded ? 1 : 0, transform: ctaExpanded ? 'scale(1)' : 'scale(0.96)' }}
                        aria-hidden={!ctaExpanded}
                      >
                        <span>{ctaLabelActive}</span>
                        <span className="cta-arrow inline-flex">
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <a 
                href={linkUrl} 
                target={linkUrl.startsWith('http') ? '_blank' : '_self'}
                rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={title}
                className="group block cursor-pointer relative"
              >
                <img 
                  src={imageUrl || ''}
                  alt={title}
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  style={{ 
                    filter: 'brightness(1) contrast(1)', 
                    imageRendering: 'auto',
                    opacity: 1,
                    colorAdjust: 'exact',
                    WebkitColorAdjust: 'exact'
                  } as React.CSSProperties}
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    console.log(`Image loaded for ${id}:`, imageUrl);
                    handleImageLoad(e);
                  }}
                  onError={(e) => {
                    console.error(`Image failed to load for ${id}:`, imageUrl);
                  }}
                />
              </a>
            )
          ) : (
            <img 
              src={imageUrl || ''}
              alt={title}
              className="w-full h-auto object-contain rounded-2xl"
              style={{ 
                filter: 'brightness(1) contrast(1)', 
                imageRendering: 'auto',
                opacity: 1,
                colorAdjust: 'exact',
                WebkitColorAdjust: 'exact'
              } as React.CSSProperties}
              loading="eager"
              decoding="async"
              onLoad={(e) => {
                console.log(`Image loaded for ${id}:`, imageUrl);
                handleImageLoad(e);
              }}
              onError={(e) => {
                console.error(`Image failed to load for ${id}:`, imageUrl);
              }}
            />
          )}
        </div>



      </div>
    </div>
  );
}

// 팝업 매니저 컴포넌트
export function PopupManager() {
  // 모바일에서는 두 팝업을 순차 표시 (앞 팝업을 닫으면 다음 팝업 표시)
  const isMobileSequential =
    typeof window !== 'undefined' && window.innerWidth <= 768;
  const [seqIndex, setSeqIndex] = useState(0);
  const advanceSeq = useCallback(() => setSeqIndex((i) => i + 1), []);

  const popups: Array<React.ComponentProps<typeof PopupModal>> = [
    // 여름방학 특강 팝업 - 비활성화 (지시에 따라 종료)
    // {
    //   id: 'popup-summer-2026',
    //   title: '코코 여름방학 특강',
    //   imageUrl: summerPopupImage, // @assets/optimized/summer-2026-popup.webp
    //   type: 'image' as const,
    //   linkUrl: 'https://cocodio-2026summer.netlify.app/',
    //   ctaLabel: '코코의 여름, 둘러보기',
    //   ctaLabelActive: '코코 여름특강',
    //   delay: 1.5,
    //   isLarge: true,
    //   position: 'center' as const,
    // },
    {
      id: 'popup-awards-2026',
      title: '2026 주요미대 실기대회 수상',
      imageUrl: awards2026PopupImage,
      type: 'image' as const,
      delay: 1.5,
      isLarge: true,
      position: 'left' as const,
      active: !isMobileSequential || seqIndex === 0,
      onClosed: isMobileSequential ? advanceSeq : undefined,
    },
    {
      id: 'popup-bisang-8',
      title: 'BISANG 수시대비 실전 교수평가 8월',
      imageUrl: bisang8PopupImage,
      type: 'image' as const,
      delay: 1.5,
      isLarge: true,
      position: 'right' as const,
      active: !isMobileSequential || seqIndex === 1,
    },
    // 강사 프로필 팝업(popup1, popup2) - 비활성화 (지시에 따라 숨김)
    // {
    //   id: 'popup1',
    //   title: '총원장 유영범 소개',
    //   imageUrl: directorYoungBeom,
    //   type: 'image' as const,
    //   linkUrl: 'https://blog.naver.com/coco2238050',
    //   delay: 3, // 3초 후 표시
    //   isLarge: true, // 큰 크기로 표시
    //   position: 'left' as const // 화면 왼쪽에 배치
    // },
    // {
    //   id: 'popup2',
    //   title: '말랑T X 유준석 강사 소개',
    //   imageUrl: directorJunSeok,
    //   type: 'image' as const,
    //   linkUrl: 'https://blog.naver.com/cocodioart',
    //   delay: 3, // 동시에 표시
    //   isLarge: true,
    //   position: 'right' as const // 화면 오른쪽에 배치
    // },
    // 수상자·합격자 팝업 - 비활성화 (다시 지시 전까지 내려둠)
    // {
    //   id: 'popup-awards-2025', 
    //   title: '2025 주요미대실기대회 수상 실적',
    //   imageUrl: awards2025Image,
    //   type: 'image' as const,
    //   linkUrl: '/admissions/2026',
    //   delay: 6,
    //   isLarge: true,
    //   position: 'left' as const
    // },
    // {
    //   id: 'popup-admissions-2026', 
    //   title: '2026학년도 미대수시 합격',
    //   imageUrl: admissions2026Image,
    //   type: 'image' as const,
    //   linkUrl: '/admissions/2026',
    //   delay: 6,
    //   isLarge: true,
    //   position: 'right' as const
    // },
  ];

  return (
    <>
      {popups.map((popup) => (
        <PopupModal key={popup.id} {...popup} />
      ))}
    </>
  );
}