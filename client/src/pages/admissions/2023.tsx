import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2023() {
  const admissionResults = [
    // 국민대
    {
      university: "국민대학교",
      department: "서울",
      students: [
        { name: "강○별", grade: "용호고", note: "AI디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-red-100 border-red-300"
    },
    // 서울여대
    {
      university: "서울여자대학교",
      department: "서울",
      students: [
        { name: "전○은", grade: "용호고", note: "공예" }
      ],
      category: "서울/ 수도권",
      color: "bg-purple-100 border-purple-300"
    },
    // 성신여대
    {
      university: "성신여자대학교",
      department: "서울",
      students: [
        { name: "김○서", grade: "무학여고", note: "산업디자인" },
        { name: "장○연", grade: "마여고", note: "산업디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-pink-100 border-pink-300"
    },
    // 동덕여대
    {
      university: "동덕여자대학교",
      department: "서울",
      students: [
        { name: "손○아", grade: "무학여고", note: "디지털공예" }
      ],
      category: "서울/ 수도권",
      color: "bg-amber-100 border-amber-300"
    },
    // 덕성여대
    {
      university: "덕성여자대학교",
      department: "서울",
      students: [
        { name: "손○아", grade: "무학여고", note: "아트앤디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-green-100 border-green-300"
    },
    // 삼육대
    {
      university: "삼육대학교",
      department: "서울",
      students: [
        { name: "손○준", grade: "대청고", note: "아트앤디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 한성대
    {
      university: "한성대학교",
      department: "서울",
      students: [
        { name: "조○경", grade: "경남외고", note: "ICT디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 서울예대
    {
      university: "서울예술대학교",
      department: "안산",
      students: [
        { name: "한○솔", grade: "명덕고", note: "공간디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-violet-100 border-violet-300"
    },
    // 단국대(죽전)
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "남○영", grade: "대암고", note: "커뮤니케이션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-orange-100 border-orange-300"
    },
    // 명지대
    {
      university: "명지대학교",
      department: "자연캠퍼스",
      students: [
        { name: "김○현", grade: "제일여고", note: "시각디자인" },
        { name: "김○림", grade: "경남로봇고", note: "시각디자인" },
        { name: "제○안", grade: "의령고", note: "산업디자인" },
        { name: "손○아", grade: "무학여고", note: "산업디자인" },
        { name: "한○솔", grade: "명덕고", note: "영상디자인" },
        { name: "최○은", grade: "명덕고", note: "영상디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 수원대
    {
      university: "수원대학교",
      department: "수원",
      students: [
        { name: "한○솔", grade: "명덕고", note: "디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-lime-100 border-lime-300"
    },
    // 인천가톨릭대
    {
      university: "인천가톨릭대학교",
      department: "인천",
      students: [
        { name: "남○영", grade: "대암고", note: "융합디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-teal-100 border-teal-300"
    },
    // 연세대(원주)
    {
      university: "연세대학교",
      department: "원주캠퍼스",
      students: [
        { name: "강○별", grade: "용호고", note: "생활디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-blue-100 border-blue-300"
    },
    // 홍익대(세종)
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "박○민", grade: "대산고", note: "디자인컨버전스" }
      ],
      category: "세종권",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 건국대(글로컬)
    {
      university: "건국대학교",
      department: "글로컬캠퍼스",
      students: [
        { name: "권○현", grade: "명덕고", note: "산업디자인" },
        { name: "한○솔", grade: "명덕고", note: "실내디자인" },
        { name: "전○은", grade: "용호고", note: "조형예술" }
      ],
      category: "서울/ 수도권",
      color: "bg-rose-100 border-rose-300"
    },
    // 호서대
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "문○영", grade: "명덕고", note: "실내디자인" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 남서울대
    {
      university: "남서울대학교",
      department: "천안",
      students: [
        { name: "김○민", grade: "검정고시", note: "시각디자인" },
        { name: "강○형", grade: "창신고", note: "시각디자인" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    // 백석대
    {
      university: "백석대학교",
      department: "천안",
      students: [
        { name: "임○현", grade: "마산여고", note: "디자인영상" }
      ],
      category: "지역사립대",
      color: "bg-gray-100 border-gray-300"
    },
    // 백석예술대
    {
      university: "백석예술대학교",
      department: "서울",
      students: [
        { name: "김○원", grade: "검정고시", note: "영상학부" },
        { name: "김○우", grade: "검정고시", note: "영상학부" }
      ],
      category: "지역사립대",
      color: "bg-red-100 border-red-300"
    },
    // 공주대
    {
      university: "공주대학교",
      department: "공주",
      students: [
        { name: "하○빈", grade: "무학여고", note: "금속공예" },
        { name: "권○용", grade: "제일고", note: "가구리빙" }
      ],
      category: "지역사립대",
      color: "bg-stone-100 border-stone-300"
    },
    // 목원대
    {
      university: "목원대학교",
      department: "대전",
      students: [
        { name: "김○규", grade: "창신고", note: "시각커뮤니케이션" }
      ],
      category: "지역사립대",
      color: "bg-orange-100 border-orange-300"
    },
    // 한남대
    {
      university: "한남대학교",
      department: "대전",
      students: [
        { name: "김○규", grade: "창신고", note: "미술교육" }
      ],
      category: "지역사립대",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 동양대
    {
      university: "동양대학교",
      department: "영주",
      students: [
        { name: "신○름", grade: "봉림고", note: "디자인학부" }
      ],
      category: "지역사립대",
      color: "bg-pink-100 border-pink-300"
    },
    // 중부대
    {
      university: "중부대학교",
      department: "고양",
      students: [
        { name: "신○름", grade: "봉림고", note: "산업디자인" }
      ],
      category: "지역사립대",
      color: "bg-slate-100 border-slate-300"
    },
    // 경북대
    {
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "권○현", grade: "명덕고", note: "섬유패션" },
        { name: "정○영", grade: "명덕고", note: "섬유패션" },
        { name: "이○우", grade: "문성고", note: "섬유패션" }
      ],
      category: "지역거점국립대",
      color: "bg-rose-100 border-rose-300"
    },
    // 계명대
    {
      university: "계명대학교",
      department: "대구",
      students: [
        { name: "황○현", grade: "마여고", note: "산업디자인" },
        { name: "조○경", grade: "경남외고", note: "산업디자인" },
        { name: "권○연", grade: "제일여고", note: "산업디자인" },
        { name: "유○현", grade: "마여고", note: "시각디자인" },
        { name: "최○은", grade: "명덕고", note: "시각디자인" },
        { name: "정○영", grade: "명덕고", note: "패션디자인" },
        { name: "정○빈", grade: "내서여고", note: "공예" },
        { name: "이○인", grade: "한일여고", note: "공예" },
        { name: "이○원", grade: "한일여고", note: "공예" },
        { name: "전○은", grade: "용호고", note: "공예" },
        { name: "권○현", grade: "명덕고", note: "텍스타일" },
        { name: "박○은", grade: "명지여고", note: "텍스타일" }
      ],
      category: "지역사립대",
      color: "bg-violet-100 border-violet-300"
    },
    // 영남대
    {
      university: "영남대학교",
      department: "대구",
      students: [
        { name: "남○영", grade: "대암고", note: "산업디자인" },
        { name: "제○안", grade: "의령고", note: "산업디자인" },
        { name: "정○빈", grade: "내서여고", note: "생활조형" }
      ],
      category: "지역사립대",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 대구가톨릭대
    {
      university: "대구가톨릭대학교",
      department: "대구",
      students: [
        { name: "강○훈", grade: "창신고", note: "산업디자인" },
        { name: "신○서", grade: "창원여고", note: "산업디자인" },
        { name: "김○", grade: "창원남고", note: "산업디자인" },
        { name: "김○민", grade: "검정고시", note: "산업디자인" },
        { name: "조○민", grade: "창신고", note: "산업디자인" },
        { name: "권○용", grade: "제일고", note: "산업디자인" },
        { name: "손○준", grade: "대청고", note: "산업디자인" },
        { name: "김○준", grade: "창원남고", note: "산업디자인" },
        { name: "서○정", grade: "세화여고", note: "시각디자인" },
        { name: "이○우", grade: "문성고", note: "패션디자인" },
        { name: "김○현", grade: "태봉고", note: "패션디자인" },
        { name: "이○현", grade: "마산고", note: "패션디자인" },
        { name: "박○은", grade: "명지여고", note: "디지털디자인" },
        { name: "안○희", grade: "경일여고", note: "디지털디자인" },
        { name: "이○원", grade: "한일여고", note: "디지털디자인" }
      ],
      category: "지역사립대",
      color: "bg-stone-100 border-stone-300"
    },
    // 대구대
    {
      university: "대구대학교",
      department: "대구",
      students: [
        { name: "이○환", grade: "마산고", note: "시각디자인" },
        { name: "박○영", grade: "용호고", note: "산업디자인" },
        { name: "김○균", grade: "중앙고", note: "산업디자인" },
        { name: "김○준", grade: "창원남고", note: "산업디자인" },
        { name: "신○서", grade: "창원여고", note: "산업디자인" },
        { name: "표○욱", grade: "마산고", note: "실내건축" },
        { name: "한○윤", grade: "마산고", note: "실내건축" },
        { name: "노○민", grade: "가포고", note: "실내건축" },
        { name: "이○우", grade: "문성고", note: "패션디자인" },
        { name: "김○현", grade: "태봉고", note: "패션디자인" },
        { name: "박○은", grade: "명지여고", note: "서비스디자인" },
        { name: "강○훈", grade: "창신고", note: "생활조형" },
        { name: "손○준", grade: "대청고", note: "아트앤디자인" }
      ],
      category: "지역사립대",
      color: "bg-lime-100 border-lime-300"
    },
    // 울산대
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "이○현", grade: "마산고", note: "섬유디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-teal-100 border-teal-300"
    },
    // 창원대
    {
      university: "창원대학교",
      department: "경기",
      students: [
        { name: "유○현", grade: "마여고", note: "시각디자인" },
        { name: "권○현", grade: "명덕고", note: "산업디자인" },
        { name: "최○원", grade: "내서여고", note: "산업디자인" },
        { name: "조○세", grade: "마산여고", note: "산업디자인" },
        { name: "전○은", grade: "용호고", note: "한국화" },
        { name: "안○희", grade: "경일여고", note: "한국화" },
        { name: "김○중", grade: "김해고", note: "한국화" },
        { name: "조○아", grade: "제일여고", note: "공예" },
        { name: "김○정", grade: "태봉고", note: "조소" }
      ],
      category: "지역거점국립대",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 부경대
    {
      university: "부경대학교",
      department: "부산",
      students: [
        { name: "조○세", grade: "마산여고", note: "시각디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 경성대
    {
      university: "경성대학교",
      department: "부산",
      students: [
        { name: "한○경", grade: "경일여고", note: "산업디자인" },
        { name: "전○은", grade: "용호고", note: "금속공예" },
        { name: "김○희", grade: "경일여고", note: "현대미술" },
        { name: "하○빈", grade: "무학여고", note: "금속공예" },
        { name: "조○민", grade: "창신고", note: "금속공예" },
        { name: "이○현", grade: "영운고", note: "현대미술" }
      ],
      category: "지역사립대",
      color: "bg-red-100 border-red-300"
    },
    // 동서대
    {
      university: "동서대학교",
      department: "부산",
      students: [
        { name: "천○우", grade: "성지여고", note: "디자인학부" },
        { name: "손○준", grade: "대청고", note: "디자인학부" },
        { name: "김○민", grade: "검정고시", note: "디자인학부" },
        { name: "문○지", grade: "토월고", note: "디자인학부" },
        { name: "서○정", grade: "세화여고", note: "디자인학부" },
        { name: "한○경", grade: "경일여고", note: "디자인학부" },
        { name: "박○은", grade: "명지여고", note: "디자인학부" },
        { name: "안○희", grade: "경일여고", note: "디자인학부" },
        { name: "김○현", grade: "제일여고", note: "디자인학부" },
        { name: "정○혜", grade: "내서여고", note: "디자인학부" },
        { name: "이○인", grade: "한일전산여고", note: "디자인학부" },
        { name: "강○훈", grade: "창신고", note: "디자인학부" },
        { name: "이○우", grade: "문성고", note: "패션디자인" },
        { name: "김○현", grade: "태봉고", note: "패션디자인" },
        { name: "김○영", grade: "내서여고", note: "패션디자인" },
        { name: "강○은", grade: "함안고", note: "디자인학부" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 동의대
    {
      university: "동의대학교",
      department: "부산",
      students: [
        { name: "유○현", grade: "마여고", note: "산업디자인" },
        { name: "이○인", grade: "한일여고", note: "시각디자인" },
        { name: "이○원", grade: "한일여고", note: "시각디자인" },
        { name: "이○현", grade: "영운고", note: "공예" }
      ],
      category: "지역사립대",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 동명대
    {
      university: "동명대학교",
      department: "부산",
      students: [
        { name: "강○훈", grade: "창신고", note: "시각디자인" },
        { name: "박○영", grade: "용호고", note: "시각디자인" },
        { name: "한○경", grade: "경일여고", note: "시각디자인" },
        { name: "김○은", grade: "부산미용고", note: "시각디자인" },
        { name: "김○우", grade: "검정고시", note: "웹툰애니메이션" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    // 동국대(경주)
    {
      university: "동국대학교",
      department: "경주캠퍼스",
      students: [
        { name: "김○우", grade: "검정고시", note: "웹툰콘텐츠" },
        { name: "심○연", grade: "삼진고", note: "디자인미술" },
        { name: "김○림", grade: "경남로봇고", note: "문화산업디자인" }
      ],
      category: "지역사립대",
      color: "bg-amber-100 border-amber-300"
    },
    // 원광대
    {
      university: "원광대학교",
      department: "익산",
      students: [
        { name: "하○빈", grade: "무학여고", note: "금속주얼리" }
      ],
      category: "지역사립대",
      color: "bg-purple-100 border-purple-300"
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
              <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{totalStudents}명</div>
                  <div className="text-blue-100">총 합격자</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{seoulStudents}명</div>
                  <div className="text-blue-100">서울/ 수도권</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{nationalStudents}명</div>
                  <div className="text-blue-100">국립대</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{totalUniversities}개교</div>
                  <div className="text-blue-100">합격 대학</div>
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
                2023학년도 대학별 합격 현황
              </h2>
              <p className="text-xl text-gray-600">
                우수한 교육 시스템으로 이루어낸 성과입니다.
              </p>
            </div>
            
            <div className="grid gap-8">
              {admissionResults.map((result, index) => (
                <Card key={index} className={`${result.color} border-2`}>
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