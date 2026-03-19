import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

const seoulMetroUniversities = [
  "서울대학교", "홍익대학교", "국민대학교", "이화여자대학교", "중앙대학교",
  "경희대학교", "한양대학교", "건국대학교", "서울여자대학교", "동덕여자대학교",
  "성신여자대학교", "덕성여자대학교", "단국대학교", "세종대학교", "상명대학교",
  "한성대학교", "서경대학교", "삼육대학교", "명지대학교", "숙명여자대학교",
  "서울과학기술대학교", "인하대학교", "인천대학교", "경기대학교", "수원대학교",
  "용인대학교", "한양대(에리카)", "계원예술대학교",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [list] = useState(() => shuffle(seoulMetroUniversities));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % list.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, [list.length]);

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
            <div className="mb-8">
              <div className="text-sm lg:text-base font-light text-white/70 mb-1 tracking-widest uppercase">재능의 출발점</div>
              <h1 className="text-6xl lg:text-8xl font-black text-accent-500 mb-3 leading-none">코코</h1>
              <p className="text-lg lg:text-xl font-normal text-blue-100 leading-relaxed">
                여러분의 재능은 어떤 모양인가요?
              </p>
            </div>
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
              alt="코코미술학원 합격자들이 기쁨의 환호를 하며 함께 축하하는 모습 - 미대입시 성공 사례"
              className="rounded-2xl shadow-2xl w-full"
              loading="eager"
              width="600"
              height="450"
              decoding="async"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl px-5 py-4 shadow-xl min-w-[170px]">
              <div
                className="text-2xl font-black text-primary-600 leading-tight transition-all duration-300"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
              >
                {list[index]}
              </div>
              <div className="text-[10px] text-gray-400 mt-1 tracking-wide">인서울·수도권 미대</div>
            </div>
            
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
