import { Instagram, Youtube, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(24px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
      borderTop: '1px solid rgba(255,255,255,0.55)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <div className="text-2xl font-black mb-3 gradient-text">코코미술학원</div>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              사고력 중심의 체계적 미술교육으로<br />창의적인 인재를 기릅니다.
            </p>
            <div className="flex space-x-3">
              {[
                { href: "https://www.instagram.com/cocodio_design_ani", Icon: Instagram, label: "Instagram" },
                { href: "https://www.youtube.com/@cocodio5693", Icon: Youtube, label: "YouTube" },
                { href: "https://blog.naver.com/coco2238050", Icon: BookOpen, label: "Blog" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    color: 'var(--text-subtle)',
                    boxShadow: 'var(--el-1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-primary-dark)';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.background = 'rgba(110,201,163,0.10)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-subtle)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--text-heading)' }}>빠른 링크</h4>
            <ul className="space-y-2">
              {[
                { label: '학원소개', id: 'about' },
                { label: '커리큘럼', id: 'curriculum' },
                { label: 'FOLLOW 시스템', id: 'portfolio' },
                { label: '상담문의', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-left transition-colors"
                    style={{ color: 'var(--text-body)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-dark)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-body)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--text-heading)' }}>문의 정보</h4>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-body)' }}>
              <p>📞 010.4472.2028</p>
              <p>✉️ COCO2238050@NAVER.COM</p>
              <p>🕒 평일 13:00-23:00, 토/일 12:00-18:00</p>
              <p>📍 마산/김해 지역</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
          <div className="text-center text-sm mb-3" style={{ color: 'var(--text-subtle)' }}>
            &copy; 2024 코코미술학원. All rights reserved.
          </div>
          <div className="text-center">
            <Link href="/admin/consultations">
              <button
                className="text-xs px-4 py-2 rounded-xl transition-all"
                style={{
                  color: 'var(--text-subtle)',
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-dark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
              >
                📊 관리자 모드
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
