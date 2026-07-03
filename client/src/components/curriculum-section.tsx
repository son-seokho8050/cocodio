import { GraduationCap, Tablet, Palette, Check, ArrowUpRight } from "lucide-react";
import spaceImage from "@assets/2025 (2)_1751374843932.jpg";
import digitalDrawingImage from "@assets/KakaoTalk_20230823_211315322_1751375132860.jpg";
import artExamImage from "@assets/KakaoTalk_20230518_185117628_06_1751375534431.jpg";
import middleSchoolArtImage from "@assets/doma 사본_1751375955014.jpg";

const courses = [
  {
    image: artExamImage, alt: '입시미술', icon: GraduationCap, title: '입시미술', tag: 'Art Exam',
    desc: '디자인과 만화 전공을 위한\n체계적인 입시 준비 과정,\n개인 성향별 커리큘럼으로\n실기시험 대비까지 완벽하게',
    checks: ['디자인/ 만화 실기', '입시미술 기초과정', '실전시험 실전대비', '개별진로 상담 및 지도'],
    href: 'https://cocodio-design3website.netlify.app/',
  },
  {
    image: spaceImage, alt: 'SPACE', icon: GraduationCap, title: 'SPACE', tag: 'Premium',
    desc: '최상위 미대입시 전문 수업,\n서울대 출신 원장님의\n엄선된 커리큘럼과\n개별 맞춤 지도로\n최고 수준의 입시 결과 달성',
    checks: ['최상위권 미대 입시 전문', '개별 맞춤형 집중 지도', '프리미엄 소수정예 수업', '입시 전략 컨설팅'],
  },
  {
    image: digitalDrawingImage, alt: '디지털 드로잉', icon: Tablet, title: '디지털 드로잉', tag: 'Digital',
    desc: '현직 애니메이터 원장님과 함께,\n웹툰, 일러스트, 게임그래픽 등\n다양한 분야를 제대로',
    checks: ['클립스튜디오(웹툰)', 'ASEPRITE(픽셀아트)', '스파인2D(2.5D게임캐릭터)', '애니메이트CC/ 포토샵'],
  },
  {
    image: middleSchoolArtImage, alt: '중등미술', icon: Palette, title: '중등미술', tag: 'Middle School',
    desc: '중학생을 위한 기초 미술 교육,\n평면에서 입체까지,\n창의성과 표현력을 탄탄하게',
    checks: ['기초 드로잉 & 색채 감각', '다양한 재료와 기법 체험', '창의적 발상/ 표현력', '미술사와 작품 감상법'],
  },
];

export default function CurriculumSection() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="curriculum" className="py-10 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 lg:mb-16 gap-6">
          <div>
            <div className="section-badge-coral mb-4">커리큘럼</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight" style={{ color: '#ffffff' }}>
              COCO ALL<br />IN-ONE SYSTEM
            </h2>
          </div>
          <p className="text-base lg:text-right max-w-md" style={{ color: 'var(--text-body)' }}>
            입시미술 그 한계를 넘어, 코코의 수업을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {courses.map(({ image, alt, icon: Icon, title, tag, desc, checks, href }, idx) => {
            const isInk = idx === 1; // SPACE = 다크 강조 카드
            return (
              <div
                key={title}
                className={`${isInk ? 'ink-card lg:-translate-y-4' : 'glass-frost'} overflow-hidden flex flex-col`}
              >
                <div className="relative overflow-hidden h-32 sm:h-40 lg:h-[180px] flex-shrink-0">
                  <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  {/* 태그 배지 */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide"
                       style={{
                         background: 'rgba(255,255,255,0.85)',
                         backdropFilter: 'blur(8px)',
                         color: 'var(--color-coral-deep)',
                       }}>
                    {tag}
                  </div>
                  {isInk && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest"
                         style={{ background: 'var(--color-ink)', color: '#FFFFFF' }}>
                      ★ TOP
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
                    <div
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isInk ? 'rgba(255,255,255,0.10)' : 'rgba(232,181,168,0.20)',
                        border: isInk ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(232,181,168,0.40)',
                      }}
                    >
                      <Icon className="h-4 w-4 lg:h-5 lg:w-5" style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold" style={{ color: isInk ? '#FFFFFF' : 'var(--text-heading)' }}>
                      {title}
                    </h3>
                  </div>

                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                     style={{ color: isInk ? 'rgba(255,255,255,0.75)' : 'var(--text-body)' }}>
                    {desc}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
                    {checks.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs sm:text-sm"
                           style={{ color: isInk ? 'rgba(255,255,255,0.85)' : 'var(--text-body)' }}>
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0"
                               style={{ color: isInk ? '#FFFFFF' : 'var(--color-coral-deep)' }} />
                        {c}
                      </div>
                    ))}
                  </div>

                  {isInk ? (
                    <a
                      href="https://cocodio-space.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-arrow-wide w-full justify-between mt-auto"
                      style={{ background: '#FFFFFF', color: 'var(--color-ink)' }}
                      data-testid="link-space-apply"
                    >
                      <span>신청하기</span>
                      <span className="arrow-circle" style={{ background: 'rgba(0,0,0,0.08)' }}>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  ) : href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-arrow-wide w-full justify-between mt-auto"
                      data-testid={`link-apply-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>신청하기</span>
                      <span className="arrow-circle">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  ) : (
                    <button
                      onClick={scrollToContact}
                      className="pill-arrow-wide w-full justify-between mt-auto"
                    >
                      <span>신청하기</span>
                      <span className="arrow-circle">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
