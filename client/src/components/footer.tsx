import { Instagram, Youtube, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-12"
      style={{
        background: 'rgba(0,0,0,0.5)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <div
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              코코미술학원
            </div>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              사고력 중심의 체계적 미술교육으로<br />
              창의적인 인재를 기릅니다.
            </p>
            <div className="flex space-x-4">
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
                  style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>빠른 링크</h4>
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
                    className="text-sm transition-colors text-left"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>문의 정보</h4>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <p>📞 010.4472.2028</p>
              <p>✉️ COCO2238050@NAVER.COM</p>
              <p>🕒 평일 13:00-23:00, 토/일 12:00-18:00</p>
              <p>📍 마산/김해 지역</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <div className="text-center text-sm mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; 2024 코코미술학원. All rights reserved.
          </div>
          <div className="text-center">
            <Link href="/admin/consultations">
              <button
                className="text-xs px-4 py-2 rounded-xl transition-all"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
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
