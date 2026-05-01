import { Trophy, Users, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    tag: "Interactive",
    title: "인터랙티브 웹 이론수업",
    stats: ["학생들이 직접적이고 능동적으로", "상호작용 가능한 인터랙티브", "웹 수업을 통해 이론을 실제 경험하는", "코코만의 이론수업"],
  },
  {
    icon: Users,
    tag: "System",
    title: "FOLLOW 시스템",
    stats: ["개별 맞춤형 진도 관리", "체계적 사고력 훈련", "창의성과 논리적 사고 병행", "실전 중심 실기 연습", "지속적 피드백 시스템"],
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
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">코코의 특별함</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--text-heading)' }}>
              코코만의<br />특별한 교육
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            단순한 입시 미술이 아닌, 사고하는 힘을 기르는 교육.<br />
            코코미술학원은 4가지 영역에서 차별화된 가치를 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ icon: Icon, tag, title, stats }, idx) => {
            const isInk = idx === 1; // 두번째 카드 = 다크 강조
            return (
              <div
                key={title}
                className={`${isInk ? 'ink-card' : 'glass-frost'} p-7 relative`}
                style={isInk ? { transform: 'translateY(-16px)' } : {}}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isInk ? 'rgba(255,255,255,0.10)' : 'rgba(232,181,168,0.20)',
                      border: isInk ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(232,181,168,0.40)',
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                  </div>
                  <span className="text-xs font-mono"
                        style={{ color: isInk ? 'rgba(255,255,255,0.40)' : 'var(--text-faint)' }}>
                    /0{idx + 1}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-widest mb-2 font-semibold"
                     style={{ color: isInk ? 'rgba(255,255,255,0.55)' : 'var(--color-coral-deep)' }}>
                  {tag}
                </div>
                <h3 className="text-lg font-bold mb-5 leading-tight"
                    style={{ color: isInk ? '#FFFFFF' : 'var(--text-heading)' }}>
                  {title}
                </h3>

                <ul className="space-y-2">
                  {stats.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed"
                        style={{ color: isInk ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: isInk ? 'rgba(255,255,255,0.55)' : 'var(--color-coral-deep)' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
