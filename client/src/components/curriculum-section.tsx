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

        <div className="grid lg:grid-cols-3 gap-8">
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
              <p className="text-gray-600 mb-6 tracking-wide leading-relaxed">
                디자인과 만화 전공을 위한 체계적인 입시 준비 과정으로,
                포트폴리오 제작부터 실기시험 대비까지 완벽하게 준비합니다.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  기초 드로잉 & 색채 이론
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  포트폴리오 기획 및 제작
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  실기시험 실전 대비
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-primary-600 mr-2 h-4 w-4" />
                  개별 진로 상담 및 지도
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
                최신 디지털 도구를 활용한 현대적 아트 교육으로,
                웹툰, 일러스트, 게임 아트 등 다양한 분야의 기초를 다집니다.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  Photoshop & Illustrator 마스터
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  캐릭터 디자인 & 스토리텔링
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  웹툰 제작 실습
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="text-secondary-600 mr-2 h-4 w-4" />
                  포트폴리오 완성 및 발표
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
                중학생을 위한 기초 미술 교육으로 창의성과 표현력을 기르며,
                향후 입시 준비를 위한 탄탄한 기초를 마련합니다.
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
