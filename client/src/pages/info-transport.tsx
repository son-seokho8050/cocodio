import { ArrowLeft, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoTransport() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/#info" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            안내로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">안전귀가 차량운행</h1>
          <p className="text-xl text-gray-600">
            학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 flex justify-center">
                <img 
                  src="/assets/safe-transport.png" 
                  alt="안전귀가 차량운행" 
                  className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 flex-1 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-4 w-4 text-amber-600 mr-2" />
                    운행 시간
                  </h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-medium">등원 운행</p>
                      <p className="text-xs text-gray-600">오후 시간대 (수업 시작 전)</p>
                      <p className="text-xs text-gray-500 mt-1">함안, 내서, 중리 방면</p>
                    </div>
                    <div>
                      <p className="font-medium">하원 운행</p>
                      <p className="text-xs text-gray-600">수업 종료 후 (저녁 시간대)</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-amber-700 bg-amber-100 rounded p-2">
                        정확한 시간은 지역별 상황에 따라 조정됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">이용 안내</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="flex items-center">
                      <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                      상담 시 거주 지역 확인
                    </p>
                    <p className="flex items-center">
                      <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                      차량 운행 가능 여부 안내
                    </p>
                    <p className="flex items-center">
                      <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                      운행 시간 및 정류장 안내
                    </p>
                    <p className="flex items-center">
                      <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</span>
                      안전 귀가 서비스 시작
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}