import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content: "4단계 사고체계 덕분에 아이가 단순히 그림을 따라 그리는 것이 아니라 스스로 생각하고 창의적으로 표현하는 능력이 눈에 띄게 향상됐어요.",
      name: "김○○ 학부모",
      role: "입시미술반 학부모",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600"
    },
    {
      id: 2,
      content: "처음에는 그림에 자신이 없었는데, 선생님들의 세심한 지도로 디지털 드로잉에 흥미를 갖게 되었고 지금은 웹툰 작가가 꿈이 되었어요!",
      name: "박○○ 학생",
      role: "디지털드로잉반 (고2)",
      bgColor: "bg-purple-50",
      iconColor: "text-secondary-600"
    },
    {
      id: 3,
      content: "다른 학원들과 달리 체계적인 커리큘럼과 개별 맞춤 지도로 아이가 목표했던 대학에 합격할 수 있었습니다. 정말 감사해요.",
      name: "이○○ 학부모",
      role: "입시미술반 학부모",
      bgColor: "bg-orange-50",
      iconColor: "text-accent-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            학부모 & 학생 <span className="text-primary-600">후기</span>
          </h2>
          <p className="text-xl text-gray-600">실제 수강생들의 생생한 경험담을 들어보세요.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    <User className={`${testimonial.iconColor} h-6 w-6`} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
