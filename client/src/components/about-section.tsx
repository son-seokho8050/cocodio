import { GraduationCap, Laptop, Trophy } from "lucide-react";
import ___________2_ from "@assets/제목 없는 디자인 (2).png";

const steps = [
  { letter: 'F', label: 'Focus (집중)', desc: '대상의 본질을 파악하고 구조적 이해 능력을 체계적으로 향상', color: '#8B5CF6' },
  { letter: 'O', label: 'Observe (관찰)', desc: '개인만의 독창적인 시각으로 대상을 재해석하는 관점을 학습', color: '#06B6D4' },
  { letter: 'L', label: 'Lead (학습 유도)', desc: '논리적인 구성과 기법을 통해 아이디어를 완성도 있게 구현', color: '#8B5CF6' },
  { letter: 'W', label: 'Win (발전)', desc: '작품의 객관적 평가, 지속적으로 개선하는 실력을 향상', color: '#06B6D4' },
];

const cards = [
  {
    icon: GraduationCap,
    title: '개인 성향별 맞춤 지도',
    desc: 'MBTI 성향별 개인 커리큘럼으로\n강점과 특성을 파악하여\n1:1 최적화된 수업을 제공합니다.',
    color: '#8B5CF6',
    iconBg: 'rgba(139,92,246,0.18)',
    iconBorder: 'rgba(139,92,246,0.35)',
  },
  {
    icon: Laptop,
    title: '디지털 프로세스 폴리오',
    desc: '디지털 프로그램을 활용하여,\n목표대학에서 그림 스타일까지,\n개인별 빅데이터를 제공합니다.',
    color: '#06B6D4',
    iconBg: 'rgba(6,182,212,0.16)',
    iconBorder: 'rgba(6,182,212,0.32)',
  },
  {
    icon: Trophy,
    title: '검증된 합격',
    desc: '주요 미대 입시의 높은 합격률과,\n실기대회 수상을 자랑하는,\n체계적인 입시 전략을 제공합니다.',
    color: '#EC4899',
    iconBg: 'rgba(236,72,153,0.15)',
    iconBorder: 'rgba(236,72,153,0.30)',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1A1A2E' }}>
            왜 코코미술학원이 다를까요?
          </h2>
          <p style={{ color: '#8888A8', fontSize: '1.1rem' }}>
            사고력 향상 'FOLLOW' 시스템을 통한 코코만의 특별한 커리큘럼, 합격까지 올인원
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src={___________2_}
              alt="Students collaborating"
              className="rounded-3xl w-full"
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.30)' }}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#1A1A2E' }}>
              FOLLOW 시스템 &amp; 4단계 사고체계
            </h3>
            <div className="space-y-5">
              {steps.map(({ letter, label, desc, color }) => (
                <div key={letter} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0 text-white"
                    style={{
                      background: `linear-gradient(180deg, ${color}DD 0%, ${color} 100%)`,
                      boxShadow: `0 6px 0 ${color}66, 0 10px 24px ${color}55`,
                      minWidth: '3rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {letter}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#1A1A2E' }}>{label}</h4>
                    <p style={{ color: '#8888A8', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 흰 frosted glass 카드 3종 — 레퍼런스 정확 구현 */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, desc, color, iconBg, iconBorder }) => (
            <div key={title} className="glass-card p-9 text-center flex flex-col items-center">

              {/* 아이콘 박스 — 파스텔 컬러, 흰 카드 위에서 색상 돋보임 */}
              <div
                className="icon-box mb-6"
                style={{
                  background: iconBg,
                  border: `1px solid ${iconBorder}`,
                  boxShadow: `0 4px 16px ${color}22, inset 0 1px 0 rgba(255,255,255,0.60)`,
                }}
              >
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    borderRadius: 'inherit',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0) 55%)',
                    pointerEvents: 'none',
                  }}
                />
                <Icon
                  className="h-8 w-8"
                  style={{ color, filter: `drop-shadow(0 2px 6px ${color}55)`, position: 'relative', zIndex: 2 }}
                />
              </div>

              {/* 타이틀 — 다크 네이비 (흰 카드 위) */}
              <h4
                className="text-lg font-bold mb-3 leading-snug"
                style={{ color: 'rgba(10,10,30,0.90)' }}
              >
                {title}
              </h4>

              {/* 본문 — 어두운 회색 */}
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: 'rgba(10,10,30,0.58)' }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
