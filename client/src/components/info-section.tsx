import { CreditCard, Bus } from "lucide-react";
import { Link } from "wouter";

export default function InfoSection() {
  return (
    <section id="info" className="py-24" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="section-badge mx-auto w-fit mb-4">안내</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
            안내
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem' }}>
            코코미술학원 교습비 및 차량운행 안내
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 교습비 */}
          <div className="ui-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(110,201,163,0.15)', border: '1px solid rgba(110,201,163,0.30)' }}
              >
                <CreditCard className="h-6 w-6" style={{ color: 'var(--color-primary-dark)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-heading)' }}>교습비 안내</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>

            <div className="space-y-2 mb-7">
              {['개인별 맞춤형 커리큘럼', '소수정예 클래스 운영', '상담을 통한 맞춤 안내'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-body)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-primary)' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/info/tuition">
                <button className="btn-primary w-full py-3 text-sm">
                  마산코코
                </button>
              </Link>
              <Link href="/info/tuition/gimhae">
                <button className="btn-secondary w-full py-3 text-sm">
                  김해코코
                </button>
              </Link>
            </div>
          </div>

          {/* 차량운행 */}
          <div className="ui-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(0,207,204,0.12)', border: '1px solid rgba(0,207,204,0.25)' }}
              >
                <Bus className="h-6 w-6" style={{ color: '#00AEAB' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-heading)' }}>안전귀가 차량운행</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>

            <div className="space-y-2 mb-7">
              {['마산전, 함안전 지역 운행', '안전한 등하원 서비스', '학부모 안심 서비스'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-body)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00CFCC' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/info/transport">
                <button className="btn-primary px-10 py-3 text-sm">
                  마산코코
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
