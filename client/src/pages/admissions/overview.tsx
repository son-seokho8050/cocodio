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
      year: "2025학년도",
      total: 151,
      universities: [
        { name: "대가대학교", count: 14, category: "지역사립대" },
        { name: "동명대학교", count: 11, category: "지역사립대" },
        { name: "계명대학교", count: 9, category: "지역사립대" },
        { name: "경성대학교", count: 9, category: "지역사립대" },
        { name: "창원대학교", count: 7, category: "지역거점국립대" },
        { name: "부산대학교", count: 4, category: "지역거점국립대" },
        { name: "경북대학교", count: 4, category: "지역거점국립대" },
        { name: "한밭대학교", count: 4, category: "지역거점국립대" }
      ],
      highlights: ["한양대 17명 실기대회 수상", "대가대 14명 최다 합격", "동명대 11명 합격", "지역거점국립대 다수 합격"]
    },
    {
      year: "2024학년도",
      total: 99,
      universities: [
        { name: "창원대학교", count: 16, category: "지역거점국립대" },
        { name: "계명대학교", count: 10, category: "지역사립대" },
        { name: "경성대학교", count: 9, category: "지역사립대" },
        { name: "경북대학교", count: 4, category: "지역거점국립대" },
        { name: "동의대학교", count: 4, category: "지역사립대" },
        { name: "세종대학교", count: 2, category: "서울권" },
        { name: "상명대학교", count: 3, category: "서울권" },
        { name: "서경대학교", count: 4, category: "서울권" }
      ],
      highlights: ["창원대 16명 최다 합격", "계명대 10명 합격", "경성대 9명 합격", "지역거점국립대 다수 합격"]
    },
    {
      year: "2023학년도", 
      total: 127,
      universities: [
        { name: "계명대학교", count: 12, category: "지역사립대" },
        { name: "창원대학교", count: 9, category: "지역거점국립대" },
        { name: "경성대학교", count: 9, category: "지역사립대" },
        { name: "동의대학교", count: 9, category: "지역사립대" },
        { name: "동명대학교", count: 8, category: "지역사립대" },
        { name: "경북대학교", count: 4, category: "지역거점국립대" },
        { name: "국민대학교", count: 4, category: "서울권" },
        { name: "서울여자대학교", count: 3, category: "서울권" }
      ],
      highlights: ["계명대 12명 최다 합격", "창원대 9명 합격", "경성대 9명 합격", "동의대 9명 합격"]
    },
    {
      year: "2022학년도",
      total: 89, 
      universities: [
        { name: "동명대학교", count: 9, category: "지역사립대" },
        { name: "계명대학교", count: 9, category: "지역사립대" },
        { name: "창원대학교", count: 7, category: "지역거점국립대" },
        { name: "동의대학교", count: 5, category: "지역사립대" },
        { name: "경북대학교", count: 4, category: "지역거점국립대" },
        { name: "홍익대학교", count: 3, category: "서울권" },
        { name: "건국대학교", count: 2, category: "서울권" },
        { name: "상명대학교", count: 2, category: "서울권" }
      ],
      highlights: ["동명대 9명 최다 합격", "계명대 9명 합격", "창원대 7명 합격", "동의대 5명 합격"]
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                합격자 명단
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                코코미술학원의 체계적인 FOLLOW 시스템과 4단계 사고체계를 통해 
                이루어낸 최근 4년간의 우수한 입시 결과를 확인하세요.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">{totalStats.total}명</div>
                  <div className="text-white/90">최근 4년 총 합격자</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">{totalStats.seoul}명</div>
                  <div className="text-white/90">서울/수도권 대학 합격</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">{totalStats.national}명</div>
                  <div className="text-white/90">지역거점국립대 합격</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              연도별 합격 현황
            </h2>
            
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
                            <li key={hIndex} className="text-sm text-gray-600 flex items-center">
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
                  <div className="text-2xl font-bold text-gray-900 mb-2">17명</div>
                  <div className="text-gray-600">한양대 실기대회 수상</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{totalStats.seoul}명</div>
                  <div className="text-gray-600">서울/수도권 대학 합격</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{totalStats.national}명</div>
                  <div className="text-gray-600">지역거점국립대 합격</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              당신도 코코미술학원과 함께 꿈을 이루세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              체계적인 FOLLOW 시스템과 개별 맞춤형 지도로 
              목표하는 대학 합격의 꿈을 현실로 만들어 드립니다.
            </p>
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