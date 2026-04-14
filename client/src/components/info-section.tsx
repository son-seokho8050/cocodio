import { CreditCard, Bus } from "lucide-react";
import { Link } from "wouter";

export default function InfoSection() {
  return (
    <section id="info" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1A1A2E' }}>
            안내
          </h2>
          <p style={{ color: '#8888A8', fontSize: '1.05rem' }}>
            코코미술학원 교습비 및 차량운행 안내
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 교습비 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl relative overflow-hidden" style={{ background: 'rgba(139,92,246,0.18)', border: '1px solid rgba(139,92,246,0.30)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)' }}>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0) 55%)', borderRadius:'inherit', pointerEvents:'none' }} />
                <CreditCard className="h-6 w-6" style={{ color: '#8B5CF6', position:'relative', zIndex:2 }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'rgba(10,10,30,0.90)' }}>교습비 안내</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(10,10,30,0.58)' }}>
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>

            <div className="space-y-2 mb-7">
              {['개인별 맞춤형 커리큘럼', '소수정예 클래스 운영', '상담을 통한 맞춤 안내'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(10,10,30,0.62)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8B5CF6', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/info/tuition">
                <button className="btn-gradient w-full py-3 text-sm" style={{ borderRadius: '0.875rem' }}>
                  마산코코
                </button>
              </Link>
              <Link href="/info/tuition/gimhae">
                <button className="btn-gradient w-full py-3 text-sm" style={{
                  borderRadius: '0.875rem',
                  background: 'linear-gradient(180deg, #67E8F9 0%, #06B6D4 45%, #0891B2 100%)',
                  boxShadow: '0 6px 0 #0369A1, 0 12px 32px rgba(6,182,212,0.65), inset 0 -2px 4px rgba(0,0,0,0.22)',
                }}>
                  김해코코
                </button>
              </Link>
            </div>
          </div>

          {/* 차량운행 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl relative overflow-hidden" style={{ background: 'rgba(6,182,212,0.16)', border: '1px solid rgba(6,182,212,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)' }}>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0) 55%)', borderRadius:'inherit', pointerEvents:'none' }} />
                <Bus className="h-6 w-6" style={{ color: '#06B6D4', position:'relative', zIndex:2 }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'rgba(10,10,30,0.90)' }}>안전귀가 차량운행</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(10,10,30,0.58)' }}>
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>

            <div className="space-y-2 mb-7">
              {['마산전, 함안전 지역 운행', '안전한 등하원 서비스', '학부모 안심 서비스'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(10,10,30,0.62)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#06B6D4', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/info/transport">
                <button className="btn-gradient px-10 py-3 text-sm" style={{
                  borderRadius: '0.875rem',
                  background: 'linear-gradient(180deg, #67E8F9 0%, #06B6D4 45%, #7C3AED 100%)',
                  boxShadow: '0 6px 0 #5B21B6, 0 12px 32px rgba(109,40,217,0.55), inset 0 -2px 4px rgba(0,0,0,0.22)',
                }}>
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
