import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import type { Achievement } from "@shared/schema";

export default function HeroSection() {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  const { data: achievements = [], isLoading } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  useEffect(() => {
    if (achievements.length > 0) {
      const interval = setInterval(() => {
        setCurrentAchievement((prev) => (prev + 1) % achievements.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [achievements.length]);

  const achievement = achievements.length > 0 ? achievements[currentAchievement] : null;
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left duration-700">
            <h1 className="mb-8 leading-tight">
              <div className="text-lg lg:text-xl font-light text-white/75 mb-2 tracking-wide">재능의 출발점</div>
              <div className="text-5xl lg:text-7xl font-black text-accent-500 mb-4">코코</div>
              <div className="text-xl lg:text-2xl font-medium text-blue-100 leading-relaxed">
                여러분의 재능은 어떤 모양인가요?
              </div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                무료체험수업 신청
              </Button>
              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                FOLLOW 수업 보기
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-700">
            <img
              src="/student-celebration.png"
              alt="Happy art students celebrating achievements"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {!isLoading && (
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl transition-all duration-500 ease-in-out">
                <div className="flex items-center space-x-4">
                  {achievement ? (
                    <>
                      <div className="text-3xl font-bold text-primary-600">{achievement.count}</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">{achievement.university}</span> 
                        <span dangerouslySetInnerHTML={{ __html: ` ${achievement.description}` }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-primary-600">합격</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">한양대</span> 
                        <span dangerouslySetInnerHTML={{ __html: " 실기대회<br />지역 최다 수상" }} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white shadow-lg">
              <div className="text-2xl font-bold text-center">FOLLOW</div>
              <div className="text-xs text-center">ALL IN-ONE SYSTEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
