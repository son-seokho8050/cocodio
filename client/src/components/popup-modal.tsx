import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import directorYoungBeom from "@assets/2 (5)_1753939385447.jpg";
import directorJunSeok from "@assets/c3feaea2-d080-4c2c-9008-7f3de670d16a_1753939390587.jpg";
import contestImageNew from "@assets/de93278a-83e6-4b40-a51c-3d284d41f1d6_1753939388248.jpg";

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
  position = 'center'
}: PopupModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mediaDimensions, setMediaDimensions] = useState<{width: number, height: number} | null>(null);

  useEffect(() => {
    // 오늘 하루 동안 이 팝업을 본 적이 있는지 확인
    const today = new Date().toDateString();
    const hasSeenToday = localStorage.getItem(`popup-${id}-seen`) === today;
    
    if (!hasSeenToday) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 100);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [id, delay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDontShowToday = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      // 오늘 하루 동안 이 팝업을 다시 보지 않도록 설정
      const today = new Date().toDateString();
      localStorage.setItem(`popup-${id}-seen`, today);
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
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
  };

  const getModalStyle = () => {
    if (!mediaDimensions) return {};
    
    const { width, height } = mediaDimensions;
    const aspectRatio = width / height;
    
    // 모바일과 데스크톱 구분
    const isMobile = window.innerWidth <= 768;
    
    // 좌우 배치일 때는 더 작은 크기 사용
    const isPositioned = position === 'left' || position === 'right';
    
    // 모바일에서는 더 작게, 좌우 배치일 때는 중간 크기
    const maxWidth = isMobile 
      ? Math.min(280, window.innerWidth * 0.85)  // 모바일에서 더 작게
      : isPositioned
        ? Math.min(350, window.innerWidth * 0.4)  // 좌우 배치시 작게
        : isLarge 
          ? Math.min(550, window.innerWidth * 0.9) 
          : Math.min(400, window.innerWidth * 0.85);
        
    const maxHeight = isMobile
      ? window.innerHeight * 0.5  // 모바일에서 더 작게
      : isPositioned
        ? window.innerHeight * 0.6  // 좌우 배치시 작게
        : isLarge 
          ? window.innerHeight * 0.8 
          : window.innerHeight * 0.7;
    
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

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex transition-all duration-300 ${
        isAnimating ? 'bg-black/30' : 'bg-transparent'
      } ${
        position === 'left' ? 'items-center justify-start pl-4' :
        position === 'right' ? 'items-center justify-end pr-4' :
        'items-center justify-center'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl mx-4 transform transition-all duration-300 ${
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
        <div className="relative overflow-hidden rounded-2xl">
          {type === 'video' && videoUrl ? (
            <video 
              src={videoUrl}
              className="w-full h-auto object-contain rounded-2xl"
              controls
              autoPlay={false}
              muted
              onLoadedMetadata={handleVideoLoad}
            />
          ) : (
            <img 
              src={imageUrl || ''}
              alt={title}
              className="w-full h-auto object-contain rounded-2xl"
              loading="eager"
              decoding="async"
              onLoad={handleImageLoad}
            />
          )}
        </div>


      </div>
    </div>
  );
}

// 팝업 매니저 컴포넌트
export function PopupManager() {
  const popups = [
    {
      id: 'popup1',
      title: '총원장 유영범 소개',
      imageUrl: directorYoungBeom,
      type: 'image' as const,
      description: '서울대 출신 총원장의 체계적인 미대입시 전문 교육과 풍부한 경험을 만나보세요.',
      linkUrl: 'https://blog.naver.com/coco2238050',
      linkText: '원장님 스토리 보기',
      delay: 3, // 3초 후 표시
      isLarge: true, // 큰 크기로 표시
      position: 'left' as const // 화면 왼쪽에 배치
    },
    {
      id: 'popup2',
      title: '말랑T X 유준석 강사 소개',
      imageUrl: directorJunSeok,
      type: 'image' as const,
      description: '디지털 드로잉과 만화/애니메이션 전문 강사의 창의적인 교육을 경험해보세요.',
      linkUrl: 'https://blog.naver.com/cocodioart',
      linkText: '강사 포트폴리오 보기',
      delay: 3, // 동시에 표시
      isLarge: true,
      position: 'right' as const // 화면 오른쪽에 배치
    },
    {
      id: 'popup3', 
      title: '2025 미대실기대회 수상 소식',
      imageUrl: contestImageNew,
      type: 'image' as const,
      description: '건국대글로컬 50명 등 주요대학 실기대회에서 최다 수상! 코코의 실력을 확인해보세요.',
      linkUrl: '/admissions/2025',
      linkText: '합격 실적 보기',
      delay: 6 // 6초 후 표시
    },
    {
      id: 'popup4',
      title: '2025 코코 여름방학 특강',
      videoUrl: '/assets/COCODIO의 사본_1751698559152.mp4',
      type: 'video' as const,
      description: '코코미술학원의 특별한 여름방학 특강 프로그램을 영상으로 만나보세요.',
      delay: 12, // 12초 후 표시
      isLarge: true
    }
  ];

  return (
    <>
      {popups.map((popup) => (
        <PopupModal key={popup.id} {...popup} />
      ))}
    </>
  );
}