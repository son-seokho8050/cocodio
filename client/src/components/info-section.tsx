import { Clock, MapPin, Phone, Mail, Car, Bus } from "lucide-react";

export default function InfoSection() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">안내</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            코코미술학원 방문, 상담, 교습비 및 차량운행 안내
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

        {/* 교습비 안내 */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">교습비 안내</h3>
            <p className="text-lg text-gray-600">
              체계적인 커리큘럼과 개인별 맞춤 지도를 위한 교습비 안내입니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">수강료 특징</h4>
                <ul className="space-y-2 text-gray-700">
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
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">상담 안내</h4>
                <p className="text-gray-700">
                  정확한 수강료는 학생의 목표, 수준, 선택 과정에 따라 달라질 수 있습니다. 
                  자세한 교습비는 상담을 통해 안내해드리겠습니다.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/assets/tuition-fee.jpg" 
                alt="교습비 계시표" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 안전귀가 차량운행 */}
        <div className="mt-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">안전귀가 차량운행</h3>
            <p className="text-lg text-gray-600">
              학생들의 안전한 귀가를 위한 차량운행 서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img 
                src="/assets/safe-transport.png" 
                alt="안전귀가 차량운행" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4 order-1 md:order-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">운행 지역</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    마산전 지역
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    함안전 지역
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    남지, 군북 기타지역
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">운행 특징</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    안전한 등하원 서비스
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    정해진 시간과 장소
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    학부모 안심 서비스
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 text-sm">
                  <strong>문의:</strong> 차량운행 관련 자세한 사항은 각 캠퍼스로 문의해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}