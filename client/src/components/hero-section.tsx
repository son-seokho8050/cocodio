import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              사고력이 시작되는 곳<br />
              <span className="text-accent-500">코코미술학원</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              4단계 사고체계를 통한 체계적 미술교육으로<br />
              창의력과 논리적 사고를 동시에 기르는<br />
              차별화된 입시미술 전문학원입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                무료 상담 예약
              </Button>
              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                학생작품 보기
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-700">
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Art students working in modern studio"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-primary-600">17명</div>
                <div className="text-sm text-gray-600">한양대 실기대회<br />지역 최다 수상</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent-500 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold">FOLLOW</div>
              <div className="text-xs">시스템</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
