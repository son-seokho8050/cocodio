import { GraduationCap, Tablet, Palette, Check } from "lucide-react";
import spaceImage from "@assets/2025 (2)_1751374843932.jpg";
import digitalDrawingImage from "@assets/KakaoTalk_20230823_211315322_1751375132860.png";
import artExamImage from "@assets/KakaoTalk_20230518_185117628_06_1751375534431.jpg";
import middleSchoolArtImage from "@assets/doma 사본_1751375955014.png";

const courses = [
  {
    image: artExamImage, alt: '입시미술', icon: GraduationCap, title: '입시미술',
    desc: '디자인과 만화 전공을 위한\n체계적인 입시 준비 과정,\n개인 성향별 커리큘럼으로\n실기시험 대비까지 완벽하게',
    checks: ['디자인/ 만화 실기', '입시미술 기초과정', '실전시험 실전대비', '개별진로 상담 및 지도'],
    color: '#8B5CF6',
  },
  {
    image: spaceImage, alt: 'SPACE', icon: GraduationCap, title: 'SPACE',
    desc: '최상위 미대입시 전문 수업,\n서울대 출신 원장님의\n엄선된 커리큘럼과\n개별 맞춤 지도로\n최고 수준의 입시 결과 달성',
    checks: ['최상위권 미대 입시 전문', '개별 맞춤형 집중 지도', '프리미엄 소수정예 수업', '입시 전략 컨설팅'],
    color: '#06B6D4',
  },
  {
    image: digitalDrawingImage, alt: '디지털 드로잉', icon: Tablet, title: '디지털 드로잉',
    desc: '현직 애니메이터 원장님과 함께,\n웹툰, 일러스트, 게임그래픽 등\n다양한 분야를 제대로',
    checks: ['클립스튜디오(웹툰)', 'ASEPRITE(픽셀아트)', '스파인2D(2.5D게임캐릭터)', '애니메이트CC/ 포토샵'],
    color: '#34D399',
  },
  {
    image: middleSchoolArtImage, alt: '중등미술', icon: Palette, title: '중등미술',
    desc: '중학생을 위한 기초 미술 교육,\n평면에서 입체까지,\n창의성과 표현력을 탄탄하게',
    checks: ['기초 드로잉 & 색채 감각', '다양한 재료와 기법 체험', '창의적 발상/ 표현력', '미술사와 작품 감상법'],
    color: '#F59E0B',
  },
];

const colorRgb: Record<string, string> = {
  '#8B5CF6': '139,92,246',
  '#06B6D4': '6,182,212',
  '#34D399': '52,211,153',
  '#F59E0B': '245,158,11',
};

export default function CurriculumSection() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="curriculum" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1A1A2E' }}>
            COCO ALL IN-ONE SYSTEM
          </h2>
          <p style={{ color: '#4A4A6A', fontSize: '1.1rem' }}>
            입시미술 그 한계를 넘어, 코코의 수업을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
          {courses.map(({ image, alt, icon: Icon, title, desc, checks, color }) => (
            <div key={title} className="glass-card overflow-hidden flex flex-col">
              <div className="relative overflow-hidden" style={{ height: '180px', flexShrink: 0 }}>
                <img src={image} alt={alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.08) 100%)'
                }} />
              </div>

              <div className="p-7 flex flex-col flex-1" style={{ position: 'relative', zIndex: 3 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    style={{
                      background: `rgba(${colorRgb[color]},0.18)`,
                      border: `1px solid rgba(${colorRgb[color]},0.30)`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.60)`,
                    }}>
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0) 55%)', borderRadius:'inherit', pointerEvents:'none' }} />
                    <Icon className="h-5 w-5" style={{ color, position:'relative', zIndex:2 }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'rgba(10,10,30,0.90)' }}>{title}</h3>
                </div>

                <p className="mb-5 text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(10,10,30,0.82)' }}>
                  {desc}
                </p>

                <div className="space-y-2 mb-6 flex-1">
                  {checks.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(10,10,30,0.65)' }}>
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color }} />
                      {c}
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="btn-gradient w-full py-3 text-sm mt-auto"
                  style={{ borderRadius: '0.875rem' }}
                >
                  신청하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
