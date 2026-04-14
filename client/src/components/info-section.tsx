import { CreditCard, Bus } from "lucide-react";
import { Link } from "wouter";

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
} as const;

export default function InfoSection() {
  return (
    <section id="info" className="py-20" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              안내
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem' }}>
            코코미술학원 교습비 및 차량운행 안내
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 교습비 */}
          <div className="rounded-3xl p-8 card-hover" style={glassCard}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(167,139,250,0.18)', border: '1px solid rgba(167,139,250,0.35)' }}
              >
                <CreditCard className="h-6 w-6" style={{ color: '#A78BFA' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>교습비 안내</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>

            <div className="space-y-2 mb-7">
              {['개인별 맞춤형 커리큘럼', '소수정예 클래스 운영', '상담을 통한 맞춤 안내'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#A78BFA' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/info/tuition">
                <button
                  className="w-full py-3 rounded-2xl text-sm font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.7), rgba(99,102,241,0.7))',
                    border: '1px solid rgba(139,92,246,0.4)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  마산코코
                </button>
              </Link>
              <Link href="/info/tuition/gimhae">
                <button
                  className="w-full py-3 rounded-2xl text-sm font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.7), rgba(20,184,166,0.7))',
                    border: '1px solid rgba(6,182,212,0.4)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  김해코코
                </button>
              </Link>
            </div>
          </div>

          {/* 차량운행 */}
          <div className="rounded-3xl p-8 card-hover" style={glassCard}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.35)' }}
              >
                <Bus className="h-6 w-6" style={{ color: '#06B6D4' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>안전귀가 차량운행</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>

            <div className="space-y-2 mb-7">
              {['마산전, 함안전 지역 운행', '안전한 등하원 서비스', '학부모 안심 서비스'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#06B6D4' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/info/transport">
                <button
                  className="px-8 py-3 rounded-2xl text-sm font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.7), rgba(20,184,166,0.7))',
                    border: '1px solid rgba(6,182,212,0.4)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
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
