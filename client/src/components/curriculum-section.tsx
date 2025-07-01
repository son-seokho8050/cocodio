import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Tablet, Palette, Check } from "lucide-react";

export default function CurriculumSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            COCO <span className="text-primary-600">ALL IN-ONE SYSTEM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">입시미술 그 한계를 넘어, 코코의 수업을 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 입시미술 */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Students preparing entrance exam artwork"
              className="w-full h-48 object-cover"
            />
            
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">입시미술</h3>
              </div>
              <p className="text-gray-600 mb-6 tracking-wide text-[14px]">
                디자인과 만화 전공을 위한<br />
                체계적인 입시 준비 과정,<br />
                개인 성향별 커리큘럼으로<br />
                실기시험 대비까지 완벽하게
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  디자인/ 만화 실기
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  입시미술 기초과정
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  실전시험 실전대비
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  개별진로 상담 및 지도
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white"
              >
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          {/* SPACE */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Premium art education space"
              className="w-full h-48 object-cover"
            />
            
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">SPACE</h3>
              </div>
              <p className="text-gray-600 mb-6 tracking-wide leading-relaxed">
                최상위 미대입시 전문 수업,<br />
                서울대 출신 원장님의<br />
                엄선된 커리큘럼과 개별 맞춤지도로<br />
                최고 수준의 입시결과 달성
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-purple-600 mr-2 h-4 w-4" />
                  최상위권 미대 입시 전문
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-purple-600 mr-2 h-4 w-4" />
                  개별 맞춤형 집중 지도
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-purple-600 mr-2 h-4 w-4" />
                  프리미엄 소수정예 수업
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-purple-600 mr-2 h-4 w-4" />
                  입시 전략 컨설팅
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          {/* 디지털 드로잉 */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Digital art creation workspace"
              className="w-full h-48 object-cover"
            />
            
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Tablet className="text-secondary-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">디지털 드로잉</h3>
              </div>
              <p className="text-gray-600 mb-6 tracking-wide leading-relaxed">
                현직 애니메이터 실기원장님과 함께,<br />
                웹툰, 일러스트, 게임 그래픽 등<br />
                다양한 분야를 제대로
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  클립스튜디오(웹툰)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  ASEPRITE(픽셀아트)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  스파인2D(2.5D 게임캐릭터)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  애니메이트CC/ 포토샵
                </div>

              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-secondary-600 hover:bg-secondary-700 text-white"
              >
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          {/* 중등미술 */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Middle school art education"
              className="w-full h-48 object-cover"
            />
            
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Palette className="text-accent-600 h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">중등미술</h3>
              </div>
              <p className="text-gray-600 mb-6 tracking-wide leading-relaxed">
                중학생을 위한 기초 미술 교육,<br />
                평면에서 입체까지,<br />
                창의성과 표현력을 탄탄하게
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-accent-600 mr-2 h-4 w-4" />
                  기초 드로잉 & 색채 감각 기르기
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-accent-600 mr-2 h-4 w-4" />
                  다양한 재료와 기법 체험
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-accent-600 mr-2 h-4 w-4" />
                  창의적 발상과 표현력 향상
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-accent-600 mr-2 h-4 w-4" />
                  미술사와 작품 감상법
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-accent-600 hover:bg-accent-600 text-white"
              >
                자세히 보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
