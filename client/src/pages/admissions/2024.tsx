import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2024() {
  const admissionResults = [
    // 중앙대
    {
      university: "중앙대학교",
      department: "안성캠퍼스",
      students: [
        { name: "조○세", grade: "마여고", note: "산업디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-blue-100 border-blue-300"
    },
    // 세종대
    {
      university: "세종대학교",
      department: "서울",
      students: [
        { name: "하○영", grade: "중앙고", note: "디자인이노베이션" }
      ],
      category: "서울/ 수도권",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 경희대(국제)
    {
      university: "경희대학교",
      department: "국제캠퍼스",
      students: [
        { name: "김○지", grade: "내서여고", note: "시각디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-purple-100 border-purple-300"
    },
    // 상명대(서울)
    {
      university: "상명대학교",
      department: "서울",
      students: [
        { name: "김○지", grade: "내서여고", note: "생활예술" }
      ],
      category: "서울/ 수도권",
      color: "bg-pink-100 border-pink-300"
    },
    // 인하대
    {
      university: "인하대학교",
      department: "인천",
      students: [
        { name: "권○주", grade: "내서여고", note: "의류디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 인천대
    {
      university: "인천대학교",
      department: "인천",
      students: [
        { name: "이○주", grade: "김해고", note: "디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-teal-100 border-teal-300"
    },
    // 덕성여대
    {
      university: "덕성여자대학교",
      department: "서울",
      students: [
        { name: "김○애", grade: "제일고", note: "아트앤디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-green-100 border-green-300"
    },
    // 동덕여대
    {
      university: "동덕여자대학교",
      department: "서울",
      students: [
        { name: "조○아", grade: "제일여고", note: "디지털공예" },
        { name: "신○서", grade: "창원여고", note: "패션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-amber-100 border-amber-300"
    },
    // 한성대
    {
      university: "한성대학교",
      department: "서울",
      students: [
        { name: "황○현", grade: "내서여고", note: "ICT디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-orange-100 border-orange-300"
    },
    // 서경대
    {
      university: "서경대학교",
      department: "서울",
      students: [
        { name: "채○성", grade: "율하고", note: "VD비주얼디자인" },
        { name: "정○수", grade: "내서여고", note: "무대패션전공" },
        { name: "이○빈", grade: "제일여고", note: "무대패션전공" }
      ],
      category: "서울/ 수도권",
      color: "bg-red-100 border-red-300"
    },
    // 단국대(죽전)
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "조○희", grade: "성지여고", note: "패션산업디자인" },
        { name: "권○주", grade: "내서여고", note: "패션산업디자인" },
        { name: "하○영", grade: "중앙고", note: "커뮤니케이션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-violet-100 border-violet-300"
    },
    // 명지대
    {
      university: "명지대학교",
      department: "자연캠퍼스",
      students: [
        { name: "정○수", grade: "내서여고", note: "패션디자인" },
        { name: "김○지", grade: "내서여고", note: "시각디자인" },
        { name: "이○주", grade: "김해고", note: "디지털콘텐츠" }
      ],
      category: "서울/ 수도권",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 건국대(글로컬)
    {
      university: "건국대학교",
      department: "글로컬캠퍼스",
      students: [
        { name: "김○은", grade: "의령여고", note: "산업디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-rose-100 border-rose-300"
    },
    // 용인대
    {
      university: "용인대학교",
      department: "용인",
      students: [
        { name: "이○민", grade: "명덕고", note: "미디어디자인" },
        { name: "이○랑", grade: "제일고", note: "미디어디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-lime-100 border-lime-300"
    },
    // 홍익대(세종)
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "하○영", grade: "중앙고", note: "디자인컨버전스" },
        { name: "이○정", grade: "가포고", note: "자율전공" },
        { name: "이○주", grade: "김해고", note: "자율전공" }
      ],
      category: "세종권",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 상명대(천안)
    {
      university: "상명대학교",
      department: "천안캠퍼스",
      students: [
        { name: "김○연", grade: "김해여고", note: "무대미술" },
        { name: "심○연", grade: "삼진고", note: "무대미술" },
        { name: "황○현", grade: "내서여고", note: "디자인학부" },
        { name: "채○성", grade: "율하고", note: "디자인학부" },
        { name: "이○주", grade: "김해고", note: "디지털콘텐츠" }
      ],
      category: "지역사립대",
      color: "bg-stone-100 border-stone-300"
    },
    // 호서대
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "박○은", grade: "무학여고", note: "실내디자인" },
        { name: "권○형", grade: "창원고", note: "실내디자인" },
        { name: "김○애", grade: "제일고", note: "시각디자인" }
      ],
      category: "지역사립대",
      color: "bg-slate-100 border-slate-300"
    },
    // 남서울대
    {
      university: "남서울대학교",
      department: "천안",
      students: [
        { name: "강○민", grade: "창원고", note: "공간조형" }
      ],
      category: "지역사립대",
      color: "bg-gray-100 border-gray-300"
    },
    // 백석대
    {
      university: "백석대학교",
      department: "천안",
      students: [
        { name: "연○현", grade: "세화여고", note: "디자인영상학부" }
      ],
      category: "지역사립대",
      color: "bg-zinc-100 border-zinc-300"
    },
    // 공주대
    {
      university: "공주대학교",
      department: "공주",
      students: [
        { name: "박○은", grade: "무학여고", note: "가구리빙디자인" },
        { name: "김○연", grade: "김해여고", note: "가구리빙디자인" },
        { name: "최○은", grade: "가야고", note: "가구리빙디자인" }
      ],
      category: "지역사립대",
      color: "bg-neutral-100 border-neutral-300"
    },
    // 청주대
    {
      university: "청주대학교",
      department: "청주",
      students: [
        { name: "김○늘", grade: "제일여고", note: "시각디자인" },
        { name: "최○은", grade: "가야고", note: "공예디자인" },
        { name: "박○빈", grade: "가야고", note: "공예디자인" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 한남대
    {
      university: "한남대학교",
      department: "대전",
      students: [
        { name: "이○빈", grade: "제일여고", note: "융합디자인" },
        { name: "염○헌", grade: "제일고", note: "미술교육학과" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    // 목원대
    {
      university: "목원대학교",
      department: "대전",
      students: [
        { name: "강○민", grade: "창원고", note: "입체조형" }
      ],
      category: "지역사립대",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 배재대
    {
      university: "배재대학교",
      department: "대전",
      students: [
        { name: "김○경", grade: "제일여고", note: "산업디자인" },
        { name: "손○영", grade: "무학여고", note: "게임학과" }
      ],
      category: "지역사립대",
      color: "bg-orange-100 border-orange-300"
    },
    // 동양대
    {
      university: "동양대학교",
      department: "영주",
      students: [
        { name: "엄○연", grade: "제일고", note: "게임학부" }
      ],
      category: "지역사립대",
      color: "bg-pink-100 border-pink-300"
    },
    // 동국대(WISE)
    {
      university: "동국대학교",
      department: "WISE캠퍼스",
      students: [
        { name: "곽○지", grade: "명덕고", note: "시각디자인" }
      ],
      category: "지역사립대",
      color: "bg-purple-100 border-purple-300"
    },
    // 경북대
    {
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "조○아", grade: "제일여고", note: "패션디자인" },
        { name: "박○람", grade: "성지여고", note: "패션디자인" },
        { name: "김○정", grade: "대암고", note: "패션디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 계명대
    {
      university: "계명대학교",
      department: "대구",
      students: [
        { name: "김○은", grade: "의령여고", note: "시각디자인" },
        { name: "양○서", grade: "명덕고", note: "산업디자인" },
        { name: "박○은", grade: "무학여고", note: "산업디자인" },
        { name: "이○진", grade: "내서여고", note: "산업디자인" },
        { name: "이○민", grade: "성지여고", note: "산업디자인" },
        { name: "김○현", grade: "창신고", note: "패션디자인" },
        { name: "김○지", grade: "명덕고", note: "패션디자인" },
        { name: "박○은", grade: "무학여고", note: "패션디자인" },
        { name: "이○영", grade: "내서여고", note: "패션디자인" },
        { name: "심○은", grade: "창원여고", note: "덱스타일" }
      ],
      category: "지역사립대",
      color: "bg-teal-100 border-teal-300"
    },
    // 영남대
    {
      university: "영남대학교",
      department: "대구",
      students: [
        { name: "김○우", grade: "중앙고", note: "시각디자인" },
        { name: "곽○지", grade: "명덕고", note: "시각디자인" },
        { name: "이○민", grade: "성지여고", note: "산업디자인" },
        { name: "김○현", grade: "창신고", note: "산업디자인" },
        { name: "김○연", grade: "성지여고", note: "산업디자인" },
        { name: "이○환", grade: "마산고", note: "생활제품" }
      ],
      category: "지역사립대",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 울산대
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "최○준", grade: "진영고", note: "실내공간" },
        { name: "강○민", grade: "창원고", note: "미술학부" }
      ],
      category: "지역거점국립대",
      color: "bg-rose-100 border-rose-300"
    },
    // 창원대
    {
      university: "창원대학교",
      department: "경남",
      students: [
        { name: "김○은", grade: "의령여고", note: "시각디자인" },
        { name: "김○현", grade: "창신고", note: "시각디자인" },
        { name: "김○지", grade: "명덕고", note: "시각디자인" },
        { name: "오○아", grade: "장유고", note: "시각디자인" },
        { name: "양○서", grade: "명덕고", note: "제품디자인" },
        { name: "이○민", grade: "성지여고", note: "공예디자인" },
        { name: "김○주", grade: "삼진고", note: "공예" },
        { name: "박○은", grade: "무학여고", note: "공예" },
        { name: "정○혜", grade: "마산여고", note: "공예" },
        { name: "최○은", grade: "제일여고", note: "미술학과" },
        { name: "이○빈", grade: "제일여고", note: "미술학과" },
        { name: "윤○빈", grade: "제일여고", note: "미술학과" },
        { name: "김○현", grade: "창원고", note: "미술학과" },
        { name: "강○민", grade: "창원고", note: "미술학과" },
        { name: "홍○열", grade: "합포고", note: "미술학과" },
        { name: "박○이", grade: "창원여고", note: "미술학과" }
      ],
      category: "지역거점국립대",
      color: "bg-lime-100 border-lime-300"
    },
    // 경상대
    {
      university: "경상대학교",
      department: "경남",
      students: [
        { name: "김○욱", grade: "칠원고", note: "미술교육" }
      ],
      category: "지역거점국립대",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 경성대
    {
      university: "경성대학교",
      department: "부산",
      students: [
        { name: "박○은", grade: "무학여고", note: "산업디자인" },
        { name: "이○영", grade: "내서여고", note: "산업디자인" },
        { name: "심○은", grade: "창원여고", note: "시각디자인" },
        { name: "이○환", grade: "마산고", note: "공예디자인" },
        { name: "지○민", grade: "한일여고", note: "공예디자인" },
        { name: "박○빈", grade: "가야고", note: "현대미술" }
      ],
      category: "지역사립대",
      color: "bg-red-100 border-red-300"
    },
    // 동아대
    {
      university: "동아대학교",
      department: "부산",
      students: [
        { name: "이○환", grade: "마산고", note: "목조형" },
        { name: "홍○열", grade: "합포고", note: "현대미술" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 동의대
    {
      university: "동의대학교",
      department: "부산",
      students: [
        { name: "이○빈", grade: "제일여고", note: "산업디자인" },
        { name: "김○현", grade: "창원고", note: "산업디자인" },
        { name: "윤○빈", grade: "제일여고", note: "공예디자인" },
        { name: "심○채", grade: "무학여고", note: "공예디자인" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    // 청강대
    {
      university: "청강대학교",
      department: "경기",
      students: [
        { name: "박○민", grade: "마산고", note: "웹툰만화콘텐츠" }
      ],
      category: "지역사립대",
      color: "bg-yellow-100 border-yellow-300"
    }
  ];

  const totalStudents = admissionResults.reduce((sum, uni) => sum + uni.students.length, 0);
  const seoulStudents = admissionResults.filter(uni => uni.category === "서울/ 수도권").reduce((sum, uni) => sum + uni.students.length, 0);
  const nationalStudents = admissionResults.filter(uni => uni.category === "지역거점국립대").reduce((sum, uni) => sum + uni.students.length, 0);
  const totalUniversities = admissionResults.length;

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
                  합격자명단 메인으로
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                2024학년도 합격자 명단
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                코코미술학원의 체계적인 교육으로 이루어낸 소중한 성과입니다
              </p>
              
              {/* Statistics */}
              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{totalStudents}명</div>
                  <div className="text-primary-100">총 합격자</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{totalUniversities}개</div>
                  <div className="text-primary-100">합격 대학교</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{seoulStudents}명</div>
                  <div className="text-primary-100">서울/수도권</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{nationalStudents}명</div>
                  <div className="text-primary-100">거점국립대</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                대학별 합격 현황
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                2024학년도 입시에서 코코미술학원 학생들이 거둔 우수한 성과를 확인하세요.
                체계적인 교육과 개별 맞춤 지도의 결실입니다.
              </p>
            </div>
            
            <div className="grid gap-6">
              {admissionResults.map((result, index) => (
                <Card key={index} className={`${result.color} transition-all duration-300 hover:shadow-lg border-2`}>
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
              2024학년도 성과를 이어가세요
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