import { Clock, MapPin, Phone, Mail, Car, Bus, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function InfoSection() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">안내</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            코코미술학원 교습비 및 차량운행 안내
          </p>
        </div>

        {/* 안내 카드들 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 교습비 안내 카드 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-transparent transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">교습비 안내</h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                개인별 맞춤형 커리큘럼
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                소수정예 클래스 운영
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                상담을 통한 맞춤 안내
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Link href="/info/tuition">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium py-3 px-4 rounded-md text-center transition-all duration-200 transform hover:scale-105 shadow-sm">
                    마산코코
                  </button>
                </Link>
                <Link href="/info/tuition/gimhae">
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-medium py-3 px-4 rounded-md text-center transition-all duration-200 transform hover:scale-105 shadow-sm">
                    김해코코
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 안전귀가 차량운행 카드 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-transparent transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Bus className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">안전귀가 차량운행</h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                마산전, 함안전 지역 운행
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                안전한 등하원 서비스
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                학부모 안심 서비스
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex justify-center">
                <Link href="/info/transport">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium py-3 px-6 rounded-md text-center transition-all duration-200 transform hover:scale-105 shadow-sm">
                    마산코코
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}