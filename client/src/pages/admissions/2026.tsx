import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { GraduationCap, ArrowLeft, Sparkles, Trophy, Star, Play, Volume2 } from "lucide-react";
import { Link } from "wouter";
import admissionsVideo2026 from "@assets/2026미대수시합격자_(2)_1765777863775.mp4";

export default function Admissions2026() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedAward, setClickedAward] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };
  const admissionResults = [
    {
      university: "홍익대학교",
      department: "서울",
      students: [
        { name: "황○서", grade: "중앙고", note: "미술대학자율전공" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    {
      university: "홍익대학교 세종",
      department: "세종",
      students: [
        { name: "최○호", grade: "마산고", note: "디자인컨버젼스학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-red-50 via-slate-50 to-white border-0 ring-1 ring-red-200/40 shadow-[0_4px_15px_rgba(239,68,68,0.06)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)]"
    },
    {
      university: "건국대학교 글로컬",
      department: "충주",
      students: [
        { name: "성○빈", grade: "성지여고", note: "실내디자인" },
        { name: "조○진", grade: "제일여고", note: "디자인조형자유전공" },
        { name: "김○나", grade: "중앙여고", note: "디자인조형자유전공" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-green-50 via-slate-50 to-white border-0 ring-1 ring-green-200/40 shadow-[0_4px_15px_rgba(34,197,94,0.06)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.1)]"
    },
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
      university: "경북대학교",
      department: "대구",
      students: [
        { name: "박○희", grade: "내서여고", note: "디자인학과" },
        { name: "이○원", grade: "진영고", note: "섬유패션디자인" },
        { name: "이○주", grade: "삼진고", note: "섬유패션디자인" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
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
      university: "중부대학교",
      department: "충남",
      students: [
        { name: "김○행", grade: "마산여고", note: "만화애니과" }
      ],
      category: "지역사립대",
      color: "bg-gradient-to-br from-purple-50 via-slate-50 to-white border-0 ring-1 ring-purple-200/40 shadow-[0_4px_15px_rgba(168,85,247,0.06)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]"
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
      university: "수원대학교",
      department: "수원",
      students: [
        { name: "이○원", grade: "경일고", note: "패션디자인" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-0 ring-1 ring-indigo-200/40 shadow-[0_4px_15px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]"
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
      university: "인천대학교",
      department: "인천",
      students: [
        { name: "양○정", grade: "마여고", note: "디자인학부" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-sky-50 via-slate-50 to-white border-0 ring-1 ring-sky-200/40 shadow-[0_4px_15px_rgba(14,165,233,0.06)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.1)]"
    },
    {
      university: "공주대학교",
      department: "공주",
      students: [
        { name: "이○후", grade: "가포고", note: "가구리빙" },
        { name: "박○연", grade: "무학여고", note: "가구리빙" },
        { name: "김○연", grade: "무학여고", note: "도자문화" }
      ],
      category: "지역거점국립대",
      color: "bg-gradient-to-br from-amber-50 via-slate-50 to-white border-0 ring-1 ring-amber-200/40 shadow-[0_4px_15px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)]"
    },
    {
      university: "계원예술대학교",
      department: "의왕",
      students: [
        { name: "최○은", grade: "제일여고", note: "실내건축" }
      ],
      category: "서울/ 수도권",
      color: "bg-gradient-to-br from-fuchsia-50 via-slate-50 to-white border-0 ring-1 ring-fuchsia-200/40 shadow-[0_4px_15px_rgba(217,70,239,0.06)] hover:shadow-[0_8px_25px_rgba(217,70,239,0.1)]"
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
      university: "명지대학교 자연",
      department: "용인",
      students: [
        { name: "박○희", grade: "내서여고", note: "인더스트리얼" },
        { name: "정○아", grade: "구암고", note: "인더스트리얼" }
      ],
      category: "수도권사립대",
      color: "bg-gradient-to-br from-blue-50 via-slate-50 to-white border-0 ring-1 ring-blue-200/40 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]"
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

  const awardsList = [
    "경희대 10명 수상", "동덕여대 동상 수상", "국민대 2명 수상", "동덕여대 2년연속 동상",
    "건대글로컬 50명 수상", "계명대 장려상 4명 수상", "동아대 은상 동상", "한양대 17명 수상",
    "경성대 은상 수상", "청강대 특/입선 수상", "삼육대 전원수상", "영남대 장려상 2명",
    "동명대 한국미협상", "한성대 5명 수상", "동서대 장려상 4명"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <Navigation />
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating Stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          >
            <Sparkles className={`w-${3 + (i % 2)} h-${3 + (i % 2)} text-purple-300/40`} />
          </div>
        ))}
      </div>
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/admissions">
              <Button variant="ghost" className="mb-6 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-200 hover:scale-105">
                <ArrowLeft className="w-4 h-4 mr-2" />
                전체 합격자 명단
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4 transition-all duration-700 whitespace-nowrap ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{animationDelay: '0.2s'}}>
                2026학년도 합격자 명단
              </h1>
              <p className={`text-lg text-slate-600 mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                코코미술학원 학생들의 대학 합격 현황입니다
              </p>
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <Trophy className="w-5 h-5 group-hover:animate-bounce" />
                <span className="text-2xl font-bold">{totalStudents}</span>
                <span>명 합격</span>
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </div>
            </div>
          </div>

          {/* 2025년 주요 수상 실적 배너 */}
          <div className={`relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/30 border border-orange-200/30 backdrop-blur-sm rounded-3xl p-8 mb-12 mx-auto max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-orange-200/50 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.3s'}}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(249,115,22,0.05)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-amber-300/15 rounded-full blur-3xl -translate-y-32 translate-x-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/10 to-orange-500/15 rounded-full blur-3xl translate-y-24 -translate-x-24 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Floating Trophy Icons */}
            <div className="absolute top-4 left-8 animate-bounce" style={{animationDuration: '2s'}}>
              <Trophy className="w-6 h-6 text-orange-300/60" />
            </div>
            <div className="absolute top-8 right-12 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
              <Star className="w-5 h-5 text-amber-300/60" />
            </div>
            <div className="absolute bottom-12 left-16 animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}>
              <Sparkles className="w-5 h-5 text-orange-300/60" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-4 shadow-lg animate-pulse hover:animate-spin transition-all duration-300 cursor-pointer hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M6.5 12.5L7.32 15.68L10.5 16.5L7.32 17.32L6.5 20.5L5.68 17.32L2.5 16.5L5.68 15.68L6.5 12.5M17.5 3.5L18.32 6.68L21.5 7.5L18.32 8.32L17.5 11.5L16.68 8.32L13.5 7.5L16.68 6.68L17.5 3.5Z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2 whitespace-nowrap">
                  2025년 주요미대실기대회 수상 실적
                </h3>
                <p className="text-gray-600 text-sm md:text-lg">검증된 실력으로 이루어낸 성과</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {awardsList.map((award, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setClickedAward(clickedAward === idx ? null : idx)}
                    className={`group relative bg-white/90 backdrop-blur-md rounded-xl p-3 md:p-4 text-center border border-orange-100 shadow-sm cursor-pointer transition-all duration-500 
                      ${clickedAward === idx ? 'scale-105 md:scale-110 shadow-xl bg-gradient-to-br from-orange-100 to-amber-100 ring-2 ring-orange-400' : 'hover:shadow-lg hover:-translate-y-2 hover:scale-105'}
                      ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{
                      animationDelay: `${0.5 + idx * 0.1}s`,
                      transitionDelay: `${idx * 50}ms`,
                      wordBreak: 'keep-all'
                    }}
                  >
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/10 group-hover:to-amber-400/10 transition-all duration-300 ${clickedAward === idx ? 'from-orange-400/20 to-amber-400/20' : ''}`}></div>
                    <div className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                      {clickedAward === idx && <Trophy className="w-3 h-3 md:w-4 md:h-4 text-orange-500 animate-bounce flex-shrink-0" />}
                      <span className={`text-orange-600 text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${clickedAward === idx ? 'text-orange-700' : ''}`}>{award}</span>
                    </div>
                    {clickedAward === idx && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2026학년도 합격자 홍보 영상 */}
          <div className={`relative mb-12 mx-auto max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.5s'}}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl"></div>
              
              {/* Video container */}
              <div className="relative">
                <video
                  ref={videoRef}
                  src={admissionsVideo2026}
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onCanPlay={() => {
                    if (videoRef.current) {
                      videoRef.current.play().catch(error => {
                        console.log('자동재생이 차단되었습니다:', error);
                      });
                    }
                  }}
                />
                
                {/* Sound button overlay */}
                {isMuted && (
                  <button
                    onClick={handleUnmute}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-purple-700 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-pulse"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span className="text-sm">소리 켜기</span>
                  </button>
                )}
                
                {/* Play indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500/90 text-white text-xs font-bold rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              </div>
              
              {/* Video title bar */}
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">2026학년도 미대수시 합격자 발표</h3>
                      <p className="text-purple-200 text-sm">코코미술학원 합격 소식</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                    <span className="text-white/80 text-sm">축하합니다!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
            {admissionResults.map((result, index) => (
              <Card 
                key={index} 
                className={`${result.color} backdrop-blur-sm transition-all duration-500 break-inside-avoid mb-6 cursor-pointer group
                  ${hoveredCard === index ? 'scale-[1.02] -translate-y-2 shadow-2xl z-10' : 'hover:-translate-y-1'}
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${(index % 6) * 100}ms`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                data-testid={`card-admission-${index}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/0 to-violet-400/0 transition-all duration-500 ${hoveredCard === index ? 'from-purple-400/5 to-violet-400/10' : ''}`}></div>
                
                {/* Sparkle indicator for hovered card */}
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <Sparkles className="w-6 h-6 text-purple-500 animate-spin" />
                  </div>
                )}
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className={`text-lg font-bold text-slate-800 mb-1 transition-all duration-300 ${hoveredCard === index ? 'text-purple-700' : ''}`}>
                        {result.university}
                      </CardTitle>
                      <p className="text-sm text-slate-500">{result.department}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-white/60 text-slate-600 border-0 text-xs transition-all duration-300 ${hoveredCard === index ? 'bg-purple-100 text-purple-700 scale-110' : ''}`}
                    >
                      {result.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-2">
                    {result.students.map((student, studentIndex) => (
                      <div 
                        key={studentIndex}
                        className={`flex items-center justify-between py-2 px-3 rounded-lg bg-white/40 transition-all duration-300 group/student
                          ${hoveredCard === index ? 'hover:bg-white/80 hover:shadow-md hover:scale-[1.02]' : 'hover:bg-white/60'}`}
                        style={{
                          transitionDelay: `${studentIndex * 50}ms`
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-sm transition-all duration-300 ${hoveredCard === index ? 'group-hover/student:scale-110 group-hover/student:shadow-lg' : ''}`}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-slate-800 text-sm">{student.name}</p>
                            <p className="text-xs text-slate-500">{student.grade}</p>
                          </div>
                        </div>
                        <Badge className={`bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-purple-700 border-0 text-xs font-medium transition-all duration-300 ${hoveredCard === index ? 'group-hover/student:from-purple-500/20 group-hover/student:to-violet-500/20 group-hover/student:scale-105' : ''}`}>
                          {student.note}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Bottom shine effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 rounded-b-xl transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
