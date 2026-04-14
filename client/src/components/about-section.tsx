import { GraduationCap, Laptop, Trophy } from "lucide-react";
import aboutImg from "@assets/제목 없는 디자인 (2).png";

const steps = [
  { letter: 'F', label: 'Focus (집중)', desc: '대상의 본질을 파악하고 구조적 이해 능력을 체계적으로 향상', color: '#6EC9A3' },
  { letter: 'O', label: 'Observe (관찰)', desc: '개인만의 독창적인 시각으로 대상을 재해석하는 관점을 학습', color: '#00CFCC' },
  { letter: 'L', label: 'Lead (학습 유도)', desc: '논리적인 구성과 기법을 통해 아이디어를 완성도 있게 구현', color: '#6EC9A3' },
  { letter: 'W', label: 'Win (발전)', desc: '작품의 객관적 평가, 지속적으로 개선하는 실력을 향상', color: '#00CFCC' },
];

const cards = [
  {
    icon: GraduationCap,
    title: '개인 성향별 맞춤 지도',
    desc: 'MBTI 성향별 개인 커리큘럼으로\n강점과 특성을 파악하여\n1:1 최적화된 수업을 제공합니다.',
    color: '#6EC9A3',
  },
  {
    icon: Laptop,
    title: '디지털 프로세스 폴리오',
    desc: '디지털 프로그램을 활용하여,\n목표대학에서 그림 스타일까지,\n개인별 빅데이터를 제공합니다.',
    color: '#00CFCC',
  },
  {
    icon: Trophy,
    title: '검증된 합격',
    desc: '주요 미대 입시의 높은 합격률과,\n실기대회 수상을 자랑하는,\n체계적인 입시 전략을 제공합니다.',
    color: '#52AE8A',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-4">학원소개</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            왜 코코미술학원이 다를까요?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem' }}>
            사고력 향상 'FOLLOW' 시스템을 통한 코코만의 특별한 커리큘럼, 합격까지 올인원
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src={aboutImg}
              alt="코코미술학원 학생들"
              className="w-full"
              style={{ borderRadius: '20px', boxShadow: 'var(--el-3)' }}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-heading)' }}>
              FOLLOW 시스템 &amp; 4단계 사고체계
            </h3>
            <div className="space-y-5">
              {steps.map(({ letter, label, desc, color }) => (
                <div key={letter} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-black text-base flex-shrink-0 text-white"
                    style={{
                      background: color,
                      boxShadow: `0 4px 12px ${color}55`,
                      minWidth: '2.75rem',
                    }}
                  >
                    {letter}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{label}</h4>
                    <p style={{ color: 'var(--text-body)', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 특징 카드 3종 */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="ui-card p-8 text-center flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}35`,
                }}
              >
                <Icon className="h-7 w-7" style={{ color }} />
              </div>
              <h4 className="text-base font-bold mb-3" style={{ color: 'var(--text-heading)' }}>
                {title}
              </h4>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-body)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
