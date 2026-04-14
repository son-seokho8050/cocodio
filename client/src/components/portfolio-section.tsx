import { ArrowRight, Users, Trophy, Star } from "lucide-react";

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
} as const;

const portfolioCards = [
  {
    id: 1,
    title: "디자인/ 만화 FOLLOW",
    description: "디자인/ 만화/ 디지털드로잉",
    icon: Users,
    accent: '#A78BFA',
    link: "https://blog.naver.com/coco2238050",
    stats: "100+ 작품"
  },
  {
    id: 2,
    title: "중등미술 FOLLOW",
    description: "입체/ 평면, 중등특화수업",
    icon: Trophy,
    accent: '#06B6D4',
    link: "https://blog.naver.com/cocodioart",
    stats: "200+ 합격생"
  },
  {
    id: 3,
    title: "인스타그램 FOLLOW",
    description: "학생들의 성장과정, 생생하게",
    icon: Star,
    accent: '#34D399',
    link: "https://www.instagram.com/cocodio_design_ani",
    stats: "1:1 맞춤 분석"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>
            COCODIO{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ALL IN-ONE SYSTEM
            </span>
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}>
            코코의 차별화된 FOLLOW 수업을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCards.map((card) => (
            <a href={card.link} key={card.id} target="_blank" rel="noopener noreferrer">
              <div
                className="group cursor-pointer rounded-3xl p-8 text-center card-hover"
                style={glassCard}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${card.accent}18`, border: `1px solid ${card.accent}40` }}
                >
                  <card.icon className="h-8 w-8" style={{ color: card.accent }} />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {card.title}
                </h3>

                <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {card.description}
                </p>

                <div className="flex items-center justify-center gap-2" style={{ color: card.accent }}>
                  <span className="text-sm font-medium">자세히 보기</span>
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
