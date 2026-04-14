import { ArrowRight, Users, Trophy, Star } from "lucide-react";

const portfolioCards = [
  { id: 1, title: "디자인/ 만화 FOLLOW", description: "디자인/ 만화/ 디지털드로잉", icon: Users, color: '#6EC9A3', link: "https://blog.naver.com/coco2238050" },
  { id: 2, title: "중등미술 FOLLOW", description: "입체/ 평면, 중등특화수업", icon: Trophy, color: '#00CFCC', link: "https://blog.naver.com/cocodioart" },
  { id: 3, title: "인스타그램 FOLLOW", description: "학생들의 성장과정, 생생하게", icon: Star, color: '#52AE8A', link: "https://www.instagram.com/cocodio_design_ani" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-4">FOLLOW 시스템</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            COCODIO ALL IN-ONE SYSTEM
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem' }}>
            코코의 차별화된 FOLLOW 수업을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioCards.map((card) => (
            <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer">
              <div className="ui-card group cursor-pointer p-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${card.color}18`,
                    border: `1px solid ${card.color}35`,
                  }}
                >
                  <card.icon className="h-7 w-7" style={{ color: card.color }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-heading)' }}>
                  {card.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  {card.description}
                </p>
                <div className="flex items-center justify-center gap-2" style={{ color: card.color }}>
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
