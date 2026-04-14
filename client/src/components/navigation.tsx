import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: '학원소개', id: 'about' },
    { label: '커리큘럼', id: 'curriculum' },
    { label: 'FOLLOW 시스템', id: 'portfolio' },
    { label: '적성테스트', id: 'contact' },
    { label: '안내', id: 'info' },
  ];

  return (
    <nav className="glass-nav fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center min-w-0 gap-2">
            <Link href="/" className="text-2xl font-black tracking-tight cursor-pointer gradient-text">
              COCODIO
            </Link>
            <span className="hidden md:block text-[10px] tracking-widest" style={{ color: '#AAAAC0' }}>
              DESIGN / COMICS / DIGITAL
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center ml-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{ color: '#4A4A6A' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A1A2E')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4A4A6A')}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-4">
            <a href="https://cova-studio-magmaart2238050.replit.app" target="_blank" rel="noopener noreferrer">
              <button className="btn-gradient text-white text-sm px-5 py-2">
                기초소양 COVA
              </button>
            </a>
            <button
              className="md:hidden p-2 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.65)',
                color: '#1A1A2E',
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.50)' }}>
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-sm py-1 font-medium"
                  style={{ color: '#4A4A6A' }}
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
