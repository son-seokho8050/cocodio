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
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    // 서울여대
    {
      university: "서울여자대학교",
      department: "서울",
      students: [
        { name: "전○은", grade: "용호고", note: "공예" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
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
      color: "bg-gradient-to-br from-pink-50 via-slate-50 to-white border-0 ring-1 ring-pink-200/40 shadow-[0_4px_15px_rgba(236,72,153,0.06)] hover:shadow-[0_8px_25px_rgba(236,72,153,0.1)]"
    },
    // 동덕여대
    {
      university: "동덕여자대학교",
      department: "서울",
      students: [
        { name: "손○아", grade: "무학여고", note: "디지털공예" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    // 덕성여대
    {
      university: "덕성여자대학교",
      department: "서울",
      students: [
        { name: "손○아", grade: "무학여고", note: "아트앤디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
    // 삼육대
    {
      university: "삼육대학교",
      department: "서울",
      students: [
        { name: "손○준", grade: "대청고", note: "아트앤디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-emerald-50 via-slate-50 to-white border-0 ring-1 ring-emerald-200/40 shadow-[0_4px_15px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]"
    },
    // 한성대
    {
      university: "한성대학교",
      department: "서울",
      students: [
        { name: "조○경", grade: "경남외고", note: "ICT디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-cyan-50 via-slate-50 to-white border-0 ring-1 ring-cyan-200/40 shadow-[0_4px_15px_rgba(6,182,212,0.06)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]"
    },
    // 서울예대
    {
      university: "서울예술대학교",
      department: "경기",
      students: [
        { name: "한○솔", grade: "명덕고", note: "공간디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-violet-50 via-slate-50 to-white border-0 ring-1 ring-violet-200/40 shadow-[0_4px_15px_rgba(139,92,246,0.06)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.1)]"
    },
    // 단국대(죽전)
    {
      university: "단국대학교",
      department: "죽전캠퍼스",
      students: [
        { name: "남○영", grade: "대암고", note: "커뮤니케이션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
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
      color: "bg-gradient-to-br from-yellow-50 via-slate-50 to-white border-0 ring-1 ring-yellow-200/40 shadow-[0_4px_15px_rgba(234,179,8,0.06)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
    },
    // 수원대
    {
      university: "수원대학교",
      department: "수원",
      students: [
        { name: "한○솔", grade: "명덕고", note: "디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-lime-50 via-slate-50 to-white border-0 ring-1 ring-lime-200/40 shadow-[0_4px_15px_rgba(132,204,22,0.06)] hover:shadow-[0_8px_25px_rgba(132,204,22,0.1)]"
    },
    // 인천가톨릭대
    {
      university: "인천가톨릭대학교",
      department: "인천",
      students: [
        { name: "남○영", grade: "대암고", note: "융합디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-teal-50 via-slate-50 to-white border-0 ring-1 ring-teal-200/40 shadow-[0_4px_15px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]"
    },
    // 연세대(원주)
    {
      university: "연세대학교",
      department: "원주캠퍼스",
      students: [
        { name: "강○별", grade: "용호고", note: "생활디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
    },
    // 홍익대(세종)
    {
      university: "홍익대학교",
      department: "세종캠퍼스",
      students: [
        { name: "박○민", grade: "대산고", note: "디자인컨버전스" }
      ],
      category: "세종권",
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
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
      color: "bg-gradient-to-br from-rose-50 via-slate-50 to-white border-0 ring-1 ring-rose-200/40 shadow-[0_4px_15px_rgba(244,63,94,0.06)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.1)]"
    },
    // 호서대
    {
      university: "호서대학교",
      department: "아산캠퍼스",
      students: [
        { name: "문○영", grade: "명덕고", note: "실내디자인" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
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
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
    // 백석대
    {
      university: "백석대학교",
      department: "천안",
      students: [
        { name: "임○현", grade: "마산여고", note: "디자인영상" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-gray-50 via-slate-50 to-white border-0 ring-1 ring-gray-200/40 shadow-[0_4px_15px_rgba(107,114,128,0.06)] hover:shadow-[0_8px_25px_rgba(107,114,128,0.1)]"
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
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
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
      color: "bg-gradient-to-br from-stone-50 via-slate-50 to-white border-0 ring-1 ring-stone-200/40 shadow-[0_4px_15px_rgba(120,113,108,0.06)] hover:shadow-[0_8px_25px_rgba(120,113,108,0.1)]"
    },
    // 목원대
    {
      university: "목원대학교",
      department: "대전",
      students: [
        { name: "김○규", grade: "창신고", note: "시각커뮤니케이션" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-orange-50 via-slate-50 to-white border-0 ring-1 ring-orange-200/40 shadow-[0_4px_15px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.1)]"
    },
    // 한남대
    {
      university: "한남대학교",
      department: "대전",
      students: [
        { name: "김○규", grade: "창신고", note: "미술교육" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-yellow-50 via-slate-50 to-white border-0 ring-1 ring-yellow-200/40 shadow-[0_4px_15px_rgba(234,179,8,0.06)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
    },
    // 동양대
    {
      university: "동양대학교",
      department: "영주",
      students: [
        { name: "신○름", grade: "봉림고", note: "디자인학부" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-pink-50 via-slate-50 to-white border-0 ring-1 ring-pink-200/40 shadow-[0_4px_15px_rgba(236,72,153,0.06)] hover:shadow-[0_8px_25px_rgba(236,72,153,0.1)]"
    },
    // 중부대
    {
      university: "중부대학교",
      department: "고양",
      students: [
        { name: "신○름", grade: "봉림고", note: "산업디자인" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-slate-50 via-gray-50 to-white border-0 ring-1 ring-slate-200/40 shadow-[0_4px_15px_rgba(100,116,139,0.06)] hover:shadow-[0_8px_25px_rgba(100,116,139,0.1)]"
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
      color: "bg-gradient-to-br from-rose-50 via-slate-50 to-white border-0 ring-1 ring-rose-200/40 shadow-[0_4px_15px_rgba(244,63,94,0.06)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.1)]"
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
      color: "bg-gradient-to-br from-violet-50 via-slate-50 to-white border-0 ring-1 ring-violet-200/40 shadow-[0_4px_15px_rgba(139,92,246,0.06)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.1)]"
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
      color: "bg-gradient-to-br from-emerald-50 via-slate-50 to-white border-0 ring-1 ring-emerald-200/40 shadow-[0_4px_15px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]"
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
      color: "bg-gradient-to-br from-stone-50 via-slate-50 to-white border-0 ring-1 ring-stone-200/40 shadow-[0_4px_15px_rgba(120,113,108,0.06)] hover:shadow-[0_8px_25px_rgba(120,113,108,0.1)]"
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
      color: "bg-gradient-to-br from-lime-50 via-slate-50 to-white border-0 ring-1 ring-lime-200/40 shadow-[0_4px_15px_rgba(132,204,22,0.06)] hover:shadow-[0_8px_25px_rgba(132,204,22,0.1)]"
    },
    // 울산대
    {
      university: "울산대학교",
      department: "울산",
      students: [
        { name: "이○현", grade: "마산고", note: "섬유디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-teal-50 via-slate-50 to-white border-0 ring-1 ring-teal-200/40 shadow-[0_4px_15px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]"
    },
    // 창원대
    {
      university: "창원대학교",
      department: "경남",
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
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
    },
    // 부경대
    {
      university: "부경대학교",
      department: "부산",
      students: [
        { name: "조○세", grade: "마산여고", note: "시각디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-cyan-50 via-slate-50 to-white border-0 ring-1 ring-cyan-200/40 shadow-[0_4px_15px_rgba(6,182,212,0.06)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.1)]"
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
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
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
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
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
      color: "bg-gradient-to-br from-yellow-50 via-slate-50 to-white border-0 ring-1 ring-yellow-200/40 shadow-[0_4px_15px_rgba(234,179,8,0.06)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.1)]"
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
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
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
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    // 원광대
    {
      university: "원광대학교",
      department: "익산",
      students: [
        { name: "하○빈", grade: "무학여고", note: "금속주얼리" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-purple-600 to-violet-800 text-white py-16">
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
                2023학년도 합격자 명단
              </h1>
              
              {/* 2024년 수상 실적 배너 */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/30 border border-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8 mx-auto max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-200/50">
                {/* 배경 패턴 */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(139,69,244,0.05)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-violet-300/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-fuchsia-400/5 to-purple-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M6.5 12.5L7.32 15.68L10.5 16.5L7.32 17.32L6.5 20.5L5.68 17.32L2.5 16.5L5.68 15.68L6.5 12.5M17.5 3.5L18.32 6.68L21.5 7.5L18.32 8.32L17.5 11.5L16.68 8.32L13.5 7.5L16.68 6.68L17.5 3.5Z"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                      2022년 주요 수상 실적
                    </h3>
                    <p className="text-gray-600 text-lg">검증된 실력으로 이루어낸 성과</p>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-200/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/5 to-pink-400/5 rounded-2xl group-hover:from-rose-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">🏆</span>
                        </div>
                        <div className="text-rose-600 text-lg font-bold mb-1">지역최다 6명 수상</div>
                        <div className="text-gray-700 font-medium text-xs leading-relaxed">건국대 글로컬</div>
                      </div>
                    </div>
                    
                    <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-200/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-blue-400/5 rounded-2xl group-hover:from-indigo-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">🎖️</span>
                        </div>
                        <div className="text-indigo-600 text-lg font-bold mb-1">지역최다 10명 수상</div>
                        <div className="text-gray-700 font-medium text-xs leading-relaxed">한양대</div>
                      </div>
                    </div>
                    
                    <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-200/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-400/5 rounded-2xl group-hover:from-yellow-400/10 group-hover:to-amber-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">🏵️</span>
                        </div>
                        <div className="text-yellow-600 text-lg font-bold mb-1">입선</div>
                        <div className="text-gray-700 font-medium text-xs leading-relaxed">경희대</div>
                      </div>
                    </div>
                    
                    <div className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-200/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-2xl group-hover:from-green-400/10 group-hover:to-emerald-400/10 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">🥈</span>
                        </div>
                        <div className="text-green-600 text-lg font-bold mb-1">3명 수상</div>
                        <div className="text-gray-700 font-medium text-xs leading-relaxed">경성대</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-purple-100 mb-8">
                코코미술학원의 체계적인 교육으로 이루어낸 소중한 성과입니다
              </p>
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
              <p className="text-xl text-gray-600">2023학년도 합격을 진심으로 축하합니다.</p>
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