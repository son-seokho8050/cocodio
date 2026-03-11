import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "wouter";
import masanImg from "@assets/마산코코_1773204169516.jpg";
import manhwaImg from "@assets/만화코코_1773204265868.jpg";
import ipsiImg from "@assets/입시코코_1773204265868.jpg";

const tuitionImages = [
  { src: masanImg, label1: "마산코코", label2: "교습비 계시표" },
  { src: manhwaImg, label1: "만화코코", label2: "교습비 계시표" },
  { src: ipsiImg, label1: "입시코코", label2: "교습비 계시표" },
];

export default function InfoTuition() {
  const [modalImg, setModalImg] = useState<{ src: string; label1: string; label2: string } | null>(null);

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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">등록번호</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>마산코코 등록번호 제 718호</p>
                    <p>입시코코 등록번호 제 1569호</p>
                    <p>만화코코 등록번호 제 2335호</p>
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

              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium text-gray-500">교습비 계시표 (클릭하면 크게 볼 수 있어요)</p>
                <div className="grid grid-cols-3 gap-3">
                  {tuitionImages.map((img) => (
                    <button
                      key={img.label1}
                      onClick={() => setModalImg(img)}
                      className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <img
                        src={img.src}
                        alt={`${img.label1} ${img.label2}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="bg-gray-50 py-1.5 px-2 text-center">
                        <span className="text-xs font-semibold text-gray-800 block leading-tight">{img.label1}</span>
                        <span className="text-xs text-gray-500 block leading-tight">{img.label2}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
            <img
              src={modalImg.src}
              alt={`${modalImg.label1} ${modalImg.label2}`}
              className="w-full h-auto"
            />
            <div className="p-3 text-center bg-gray-50">
              <span className="text-sm font-semibold text-gray-800 block">{modalImg.label1}</span>
              <span className="text-xs text-gray-500 block">{modalImg.label2}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
