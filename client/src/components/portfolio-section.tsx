import { ArrowRight, Users, Trophy, Star } from "lucide-react";

const portfolioCards = [
  { id: 1, title: "디자인/ 만화 FOLLOW", description: "디자인/ 만화/ 디지털드로잉", icon: Users, color: '#8B5CF6', link: "https://blog.naver.com/coco2238050" },
  { id: 2, title: "중등미술 FOLLOW", description: "입체/ 평면, 중등특화수업", icon: Trophy, color: '#06B6D4', link: "https://blog.naver.com/cocodioart" },
  { id: 3, title: "인스타그램 FOLLOW", description: "학생들의 성장과정, 생생하게", icon: Star, color: '#EC4899', link: "https://www.instagram.com/cocodio_design_ani" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1A1A2E' }}>
            COCODIO <span className="gradient-text">ALL IN-ONE SYSTEM</span>
          </h2>
          <p style={{ color: '#8888A8', fontSize: '1.1rem' }}>
            코코의 차별화된 FOLLOW 수업을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCards.map((card) => (
            <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer">
              <div className="glass-card group cursor-pointer p-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${card.color}20, ${card.color}42)`, border: `1px solid ${card.color}28` }}
                >
                  <card.icon className="h-8 w-8" style={{ color: card.color }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'rgba(0,0,0,0.85)', position: 'relative', zIndex: 3 }}>
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.54)', position: 'relative', zIndex: 3 }}>
                  {card.description}
                </p>
                <div className="flex items-center justify-center gap-2" style={{ color: card.color, position: 'relative', zIndex: 3 }}>
                  <span className="text-sm font-semibold">자세히 보기</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
