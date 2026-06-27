import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Trophy, Users, Star, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import pinkDesertBg from "@assets/optimized/pink-desert-bg.webp";

export default function AdmissionsOverview() {
  const yearlyStats = [
    {
      year: "2026학년도",
      total: 137,
      universities: [
        { name: "홍익대학교", count: 1, category: "서울/ 수도권" },
        { name: "동덕여자대학교", count: 3, category: "서울/ 수도권" },
        { name: "인하대학교", count: 1, category: "서울/ 수도권" },
        { name: "단국대학교", count: 2, category: "서울/ 수도권" },
        { name: "삼육대학교", count: 1, category: "서울/ 수도권" },
        { name: "용인대학교", count: 2, category: "서울/ 수도권" },
        { name: "수원대학교", count: 1, category: "서울/ 수도권" },
        { name: "건국대학교 글로컬", count: 3, category: "서울/ 수도권" },
        { name: "상명대학교", count: 6, category: "지역사립대" },
        { name: "백석대학교", count: 1, category: "지역사립대" }
      ],
      highlights: ["홍익대·동덕여대·인하대 합격", "창원대 23명 대거 합격", "계명대 20명 지역최다 합격", "영남대 20명 지역최다 합격"]
    },
    {
      year: "2025학년도",
      total: 151,
      universities: [
        { name: "서울과학기술대학교", count: 1, category: "서울/ 수도권" },
        { name: "숙명여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "서경대학교", count: 1, category: "서울/ 수도권" },
        { name: "성신여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "동덕여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "경기대학교", count: 2, category: "서울/ 수도권" },
        { name: "인천대학교", count: 1, category: "서울/ 수도권" },
        { name: "한양대학교(에리카)", count: 2, category: "서울/ 수도권" }
      ],
      highlights: ["한양대 17명 실기대회 수상", "서울과기대·숙명여대 합격", "전국 44개 대학 151명 합격", "한양대에리카·경기대 복수 합격"]
    },
    {
      year: "2024학년도",
      total: 99,
      universities: [
        { name: "세종대학교", count: 1, category: "서울/ 수도권" },
        { name: "상명대학교", count: 1, category: "서울/ 수도권" },
        { name: "서경대학교", count: 3, category: "서울/ 수도권" },
        { name: "동덕여자대학교", count: 2, category: "서울/ 수도권" },
        { name: "덕성여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "한성대학교", count: 1, category: "서울/ 수도권" },
        { name: "중앙대학교", count: 1, category: "서울/ 수도권" },
        { name: "경희대학교", count: 1, category: "서울/ 수도권" }
      ],
      highlights: ["한양대 실기대회 수상 실적", "서경대 3명·동덕여대 2명 합격", "세종대·중앙대·경희대 합격", "전국 34개 대학 99명 합격"]
    },
    {
      year: "2023학년도", 
      total: 127,
      universities: [
        { name: "국민대학교", count: 1, category: "서울/ 수도권" },
        { name: "서울여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "성신여자대학교", count: 2, category: "서울/ 수도권" },
        { name: "동덕여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "덕성여자대학교", count: 1, category: "서울/ 수도권" },
        { name: "삼육대학교", count: 1, category: "서울/ 수도권" },
        { name: "한성대학교", count: 1, category: "서울/ 수도권" },
        { name: "서울예술대학교", count: 1, category: "서울/ 수도권" }
      ],
      highlights: ["한양대 실기대회 연속 수상", "성신여대 2명 합격", "국민대·서울여대 합격", "전국 38개 대학 127명 합격"]
    },
    {
      year: "2022학년도",
      total: 89, 
      universities: [
        { name: "건국대학교", count: 1, category: "서울/ 수도권" },
        { name: "중앙대학교", count: 1, category: "서울/ 수도권" },
        { name: "경희대학교", count: 1, category: "서울/ 수도권" },
        { name: "단국대학교", count: 1, category: "서울/ 수도권" },
        { name: "명지대학교", count: 1, category: "서울/ 수도권" },
        { name: "용인대학교", count: 1, category: "지역사립대" },
        { name: "경기대학교", count: 1, category: "서울/ 수도권" },
        { name: "홍익대학교", count: 1, category: "세종권" }
      ],
      highlights: ["한양대·실기대회 지역최다수상", "건국대·중앙대·경희대 합격", "홍익대 세종캠퍼스 합격", "전국 25개 대학 89명 합격"]
    }
  ];

  const totalStats = {
    total: yearlyStats.reduce((sum, year) => sum + year.total, 0),
    seoul: yearlyStats.reduce((sum, year) => 
      sum + year.universities.filter(u => u.category === "서울권").reduce((s, u) => s + u.count, 0), 0),
    national: yearlyStats.reduce((sum, year) => 
      sum + year.universities.filter(u => u.category === "지역거점국립대").reduce((s, u) => s + u.count, 0), 0)
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="page-backdrop"
        style={{ backgroundImage: `url(${pinkDesertBg})` }}
        aria-hidden="true"
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="section-badge-coral mx-auto mb-5">ADMISSIONS</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-heading)' }}>
                합격자 명단
              </h1>
              <p className="text-lg lg:text-xl mb-10 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-subtle)' }}>
                개인 성향별 체계적인 FOLLOW 시스템과 4단계 사고체계를 통한 증명된 결과
              </p>
              <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto">
                <div className="glass-frost p-7 text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--color-coral-deep)' }}>합격</div>
                  <div style={{ color: 'var(--text-subtle)' }}>인서울 대학 진학</div>
                </div>
                <div className="ink-card p-7 text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">진로/ 적성</div>
                  <div className="text-white/70">개별 맞춤 전공 선택</div>
                </div>
                <div className="glass-frost p-7 text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--color-coral-deep)' }}>수상</div>
                  <div style={{ color: 'var(--text-subtle)' }}>주요미대 실기대회</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-badge-coral mx-auto mb-4 w-fit">YEARLY</div>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-heading)' }}>주요대학 연도별 합격 현황</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {yearlyStats.map((yearData, index) => (
                <div key={index} className="glass-frost p-6 flex flex-col">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--color-coral-deep)' }}>
                      {yearData.year}
                    </h3>
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-subtle)' }}>{yearData.total}명</span>
                  </div>

                  {/* University breakdown */}
                  <div className="space-y-2">
                    {yearData.universities.map((uni, uniIndex) => (
                      <div key={uniIndex} className="flex justify-between items-center text-sm">
                        <span style={{ color: 'var(--text-heading)' }}>{uni.name}</span>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{ background: 'var(--color-coral-soft)', color: 'var(--color-coral-deep)' }}
                        >
                          {uni.count}명
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 mt-4" style={{ borderTop: '1px solid rgba(199,121,101,0.18)' }}>
                    <h4 className="font-semibold mb-2 flex items-center" style={{ color: 'var(--text-heading)' }}>
                      <Star className="h-4 w-4 mr-2" style={{ color: 'var(--color-coral-deep)' }} />
                      주요 성과
                    </h4>
                    <ul className="space-y-1">
                      {yearData.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-xs flex items-start" style={{ color: 'var(--text-subtle)' }}>
                          <div className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ background: 'var(--color-coral-deep)' }}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/admissions/${yearData.year.slice(0, 4)}`}
                    className="pill-arrow-wide mt-5 w-full justify-between"
                    data-testid={`link-year-${yearData.year.slice(0, 4)}`}
                  >
                    상세 합격자 명단 보기
                    <span className="arrow-circle">
                      <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-badge-coral mx-auto mb-4 w-fit">RESULTS</div>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-heading)' }}>
              코코미술학원만의 차별화된 성과
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-frost p-7 text-center">
                <Trophy className="h-11 w-11 mx-auto mb-4" style={{ color: 'var(--color-coral-deep)' }} />
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>95%+</div>
                <div style={{ color: 'var(--text-subtle)' }}>평균 합격률</div>
              </div>

              <div className="ink-card p-7 text-center">
                <Users className="h-11 w-11 mx-auto mb-4 text-white" />
                <div className="text-2xl font-bold mb-2 text-white">지역최다 수상</div>
                <div className="text-white/70">주요 실기대회</div>
              </div>

              <div className="glass-frost p-7 text-center">
                <Star className="h-11 w-11 mx-auto mb-4" style={{ color: 'var(--color-coral-deep)' }} />
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>인서울대학</div>
                <div style={{ color: 'var(--text-subtle)' }}>서울/수도권 대학 합격</div>
              </div>

              <div className="glass-frost p-7 text-center">
                <Calendar className="h-11 w-11 mx-auto mb-4" style={{ color: 'var(--color-coral-deep)' }} />
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>연속합격</div>
                <div style={{ color: 'var(--text-subtle)' }}>지역거점국립대 합격</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="ink-card p-10 lg:p-14 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">재능의 출발점, 코코</h2>
              <p className="text-lg mb-8 text-white/70">체계적인 FOLLOW 시스템과 개별 맞춤형 지도로 목표 대학 합격</p>
              <Link href="/#contact" className="pill-arrow-wide mx-auto" data-testid="link-contact">
                무료 상담 신청하기
                <span className="arrow-circle">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}