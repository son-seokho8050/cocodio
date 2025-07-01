import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2022() {
  const admissionResults = [
    // 건국대(서울)
    {
      university: "건국대학교",
      department: "서울캠퍼스",
      students: [
        { name: "원○민", grade: "성지여고", note: "의상디자인학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    // 중앙대
    {
      university: "중앙대학교",
      department: "안성캠퍼스",
      students: [
        { name: "윤○정", grade: "명덕고", note: "시각디자인학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    // 경희대
    {
      university: "경희대학교",
      department: "국제캠퍼스",
      students: [
        { name: "정○훈", grade: "용마고", note: "환경조경디자인학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
    // 단국대
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "정○훈", grade: "용마고", note: "커뮤니케이션디자인학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    // 명지대
    {
      university: "명지대학교",
      department: "자연캠퍼스",
      students: [
        { name: "차○아", grade: "김해여고", note: "패션디자인학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
    },
    // 용인대
    {
      university: "용인대학교",
      department: "용인",
      students: [
        { name: "정○훈", grade: "용마고", note: "미디어디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-yellow-50 via-slate-50 to-white border-0 ring-1 ring-yellow-200/40 shadow-[0_4px_15px_rgba(234,179,8,0.06)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
    },
    // 경기대
    {
      university: "경기대학교",
      department: "수원캠퍼스",
      students: [
        { name: "고○지", grade: "명덕고", note: "디자인비즈학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-emerald-50 via-slate-50 to-white border-0 ring-1 ring-emerald-200/40 shadow-[0_4px_15px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]"
    },
    // 홍익대(세종)
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "김○아", grade: "진해여고 졸업", note: "디자인컨버전스학과" }
      ],
      category: "세종권",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    },
    // 건국대(글로컬)
    {
      university: "건국대학교",
      department: "글로컬캠퍼스",
      students: [
        { name: "오○은", grade: "봉림고", note: "패션디자인학과" },
        { name: "변○경", grade: "마여고", note: "시각영상학과" },
        { name: "이○정", grade: "태봉고", note: "조형예술학과" },
        { name: "고○민", grade: "명덕고", note: "조형예술학과" },
        { name: "정○훈", grade: "용마고", note: "조형예술학과" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-lime-50 via-slate-50 to-white border-0 ring-1 ring-lime-200/40 shadow-[0_4px_15px_rgba(132,204,22,0.06)] hover:shadow-[0_8px_25px_rgba(132,204,22,0.1)]"
    },
    // 상명대(천안)
    {
      university: "상명대학교",
      department: "천안캠퍼스",
      students: [
        { name: "차○아", grade: "김해여고", note: "디자인학부" },
        { name: "정○민", grade: "제일여고", note: "디자인학부" },
        { name: "변○경", grade: "마여고", note: "디자인학부" },
        { name: "양○윤", grade: "사파고", note: "디자인학부" },
        { name: "정○훈", grade: "용마고", note: "디지털콘텐츠학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-teal-50 via-slate-50 to-white border-0 ring-1 ring-teal-200/40 shadow-[0_4px_15px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]"
    },
    // 백석대
    {
      university: "백석대학교",
      department: "천안",
      students: [
        { name: "정○유", grade: "제일여고", note: "디자인영상학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-cyan-50 via-slate-50 to-white border-0 ring-1 ring-cyan-200/40 shadow-[0_4px_15px_rgba(6,182,212,0.06)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]"
    },
    // 한밭대
    {
      university: "한밭대학교",
      department: "대전",
      students: [
        { name: "유○희", grade: "한일여고", note: "산업디자인학과" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
    },
    // 호서대
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "고○지", grade: "명덕고", note: "실내디자인학과" },
        { name: "조○정", grade: "구암고", note: "실내디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    // 남서울대
    {
      university: "남서울대학교",
      department: "천안",
      students: [
        { name: "김○영", grade: "합포고", note: "유리세라믹학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-pink-50 via-slate-50 to-white border-0 ring-1 ring-pink-200/40 shadow-[0_4px_15px_rgba(236,72,153,0.06)] hover:shadow-[0_8px_25px_rgba(236,72,153,0.1)]"
    },
    // 경북대
    {
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "문○은", grade: "문성고", note: "패션디자인학과" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    },
    // 계명대
    {
      university: "계명대학교",
      department: "대구",
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
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    },
    // 영남대
    {
      university: "영남대학교",
      department: "대구",
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
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    // 대구대
    {
      university: "대구대학교",
      department: "대구",
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
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
    // 대구가톨릭대
    {
      university: "대구가톨릭대학교",
      department: "대구",
      students: [
        { name: "홍○연", grade: "세화여고", note: "시각디자인학과" },
        { name: "정○하", grade: "무학여고", note: "시각디자인학과" },
        { name: "백○주", grade: "남지고", note: "산업디자인학과" },
        { name: "문○은", grade: "문성고", note: "패션디자인학과" },
        { name: "조○민", grade: "세화여고", note: "패션디자인학과" },
        { name: "김○층", grade: "창원남고", note: "패션디자인학과" },
        { name: "안○정", grade: "무학여고", note: "패션디자인학과" },
        { name: "박○은", grade: "대청고", note: "디지털디자인학과" },
        { name: "이○민", grade: "성민여고", note: "디지털디자인학과" },
        { name: "박○영", grade: "삼진고", note: "디지털디자인학과" },
        { name: "김○하", grade: "내서여고", note: "디지털디자인학과" },
        { name: "이○림", grade: "사파고", note: "금속공예학과" },
        { name: "이○영", grade: "진영고", note: "금속공예학과" },
        { name: "임○윤", grade: "명덕고", note: "금속공예학과" },
        { name: "조○정", grade: "구암고", note: "금속공예학과" },
        { name: "채○진", grade: "무학여고", note: "금속공예학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-stone-50 via-slate-50 to-white border-0 ring-1 ring-stone-200/40 shadow-[0_4px_15px_rgba(120,113,108,0.06)] hover:shadow-[0_8px_25px_rgba(120,113,108,0.1)]"
    },
    // 창원대
    {
      university: "창원대학교",
      department: "경남",
      students: [
        { name: "김○재", grade: "마여고", note: "시각디자인전공" },
        { name: "홍○주", grade: "삼진고", note: "공예전공" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
    },
    // 울산대
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "홍○진", grade: "마산공고", note: "섬유디자인전공" },
        { name: "조○근", grade: "남산고", note: "섬유디자인전공" },
        { name: "백○주", grade: "남지고", note: "산업디자인전공" },
        { name: "허○혁", grade: "창신고", note: "실내공간디자인전공" },
        { name: "이○영", grade: "진영고", note: "미술학과" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    // 동아대
    {
      university: "동아대학교",
      department: "부산",
      students: [
        { name: "박○은", grade: "대청고", note: "산업디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-rose-50 via-slate-50 to-white border-0 ring-1 ring-rose-200/40 shadow-[0_4px_15px_rgba(244,63,94,0.06)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.1)]"
    },
    // 동서대
    {
      university: "동서대학교",
      department: "부산",
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
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    // 동명대
    {
      university: "동명대학교",
      department: "부산",
      students: [
        { name: "곽○원", grade: "용마고", note: "시각디자인학과" },
        { name: "허○혁", grade: "창신고", note: "시각디자인학과" },
        { name: "유○영", grade: "남지고", note: "시각디자인학과" },
        { name: "이○빈", grade: "무학여고", note: "시각디자인학과" },
        { name: "차○지", grade: "대암고", note: "시각디자인학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    // 동의대
    {
      university: "동의대학교",
      department: "부산",
      students: [
        { name: "김○재", grade: "남지고", note: "시각디자인학과" },
        { name: "박○원", grade: "태봉고", note: "시각디자인학과" },
        { name: "김○하", grade: "내서여고", note: "산업디자인학과" },
        { name: "이○빈", grade: "무학여고", note: "산업디자인학과" },
        { name: "박○민", grade: "용마고", note: "공예학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-violet-50 via-slate-50 to-white border-0 ring-1 ring-violet-200/40 shadow-[0_4px_15px_rgba(139,92,246,0.06)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.1)]"
    }
  ];

  const totalStudents = admissionResults.reduce((sum, uni) => sum + uni.students.length, 0);
  const seoulStudents = admissionResults.filter(uni => uni.category === "서울/ 수도권").reduce((sum, uni) => sum + uni.students.length, 0);
  const nationalStudents = admissionResults.filter(uni => uni.category === "지역거점국립대").reduce((sum, uni) => sum + uni.students.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-orange-600 to-red-800 text-white py-16 relative overflow-hidden">
          {/* Animated Background Graphics */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large blur circles - orange/red theme */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/6 rounded-full blur-xl animate-glow-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300/12 rounded-full blur-lg animate-float-medium" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-red-300/10 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-md animate-glow-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-20 right-10 w-68 h-68 bg-amber-300/8 rounded-full blur-xl animate-float-medium" style={{animationDelay: '4s'}}></div>
            
            {/* Additional massive graphics */}
            <div className="absolute top-10 right-1/4 w-88 h-88 bg-yellow-300/9 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '6s'}}></div>
            <div className="absolute bottom-10 left-1/3 w-84 h-84 bg-orange-300/8 rounded-full blur-2xl animate-glow-pulse" style={{animationDelay: '7s'}}></div>
            <div className="absolute top-1/2 left-20 w-76 h-76 bg-red-300/10 rounded-full blur-xl animate-float-medium" style={{animationDelay: '8s'}}></div>
            <div className="absolute top-0 left-1/2 w-72 h-72 bg-rose-300/7 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '10s'}}></div>
            <div className="absolute bottom-0 right-1/2 w-88 h-88 bg-orange-300/6 rounded-full blur-2xl animate-glow-pulse" style={{animationDelay: '11s'}}></div>
            <div className="absolute top-2/3 left-0 w-64 h-64 bg-amber-300/8 rounded-full blur-xl animate-float-medium" style={{animationDelay: '12s'}}></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-300/7 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '13s'}}></div>
            
            {/* Medium floating elements */}
            <div className="absolute top-32 left-1/2 w-48 h-48 bg-orange-300/6 rounded-full blur-lg animate-glow-pulse" style={{animationDelay: '14s'}}></div>
            <div className="absolute bottom-48 right-1/4 w-56 h-56 bg-yellow-300/8 rounded-full blur-xl animate-float-medium" style={{animationDelay: '15s'}}></div>
            <div className="absolute top-3/4 left-3/4 w-44 h-44 bg-amber-300/7 rounded-full blur-lg animate-float-slow" style={{animationDelay: '16s'}}></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-16 left-1/3 w-20 h-20 border-2 border-white/25 animate-float-fast"></div>
            <div className="absolute bottom-40 left-16 w-16 h-16 bg-white/20 animate-glow-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-16 w-24 h-24 border-2 border-orange-300/20 rounded-full animate-float-slow" style={{animationDelay: '5s'}}></div>
            <div className="absolute bottom-16 right-1/4 w-18 h-18 border-2 border-red-300/30 rotate-45 animate-float-fast" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-24 right-1/2 w-12 h-12 bg-amber-300/25 rounded-full animate-glow-pulse" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border-2 border-yellow-300/25 rounded-full animate-float-medium" style={{animationDelay: '9s'}}></div>
            
            {/* Additional geometric patterns */}
            <div className="absolute top-48 left-3/4 w-14 h-14 border border-orange-300/20 rotate-12 animate-float-fast" style={{animationDelay: '17s'}}></div>
            <div className="absolute bottom-56 left-20 w-10 h-10 bg-red-300/25 rounded-full animate-glow-pulse" style={{animationDelay: '18s'}}></div>
            <div className="absolute top-80 right-1/3 w-16 h-16 border-2 border-amber-300/25 animate-float-slow" style={{animationDelay: '19s'}}></div>
            <div className="absolute bottom-24 left-2/3 w-22 h-22 border border-yellow-300/30 rounded-full animate-float-medium" style={{animationDelay: '20s'}}></div>
            <div className="absolute top-12 left-12 w-8 h-8 bg-orange-300/30 rotate-45 animate-glow-pulse" style={{animationDelay: '21s'}}></div>
            <div className="absolute bottom-12 right-12 w-12 h-12 border-2 border-red-300/20 rounded-full animate-float-fast" style={{animationDelay: '22s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                2022학년도 입시에서 이루어낸 우수한 성과를 확인하세요.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{totalStudents}명</div>
                  <div className="text-orange-100">총 합격자</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{seoulStudents}명</div>
                  <div className="text-orange-100">서울/ 수도권</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">{nationalStudents}명</div>
                  <div className="text-orange-100">국립대</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold">25개교</div>
                  <div className="text-orange-100">합격 대학</div>
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
                2022학년도 대학별 합격 현황
              </h2>
              <p className="text-xl text-gray-600">2022학년도 합격을 진심으로 축하합니다.</p>
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