import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      studentName: "",
      grade: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      return await apiRequest("POST", "/api/consultations", data);
    },
    onSuccess: () => {
      toast({
        title: "상담 신청 완료",
        description: "상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: () => {
      toast({
        title: "신청 실패",
        description: "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultation) => {
    submitConsultation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            무료체험수업 & <span className="text-primary-600">적성테스트 신청</span>
          </h2>
          <p className="text-xl text-gray-600">
            궁금한 점이 있으시면 언제든 문의해 주세요. 전문 상담사가 친절히 안내해 드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">무료 체험수업 신청</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="studentName">학생 이름</Label>
                  <Input
                    id="studentName"
                    placeholder="학생 이름을 입력해주세요"
                    {...form.register("studentName")}
                    className="mt-2"
                  />
                  {form.formState.errors.studentName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.studentName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="grade">학년</Label>
                  <Select onValueChange={(value) => form.setValue("grade", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="학년을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="중학교 1학년">중학교 1학년</SelectItem>
                      <SelectItem value="중학교 2학년">중학교 2학년</SelectItem>
                      <SelectItem value="중학교 3학년">중학교 3학년</SelectItem>
                      <SelectItem value="고등학교 1학년">고등학교 1학년</SelectItem>
                      <SelectItem value="고등학교 2학년">고등학교 2학년</SelectItem>
                      <SelectItem value="고등학교 3학년">고등학교 3학년</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.grade && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.grade.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="연락 가능한 번호를 입력해주세요"
                    {...form.register("phone")}
                    className="mt-2"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="course">관심 과정</Label>
                  <Select onValueChange={(value) => form.setValue("course", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="관심 과정을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="입시미술 (디자인/만화)">입시미술 (디자인/만화)</SelectItem>
                      <SelectItem value="디지털 드로잉">디지털 드로잉</SelectItem>
                      <SelectItem value="중등미술">중등미술</SelectItem>
                      <SelectItem value="상담 후 결정">상담 후 결정</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.course && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.course.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="message">문의 내용</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="궁금한 점이나 특별히 상담받고 싶은 내용을 자유롭게 작성해주세요"
                  {...form.register("message")}
                  className="mt-2"
                />
              </div>
              
              <Button
                type="submit"
                disabled={submitConsultation.isPending}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                {submitConsultation.isPending ? "신청 중..." : "상담 신청하기"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">학원 정보</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                  <p className="text-gray-600">[마산] 마산 합포구 고운로 235, 유진빌딩 4층</p>
                  <p className="text-gray-600">[김해] 김해시 내외중앙로 74, 밝은메디컬센터 10층</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">연락처</h4>
                  <p className="text-gray-600">010.4472.2028</p>
                  <p className="text-sm text-gray-500">평일 13:00-23:00, 토/일요일 12:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                  <p className="text-gray-600">COCO2238050@NAVER.COM</p>
                  <p className="text-sm text-gray-500">24시간 문의 접수 가능</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-lg h-64 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8842669!2d128.5614!3d35.2281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzQxLjIiTiAxMjjCsDMzJzQxLjAiRQ!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="코코미술학원 위치"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
