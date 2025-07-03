import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import directorImage from "@assets/제목 없음 (210 x 60 cm) (60 x 175 cm)_1751522974588.jpg";
import contestImage from "@assets/2025 (3)_1751522974589.jpg";

interface PopupModalProps {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  delay?: number; // 팝업이 나타나는 지연 시간 (초)
}

export default function PopupModal({ 
  id, 
  title, 
  imageUrl, 
  description, 
  linkUrl, 
  linkText = "자세히 보기",
  delay = 0 
}: PopupModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 개발/테스트용: localStorage 확인 없이 항상 팝업 표시
    // 실제 운영시에는 아래 주석 처리된 코드를 사용하세요
    
    // const hasSeenPopup = localStorage.getItem(`popup-${id}-seen`);
    // if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 100);
      }, delay * 1000);

      return () => clearTimeout(timer);
    // }
  }, [id, delay]);

  const handleClose = () => {
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

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
        isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 z-10 rounded-full w-8 h-8 p-0 bg-white/80 hover:bg-white"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* 이미지 */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>

        {/* 콘텐츠 */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
          )}

          <div className="flex gap-3">
            {linkUrl && (
              <Button 
                onClick={() => window.open(linkUrl, '_blank')}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white"
              >
                {linkText}
              </Button>
            )}
            
            <Button 
              onClick={handleClose}
              variant="outline"
              className="flex-1"
            >
              닫기
            </Button>
          </div>
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
      title: '재능의 출발점 - 원장님 소개',
      imageUrl: directorImage,
      description: '서울대 출신 원장님의 체계적인 미대입시 전문 교육을 경험해보세요.',
      linkUrl: 'https://blog.naver.com/coco2238050',
      linkText: '원장님 스토리 보기',
      delay: 3 // 3초 후 표시
    },
    {
      id: 'popup2', 
      title: '2025 미대실기대회 수상 소식',
      imageUrl: contestImage,
      description: '한양대 17명, 경희대 10명 등 주요대학 실기대회에서 최다 수상! 코코의 실력을 확인해보세요.',
      linkUrl: '/admissions/2025',
      linkText: '합격 실적 보기',
      delay: 6 // 6초 후 표시
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