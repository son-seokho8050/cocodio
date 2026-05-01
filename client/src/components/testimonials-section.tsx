import { Star, User, Quote } from "lucide-react";

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
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">수강생 후기</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--text-heading)' }}>
              학부모 &amp; 학생<br />후기
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            실제 수강생들의 생생한 경험담을 들어보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => {
            const isInk = idx === 1;
            return (
              <div
                key={t.id}
                className={`${isInk ? 'ink-card' : 'glass-frost'} p-8 relative flex flex-col`}
                style={isInk ? { transform: 'translateY(-16px)' } : {}}
              >
                <div className="flex items-start justify-between mb-5">
                  <Quote
                    className="h-8 w-8"
                    style={{
                      color: isInk ? 'rgba(255,255,255,0.30)' : 'var(--color-coral)',
                      transform: 'scaleX(-1)',
                    }}
                  />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current"
                            style={{ color: isInk ? '#F5DDD4' : '#E8B5A8' }} />
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-7 flex-1"
                   style={{ color: isInk ? 'rgba(255,255,255,0.85)' : 'var(--text-body)' }}>
                  {t.content}
                </p>

                <div className="flex items-center gap-3 pt-5"
                     style={{ borderTop: isInk ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.06)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isInk ? 'rgba(255,255,255,0.10)' : 'rgba(232,181,168,0.25)',
                      border: isInk ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(232,181,168,0.40)',
                    }}
                  >
                    <User className="h-5 w-5" style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm"
                         style={{ color: isInk ? '#FFFFFF' : 'var(--text-heading)' }}>
                      {t.name}
                    </div>
                    <div className="text-xs mt-0.5"
                         style={{ color: isInk ? 'rgba(255,255,255,0.55)' : 'var(--text-subtle)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
