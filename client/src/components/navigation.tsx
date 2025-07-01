import { useState } from "react";
import { Button } from "@/components/ui/button";
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

  const scrollToContact = () => scrollToSection('contact');

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors cursor-pointer">COCODIO</Link>
            <div className="hidden md:block ml-2 text-sm text-gray-500">DESIGN/ COMICS/ DIGITAL DRAWING</div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              학원소개
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              커리큘럼
            </button>
            <div 
              className="relative"
              onMouseEnter={() => setIsAdmissionsOpen(true)}
              onMouseLeave={() => setIsAdmissionsOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary-600 transition-colors flex items-center"
              >
                합격자명단
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAdmissionsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-50 border">
                  <Link href="/admissions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    최근 3년간 통합
                  </Link>
                  <Link href="/admissions/2025" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    2025학년도
                  </Link>
                  <Link href="/admissions/2024" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    2024학년도
                  </Link>
                  <Link href="/admissions/2023" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    2023학년도
                  </Link>
                  <Link href="/admissions/2022" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    2022학년도
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              FOLLOW 시스템
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              적성테스트
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToContact}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              상담신청
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                학원소개
              </button>
              <button
                onClick={() => scrollToSection('curriculum')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                커리큘럼
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                FOLLOW 시스템
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                적성테스트
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
