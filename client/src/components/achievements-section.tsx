import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Award } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "인터랙티브 웹 이론수업",
      stats: [
        "학생들이 직접적이고 능동적으로 상호작용 가능한 인터랙티브 웹 수업을통해 이론을 실제 경험하는 코코만의 이론수업"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "FOLLOW 시스템",
      stats: [
        "개별 맞춤형 진도 관리",
        "체계적 사고력 훈련",
        "창의성과 논리적 사고 병행",
        "실전 중심 실기 연습",
        "지속적 피드백 시스템"
      ],
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: Target,
      title: "전문 과정 운영",
      stats: [
        "입시미술 (디자인/만화)",
        "웹툰·일러스트 전문반",
        "디지털 드로잉",
        "중등미술 기초반",
        "개별 포트폴리오 완성"
      ],
      color: "text-secondary-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      title: "검증된 실기력",
      stats: [
        "마산/김해 지역 대표 학원",
        "검증된 합격 실적",
        "경험 많은 전문 강사진",
        "체계적 커리큘럼 운영",
        "학생 개별 성향 분석"
      ],
      color: "text-accent-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            검증된 <span className="text-primary-600">실력과 성과</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">마산/김해/ 창원 지역에서 최상의 실기대회 수상 실적을 달성한 코코의 차별화된 성과입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl shadow-lg card-hover">
                <CardContent className="p-8">
                  <div className={`${achievement.bgColor} ${achievement.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {achievement.title}
                  </h3>
                  <ul className="space-y-2">
                    {achievement.stats.map((stat, statIndex) => (
                      <li key={statIndex} className="text-sm text-gray-600 flex items-center justify-center text-center ml-[-12px] mr-[-12px]">
                        <div className={`w-2 h-2 ${achievement.color.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></div>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              왜 많은 학생들이 코코미술학원을 선택할까요?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>사고력과 창의성</strong>을 동시에 기르는 
              차별화된 교육 시스템으로 학생들의 진정한 성장을 이끌어냅니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">수시합격</div>
                <div className="text-sm text-gray-600">매년 94%이상<br />높은 수시합격률</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600 mb-2">FOLLOW</div>
                <div className="text-sm text-gray-600">차별화된<br />올인원 교육 시스템</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">수상실적</div>
                <div className="text-sm text-gray-600">주요 대학<br />실기대회 최다 수상</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}