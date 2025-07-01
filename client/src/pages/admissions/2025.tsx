import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2025() {
  const admissionResults = [
    // 서울과학기술대
    {
      university: "서울과학기술대학교",
      department: "서울",
      students: [
        { name: "구○윤", grade: "명덕고", note: "도예" }
      ],
      category: "서울/ 수도권",
      color: "bg-blue-100 border-blue-300"
    },
    // 숙명여대
    {
      university: "숙명여자대학교",
      department: "서울",
      students: [
        { name: "조○율", grade: "무학여고", note: "시각영상디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-pink-100 border-pink-300"
    },
    // 서경대
    {
      university: "서경대학교",
      department: "서울",
      students: [
        { name: "김○리", grade: "경남예술고", note: "VD비주얼디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-red-100 border-red-300"
    },
    // 성신여대
    {
      university: "성신여자대학교",
      department: "서울",
      students: [
        { name: "조○빈", grade: "경원고", note: "창의융합" }
      ],
      category: "서울/ 수도권",
      color: "bg-purple-100 border-purple-300"
    },
    // 동덕여대
    {
      university: "동덕여자대학교",
      department: "서울",
      students: [
        { name: "조○율", grade: "무학여고", note: "미디어디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-amber-100 border-amber-300"
    },
    // 경기대
    {
      university: "경기대학교",
      department: "수원",
      students: [
        { name: "이○민", grade: "성지여고", note: "디자인비즈" },
        { name: "서○우", grade: "제일고", note: "디자인비즈" }
      ],
      category: "서울/ 수도권",
      color: "bg-green-100 border-green-300"
    },
    // 인천대
    {
      university: "인천대학교",
      department: "인천",
      students: [
        { name: "성○연", grade: "구암고", note: "디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-teal-100 border-teal-300"
    },
    // 한양대(에리카)
    {
      university: "한양대학교",
      department: "에리카캠퍼스",
      students: [
        { name: "박○빈", grade: "마여고", note: "디자인" },
        { name: "구○임", grade: "칠원고", note: "디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 건국대(글로컬)
    {
      university: "건국대학교",
      department: "글로컬캠퍼스",
      students: [
        { name: "박○람", grade: "성지여고", note: "조형예술" },
        { name: "이○민", grade: "성지여고", note: "조형예술" }
      ],
      category: "서울/ 수도권",
      color: "bg-rose-100 border-rose-300"
    },
    // 홍익대(세종)
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "송○규", grade: "함안고", note: "디자인컨버전스" }
      ],
      category: "세종권",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 예원예술대
    {
      university: "예원예술대학교",
      department: "임실",
      students: [
        { name: "왕○윤", grade: "태봉고", note: "귀금속주얼리" }
      ],
      category: "지역사립대",
      color: "bg-violet-100 border-violet-300"
    },
    // 상명대(천안)
    {
      university: "상명대학교",
      department: "천안캠퍼스",
      students: [
        { name: "정○아", grade: "구암고", note: "디자인학부" },
        { name: "권○재", grade: "사파고", note: "디자인학부" },
        { name: "이○해", grade: "제일고", note: "AI미디어컨텐츠" },
        { name: "민○경", grade: "진해여고", note: "AI미디어컨텐츠" },
        { name: "김○희", grade: "경원고", note: "AI미디어컨텐츠" },
        { name: "조○빈", grade: "경원고", note: "자유전공" }
      ],
      category: "지역사립대",
      color: "bg-stone-100 border-stone-300"
    },
    // 백석대
    {
      university: "백석대학교",
      department: "천안",
      students: [
        { name: "이○은", grade: "삼진고", note: "디자인영상학부" }
      ],
      category: "지역사립대",
      color: "bg-zinc-100 border-zinc-300"
    },
    // 공주대
    {
      university: "공주대학교",
      department: "공주",
      students: [
        { name: "신○원", grade: "제일여고", note: "주얼리금속" },
        { name: "서○우", grade: "제일고", note: "가구리빙" }
      ],
      category: "지역사립대",
      color: "bg-neutral-100 border-neutral-300"
    },
    // 호서대
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "박○용", grade: "김해고", note: "시각디자인" },
        { name: "정○후", grade: "신월고", note: "디자인스쿨" },
        { name: "김○안", grade: "진해여고", note: "디자인스쿨" },
        { name: "유○정", grade: "세화여고", note: "디자인스쿨" }
      ],
      category: "지역사립대",
      color: "bg-slate-100 border-slate-300"
    },
    // 남서울대
    {
      university: "남서울대학교",
      department: "천안",
      students: [
        { name: "황○경", grade: "남지고", note: "영상예술디자인과" }
      ],
      category: "지역사립대",
      color: "bg-gray-100 border-gray-300"
    },
    // 청주대
    {
      university: "청주대학교",
      department: "청주",
      students: [
        { name: "이○해", grade: "제일고", note: "디지털미디어" }
      ],
      category: "지역사립대",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 한밭대
    {
      university: "한밭대학교",
      department: "대전",
      students: [
        { name: "김○희", grade: "한일여고", note: "산업디자인" },
        { name: "조○현", grade: "태봉고", note: "산업디자인" },
        { name: "성○연", grade: "구암고", note: "산업디자인" },
        { name: "하○린", grade: "중앙고", note: "산업디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-lime-100 border-lime-300"
    },
    // 대전대
    {
      university: "대전대학교",
      department: "대전",
      students: [
        { name: "최○인", grade: "제일고", note: "커뮤니케이션" }
      ],
      category: "지역사립대",
      color: "bg-violet-100 border-violet-300"
    },
    // 목원대
    {
      university: "목원대학교",
      department: "대전",
      students: [
        { name: "권○재", grade: "사파고", note: "섬유패션" },
        { name: "박○영", grade: "태봉고", note: "도자디자인" }
      ],
      category: "지역사립대",
      color: "bg-amber-100 border-amber-300"
    },
    // 한국전통대
    {
      university: "한국전통대학교",
      department: "서울",
      students: [
        { name: "박○영", grade: "태봉고", note: "전통도예학과" }
      ],
      category: "지역사립대",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 한남대
    {
      university: "한남대학교",
      department: "대전",
      students: [
        { name: "이○화", grade: "제일고", note: "미술교육" }
      ],
      category: "지역사립대",
      color: "bg-green-100 border-green-300"
    },
    // 경북대
    {
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "홍○민", grade: "마여고", note: "패션섬유" },
        { name: "권○재", grade: "사파고", note: "패션섬유" },
        { name: "정○후", grade: "신월고", note: "패션섬유" }
      ],
      category: "지역거점국립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 계명대
    {
      university: "계명대학교",
      department: "대구",
      students: [
        { name: "최○영", grade: "구암고", note: "웹툰" },
        { name: "서○서", grade: "마여고", note: "텍스타일" },
        { name: "정○원", grade: "마산고", note: "시각디자인" },
        { name: "김○리", grade: "경남예술고", note: "시각디자인" },
        { name: "김○원", grade: "사파고", note: "시각디자인" },
        { name: "서○우", grade: "제일고", note: "산업디자인" },
        { name: "김○현", grade: "경일고", note: "산업디자인" },
        { name: "서○빈", grade: "성지여고", note: "공예디자인" },
        { name: "윤○린", grade: "내서여고", note: "영상애니" }
      ],
      category: "지역사립대",
      color: "bg-teal-100 border-teal-300"
    },
    // 영남대
    {
      university: "영남대학교",
      department: "대구",
      students: [
        { name: "최○석", grade: "명곡고", note: "산업디자인" },
        { name: "서○희", grade: "마여고", note: "산업디자인" },
        { name: "김○희", grade: "경원고", note: "시각디자인" },
        { name: "김○훈", grade: "영운고", note: "시각디자인" },
        { name: "김○원", grade: "사파고", note: "시각디자인" },
        { name: "김○리", grade: "경남예술고", note: "시각디자인" },
        { name: "민○경", grade: "진해여고", note: "시각디자인" },
        { name: "황○민", grade: "봉림고", note: "생활제품" }
      ],
      category: "지역사립대",
      color: "bg-emerald-100 border-emerald-300"
    },
    // 대가대
    {
      university: "대가대학교",
      department: "경산",
      students: [
        { name: "이○빈", grade: "태봉고", note: "금속주얼리" },
        { name: "김○원", grade: "봉림고", note: "금속주얼리" },
        { name: "최○서", grade: "함안고", note: "산업디자인" },
        { name: "최○현", grade: "제일고", note: "산업디자인" },
        { name: "김○영", grade: "구산고", note: "산업디자인" },
        { name: "김○엽", grade: "신월고", note: "시각영상" },
        { name: "임○준", grade: "중앙고", note: "시각영상" },
        { name: "민○경", grade: "진해여고", note: "시각영상" },
        { name: "정○후", grade: "신월고", note: "시각영상" },
        { name: "정○정", grade: "세화여고", note: "시각영상" },
        { name: "최○은", grade: "사파고", note: "시각영상" },
        { name: "정○연", grade: "내서여고", note: "시각영상" },
        { name: "백○우", grade: "용원고", note: "패션" },
        { name: "안○민", grade: "삼진고", note: "패션" }
      ],
      category: "지역사립대",
      color: "bg-rose-100 border-rose-300"
    },
    // 대구대
    {
      university: "대구대학교",
      department: "대구",
      students: [
        { name: "최○영", grade: "구암고", note: "웹툰애니" },
        { name: "강○희", grade: "한일여고", note: "웹툰애니" },
        { name: "표○민", grade: "구암고", note: "산업디자인" },
        { name: "이○서", grade: "칠원고", note: "산업디자인" },
        { name: "최○인", grade: "제일고", note: "시각디자인" },
        { name: "김○희", grade: "경원고", note: "시각디자인" },
        { name: "서○빈", grade: "성지여고", note: "시각디자인" },
        { name: "안○민", grade: "삼진고", note: "패션디자인" }
      ],
      category: "지역사립대",
      color: "bg-indigo-100 border-indigo-300"
    },
    // 울산대
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "최○은", grade: "사파고", note: "디자인융합" },
        { name: "이○민", grade: "문성고", note: "디자인융합" },
        { name: "심○영", grade: "관광고", note: "디자인융합" },
        { name: "최○현", grade: "제일고", note: "디자인융합" },
        { name: "김○원", grade: "봉림고", note: "디자인융합" },
        { name: "이○빈", grade: "태봉고", note: "예술학부" }
      ],
      category: "지역거점국립대",
      color: "bg-yellow-100 border-yellow-300"
    },
    // 부산대
    {
      university: "부산대학교",
      department: "부산",
      students: [
        { name: "조○빈", grade: "경원고", note: "디자인앤테크놀로지" }
      ],
      category: "지역거점국립대",
      color: "bg-orange-100 border-orange-300"
    },
    // 경성대
    {
      university: "경성대학교",
      department: "부산",
      students: [
        { name: "임○준", grade: "중앙고", note: "산업디자인" },
        { name: "서○우", grade: "제일고", note: "산업디자인" },
        { name: "김○안", grade: "진해여고", note: "시각디자인" },
        { name: "정○정", grade: "세화여고", note: "시각디자인" },
        { name: "박○용", grade: "김해고", note: "시각디자인" },
        { name: "황○민", grade: "봉림고", note: "금속공예" },
        { name: "이○은", grade: "삼진고", note: "텍스타일디자인" }
      ],
      category: "지역사립대",
      color: "bg-slate-100 border-slate-300"
    },
    // 동서대
    {
      university: "동서대학교",
      department: "부산",
      students: [
        { name: "표○민", grade: "구암고", note: "디자인학부" },
        { name: "조○새", grade: "마여고", note: "디자인학부" },
        { name: "강○희", grade: "합포고", note: "디자인학부" },
        { name: "김○현", grade: "경일고", note: "디자인학부" },
        { name: "박○용", grade: "김해고", note: "디자인학부" },
        { name: "김○엽", grade: "신월고", note: "디자인학부" },
        { name: "유○정", grade: "세화여고", note: "디자인학부" },
        { name: "김○희", grade: "한일여고", note: "디자인학부" },
        { name: "이○해", grade: "제일고", note: "디자인학부" },
        { name: "최○현", grade: "영운고", note: "디자인학부" },
        { name: "민○경", grade: "진해여고", note: "영상애니메이션" },
        { name: "이○해", grade: "제일고", note: "영상애니메이션" },
        { name: "윤○현", grade: "영운고", note: "패션" },
        { name: "안○민", grade: "삼진고", note: "패션" }
      ],
      category: "지역사립대",
      color: "bg-blue-100 border-blue-300"
    },
    // 동명대
    {
      university: "동명대학교",
      department: "부산",
      students: [
        { name: "심○영", grade: "관광고", note: "시각디자인" },
        { name: "남○화", grade: "내서여고", note: "시각디자인" },
        { name: "이○화", grade: "제일고", note: "시각디자인" },
        { name: "이○해", grade: "제일고", note: "시각디자인" },
        { name: "박○용", grade: "김해고", note: "시각디자인" },
        { name: "정○진", grade: "내서여고", note: "시각디자인" },
        { name: "최○영", grade: "구암고", note: "웹툰애니" },
        { name: "김○경", grade: "한일여고", note: "웹툰애니" },
        { name: "김○은", grade: "마여고", note: "웹툰애니" },
        { name: "안○원", grade: "마여고", note: "웹툰애니" },
        { name: "황○경", grade: "검정고시", note: "웹툰애니" }
      ],
      category: "지역사립대",
      color: "bg-neutral-100 border-neutral-300"
    },
    // 동의대
    {
      university: "동의대학교",
      department: "부산",
      students: [
        { name: "김○훈", grade: "영운고", note: "시각디자인" },
        { name: "최○은", grade: "사파고", note: "시각디자인" },
        { name: "이○화", grade: "제일고", note: "산업디자인" },
        { name: "김○원", grade: "사파고", note: "산업디자인" },
        { name: "이○민", grade: "문성고", note: "공예디자인" }
      ],
      category: "지역사립대",
      color: "bg-gray-100 border-gray-300"
    },
    // 서원대
    {
      university: "서원대학교",
      department: "청주",
      students: [
        { name: "이○재", grade: "창신고", note: "디자인" }
      ],
      category: "지역사립대",
      color: "bg-orange-100 border-orange-300"
    },
    // 경상대
    {
      university: "경상대학교",
      department: "경남",
      students: [
        { name: "이○화", grade: "제일고", note: "미술교육" },
        { name: "하○민", grade: "함안고", note: "미술교육" }
      ],
      category: "지역거점국립대",
      color: "bg-red-100 border-red-300"
    },
    // 창원대
    {
      university: "창원대학교",
      department: "경남",
      students: [
        { name: "정○진", grade: "내서여고", note: "시각디자인" },
        { name: "서○서", grade: "마여고", note: "제품환경" },
        { name: "이○서", grade: "칠원고", note: "제품환경(장학생)" },
        { name: "백○우", grade: "용원고", note: "공예" },
        { name: "홍○민", grade: "마여고", note: "공예" },
        { name: "신○미", grade: "마여고", note: "공예" },
        { name: "황○윤", grade: "봉림고", note: "공예" }
      ],
      category: "지역거점국립대",
      color: "bg-green-100 border-green-300"
    },
    // 경남대
    {
      university: "경남대학교",
      department: "창원",
      students: [
        { name: "강○희", grade: "합포고", note: "미술교육" },
        { name: "박○빈", grade: "마여고", note: "미술교육" },
        { name: "조○우", grade: "중앙고", note: "미술교육" },
        { name: "이○화", grade: "제일고", note: "미술교육" },
        { name: "윤○희", grade: "마여고", note: "웹툰디자인" },
        { name: "곽○지", grade: "영산고", note: "웹툰디자인" },
        { name: "정○원", grade: "마산고", note: "웹툰디자인" }
      ],
      category: "지역사립대",
      color: "bg-zinc-100 border-zinc-300"
    },
    // 영산대
    {
      university: "영산대학교",
      department: "부산",
      students: [
        { name: "남○화", grade: "내서여고", note: "만화애니" },
        { name: "김○이", grade: "구암고", note: "AI그래픽컨텐츠" }
      ],
      category: "지역사립대",
      color: "bg-teal-100 border-teal-300"
    },
    // 경일대
    {
      university: "경일대학교",
      department: "경산",
      students: [
        { name: "김○경", grade: "한일여고", note: "만화애니" }
      ],
      category: "지역사립대",
      color: "bg-purple-100 border-purple-300"
    },
    // 동국대(WISE)
    {
      university: "동국대학교",
      department: "WISE캠퍼스",
      students: [
        { name: "김○영", grade: "내서여고", note: "시각디자인" },
        { name: "이○빈", grade: "태봉고", note: "불교미술" },
        { name: "노○준", grade: "창신고", note: "웹툰콘텐츠" }
      ],
      category: "지역사립대",
      color: "bg-lime-100 border-lime-300"
    },
    // 세명대
    {
      university: "세명대학교",
      department: "제천",
      students: [
        { name: "최○서", grade: "함안고", note: "시각디자인" }
      ],
      category: "지역사립대",
      color: "bg-pink-100 border-pink-300"
    },
    // 신라대
    {
      university: "신라대학교",
      department: "부산",
      students: [
        { name: "남○화", grade: "내서여고", note: "시각디자인" },
        { name: "정○진", grade: "내서여고", note: "시각디자인" }
      ],
      category: "지역사립대",
      color: "bg-cyan-100 border-cyan-300"
    },
    // 전주대
    {
      university: "전주대학교",
      department: "전주",
      students: [
        { name: "이○재", grade: "창신고", note: "산업디자인" }
      ],
      category: "지역사립대",
      color: "bg-red-100 border-red-300"
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                2025학년도 합격자 명단
              </h1>
              
              {/* 2024년 수상 실적 배너 */}
              <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border border-amber-200/50 rounded-2xl p-8 mb-8 mx-auto max-w-6xl shadow-2xl">
                {/* 배경 장식 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-300/20 to-yellow-400/20 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5zM6 16v-4h8v4H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      2024년 주요 수상 실적
                    </h3>
                    <p className="text-gray-600 text-lg">검증된 실력으로 이루어낸 성과</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-400/5 rounded-xl group-hover:from-yellow-400/10 group-hover:to-amber-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">1st</span>
                        </div>
                        <div className="text-amber-600 text-xl font-bold mb-2">대상</div>
                        <div className="text-gray-700 font-medium text-sm leading-relaxed">전국고등학생<br/>미술실기대회</div>
                      </div>
                    </div>
                    
                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-amber-400/5 rounded-xl group-hover:from-orange-400/10 group-hover:to-amber-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <span className="text-white text-lg font-bold">★</span>
                        </div>
                        <div className="text-orange-600 text-xl font-bold mb-2">최우수상</div>
                        <div className="text-gray-700 font-medium text-sm leading-relaxed">한국미술교육학회<br/>실기대회</div>
                      </div>
                    </div>
                    
                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-400/5 rounded-xl group-hover:from-amber-400/10 group-hover:to-yellow-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">🏅</span>
                        </div>
                        <div className="text-amber-600 text-xl font-bold mb-2">금상</div>
                        <div className="text-gray-700 font-medium text-sm leading-relaxed">경남미술실기대회</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-primary-100 mb-8">
                코코미술학원의 체계적인 교육으로 이루어낸 소중한 성과입니다
              </p>
              
              {/* Statistics */}
              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{totalStudents}명</div>
                  <div className="text-blue-100">총 합격자</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{totalUniversities}개</div>
                  <div className="text-blue-100">합격 대학교</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{seoulStudents}명</div>
                  <div className="text-blue-100">서울/수도권</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white">{nationalStudents}명</div>
                  <div className="text-blue-100">거점국립대</div>
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
                2025학년도 입시에서 코코미술학원 학생들이 거둔 우수한 성과를 확인하세요.
                체계적인 교육과 개별 맞춤 지도의 결실입니다.
              </p>
            </div>
            
            <div className="grid gap-6">
              {admissionResults.map((result, index) => (
                <Card key={index} className={`${result.color} transition-all duration-300 hover:shadow-lg border-2`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
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
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2025학년도 성과를 이어가세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              검증된 교육 시스템으로 여러분의 합격을 현실로 만들어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
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