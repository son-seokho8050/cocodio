import { Trophy, Users, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "인터랙티브 웹 이론수업",
    stats: ["학생들이 직접적이고 능동적으로", "상호작용 가능한 인터랙티브", "웹 수업을 통해 이론을 실제 경험하는", "코코만의 이론수업"],
    color: '#6EC9A3',
  },
  {
    icon: Users,
    title: "FOLLOW 시스템",
    stats: ["개별 맞춤형 진도 관리", "체계적 사고력 훈련", "창의성과 논리적 사고 병행", "실전 중심 실기 연습", "지속적 피드백 시스템"],
    color: '#00CFCC',
  },
  {
    icon: Target,
    title: "전문 과정 운영",
    stats: ["입시미술 (디자인/만화)", "웹툰·일러스트 전문반", "디지털 드로잉", "중등미술 기초반", "개별 포트폴리오 완성"],
    color: '#52AE8A',
  },
  {
    icon: Award,
    title: "검증된 실기력",
    stats: ["마산/김해 지역 대표 학원", "검증된 합격 실적", "경험 많은 전문 강사진", "체계적 커리큘럼 운영", "학생 개별 성향 분석"],
    color: '#A4DECA',
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-24" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-4">코코의 특별함</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            코코만의 특별한 교육
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ icon: Icon, title, stats, color }) => (
            <div key={title} className="ui-card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}35`,
                }}
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </div>
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--text-heading)' }}>{title}</h3>
              <ul className="space-y-1.5">
                {stats.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-body)' }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
