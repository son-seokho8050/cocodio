import { Trophy, Users, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Users,
    tag: "System",
    title: "FOLLOW 시스템",
    stats: ["개별 맞춤형 진도 관리", "체계적 사고력 훈련", "창의성과 논리적 사고 병행", "실전 중심 실기 연습", "지속적 피드백 시스템"],
  },
  {
    icon: Trophy,
    tag: "Interactive",
    title: "인터랙티브 웹 이론수업",
    stats: ["학생들이 직접적이고 능동적으로", "상호작용 가능한 인터랙티브", "웹 수업을 통해 이론을 실제 경험하는", "코코만의 이론수업"],
  },
  {
    icon: Target,
    tag: "Programs",
    title: "전문 과정 운영",
    stats: ["입시미술 (디자인/만화)", "웹툰·일러스트 전문반", "디지털 드로잉", "중등미술 기초반", "개별 포트폴리오 완성"],
  },
  {
    icon: Award,
    tag: "Track Record",
    title: "검증된 실기력",
    stats: ["마산/김해 지역 대표 학원", "검증된 합격 실적", "경험 많은 전문 강사진", "체계적 커리큘럼 운영", "학생 개별 성향 분석"],
  },
];

export default function AchievementsSection() {
  const main = achievements[0]; // FOLLOW 시스템 = 메인 피처
  const sats = achievements.slice(1);
  const MainIcon = main.icon;

  return (
    <section className="py-10 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">코코의 특별함</div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]" style={{ color: '#ffffff' }}>
              Specialness
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            단순한 입시 미술이 아닌, 사고하는 힘을 기르는 교육.<br />
            코코미술학원은 4가지 영역에서 차별화된 가치를 만듭니다.
          </p>
        </div>

        {/* === 비대칭 무드보드: 좌측 큰 다크 카드 + 우측 3개 작은 카드 === */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* 좌측 메인 다크 피처 카드 */}
          <div className="lg:col-span-7 ink-card p-6 sm:p-8 lg:p-11 flex flex-col" style={{ borderRadius: '28px' }}>
            <div className="flex items-start justify-between mb-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <MainIcon className="h-7 w-7" style={{ color: '#FFF' }} />
              </div>
              <div className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.40)' }}>/01</div>
            </div>

            <div className="text-[11px] uppercase tracking-[0.2em] mb-3 font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {main.tag}
            </div>
            <h3 className="text-3xl lg:text-5xl font-bold leading-[1.1] mb-8 tracking-tight" style={{ color: '#FFFFFF' }}>
              {main.title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-auto">
              {main.stats.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-coral)' }} />
                  <span className="leading-relaxed">{s}</span>
                </div>
              ))}
            </div>

          </div>

          {/* 우측 3개 작은 글래스 카드 스택 */}
          <div className="lg:col-span-5 grid gap-3 sm:gap-5">
            {sats.map(({ icon: Icon, tag, title, stats }, idx) => (
              <div key={title} className="glass-frost p-4 sm:p-6" style={{ borderRadius: '22px' }}>
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(232,181,168,0.20)', border: '1px solid rgba(232,181,168,0.40)' }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--color-coral-deep)' }} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono" style={{ color: 'var(--text-faint)' }}>/0{idx + 2}</span>
                </div>

                <div className="text-[10px] uppercase tracking-[0.18em] mb-1 sm:mb-1.5 font-semibold" style={{ color: 'var(--color-coral-deep)' }}>
                  {tag}
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-3 leading-tight" style={{ color: 'var(--text-heading)' }}>
                  {title}
                </h3>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  {stats.slice(0, 2).join(' · ')}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* === RESPECTFUL — 영감을 주는 디자이너 === */}
        <div className="mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] mb-3 font-semibold" style={{ color: 'var(--color-coral)' }}>
                Inspiration
              </div>
              <h3
                className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]"
                style={{ color: '#ffffff' }}
              >
                RESPECTFUL
              </h3>
            </div>
            <p
              className="lg:max-w-md lg:text-right"
              style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              코코가 존경하는 세계적 디자이너 6인을<br />
              직접 제작한 헌정 페이지로 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              {
                name: "DIETER RAMS",
                url: "https://cocodiolab-rams.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #faf6f2 0%, #e8ddd3 35%, #b8a99c 75%, #7a6a5c 100%)",
                glow: "rgba(184,169,156,0.35)",
              },
              {
                name: "ZAHA HADID",
                url: "https://cocodiolab-zaha.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #f8ece6 0%, #e2bfb3 35%, #a86a5e 75%, #5a2f2a 100%)",
                glow: "rgba(168,106,94,0.35)",
              },
              {
                name: "JEAN NOUVEL",
                url: "https://cocodiolab-nouvel.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #f1ede5 0%, #c9c3b0 35%, #7e7a66 75%, #3d3a2e 100%)",
                glow: "rgba(126,122,102,0.35)",
              },
              {
                name: "JONY IVE",
                url: "https://cocodio-ive.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #fbf6f0 0%, #ecd9c8 35%, #c69a82 75%, #6b4538 100%)",
                glow: "rgba(198,154,130,0.35)",
              },
              {
                name: "KARIM RASHID",
                url: "https://cocodiolab-karim.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #f9eef0 0%, #e4c3c8 35%, #a86d77 75%, #4d2730 100%)",
                glow: "rgba(168,109,119,0.35)",
              },
              {
                name: "CHRIS BANGLE",
                url: "https://cocodiolab-bangle.netlify.app/",
                gradient:
                  "radial-gradient(circle at 35% 32%, #ede9e6 0%, #b8b1ad 35%, #6a615c 75%, #2a2522 100%)",
                glow: "rgba(106,97,92,0.35)",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
                data-testid={`link-designer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: item.gradient,
                    boxShadow: `0 8px 22px ${item.glow}, inset 0 -3px 8px rgba(0,0,0,0.12), inset 0 3px 7px rgba(255,255,255,0.40)`,
                  }}
                />
                <span
                  className="text-[10px] lg:text-xs font-bold tracking-[0.15em] text-center transition-colors"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
