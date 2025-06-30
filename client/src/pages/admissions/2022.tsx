import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2022() {
  const admissionResults = [
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "김○아", grade: "진해여고 졸업", note: "디자인컨버전스학과" }
      ],
      category: "세종권",
      color: "bg-purple-100 border-purple-300"
    },
    {
      university: "중앙대학교",
      department: "안성캠퍼스",
      students: [
        { name: "윤○정", grade: "명덕고", note: "시각디자인학과" }
      ],
      category: "서울권",
      color: "bg-blue-100 border-blue-300"
    },
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "정○훈", grade: "용마고", note: "커뮤니케이션디자인학과" }
      ],
      category: "서울권",
      color: "bg-amber-100 border-amber-300"
    },
    {
      university: "경희대학교",
      department: "환경조경디자인학과",
      students: [
        { name: "정○훈", grade: "용마고", note: "환경조경디자인학과" }
      ],
      category: "서울권",
      color: "bg-green-100 border-green-300"
    },
    {
      university: "건국대학교",
      department: "의상디자인학과",
      students: [
        { name: "원○민", grade: "성지여고", note: "의상디자인학과" }
      ],
      category: "서울권",
      color: "bg-red-100 border-red-300"
    },
    {
      university: "명지대학교",
      department: "패션디자인학과",
      students: [
        { name: "차○아", grade: "김해여고", note: "패션디자인학과" }
      ],
      category: "서울권",
      color: "bg-orange-100 border-orange-300"
    },
    {
      university: "계명대학교",
      department: "디자인학부",
      students: [
        { name: "공○란", grade: "남지고", note: "시각디자인" },
        { name: "조○정", grade: "구암고", note: "산업디자인" },
        { name: "성○경", grade: "내서여고", note: "산업디자인" },
        { name: "김○재", grade: "남지고", note: "텍스타일디자인" },
        { name: "이○정", grade: "태봉고", note: "패션디자인" },
        { name: "박○원", grade: "태봉고", note: "패션디자인" },
        { name: "김○하", grade: "내서여고", note: "패션디자인" },
        { name: "홍○진", grade: "마산공고", note: "패션디자인" }
      ],
      category: "지역사립대",
      color: "bg-purple-100 border-purple-300"
    },
    {
      university: "영남대학교",
      department: "디자인학부",
      students: [
        { name: "정○훈", grade: "용마고", note: "시각디자인" },
        { name: "정○유", grade: "제일여고", note: "시각디자인" },
        { name: "변○경", grade: "마여고", note: "시각디자인" },
        { name: "조○준", grade: "용마고", note: "산업디자인" },
        { name: "박○영", grade: "삼진고", note: "산업디자인" },
        { name: "박○은", grade: "대청고", note: "산업디자인" },
        { name: "이○정", grade: "태봉고", note: "생활제품디자인" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    {
      university: "대구대학교",
      department: "디자인학부",
      students: [
        { name: "공○란", grade: "남지고", note: "시각디자인" },
        { name: "백○주", grade: "남지고", note: "산업디자인" },
        { name: "홍○진", grade: "마산공고", note: "실내건축디자인" },
        { name: "유○희", grade: "무학여고", note: "실내건축디자인" },
        { name: "박○민", grade: "창신고", note: "실내건축디자인" },
        { name: "허○혁", grade: "창신고", note: "생활조형학과" },
        { name: "채○진", grade: "제일여고", note: "생활조형학과" },
        { name: "정○주", grade: "마산고", note: "생활조형학과" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    {
      university: "동서대학교",
      department: "디자인학부",
      students: [
        { name: "한○솔", grade: "명덕고", note: "디자인학과" },
        { name: "조○정", grade: "구암고", note: "디자인학과" },
        { name: "이○현", grade: "삼진고", note: "디자인학과" },
        { name: "이○림", grade: "사파고", note: "디자인학과" },
        { name: "이○빈", grade: "중앙여고", note: "디자인학과" },
        { name: "오○은", grade: "봉림고", note: "패션디자인학과" },
        { name: "정○희", grade: "진해고", note: "패션디자인학과" },
        { name: "김○승", grade: "창원남고", note: "패션디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-amber-100 border-amber-300"
    },
    {
      university: "동명대학교",
      department: "시각디자인학과",
      students: [
        { name: "곽○원", grade: "용마고", note: "시각디자인학과" },
        { name: "허○혁", grade: "창신고", note: "시각디자인학과" },
        { name: "유○영", grade: "남지고", note: "시각디자인학과" },
        { name: "이○빈", grade: "무학여고", note: "시각디자인학과" },
        { name: "차○지", grade: "대암고", note: "시각디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-red-100 border-red-300"
    },
    {
      university: "창원대학교",
      department: "조형예술학과",
      students: [
        { name: "김○재", grade: "마여고", note: "시각디자인전공" },
        { name: "홍○주", grade: "삼진고", note: "공예전공" }
      ],
      category: "지역거점국립대",
      color: "bg-orange-100 border-orange-300"
    },
    {
      university: "울산대학교",
      department: "산업디자인학과",
      students: [
        { name: "홍○진", grade: "마산공고", note: "섬유디자인전공" },
        { name: "조○근", grade: "남산고", note: "섬유디자인전공" },
        { name: "백○주", grade: "남지고", note: "산업디자인전공" },
        { name: "허○혁", grade: "창신고", note: "실내공간디자인전공" },
        { name: "이○영", grade: "진영고", note: "미술학과" }
      ],
      category: "지역거점국립대",
      color: "bg-blue-100 border-blue-300"
    },
    {
      university: "경북대학교",
      department: "패션디자인학과",
      students: [
        { name: "문○은", grade: "문성고", note: "패션디자인학과" }
      ],
      category: "지역거점국립대",
      color: "bg-purple-100 border-purple-300"
    }
  ];

  const totalStudents = admissionResults.reduce((sum, uni) => sum + uni.students.length, 0);
  const seoulStudents = admissionResults.filter(uni => uni.category === "서울권").reduce((sum, uni) => sum + uni.students.length, 0);
  const nationalStudents = admissionResults.filter(uni => uni.category === "지역거점국립대").reduce((sum, uni) => sum + uni.students.length, 0);

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
                2022학년도 합격자 명단
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                2022학년도 입시에서 이루어낸 우수한 성과를 확인하세요.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                              <Badge variant="secondary" className="text-xs">
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
              2022학년도 성과를 이어가세요
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