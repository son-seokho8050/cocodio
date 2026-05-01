import { Star, User, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "FOLLOW 시스템 덕분에 아이가 단순히 그림을 따라 그리는 것이 아니라 스스로 생각하고 창의적으로 표현하는 능력이 눈에 띄게 향상됐어요. 실기대회에서도 좋은 결과를 얻었습니다.",
    name: "김○○ 학부모",
    role: "입시미술반 학부모 (한양대 실기대회 수상)",
  },
  {
    id: 2,
    content: "처음에는 그림에 자신이 없었는데, 코코의 체계적인 지도로 웹툰과 일러스트에 흥미를 갖게 되었고 실력도 많이 늘었어요. 관점이 실력이라는 말이 정말 맞는 것 같습니다!",
    name: "박○○ 학생",
    role: "웹툰·일러스트반 (고2)",
  },
  {
    id: 3,
    content: "마산에서 이렇게 체계적인 미술 교육을 받을 수 있어서 놀랐습니다. 개별 맞춤 지도와 사고력 중심 수업으로 아이의 실력이 확실히 달라졌어요.",
    name: "이○○ 학부모",
    role: "중등미술반 학부모",
  }
];

export default function TestimonialsSection() {
  const featured = testimonials[1]; // 학생 후기를 메인 피처로
  const sub = [testimonials[0], testimonials[2]];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">수강생 후기</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]" style={{ color: '#ffffff', textShadow: '0 2px 14px rgba(60,30,40,0.45), 0 1px 2px rgba(0,0,0,0.25)' }}>
              Real Voices
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            실제 수강생들의 생생한 경험담을 들어보세요.
          </p>
        </div>

        {/* === 무드보드: 메인 큰 다크 카드 + 작은 글래스 카드 2개 === */}
        <div className="relative lg:min-h-[560px]">

          {/* 좌측 톨 다크 피처 카드 — 학생 후기 */}
          <div
            className="ink-card p-9 lg:p-11 lg:absolute lg:top-0 lg:left-0 lg:w-[58%] lg:z-10 mb-6 lg:mb-0"
            style={{ borderRadius: '28px', minHeight: '440px' }}
          >
            <div className="flex items-start justify-between mb-8">
              <Quote className="h-12 w-12" style={{ color: 'rgba(255,255,255,0.20)', transform: 'scaleX(-1)' }} />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#F5DDD4' }} />
                ))}
              </div>
            </div>

            <p className="text-lg lg:text-xl leading-relaxed mb-10 font-medium" style={{ color: 'rgba(255,255,255,0.92)' }}>
              "{featured.content}"
            </p>

            <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <User className="h-5 w-5" style={{ color: '#FFF' }} />
                </div>
                <div>
                  <div className="font-semibold text-base">{featured.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{featured.role}</div>
                </div>
              </div>
              <button className="pill-arrow" aria-label="더 읽기">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 우측 상단: 첫번째 학부모 후기 — 글래스 */}
          <div
            className="glass-frost p-7 lg:absolute lg:top-12 lg:right-0 lg:w-[44%] lg:z-20 mb-6 lg:mb-0"
            style={{ borderRadius: '24px' }}
          >
            <div className="flex items-start justify-between mb-5">
              <Quote className="h-7 w-7" style={{ color: 'var(--color-coral)', transform: 'scaleX(-1)' }} />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" style={{ color: '#E8B5A8' }} />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
              "{sub[0].content}"
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(232,181,168,0.25)', border: '1px solid rgba(232,181,168,0.40)' }}
              >
                <User className="h-4 w-4" style={{ color: 'var(--color-coral-deep)' }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--text-heading)' }}>{sub[0].name}</div>
                <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-subtle)' }}>{sub[0].role}</div>
              </div>
            </div>
          </div>

          {/* 우측 하단: 두번째 학부모 후기 — 화이트 작은 카드 */}
          <div
            className="lg:absolute lg:bottom-0 lg:right-16 lg:w-[40%] lg:z-30"
            style={{
              background: '#FFFFFF',
              borderRadius: '22px',
              padding: '1.5rem',
              boxShadow: '0 24px 60px -16px rgba(199,121,101,0.30)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--color-coral-deep)' }}>
                중등미술반
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" style={{ color: '#E8B5A8' }} />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
              "{sub[1].content}"
            </p>
            <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="text-xs font-semibold" style={{ color: 'var(--text-heading)' }}>{sub[1].name}</div>
              <button className="pill-arrow light" style={{ width: 30, height: 30 }}>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
