import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star, Calendar } from "lucide-react";
import { Link } from "wouter";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-24 relative overflow-hidden">
          {/* Soft bright background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/25 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-5">
                ADMISSIONS
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                합격자 명단
              </h1>
              <p className="text-lg lg:text-xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto">
                개인 성향별 체계적인 FOLLOW 시스템과 4단계 사고체계를 통한 증명된 결과
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center bg-white rounded-2xl p-7 border border-primary-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">합격</div>
                  <div className="text-gray-500">인서울 대학 진학</div>
                </div>
                <div className="text-center bg-white rounded-2xl p-7 border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2">진로/ 적성</div>
                  <div className="text-gray-500">개별 맞춤 전공 선택</div>
                </div>
                <div className="text-center bg-white rounded-2xl p-7 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">수상</div>
                  <div className="text-gray-500">주요미대 실기대회</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">주요대학 연도별 합격 현황</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yearlyStats.map((yearData, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary-600">
                      {yearData.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* University breakdown */}
                      <div className="space-y-2">
                        {yearData.universities.map((uni, uniIndex) => (
                          <div key={uniIndex} className="flex justify-between items-center">
                            <span className="text-gray-700">{uni.name}</span>
                            <Badge variant="secondary">{uni.count}명</Badge>
                          </div>
                        ))}
                      </div>
                      
                      {/* Highlights */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          주요 성과
                        </h4>
                        <ul className="space-y-1">
                          {yearData.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="text-xs text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* View Details Button */}
                      <Link href={`/admissions/${yearData.year.slice(0, 4)}`}>
                        <Button className="w-full mt-4" variant="outline">
                          <Calendar className="mr-2 h-4 w-4" />
                          상세 합격자 명단 보기
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Achievement Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              코코미술학원만의 차별화된 성과
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">95%+</div>
                  <div className="text-gray-600">평균 합격률</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">지역최다 수상</div>
                  <div className="text-gray-600">주요 실기대회</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">인서울대학</div>
                  <div className="text-gray-600">서울/수도권 대학 합격</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">연속합격</div>
                  <div className="text-gray-600">지역거점국립대 합격</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">재능의 출발점, 코코</h2>
            <p className="text-xl text-gray-600 mb-8">체계적인 FOLLOW 시스템과 개별 맞춤형 지도로 목표 대학 합격</p>
            <Link href="/#contact">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4">
                무료 상담 신청하기
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}