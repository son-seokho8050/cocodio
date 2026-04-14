import { GraduationCap, Laptop, Trophy } from "lucide-react";
import ___________2_ from "@assets/제목 없는 디자인 (2).png";

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
} as const;

const steps = [
  { letter: 'F', label: 'Focus (집중)', desc: '대상의 본질을 파악하고 구조적 이해 능력을 체계적으로 향상', color: '#A78BFA' },
  { letter: 'O', label: 'Observe (관찰)', desc: '개인만의 독창적인 시각으로 대상을 재해석하는 관점을 학습', color: '#06B6D4' },
  { letter: 'L', label: 'Lead (학습 유도)', desc: '논리적인 구성과 기법을 통해 아이디어를 완성도 있게 구현', color: '#A78BFA' },
  { letter: 'W', label: 'Win (발전)', desc: '작품의 객관적 평가, 지속적으로 개선하는 실력을 향상', color: '#06B6D4' },
];

const cards = [
  {
    icon: GraduationCap,
    title: '개인 성향별 맞춤 지도',
    desc: 'MBTI 성향별 개인 커리큘럼으로\n강점과 특성을 파악하여\n1:1 최적화된 수업을 제공합니다.',
    accent: '#A78BFA',
  },
  {
    icon: Laptop,
    title: '디지털 프로세스 폴리오',
    desc: '디지털 프로그램을 활용하여,\n목표대학에서 그림 스타일까지,\n개인별 빅데이터를 제공합니다.',
    accent: '#06B6D4',
  },
  {
    icon: Trophy,
    title: '검증된 합격',
    desc: '주요 미대 입시의 높은 합격률과,\n실기대회 수상을 자랑하는,\n체계적인 입시 전략을 제공합니다.',
    accent: '#A78BFA',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>
            왜{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              코코미술학원
            </span>
            이 다를까요?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>
            사고력 향상 'FOLLOW' 시스템을 통한 코코만의 특별한 커리큘럼, 합격까지 올인원
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src={___________2_}
              alt="Students collaborating on art projects"
              className="rounded-3xl w-full"
              style={{ boxShadow: '0 0 60px rgba(139,92,246,0.2)' }}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              FOLLOW 시스템 & 4단계 사고체계
            </h3>
            <div className="space-y-5">
              {steps.map(({ letter, label, desc, color }) => (
                <div key={letter} className="flex items-start space-x-4">
                  <div
                    className="rounded-full w-12 h-12 flex items-center justify-center font-black text-lg flex-shrink-0"
                    style={{ background: `${color}22`, border: `1px solid ${color}55`, color }}
                  >
                    {letter}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>{label}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="rounded-3xl p-8 text-center card-hover"
              style={glassCard}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
              >
                <Icon className="h-8 w-8" style={{ color: accent }} />
              </div>
              <h4 className="text-xl font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>{title}</h4>
              <p className="leading-relaxed text-sm whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
