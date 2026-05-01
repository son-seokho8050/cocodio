import { Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "FOLLOW 시스템 덕분에 아이가 단순히 그림을 따라 그리는 것이 아니라 스스로 생각하고 창의적으로 표현하는 능력이 눈에 띄게 향상됐어요. 실기대회에서도 좋은 결과를 얻었습니다.",
    name: "김○○ 학부모",
    role: "입시미술반 학부모 (한양대 실기대회 수상)",
    color: '#6EC9A3',
  },
  {
    id: 2,
    content: "처음에는 그림에 자신이 없었는데, 코코의 체계적인 지도로 웹툰과 일러스트에 흥미를 갖게 되었고 실력도 많이 늘었어요. 관점이 실력이라는 말이 정말 맞는 것 같습니다!",
    name: "박○○ 학생",
    role: "웹툰·일러스트반 (고2)",
    color: '#00CFCC',
  },
  {
    id: 3,
    content: "마산에서 이렇게 체계적인 미술 교육을 받을 수 있어서 놀랐습니다. 개별 맞춤 지도와 사고력 중심 수업으로 아이의 실력이 확실히 달라졌어요.",
    name: "이○○ 학부모",
    role: "중등미술반 학부모",
    color: '#52AE8A',
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(24px) saturate(1.4)', WebkitBackdropFilter: 'blur(24px) saturate(1.4)', borderTop: '1px solid rgba(255,255,255,0.55)', borderBottom: '1px solid rgba(255,255,255,0.55)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-4">수강생 후기</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            학부모 &amp; 학생 후기
          </h2>
          <p style={{ color: 'var(--text-body)' }}>실제 수강생들의 생생한 경험담을 들어보세요.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="ui-card p-7">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#F59E0B' }} />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${t.color}18`,
                    border: `1px solid ${t.color}35`,
                  }}
                >
                  <User className="h-5 w-5" style={{ color: t.color }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-heading)' }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
