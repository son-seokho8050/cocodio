import { Card } from "@/components/ui/card";
import { GraduationCap, Laptop, Trophy } from "lucide-react";

import ___________2_ from "@assets/제목 없는 디자인 (2).png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            왜 <span className="text-primary-600">코코미술학원</span>이 다를까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">사고력 향상 'FOLLOW' 시스템을 통한 코코만의 특별한 커리큘럼, 합격까지 올인원</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src={___________2_}
              alt="Students collaborating on art projects"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">FOLLOW 시스템 & 4단계 사고체계</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">F</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Focus (집중)</h4>
                  <p className="text-gray-600">대상의 본질을 파악하고 구조적 이해 능력을 체계적으로 향상</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">O</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Observe (관찰)</h4>
                  <p className="text-gray-600">개인만의 독창적인 시각으로 대상을 재해석하는 관점을 학습</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">L</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Lead (학습 유도)</h4>
                  <p className="text-gray-600">논리적인 구성과 기법을 통해 아이디어를 완성도 있게 구현</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">W</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Win (발전)</h4>
                  <p className="text-gray-600">작품의 객관적 평가, 지속적으로 개선하는 실력을 향상</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-gray-50 rounded-2xl p-8 card-hover">
            <div className="bg-primary-50 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">개인 성향별 맞춤 지도</h4>
            <p className="text-gray-600 tracking-wide leading-relaxed pl-[10px] pr-[10px]">
              MBTI 성향별 개인 커리큘럼으로<br />
              강점과 특성을 파악하여<br />
              1:1 최적화된 수업을 제공합니다.
            </p>
          </Card>
          
          <Card className="text-center bg-gray-50 rounded-2xl p-8 card-hover">
            <div className="bg-purple-100 text-secondary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Laptop className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">디지털 프로세스 폴리오</h4>
            <p className="text-gray-600 tracking-wide leading-relaxed pl-[10px] pr-[10px]">
              디지털 프로그램을 활용하여,<br />
              목표대학에서 그림 스타일까지,<br />
              개인별 빅테이터를 제공합니다.
            </p>
          </Card>
          
          <Card className="text-center bg-gray-50 rounded-2xl p-8 card-hover">
            <div className="bg-orange-100 text-accent-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">검증된 합격</h4>
            <p className="text-gray-600 tracking-wide leading-relaxed">
              주요 미대 입시의 높은 합격률과,<br />
              실기대회 수상을 자랑하는,<br />
              체계적인 입시 전략을 제공합니다.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
