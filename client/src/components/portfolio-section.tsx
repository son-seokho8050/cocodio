import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Star } from "lucide-react";
import { Link } from "wouter";

export default function PortfolioSection() {
  const portfolioCards = [
    {
      id: 1,
      title: "FOLLOW 수업 갤러리",
      description: "학생들의 창작 과정과 결과물을 확인해보세요",
      icon: <Users className="h-8 w-8" />,
      color: "bg-blue-500",
      link: "/gallery",
      stats: "100+ 작품"
    },
    {
      id: 2,
      title: "합격자 명단",
      description: "코코미술학원의 자랑스러운 합격 실적을 확인하세요",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-green-500",
      link: "/admissions",
      stats: "200+ 합격생"
    },
    {
      id: 3,
      title: "적성 테스트",
      description: "나에게 맞는 미술 분야를 찾아보세요",
      icon: <Star className="h-8 w-8" />,
      color: "bg-purple-500",
      link: "/aptitude-test",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            코코미술학원의 다양한 서비스를 탐색해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCards.map((card) => (
            <Link href={card.link} key={card.id}>
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {card.stats}
                    </span>
                    
                    <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                      <span className="text-sm font-medium mr-2">자세히 보기</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}