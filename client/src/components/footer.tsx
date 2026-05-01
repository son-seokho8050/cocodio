import { Instagram, Youtube, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--color-ink)',
      color: '#FFFFFF',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <div className="text-2xl font-black mb-3 text-white">코코미술학원</div>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
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
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--color-coral-deep)';
                    e.currentTarget.style.borderColor = 'var(--color-coral-deep)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-widest"
                style={{ color: 'var(--color-coral)' }}>
              빠른 링크
            </h4>
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
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-coral)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-widest"
                style={{ color: 'var(--color-coral)' }}>
              문의 정보
            </h4>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
              <p>📞 010.4472.2028</p>
              <p>✉️ COCO2238050@NAVER.COM</p>
              <p>🕒 평일 13:00-23:00, 토/일 12:00-18:00</p>
              <p>📍 마산/김해 지역</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '1.5rem' }}
             className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
            &copy; 2024 코코미술학원. All rights reserved.
          </div>
          <Link href="/admin/consultations">
            <button
              className="text-xs px-4 py-2 rounded-full transition-all"
              style={{
                color: 'rgba(255,255,255,0.70)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.70)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
            >
              📊 관리자 모드
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
