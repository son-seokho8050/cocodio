import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoTuition() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/#info" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            안내로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">교습비 안내</h1>
          <p className="text-xl text-gray-600">
            체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">수강료 특징</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      개인별 맞춤형 커리큘럼
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      소수정예 클래스 운영
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      전문 강사진 1:1 지도
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      재료비 별도 (개별 구매)
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">과정별 안내</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span>입시미술 (기초/심화)</span>
                      <span className="font-medium">상담 시 안내</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SPACE (프리미엄)</span>
                      <span className="font-medium">상담 시 안내</span>
                    </div>
                    <div className="flex justify-between">
                      <span>디지털드로잉</span>
                      <span className="font-medium">상담 시 안내</span>
                    </div>
                    <div className="flex justify-between">
                      <span>중등미술</span>
                      <span className="font-medium">상담 시 안내</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <img 
                  src="/assets/tuition-fee.jpg" 
                  alt="교습비 계시표" 
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
                <p className="text-sm text-gray-500 text-center">
                  * 상기 금액은 참고용이며, 정확한 교습비는 상담을 통해 안내해드립니다.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">상담 및 문의</h3>
                <p className="text-gray-700 mb-6">
                  개인별 맞춤 상담을 통해 최적의 과정과 교습비를 안내해드리겠습니다.
                </p>
                
                <div className="flex justify-center">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">마산점</p>
                      <p className="text-gray-600">010-4472-2028</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link href="/#contact">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      온라인 상담 신청하기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}