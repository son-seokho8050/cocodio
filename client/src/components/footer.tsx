import { Instagram, Youtube, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">코코미술학원</div>
            <p className="text-gray-300 mb-4">
              사고력 중심의 체계적 미술교육으로<br />
              창의적인 인재를 기릅니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cocodio_design_ani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@cocodio5693"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://blog.naver.com/coco2238050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Blog"
              >
                <BookOpen className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  학원소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('curriculum')}
                  className="hover:text-white transition-colors text-left"
                >
                  커리큘럼
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-white transition-colors text-left"
                >합격자명단</button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  상담문의
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">문의 정보</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>010.4472.2028
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>COCO2238050@NAVER.COM
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕒</span>평일 13:00-23:00, 토/일 12:00-18:00
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>마산/김해 지역
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 코코미술학원. All rights reserved.</p>
            <Link href="/admin/consultations">
              <button className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                관리자
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
