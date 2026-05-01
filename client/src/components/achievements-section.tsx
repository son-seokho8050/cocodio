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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">코코의 특별함</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]" style={{ color: '#ffffff' }}>
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
          <div className="lg:col-span-7 ink-card p-9 lg:p-11 flex flex-col" style={{ borderRadius: '28px' }}>
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
          <div className="lg:col-span-5 grid gap-5">
            {sats.map(({ icon: Icon, tag, title, stats }, idx) => (
              <div key={title} className="glass-frost p-6" style={{ borderRadius: '22px' }}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(232,181,168,0.20)', border: '1px solid rgba(232,181,168,0.40)' }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--color-coral-deep)' }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>/0{idx + 2}</span>
                </div>

                <div className="text-[10px] uppercase tracking-[0.18em] mb-1.5 font-semibold" style={{ color: 'var(--color-coral-deep)' }}>
                  {tag}
                </div>
                <h3 className="text-base font-bold mb-3 leading-tight" style={{ color: 'var(--text-heading)' }}>
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
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #e8ecef 22%, #9aa4ad 58%, #2f3640 100%)",
                glow: "rgba(154,164,173,0.45)",
              },
              {
                name: "ZAHA HADID",
                url: "https://cocodiolab-zaha.netlify.app/",
                gradient:
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #f5cdd6 20%, #c8366f 58%, #4a0d28 100%)",
                glow: "rgba(200,54,111,0.50)",
              },
              {
                name: "JEAN NOUVEL",
                url: "https://cocodiolab-nouvel.netlify.app/",
                gradient:
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #c9d8d2 20%, #2f6b5e 58%, #0c2620 100%)",
                glow: "rgba(47,107,94,0.45)",
              },
              {
                name: "JONY IVE",
                url: "https://cocodio-ive.netlify.app/",
                gradient:
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #fbecd9 22%, #d4a574 58%, #6b4423 100%)",
                glow: "rgba(212,165,116,0.50)",
              },
              {
                name: "KARIM RASHID",
                url: "https://cocodiolab-karim.netlify.app/",
                gradient:
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #f5d0e8 20%, #d63384 58%, #5a0e3a 100%)",
                glow: "rgba(214,51,132,0.55)",
              },
              {
                name: "CHRIS BANGLE",
                url: "https://cocodiolab-bangle.netlify.app/",
                gradient:
                  "radial-gradient(circle at 32% 30%, #ffffff 0%, #c8d6e8 20%, #2c5fa3 58%, #0a1d3d 100%)",
                glow: "rgba(44,95,163,0.50)",
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
                    boxShadow: `0 10px 28px ${item.glow}, inset 0 -6px 12px rgba(0,0,0,0.25), inset 0 4px 10px rgba(255,255,255,0.55)`,
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
