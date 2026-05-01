import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import AchievementsSection from "@/components/achievements-section";
import VideoShowcaseSection from "@/components/video-showcase-section";
import CurriculumSection from "@/components/curriculum-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import InfoSection from "@/components/info-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { PopupManager } from "@/components/popup-modal";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import pinkDesertBg from "@assets/optimized/pink-desert-bg.webp";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="page-backdrop"
        style={{ backgroundImage: `url(${pinkDesertBg})` }}
        aria-hidden="true"
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AchievementsSection />
      <VideoShowcaseSection />
      <CurriculumSection />
      <PortfolioSection />
      <TestimonialsSection />
      <InfoSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://blog.naver.com/coco2238050"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Button className="w-14 h-14 rounded-full bg-accent-500 hover:bg-accent-600 text-white shadow-lg relative">
            <BookOpen className="h-6 w-6" />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              마산점 블로그
            </div>
          </Button>
        </a>
        
        <a
          href="https://blog.naver.com/cocodioart"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg relative">
            <BookOpen className="h-6 w-6" />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              김해점 블로그
            </div>
          </Button>
        </a>
        

      </div>
      
      {/* 실시간 채팅 위젯 */}
      <ChatWidget />
      
      {/* 팝업 매니저 */}
      <PopupManager />
    </div>
  );
}
