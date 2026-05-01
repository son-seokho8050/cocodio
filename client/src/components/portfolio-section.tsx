import { ArrowUpRight, Users, Trophy, Star } from "lucide-react";

const portfolioCards = [
  { id: 1, title: "디자인/ 만화 FOLLOW", description: "디자인/ 만화/ 디지털드로잉", icon: Users, link: "https://blog.naver.com/coco2238050", label: "Naver Blog" },
  { id: 2, title: "중등미술 FOLLOW", description: "입체/ 평면, 중등특화수업", icon: Trophy, link: "https://blog.naver.com/cocodioart", label: "Naver Blog" },
  { id: 3, title: "인스타그램 FOLLOW", description: "학생들의 성장과정, 생생하게", icon: Star, link: "https://www.instagram.com/cocodio_design_ani", label: "Instagram" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">FOLLOW 시스템</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--text-heading)' }}>
              COCODIO ALL<br />IN-ONE SYSTEM
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            코코의 차별화된 FOLLOW 수업을 직접 경험해 보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioCards.map((card, idx) => {
            const isInk = idx === 1; // 가운데 강조
            return (
              <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer" className="block">
                <div
                  className={`${isInk ? 'ink-card' : 'glass-frost'} p-8 group cursor-pointer relative h-full flex flex-col`}
                  style={isInk ? { transform: 'translateY(-12px)' } : {}}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                      style={{
                        background: isInk ? 'rgba(255,255,255,0.10)' : 'rgba(232,181,168,0.20)',
                        border: isInk ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(232,181,168,0.40)',
                      }}
                    >
                      <card.icon className="h-7 w-7" style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                    </div>
                    <button
                      className={`pill-arrow ${isInk ? '' : 'light'}`}
                      style={{ width: 40, height: 40 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="text-xs uppercase tracking-widest mb-2 font-semibold"
                       style={{ color: isInk ? 'rgba(255,255,255,0.55)' : 'var(--color-coral-deep)' }}>
                    {card.label}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight"
                      style={{ color: isInk ? '#FFFFFF' : 'var(--text-heading)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1"
                     style={{ color: isInk ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}>
                    {card.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
