import { ArrowUpRight, Users, Trophy, Star } from "lucide-react";

const portfolioCards = [
  { id: 1, title: "디자인/ 만화 FOLLOW", description: "디자인/ 만화/ 디지털드로잉 학생들의 작업 과정과 합격 후기를 담은 마산점 메인 블로그입니다.", icon: Users, link: "https://blog.naver.com/coco2238050", label: "Naver Blog · 마산점" },
  { id: 2, title: "중등미술 FOLLOW", description: "입체/ 평면, 중등특화수업 김해점의 중등미술 전문 채널.", icon: Trophy, link: "https://blog.naver.com/cocodioart", label: "Naver Blog · 김해점" },
  { id: 3, title: "인스타그램 FOLLOW", description: "학생들의 성장과정, 생생하게 일상에서 만나보세요.", icon: Star, link: "https://www.instagram.com/cocodio_design_ani", label: "Instagram" },
];

export default function PortfolioSection() {
  const feature = portfolioCards[0];
  const small = portfolioCards.slice(1);
  const Small0Icon = small[0].icon;
  const Small1Icon = small[1].icon;

  return (
    <section id="portfolio" className="py-10 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">FOLLOW 시스템</div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]" style={{ color: '#ffffff' }}>
              COCODIO ALL<br />IN-ONE SYSTEM
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            코코의 차별화된 FOLLOW 수업을 직접 경험해 보세요.
          </p>
        </div>

        {/* === 무드보드: 1 톨 피처 카드 + 2 작은 카드 비대칭 === */}
        <div className="relative lg:min-h-[520px]">

          {/* 좌측 톨 화이트 피처 카드 */}
          <a
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block lg:absolute lg:top-0 lg:left-0 lg:w-[55%] lg:z-10 mb-6 lg:mb-0 group"
          >
            <div
              className="p-5 sm:p-8 lg:p-11 flex flex-col h-full lg:min-h-[480px]"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                boxShadow: '0 30px 70px -20px rgba(199,121,101,0.30)',
              }}
            >
              <div className="flex items-start justify-between mb-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(232,181,168,0.20)', border: '1px solid rgba(232,181,168,0.40)' }}
                >
                  <feature.icon className="h-7 w-7" style={{ color: 'var(--color-coral-deep)' }} />
                </div>
                <div className="text-[11px] uppercase tracking-widest font-mono" style={{ color: 'var(--text-subtle)' }}>
                  /01
                </div>
              </div>

              <div className="text-[11px] uppercase tracking-[0.2em] mb-3 font-semibold" style={{ color: 'var(--color-coral-deep)' }}>
                {feature.label}
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold leading-[1.1] mb-5 tracking-tight" style={{ color: 'var(--text-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed mb-auto max-w-md" style={{ color: 'var(--text-body)' }}>
                {feature.description}
              </p>

              <div className="flex items-end justify-between mt-10 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div>
                  <div className="text-xs font-semibold tracking-wide" style={{ color: 'var(--text-heading)' }}>blog.naver.com</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-subtle)' }}>/coco2238050</div>
                </div>
                <button className="pill-arrow-wide" style={{ background: '#1A1A1A', color: '#FFF' }}>
                  <span className="text-xs font-semibold">Visit</span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#FFF' }}>
                    <ArrowUpRight className="h-3.5 w-3.5" style={{ color: '#1A1A1A' }} />
                  </span>
                </button>
              </div>
            </div>
          </a>

          {/* 우측 상단: 다크 카드 */}
          <a
            href={small[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block lg:absolute lg:top-8 lg:right-0 lg:w-[42%] lg:z-20 mb-6 lg:mb-0"
          >
            <div className="ink-card p-7 lg:p-8" style={{ borderRadius: '24px' }}>
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Small0Icon className="h-6 w-6" style={{ color: '#FFF' }} />
                </div>
                <button className="pill-arrow" style={{ width: 36, height: 36 }}>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {small[0].label}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight" style={{ color: '#FFFFFF' }}>
                {small[0].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {small[0].description}
              </p>
            </div>
          </a>

          {/* 우측 하단: 글래스 카드 */}
          <a
            href={small[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-12 lg:w-[38%] lg:z-30"
          >
            <div className="glass-frost p-7" style={{ borderRadius: '22px' }}>
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(232,181,168,0.20)', border: '1px solid rgba(232,181,168,0.40)' }}
                >
                  <Small1Icon className="h-5 w-5" style={{ color: 'var(--color-coral-deep)' }} />
                </div>
                <button className="pill-arrow light" style={{ width: 34, height: 34 }}>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: 'var(--color-coral-deep)' }}>
                {small[1].label}
              </div>
              <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: 'var(--text-heading)' }}>
                {small[1].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {small[1].description}
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
