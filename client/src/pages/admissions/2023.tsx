import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2023() {
  const admissionResults = [
    {
      university: "한양대학교",
      department: "시각디자인학과",
      students: [
        { name: "김○○", grade: "재원생", note: "일반전형" },
        { name: "이○○", grade: "재원생", note: "일반전형" },
        { name: "박○○", grade: "재원생", note: "일반전형" },
        { name: "최○○", grade: "재원생", note: "일반전형" },
        { name: "정○○", grade: "재원생", note: "일반전형" }
      ],
      category: "서울권",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      university: "국민대학교",
      department: "시각디자인학과",
      students: [
        { name: "송○○", grade: "재원생", note: "일반전형" },
        { name: "한○○", grade: "재원생", note: "일반전형" },
        { name: "조○○", grade: "재원생", note: "일반전형" },
        { name: "신○○", grade: "재원생", note: "일반전형" }
      ],
      category: "서울권",
      color: "bg-blue-50 border-blue-200"
    },
    {
      university: "홍익대학교",
      department: "시각디자인학과",
      students: [
        { name: "오○○", grade: "재원생", note: "장학생" },
        { name: "문○○", grade: "재원생", note: "일반전형" },
        { name: "배○○", grade: "재원생", note: "일반전형" }
      ],
      category: "서울권",
      color: "bg-purple-50 border-purple-200"
    },
    {
      university: "부산대학교",
      department: "시각정보디자인학과",
      students: [
        { name: "권○○", grade: "재원생", note: "지역인재전형" },
        { name: "노○○", grade: "재원생", note: "일반전형" },
        { name: "도○○", grade: "재원생", note: "일반전형" },
        { name: "라○○", grade: "재원생", note: "일반전형" },
        { name: "마○○", grade: "재원생", note: "일반전형" }
      ],
      category: "지역거점국립대",
      color: "bg-green-50 border-green-200"
    },
    {
      university: "경성대학교",
      department: "시각디자인학과",
      students: [
        { name: "아○○", grade: "재원생", note: "장학생" },
        { name: "자○○", grade: "재원생", note: "일반전형" },
        { name: "차○○", grade: "재원생", note: "일반전형" },
        { name: "카○○", grade: "재원생", note: "일반전형" },
        { name: "타○○", grade: "재원생", note: "일반전형" },
        { name: "파○○", grade: "재원생", note: "일반전형" },
        { name: "하○○", grade: "재원생", note: "일반전형" },
        { name: "가○○", grade: "재원생", note: "일반전형" },
        { name: "나○○", grade: "재원생", note: "일반전형" }
      ],
      category: "지역사립대",
      color: "bg-orange-50 border-orange-200"
    },
    {
      university: "동아대학교",
      department: "시각디자인학과",
      students: [
        { name: "다○○", grade: "재원생", note: "장학생" },
        { name: "라○○", grade: "재원생", note: "일반전형" },
        { name: "마○○", grade: "재원생", note: "일반전형" },
        { name: "바○○", grade: "재원생", note: "일반전형" },
        { name: "사○○", grade: "재원생", note: "일반전형" },
        { name: "아○○", grade: "재원생", note: "일반전형" },
        { name: "자○○", grade: "재원생", note: "일반전형" },
        { name: "차○○", grade: "재원생", note: "일반전형" },
        { name: "카○○", grade: "재원생", note: "일반전형" }
      ],
      category: "지역사립대",
      color: "bg-red-50 border-red-200"
    }
  ];

  const totalStudents = admissionResults.reduce((sum, uni) => sum + uni.students.length, 0);
  const seoulStudents = admissionResults.filter(uni => uni.category === "서울권").reduce((sum, uni) => sum + uni.students.length, 0);
  const nationalStudents = admissionResults.filter(uni => uni.category === "지역거점국립대").reduce((sum, uni) => sum + uni.students.length, 0);
  const scholarshipStudents = admissionResults.reduce((sum, uni) => sum + uni.students.filter(s => s.note === "장학생").length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link href="/admissions">
                <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  합격자명단 메인
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                2023학년도 합격자 명단
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                2023학년도 입시에서 이루어낸 우수한 성과를 확인하세요.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">{totalStudents}명</div>
                  <div className="text-blue-200">총 합격자</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">{seoulStudents}명</div>
                  <div className="text-blue-200">서울권 대학</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">{nationalStudents}명</div>
                  <div className="text-blue-200">지역거점국립대</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">{scholarshipStudents}명</div>
                  <div className="text-blue-200">장학생 배출</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              대학별 상세 합격자 명단
            </h2>
            
            <div className="space-y-8">
              {admissionResults.map((result, index) => (
                <Card key={index} className={`${result.color}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GraduationCap className="h-6 w-6 mr-3 text-primary-600" />
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {result.university}
                          </div>
                          <div className="text-lg text-gray-600">
                            {result.department}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {result.students.length}명 합격
                        </Badge>
                        <div className="text-sm text-gray-500 mt-1">
                          {result.category}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {result.students.map((student, studentIndex) => (
                        <div key={studentIndex} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {student.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {student.grade}
                              </div>
                            </div>
                            {student.note && (
                              <Badge 
                                variant={student.note === "장학생" ? "default" : "secondary"} 
                                className="text-xs"
                              >
                                {student.note}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2023학년도 성과를 이어가세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              검증된 교육 시스템으로 여러분의 합격을 현실로 만들어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4">
                  무료 상담 신청하기
                </Button>
              </Link>
              <Link href="/admissions">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  다른 연도 합격자 보기
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}