import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import tuitionImageGimhae from "@assets/KakaoTalk_20250901_164406492_1756712722429.jpg";

export default function InfoTuitionGimhae() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/#info" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            안내로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">교습비 안내 - 김해코코</h1>
          <p className="text-xl text-gray-600">
            체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">등록번호</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>마산코코 등록번호 제 718호</p>
                    <p>입시코코 등록번호 제 1569호</p>
                  </div>
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
                  src={tuitionImageGimhae} 
                  alt="교습비 계시표" 
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}