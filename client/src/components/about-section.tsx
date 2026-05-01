import { GraduationCap, Laptop, Trophy } from "lucide-react";
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
    <section id="about" className="py-10 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 — 좌측 정렬, 미니멀 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="section-badge-coral w-fit mb-4">학원소개</div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]" style={{ color: '#ffffff' }}>
              Differentiation
            </h2>
          </div>
          <p className="lg:max-w-sm lg:text-right" style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.7 }}>
            사고력 향상 'FOLLOW' 시스템을 통한<br />
            코코만의 특별한 커리큘럼, 합격까지 올인원
          </p>
        </div>

        {/* === 무드보드 무브: 3카드 겹친 플로팅 컴포지션 === */}
        <div className="relative mb-10 sm:mb-14 lg:mb-32 lg:min-h-[560px]">

          {/* 좌측 큰 글래스 카드 — FOLLOW 시스템 */}
          <div
            className="glass-frost p-8 lg:pt-10 lg:px-10 lg:pb-28 lg:absolute lg:top-0 lg:left-0 lg:w-[60%] lg:z-10 mb-6 lg:mb-0"
            style={{ borderRadius: '28px' }}
          >
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-2" style={{ color: 'var(--color-coral-deep)' }}>
                  Coco Method
                </div>
                <h3 className="text-2xl lg:text-[2rem] font-bold tracking-tight leading-tight" style={{ color: 'var(--text-heading)' }}>
                  4단계 사고체계로<br />그림을 바꿉니다
                </h3>
              </div>
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full flex-shrink-0"
                   style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(199,121,101,0.25)' }}>
                <span className="text-xs font-bold tracking-wider" style={{ color: 'var(--color-coral-deep)' }}>FOLLOW</span>
              </div>
            </div>

            <div className="space-y-4 lg:pr-[10%]">
              {steps.map(({ letter, label, desc, color }) => (
                <div key={letter} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 text-white"
                    style={{ background: color, boxShadow: `0 6px 14px ${color}45` }}
                  >
                    {letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{label}</h4>
                    <p style={{ color: 'var(--text-body)', fontSize: '0.85rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 우측 톨 화이트 카드 — 학생 사진 + 디스플레이 텍스트 */}
          <div
            className="lg:absolute lg:top-24 lg:right-0 lg:w-[44%] lg:z-20 mb-6 lg:mb-0"
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              boxShadow: '0 30px 70px -20px rgba(199,121,101,0.35)',
              overflow: 'hidden',
            }}
          >
            <div className="px-7 pt-7 pb-4 flex items-start justify-between">
              <div>
                <div className="text-5xl lg:text-6xl font-bold leading-none tracking-tight" style={{ color: 'var(--text-heading)' }}>
                  15<span style={{ color: 'rgba(0,0,0,0.18)' }}>Y</span>
                </div>
                <div className="text-xs mt-2 font-medium" style={{ color: 'var(--text-subtle)' }}>15년 노하우</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Thinking</div>
                <div className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Art Method</div>
              </div>
            </div>
            <div className="px-7 pb-4">
              <img
                src={aboutImg}
                alt="코코미술학원 학생들"
                className="w-full"
                style={{ borderRadius: '18px', aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </div>
            <div className="px-7 pb-7">
              <div className="text-xs font-semibold tracking-wide" style={{ color: 'var(--text-heading)' }}>Coco Art Studio</div>
              <div className="text-[11px]" style={{ color: 'var(--text-subtle)' }}>Masan · Gimhae</div>
            </div>
          </div>

          {/* 작은 다크 레퍼런스 카드 — 글래스 카드 하단 패딩 영역에 자연스럽게 얹음 */}
          <div
            className="ink-card p-5 mt-6 lg:mt-0 lg:absolute lg:bottom-4 lg:left-10 lg:w-[280px] lg:z-30"
            style={{ borderRadius: '20px' }}
          >
            <div>
              <div className="text-2xl font-bold leading-tight">검증된 합격</div>
              <div className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>By Coco Academy</div>
            </div>
          </div>
        </div>

        {/* 특징 카드 3종 — 다크/라이트 믹스 (그리드 유지) */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc, variant }, idx) => {
            const isInk = variant === 'ink';
            return (
              <div
                key={title}
                className={`${isInk ? 'ink-card lg:-translate-y-3' : 'glass-frost'} p-8 flex flex-col relative`}
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
                <p className="text-sm leading-relaxed whitespace-pre-line flex-1"
                   style={{ color: isInk ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}>
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
