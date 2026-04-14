import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: 'rgba(8, 11, 26, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link href="/" className="text-2xl font-black tracking-tight cursor-pointer" style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              COCODIO
            </Link>
            <div className="hidden md:block ml-2 text-[10px] tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
              DESIGN / COMICS / DIGITAL
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center ml-8">
            {[
              { label: '학원소개', id: 'about' },
              { label: '커리큘럼', id: 'curriculum' },
              { label: 'FOLLOW 시스템', id: 'portfolio' },
              { label: '적성테스트', id: 'contact' },
              { label: '안내', id: 'info' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm transition-all duration-200 whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.65)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 ml-6">
            <a
              href="https://cova-studio-magmaart2238050.replit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="btn-gradient text-white text-sm px-5 py-2 font-semibold"
                style={{ borderRadius: '9999px' }}
              >
                기초소양 COVA
              </button>
            </a>
            <button
              className="md:hidden p-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { label: '학원소개', id: 'about' },
                { label: '커리큘럼', id: 'curriculum' },
                { label: 'FOLLOW 시스템', id: 'portfolio' },
                { label: '적성테스트', id: 'contact' },
                { label: '안내', id: 'info' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-sm py-1 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
