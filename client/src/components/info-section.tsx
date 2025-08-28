import { Clock, MapPin, Phone, Mail, Car, Bus, CreditCard, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function InfoSection() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">안내</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            코코미술학원 방문 및 상담 안내
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 마산점 안내 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">마산점</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">주소</h4>
                  <p className="text-gray-600">경남 창원시 마산합포구 고운로 235, 유진빌딩 4층</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">연락처</h4>
                  <p className="text-gray-600">010-4472-2028</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">이메일</h4>
                  <p className="text-gray-600">COCO2238050@NAVER.COM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">운영시간</h4>
                  <div className="text-gray-600">
                    <p>평일: 오전 9시 ~ 오후 10시</p>
                    <p>토요일: 오전 9시 ~ 오후 6시</p>
                    <p>일요일: 휴무</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Car className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">주차 안내</h4>
                  <p className="text-gray-600">건물 지하 주차장 이용 가능</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Bus className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">대중교통</h4>
                  <p className="text-gray-600">마산역에서 도보 10분, 마산고등학교 인근</p>
                </div>
              </div>
            </div>
          </div>

          {/* 김해점 안내 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">김해점</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">주소</h4>
                  <p className="text-gray-600">경남 김해시 내외중앙로 74, 밝은메디컬센터 10층</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">연락처</h4>
                  <p className="text-gray-600">010-4472-2028</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">이메일</h4>
                  <p className="text-gray-600">COCO2238050@NAVER.COM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">운영시간</h4>
                  <div className="text-gray-600">
                    <p>평일: 오전 9시 ~ 오후 10시</p>
                    <p>토요일: 오전 9시 ~ 오후 6시</p>
                    <p>일요일: 휴무</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Car className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">주차 안내</h4>
                  <p className="text-gray-600">건물 지하 주차장 이용 가능</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Bus className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">대중교통</h4>
                  <p className="text-gray-600">김해시청역에서 도보 5분, 롯데워터파크 인근</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상담 예약 안내 */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">상담 예약 안내</h3>
            <p className="text-lg text-gray-600 mb-6">
              정확한 진단과 맞춤형 커리큘럼 상담을 위해 사전 예약을 권장합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-primary-600 font-bold text-lg mb-2">1단계</div>
                <p className="text-gray-700">전화 또는 온라인으로 상담 예약</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-primary-600 font-bold text-lg mb-2">2단계</div>
                <p className="text-gray-700">포트폴리오 또는 작품 지참</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-primary-600 font-bold text-lg mb-2">3단계</div>
                <p className="text-gray-700">전문 강사와 1:1 상담 진행</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}