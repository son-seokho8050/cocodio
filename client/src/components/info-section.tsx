import { CreditCard, Bus, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function InfoSection() {
  return (
    <section id="info" className="py-10 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="section-badge-coral mx-auto w-fit mb-4">안내</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight" style={{ color: '#ffffff' }}>
            Information
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem' }}>
            코코미술학원 교습비 및 차량운행 안내
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* 교습비 — 라이트 글래스 */}
          <div className="glass-frost p-8 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div
                className="p-3 rounded-2xl"
                style={{ background: 'rgba(232,181,168,0.20)', border: '1px solid rgba(232,181,168,0.40)' }}
              >
                <CreditCard className="h-6 w-6" style={{ color: 'var(--color-coral-deep)' }} />
              </div>
              <span className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>/01</span>
            </div>

            <div className="text-xs uppercase tracking-widest mb-2 font-semibold"
                 style={{ color: 'var(--color-coral-deep)' }}>
              Tuition
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>
              교습비 안내
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>

            <div className="space-y-2 mb-7">
              {['개인별 맞춤형 커리큘럼', '소수정예 클래스 운영', '상담을 통한 맞춤 안내'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-body)' }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--color-coral-deep)' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href="/info/tuition">
                <button className="pill-arrow-wide w-full justify-between">
                  <span>마산코코</span>
                  <span className="arrow-circle"><ArrowUpRight className="h-3.5 w-3.5" /></span>
                </button>
              </Link>
              <Link href="/info/tuition/gimhae">
                <button
                  className="w-full py-3 px-5 rounded-full text-sm font-semibold transition-all flex items-center justify-between gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    color: 'var(--color-ink)',
                  }}
                >
                  <span>김해코코</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* 차량운행 — 다크 카드 */}
          <div className="ink-card p-8 flex flex-col lg:translate-y-3">
            <div className="flex items-start justify-between mb-6">
              <div
                className="p-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Bus className="h-6 w-6" style={{ color: '#FFFFFF' }} />
              </div>
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.40)' }}>/02</span>
            </div>

            <div className="text-xs uppercase tracking-widest mb-2 font-semibold"
                 style={{ color: 'rgba(255,255,255,0.55)' }}>
              Transport
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
              안전귀가 차량운행
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>

            <div className="space-y-2 mb-7">
              {['마산전, 함안전 지역 운행', '안전한 등하원 서비스', '학부모 안심 서비스'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#FFFFFF' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <Link href="/info/transport">
                <button
                  className="w-full py-3 px-6 rounded-full text-sm font-semibold transition-all flex items-center justify-between gap-2"
                  style={{
                    background: '#FFFFFF',
                    color: 'var(--color-ink)',
                  }}
                >
                  <span>마산코코 차량운행 보기</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.06)' }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
