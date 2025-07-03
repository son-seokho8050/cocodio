import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all gallery images
import gallery1 from "@assets/2025 (2)_1751374843932.jpg";
import gallery2 from "@assets/KakaoTalk_20230518_185117628_06_1751375534431.jpg";
import gallery3 from "@assets/KakaoTalk_20230823_211315322_1751375132860.png";
import gallery4 from "@assets/doma 사본_1751375955014.png";
import gallery5 from "@assets/image_1751374882492.png";
import gallery6 from "@assets/image_1751374911726.png";
import gallery7 from "@assets/image_1751449306245.png";
import gallery8 from "@assets/image_1751449346775.png";
import gallery9 from "@assets/제목 없는 디자인 (1)_1751449262582.png";

const galleryImages = [
  {
    src: gallery1,
    title: "학생 작품 전시회",
    description: "2025년 우수 작품 전시"
  },
  {
    src: gallery2,
    title: "미술 수업 현장",
    description: "집중된 분위기 속 창작 활동"
  },
  {
    src: gallery3,
    title: "디지털 아트 수업",
    description: "최신 디지털 기법 교육"
  },
  {
    src: gallery4,
    title: "포트폴리오 제작",
    description: "개인별 맞춤 포트폴리오 완성"
  },
  {
    src: gallery5,
    title: "실기 대회 준비",
    description: "대학 입시 실기 집중 훈련"
  },
  {
    src: gallery6,
    title: "웹툰 제작 수업",
    description: "창의적인 스토리텔링 교육"
  },
  {
    src: gallery7,
    title: "졸업 작품 발표",
    description: "학습 성과 발표회"
  },
  {
    src: gallery8,
    title: "특별 워크샵",
    description: "전문가 초청 특강"
  },
  {
    src: gallery9,
    title: "수상작 전시",
    description: "각종 대회 수상작 전시"
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
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            학원 갤러리
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            코코미술학원의 생생한 교육 현장과
            <br />
            학생들의 창작 활동을 만나보세요
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Maximize2 className="h-6 w-6 text-white" />
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
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

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