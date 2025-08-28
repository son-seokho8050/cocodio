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

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-4 w-4 text-amber-600 mr-2" />
                    운행 시간
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <p className="font-medium">등원 운행</p>
                      <p className="text-xs">오후 시간대</p>
                    </div>
                    <div>
                      <p className="font-medium">하원 운행</p>
                      <p className="text-xs">수업 종료 후</p>
                    </div>
                    <p className="text-xs text-amber-700 bg-amber-100 rounded p-1">
                      지역별 상황에 따라 조정
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">이용 안내</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center">
                      <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                      지역 확인
                    </p>
                    <p className="flex items-center">
                      <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                      운행 가능성 안내
                    </p>
                    <p className="flex items-center">
                      <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                      시간 및 정류장 안내
                    </p>
                    <p className="flex items-center">
                      <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                      서비스 시작
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">중요 안내사항</h3>
                  <ul className="text-orange-800 space-y-1 text-sm">
                    <li>• 차량 운행은 지역별 수요에 따라 운영됩니다.</li>
                    <li>• 정확한 운행 지역과 시간은 상담 시 개별 안내됩니다.</li>
                    <li>• 기상 상황이나 특별한 사정으로 운행이 어려울 수 있습니다.</li>
                    <li>• 차량 이용료는 별도 문의 바랍니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">차량 운행 문의</h3>
                <p className="text-gray-700 mb-6">
                  안전귀가 차량 서비스에 대한 자세한 사항은 각 캠퍼스로 문의해주세요.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">마산점</p>
                      <p className="text-gray-600">010-4472-2028</p>
                      <p className="text-sm text-gray-500">마산전 지역, 함안전 지역 운행</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">김해점</p>
                      <p className="text-gray-600">010-3158-2028</p>
                      <p className="text-sm text-gray-500">김해 및 주변 지역 운행</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link href="/#contact">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      상담 신청하기
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