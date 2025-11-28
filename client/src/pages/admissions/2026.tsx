import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Admissions2026() {
  const admissionResults = [
    {
      university: "동덕여자대학교",
      department: "서울",
      students: [
        { name: "배○예", grade: "검정고시", note: "시각실내" },
        { name: "서○서", grade: "마여고", note: "패션" },
        { name: "윤○현", grade: "영운고", note: "패션" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-pink-50 via-slate-50 to-white border-0 ring-1 ring-pink-200/40 shadow-[0_4px_15px_rgba(236,72,153,0.06)] hover:shadow-[0_8px_25px_rgba(236,72,153,0.1)]"
    },
    {
      university: "삼육대학교",
      department: "서울",
      students: [
        { name: "심○주", grade: "율하고", note: "아트앤디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-emerald-50 via-slate-50 to-white border-0 ring-1 ring-emerald-200/40 shadow-[0_4px_15px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]"
    },
    {
      university: "인하대학교",
      department: "인천",
      students: [
        { name: "정○아", grade: "구암고", note: "의류" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "정○아", grade: "구암고", note: "패션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-violet-50 via-slate-50 to-white border-0 ring-1 ring-violet-200/40 shadow-[0_4px_15px_rgba(139,69,244,0.06)] hover:shadow-[0_8px_25px_rgba(139,69,244,0.1)]"
    },
    {
      university: "용인대학교",
      department: "용인",
      students: [
        { name: "서○서", grade: "마여고", note: "미디어디자인" },
        { name: "정○아", grade: "구암고", note: "미디어디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-teal-50 via-slate-50 to-white border-0 ring-1 ring-teal-200/40 shadow-[0_4px_15px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]"
    },
    {
      university: "수원대학교",
      department: "수원",
      students: [
        { name: "이○원", grade: "경일고", note: "패션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
    },
    {
      university: "상명대학교",
      department: "천안캠퍼스",
      students: [
        { name: "윤○빈", grade: "가포고", note: "디자인학부" },
        { name: "이○은", grade: "삼진고", note: "디자인학부" },
        { name: "손○은", grade: "봉림고", note: "무대미술" },
        { name: "이○정", grade: "명곡고", note: "AI디자인" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "김○지", grade: "진해여고", note: "디자인스쿨" },
        { name: "윤○주", grade: "삼진고", note: "디자인스쿨" },
        { name: "홍○의", grade: "무학여고", note: "디자인스쿨" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-rose-50 via-slate-50 to-white border-0 ring-1 ring-rose-200/40 shadow-[0_4px_15px_rgba(244,63,94,0.06)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.1)]"
    },
    {
      university: "남서울대학교",
      department: "천안",
      students: [
        { name: "천○영", grade: "마여고", note: "공간조형" },
        { name: "민○웅", grade: "합포고", note: "공간조형" },
        { name: "김○현", grade: "중앙여고", note: "시각미디어" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-cyan-50 via-slate-50 to-white border-0 ring-1 ring-cyan-200/40 shadow-[0_4px_15px_rgba(6,182,212,0.06)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]"
    },
    {
      university: "중부대학교",
      department: "충남",
      students: [
        { name: "김○행", grade: "마산여고", note: "만화애니과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    },
    {
      university: "한밭대학교",
      department: "대전",
      students: [
        { name: "박○희", grade: "내서여고", note: "시각영상" },
        { name: "김○지", grade: "마여고", note: "산업" },
        { name: "김○", grade: "제일여고", note: "산업" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-lime-50 via-slate-50 to-white border-0 ring-1 ring-lime-200/40 shadow-[0_4px_15px_rgba(132,204,22,0.06)] hover:shadow-[0_8px_25px_rgba(132,204,22,0.1)]"
    },
    {
      university: "목원대학교",
      department: "대전",
      students: [
        { name: "김○지", grade: "합포고", note: "섬유패션" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
    },
    {
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "이○원", grade: "진영고", note: "섬유패션디자인" },
        { name: "이○주", grade: "삼진고", note: "섬유패션디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    {
      university: "계명대학교",
      department: "대구",
      students: [
        { name: "윤○현", grade: "영운고", note: "패션" },
        { name: "정○희", grade: "창원여고", note: "패션" },
        { name: "이○연", grade: "제일여고", note: "패션" },
        { name: "이○", grade: "경원고", note: "영상애니메이션" },
        { name: "황○미", grade: "마여고", note: "웹툰" },
        { name: "김○진", grade: "부산예고", note: "시각" },
        { name: "안○진", grade: "제일고", note: "시각" },
        { name: "양○정", grade: "마여고", note: "시각" },
        { name: "이○우", grade: "제일여고", note: "시각" },
        { name: "이○은", grade: "삼진고", note: "텍스타일" },
        { name: "민○웅", grade: "합포고", note: "텍스타일" },
        { name: "배○진", grade: "검정고시", note: "산업" },
        { name: "박○석", grade: "창원남고", note: "산업" },
        { name: "차○호", grade: "문성고", note: "산업" },
        { name: "홍○의", grade: "무학여고", note: "산업" },
        { name: "조○진", grade: "제일여고", note: "산업" },
        { name: "추○룡", grade: "합포고", note: "산업" },
        { name: "문○재", grade: "합포고", note: "산업" },
        { name: "이○후", grade: "가포고", note: "산업" },
        { name: "임○결", grade: "문성고", note: "산업" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-teal-50 via-slate-50 to-white border-0 ring-1 ring-teal-200/40 shadow-[0_4px_15px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]"
    },
    {
      university: "영남대학교",
      department: "대구",
      students: [
        { name: "김○진", grade: "부산예고", note: "시각" },
        { name: "안○진", grade: "제일고", note: "시각" },
        { name: "천○영", grade: "마여고", note: "시각" },
        { name: "김○", grade: "제일여고", note: "시각" },
        { name: "임○현", grade: "창신고", note: "생활제품" },
        { name: "이○은", grade: "삼진고", note: "생활제품" },
        { name: "차○호", grade: "문성고", note: "산업" },
        { name: "신○지", grade: "성지여고", note: "산업" },
        { name: "정○진", grade: "명덕고", note: "산업" },
        { name: "문○재", grade: "합포고", note: "산업" },
        { name: "홍○의", grade: "무학여고", note: "산업" },
        { name: "조○진", grade: "제일여고", note: "산업" },
        { name: "이○정", grade: "마여고", note: "산업" },
        { name: "박○경", grade: "칠원고", note: "산업" },
        { name: "이○연", grade: "제일여고", note: "산업" },
        { name: "강○완", grade: "창신고", note: "산업" },
        { name: "민○웅", grade: "합포고", note: "산업" },
        { name: "박○연", grade: "무학여고", note: "산업" },
        { name: "조○린", grade: "태봉고", note: "산업" },
        { name: "송○민", grade: "제일여고", note: "산업" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-emerald-50 via-slate-50 to-white border-0 ring-1 ring-emerald-200/40 shadow-[0_4px_15px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]"
    },
    {
      university: "동아대학교",
      department: "부산",
      students: [
        { name: "김○진", grade: "제일고", note: "산업" },
        { name: "성○빈", grade: "성지여고", note: "산업" },
        { name: "이○정", grade: "마여고", note: "산업" },
        { name: "김○", grade: "제일여고", note: "산업" },
        { name: "문○재", grade: "합포고", note: "산업" },
        { name: "최○은", grade: "제일여고", note: "목조형가구" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-sky-50 via-slate-50 to-white border-0 ring-1 ring-sky-200/40 shadow-[0_4px_15px_rgba(14,165,233,0.06)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.1)]"
    },
    {
      university: "경성대학교",
      department: "부산",
      students: [
        { name: "조○훈", grade: "중앙고", note: "시각디자인" },
        { name: "김○진", grade: "제일여고", note: "시각디자인" },
        { name: "김○우", grade: "중앙고", note: "텍스타일" },
        { name: "이○진", grade: "명곡고", note: "텍스타일" },
        { name: "김○현", grade: "수남고", note: "산업디자인" },
        { name: "정○영", grade: "경원고", note: "현대미술" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-slate-50 via-gray-50 to-white border-0 ring-1 ring-slate-200/40 shadow-[0_4px_15px_rgba(100,116,139,0.06)] hover:shadow-[0_8px_25px_rgba(100,116,139,0.1)]"
    },
    {
      university: "창원대학교",
      department: "경남",
      students: [
        { name: "이○주", grade: "삼진고", note: "공예(장학)" },
        { name: "박○경", grade: "칠원고", note: "공예(장학)" },
        { name: "이○휘", grade: "가포고", note: "공예" },
        { name: "이○원", grade: "경일고", note: "공예" },
        { name: "윤○빈", grade: "가포고", note: "공예" },
        { name: "성○빈", grade: "성지여고", note: "시각" },
        { name: "윤○진", grade: "무학여고", note: "시각" },
        { name: "이○정", grade: "명곡고", note: "시각" },
        { name: "정○연", grade: "문성고", note: "시각" },
        { name: "임○린", grade: "제일여고", note: "시각" },
        { name: "정○진", grade: "명덕고", note: "제품" },
        { name: "이○연", grade: "제일여고", note: "제품" },
        { name: "이○우", grade: "제일여고", note: "제품(장학)" },
        { name: "이○후", grade: "가포고", note: "제품" },
        { name: "김○연", grade: "무학여고", note: "제품" },
        { name: "서○희", grade: "마여고", note: "제품" },
        { name: "신○지", grade: "성지여고", note: "제품" },
        { name: "송○민", grade: "제일여고", note: "제품" },
        { name: "김○우", grade: "중앙고", note: "조소" },
        { name: "이○현", grade: "용마고", note: "조소" },
        { name: "윤○진", grade: "명곡고", note: "조소" },
        { name: "이○빈", grade: "태봉고", note: "회화" },
        { name: "김○나", grade: "중앙여고", note: "만화콘텐츠" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
    {
      university: "한국전통대학교",
      department: "부여",
      students: [
        { name: "차○희", grade: "성지여고", note: "전통미술공예학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-yellow-50 via-slate-50 to-white border-0 ring-1 ring-yellow-200/40 shadow-[0_4px_15px_rgba(234,179,8,0.06)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
    },
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "정○현", grade: "창신고", note: "디자인융합" },
        { name: "김○현", grade: "수남고", note: "디자인융합" },
        { name: "조○훈", grade: "중앙고", note: "디자인융합" },
        { name: "허○은", grade: "대암고", note: "디자인융합" },
        { name: "김○빈", grade: "대암고", note: "디자인융합" },
        { name: "윤○진", grade: "명곡고", note: "디자인융합" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
    },
    {
      university: "동국대학교 WISE",
      department: "경주",
      students: [
        { name: "김○현", grade: "중앙여고", note: "시각" },
        { name: "김○지", grade: "가야고", note: "시각" },
        { name: "정○영", grade: "경원고", note: "시각" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    {
      university: "동명대학교",
      department: "부산",
      students: [
        { name: "이○성", grade: "합포고", note: "시각디자인" },
        { name: "김○우", grade: "중앙고", note: "시각디자인" },
        { name: "박○준", grade: "제일고", note: "시각디자인" },
        { name: "안○준", grade: "사파고", note: "시각디자인" },
        { name: "김○진", grade: "제일고", note: "시각디자인" },
        { name: "추○준", grade: "경원고", note: "시각디자인" },
        { name: "한○진", grade: "무학여고", note: "웹툰애니메이션" },
        { name: "김○행", grade: "마산여고", note: "웹툰애니메이션" },
        { name: "오○은", grade: "가포고", note: "웹툰애니메이션" },
        { name: "김○나", grade: "중앙여고", note: "웹툰애니메이션" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-neutral-50 via-slate-50 to-white border-0 ring-1 ring-neutral-200/40 shadow-[0_4px_15px_rgba(115,115,115,0.06)] hover:shadow-[0_8px_25px_rgba(115,115,115,0.1)]"
    },
    {
      university: "대구가톨릭대학교",
      department: "경산",
      students: [
        { name: "김○현", grade: "무학여고", note: "디자인" },
        { name: "송○민", grade: "제일여고", note: "디자인" },
        { name: "이○나", grade: "무학여고", note: "디자인" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-violet-50 via-slate-50 to-white border-0 ring-1 ring-violet-200/40 shadow-[0_4px_15px_rgba(139,92,246,0.06)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.1)]"
    },
    {
      university: "경남대학교",
      department: "창원",
      students: [
        { name: "서○희", grade: "마여고", note: "웹툰디자인" },
        { name: "김○윤", grade: "마산고", note: "웹툰디자인" },
        { name: "정○영", grade: "경원고", note: "미술교육" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
    },
    {
      university: "동의대학교",
      department: "부산",
      students: [
        { name: "김○진", grade: "제일고", note: "시각" },
        { name: "추○준", grade: "경원고", note: "시각" },
        { name: "성○빈", grade: "성지여고", note: "시각" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-gray-50 via-slate-50 to-white border-0 ring-1 ring-gray-200/40 shadow-[0_4px_15px_rgba(107,114,128,0.06)] hover:shadow-[0_8px_25px_rgba(107,114,128,0.1)]"
    },
    {
      university: "예원예술대학교",
      department: "임실",
      students: [
        { name: "박○관", grade: "경상사대부고", note: "시각영상" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    },
    {
      university: "대구대학교",
      department: "대구",
      students: [
        { name: "이○원", grade: "경일고", note: "패션" },
        { name: "임○은", grade: "의령여고", note: "패션" },
        { name: "김○지", grade: "진해여고", note: "시각" },
        { name: "최○경", grade: "영운고", note: "시각" },
        { name: "추○준", grade: "경원고", note: "시각" },
        { name: "김○령", grade: "한일여고", note: "시각" },
        { name: "이○빈", grade: "구암고", note: "시각" },
        { name: "진○빈", grade: "함안고", note: "시각" },
        { name: "김○윤", grade: "마산고", note: "시각" },
        { name: "류○준", grade: "경일고", note: "시각" },
        { name: "차○호", grade: "문성고", note: "산업" },
        { name: "김○우", grade: "중앙고", note: "산업" },
        { name: "이○현", grade: "용마고", note: "산업" },
        { name: "윤○빈", grade: "가포고", note: "산업" },
        { name: "조○린", grade: "태봉고", note: "실내건축" },
        { name: "정○인", grade: "검정고시", note: "게임학과" },
        { name: "한○진", grade: "무학여고", note: "웹툰영상애니" },
        { name: "김○행", grade: "마산여고", note: "웹툰영상애니" },
        { name: "오○은", grade: "가포고", note: "웹툰영상애니" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-rose-50 via-slate-50 to-white border-0 ring-1 ring-rose-200/40 shadow-[0_4px_15px_rgba(244,63,94,0.06)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.1)]"
    },
    {
      university: "영산대학교",
      department: "부산",
      students: [
        { name: "황○미", grade: "마산여고", note: "웹툰학과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-stone-50 via-slate-50 to-white border-0 ring-1 ring-stone-200/40 shadow-[0_4px_15px_rgba(120,113,108,0.06)] hover:shadow-[0_8px_25px_rgba(120,113,108,0.1)]"
    }
  ];

  const totalStudents = admissionResults.reduce((sum, result) => sum + result.students.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/admissions">
              <Button variant="ghost" className="mb-6 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-200">
                <ArrowLeft className="w-4 h-4 mr-2" />
                전체 합격자 명단
              </Button>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25 mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                2026학년도 합격자 명단
              </h1>
              <p className="text-lg text-slate-600 mb-4">
                코코미술학원 학생들의 대학 합격 현황입니다
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold">
                <span className="text-2xl">{totalStudents}</span>
                <span>명 합격</span>
              </div>
            </div>
          </div>

          {/* 2025년 주요 수상 실적 배너 */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/30 border border-orange-200/30 backdrop-blur-sm rounded-3xl p-8 mb-12 mx-auto max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-orange-200/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(249,115,22,0.05)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/5 to-amber-300/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/5 to-orange-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M6.5 12.5L7.32 15.68L10.5 16.5L7.32 17.32L6.5 20.5L5.68 17.32L2.5 16.5L5.68 15.68L6.5 12.5M17.5 3.5L18.32 6.68L21.5 7.5L18.32 8.32L17.5 11.5L16.68 8.32L13.5 7.5L16.68 6.68L17.5 3.5Z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                  2025년 주요미대실기대회 수상 실적
                </h3>
                <p className="text-gray-600 text-lg">검증된 실력으로 이루어낸 성과</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">경희대 10명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">동덕여대 동상 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">국민대 2명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">동덕여대 2년연속 동상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">건대글로컬 50명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">계명대 장려상 4명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">동아대 은상 동상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">한양대 17명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">경성대 은상 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">청강대 특/입선 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">삼육대 전원수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">영남대 장려상 2명</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">동명대 한국미협상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">한성대 5명 수상</div>
                </div>
                <div className="group relative bg-white/90 backdrop-blur-md rounded-xl p-4 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-orange-600 text-sm font-bold">동서대 장려상 4명</div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
            {admissionResults.map((result, index) => (
              <Card 
                key={index} 
                className={`${result.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 break-inside-avoid mb-6`}
                data-testid={`card-admission-${index}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-slate-800 mb-1">
                        {result.university}
                      </CardTitle>
                      <p className="text-sm text-slate-500">{result.department}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-white/60 text-slate-600 border-0 text-xs"
                    >
                      {result.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {result.students.map((student, studentIndex) => (
                      <div 
                        key={studentIndex}
                        className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/40 hover:bg-white/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-slate-800 text-sm">{student.name}</p>
                            <p className="text-xs text-slate-500">{student.grade}</p>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-purple-700 border-0 text-xs font-medium">
                          {student.note}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
