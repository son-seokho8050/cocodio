import { GraduationCap, Laptop, Trophy, ArrowUpRight } from "lucide-react";
import aboutImg from "@assets/제목 없는 디자인 (2).png";

const steps = [
  { letter: 'F', label: 'Focus (집중)', desc: '대상의 본질을 파악하고 구조적 이해 능력을 체계적으로 향상', color: '#1A1A1A' },
  { letter: 'O', label: 'Observe (관찰)', desc: '개인만의 독창적인 시각으로 대상을 재해석하는 관점을 학습', color: '#C77965' },
  { letter: 'L', label: 'Lead (학습 유도)', desc: '논리적인 구성과 기법을 통해 아이디어를 완성도 있게 구현', color: '#1A1A1A' },
  { letter: 'W', label: 'Win (발전)', desc: '작품의 객관적 평가, 지속적으로 개선하는 실력을 향상', color: '#C77965' },
];

const cards = [
  {
    icon: GraduationCap,
    title: '개인 성향별 맞춤 지도',
    desc: 'MBTI 성향별 개인 커리큘럼으로\n강점과 특성을 파악하여\n1:1 최적화된 수업을 제공합니다.',
    variant: 'frost' as const,
  },
  {
    icon: Laptop,
    title: '디지털 프로세스 폴리오',
    desc: '디지털 프로그램을 활용하여,\n목표대학에서 그림 스타일까지,\n개인별 빅데이터를 제공합니다.',
    variant: 'ink' as const,
  },
  {
    icon: Trophy,
    title: '검증된 합격',
    desc: '주요 미대 입시의 높은 합격률과,\n실기대회 수상을 자랑하는,\n체계적인 입시 전략을 제공합니다.',
    variant: 'frost' as const,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="section-badge-coral mx-auto w-fit mb-4">학원소개</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-heading)' }}>
            왜 코코미술학원이 다를까요?
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem' }}>
            사고력 향상 'FOLLOW' 시스템을 통한 코코만의 특별한 커리큘럼, 합격까지 올인원
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative">
            <img
              src={aboutImg}
              alt="코코미술학원 학생들"
              className="w-full relative z-10"
              style={{ borderRadius: '24px', boxShadow: '0 24px 60px -12px rgba(199,121,101,0.30)' }}
            />
            {/* 코랄 액센트 배경 */}
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-3xl"
                 style={{ background: 'var(--color-coral-soft)', zIndex: 0 }} />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-3xl"
                 style={{ background: 'var(--color-coral)', opacity: 0.5, zIndex: 0 }} />

            {/* 작은 다크 카드 (오버레이) */}
            <div className="absolute -bottom-6 -left-6 ink-card p-5 z-20" style={{ maxWidth: '220px' }}>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Since 2010
              </div>
              <div className="text-lg font-bold leading-tight">
                15년 노하우의<br />사고력 미술
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-coral-deep)', fontWeight: 700 }}>
              FOLLOW System
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight" style={{ color: 'var(--text-heading)' }}>
              4단계 사고체계로<br />그림을 바꿉니다
            </h3>
            <div className="space-y-5">
              {steps.map(({ letter, label, desc, color }) => (
                <div key={letter} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-base flex-shrink-0 text-white"
                    style={{
                      background: color,
                      boxShadow: `0 6px 16px ${color}55`,
                      minWidth: '3rem',
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

        {/* 특징 카드 3종 — 다크/라이트 믹스 */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc, variant }, idx) => {
            const isInk = variant === 'ink';
            return (
              <div
                key={title}
                className={`${isInk ? 'ink-card' : 'glass-frost'} p-8 flex flex-col relative`}
                style={isInk ? { transform: 'translateY(-12px)' } : {}}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: isInk ? 'rgba(255,255,255,0.10)' : 'rgba(232,181,168,0.20)',
                      border: isInk ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(232,181,168,0.40)',
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                  </div>
                  <span className="text-xs font-mono opacity-50" style={{ color: isInk ? 'rgba(255,255,255,0.6)' : 'var(--text-subtle)' }}>
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: isInk ? '#FFFFFF' : 'var(--text-heading)' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed whitespace-pre-line mb-6 flex-1"
                   style={{ color: isInk ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}>
                  {desc}
                </p>
                <div className="flex items-center justify-between pt-4"
                     style={{ borderTop: isInk ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.06)' }}>
                  <span className="text-xs uppercase tracking-widest font-semibold"
                        style={{ color: isInk ? 'rgba(255,255,255,0.55)' : 'var(--text-subtle)' }}>
                    Learn more
                  </span>
                  <button className={`pill-arrow ${isInk ? '' : 'light'}`} style={{ width: 36, height: 36 }}>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
