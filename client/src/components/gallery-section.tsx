import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

// Import all gallery images
import gallery1 from "@assets/플라워수업_1751517815348.jpg";
import gallery2 from "@assets/KakaoTalk_20250323_155758059_01_1751517815348.jpg";
import gallery3 from "@assets/LP디자인도슨트 (1)_1751517815349.jpg";
import gallery4 from "@assets/LP디자인도슨트 (2)_1751517815349.jpg";
import gallery5 from "@assets/LP디자인도슨트 (4)_1751517815349.jpg";
import gallery6 from "@assets/강당평가_1751517815349.jpg";
import gallery7 from "@assets/벽꾸미기 아이디어_1751517815350.jpg";
import gallery8 from "@assets/애니반 시연회_1751517815350.jpg";
import gallery9 from "@assets/자화상PPT_1751517815350.jpg";

const galleryImages = [
  {
    src: gallery1,
    title: "플라워 아트 수업",
    description: "실물을 활용한 컬러체험"
  },
  {
    src: gallery2,
    title: "월간 현장평가",
    description: "학생들과 함께하는 작품 평가 활동"
  },
  {
    src: gallery3,
    title: "LP 디자인 도슨트",
    description: "자기작품 도슨트"
  },
  {
    src: gallery4,
    title: "LP 디자인 도슨트",
    description: "자기 작품 도슨트"
  },
  {
    src: gallery5,
    title: "아트 갤러리 견학",
    description: "학생들과 함께하는 갤러리 투어"
  },
  {
    src: gallery6,
    title: "강당 작품 평가회",
    description: "대규모 작품 발표 및 실전 현장평가"
  },
  {
    src: gallery7,
    title: "아이디어 스케치",
    description: "창의적 아이디어 발굴 수업"
  },
  {
    src: gallery8,
    title: "애니메이션 강연회",
    description: "디지털 애니메이션 실무강연"
  },
  {
    src: gallery9,
    title: "자화상 작품 발표",
    description: "학생들의 자화상 작품 프레젠테이션"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">갤러리</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: '#ffffff' }}>
              COCODIO Gallery
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            코코미술학원의 특별한 교육 현장과<br />학생들의 창작 활동을 만나보세요
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="glass-frost group relative overflow-hidden cursor-pointer"
              style={{ padding: 0 }}
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* 항상 보이는 하단 다크 백드롭 + 타이틀 */}
              <div
                className="absolute inset-x-0 bottom-0 px-5 pt-14 pb-5 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)',
                }}
              >
                <h3
                  className="text-base lg:text-lg font-bold mb-1 leading-tight"
                  style={{ color: '#FFFFFF', textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
                >
                  {image.title}
                </h3>
                <p
                  className="text-xs lg:text-sm"
                  style={{ color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
                >
                  {image.description}
                </p>
              </div>

              {/* 호버 시 확대 아이콘 */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                aria-label="닫기"
                className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
                style={{ background: '#1A1A1A', border: '2px solid #FFFFFF' }}
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                aria-label="이전"
                className="absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
                style={{ background: 'rgba(26,26,26,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.4)' }}
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                aria-label="다음"
                className="absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
                style={{ background: 'rgba(26,26,26,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.4)' }}
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {galleryImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {galleryImages[currentImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}