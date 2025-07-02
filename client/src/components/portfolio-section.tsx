import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Star } from "lucide-react";

export default function PortfolioSection() {
  const portfolioCards = [
    {
      id: 1,
      title: "디자인/ 만화 FOLLOW",
      description: "디자인/ 만화/ 디지털드로잉",
      icon: <Users className="h-8 w-8" />,
      color: "bg-blue-500",
      link: "https://blog.naver.com/coco2238050",
      stats: "100+ 작품"
    },
    {
      id: 2,
      title: "중등미술 FOLLOW",
      description: "입체/ 평면, 중등특화수업",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-green-500",
      link: "https://blog.naver.com/cocodioart",
      stats: "200+ 합격생"
    },
    {
      id: 3,
      title: "인스타그램 FOLLOW",
      description: "학생들의 성장과정, 생생하게",
      icon: <Star className="h-8 w-8" />,
      color: "bg-purple-500",
      link: "https://www.instagram.com/cocodio_design_ani",
      stats: "1:1 맞춤 분석"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            COCODIO <span className="text-primary-600">ALL IN-ONE SYSTEM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">코코의 차별화된 FOLLOW 수업을 경험하세요.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCards.map((card) => (
            <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer">
              <Card className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${card.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                      <span className="text-sm font-medium mr-2">자세히 보기</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}