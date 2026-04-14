import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const inputStyle = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'rgba(255,255,255,0.9)',
  borderRadius: '0.75rem',
  padding: '0.625rem 0.875rem',
  width: '100%',
  outline: 'none',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
} as const;

const labelStyle = {
  display: 'block',
  marginBottom: '0.4rem',
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.6)',
  fontWeight: 500,
} as const;

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
} as const;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedCampus, setSelectedCampus] = useState<'masan' | 'gimhae'>('masan');

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: { studentName: "", grade: "", phone: "", course: "", message: "" },
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: InsertConsultation) => apiRequest("POST", "/api/consultations", data),
    onSuccess: () => {
      toast({ title: "상담 신청 완료", description: "빠른 시일 내에 연락드리겠습니다." });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: () => {
      toast({ title: "신청 실패", description: "다시 시도해주세요.", variant: "destructive" });
    },
  });

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)';
    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139,92,246,0.15)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>
            무료체험수업 &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              적성테스트 신청
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem' }}>
            궁금한 점이 있으시면 언제든 문의해 주세요. 전문 상담사가 친절히 안내해 드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="rounded-3xl p-8" style={glassCard}>
            <h3 className="text-xl font-bold mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>무료 체험수업 신청</h3>
            <form onSubmit={form.handleSubmit((d) => submitConsultation.mutate(d))} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>학생 이름</label>
                  <input
                    placeholder="학생 이름을 입력해주세요"
                    {...form.register("studentName")}
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                  {form.formState.errors.studentName && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.studentName.message}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>학년</label>
                  <select
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(e) => form.setValue("grade", e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ background: '#0F1535' }}>학년을 선택해주세요</option>
                    {['중학교 1학년','중학교 2학년','중학교 3학년','고등학교 1학년','고등학교 2학년','고등학교 3학년'].map(g => (
                      <option key={g} value={g} style={{ background: '#0F1535' }}>{g}</option>
                    ))}
                  </select>
                  {form.formState.errors.grade && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.grade.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>연락처</label>
                  <input
                    type="tel"
                    placeholder="연락 가능한 번호를 입력해주세요"
                    {...form.register("phone")}
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>관심 과정</label>
                  <select
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(e) => form.setValue("course", e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ background: '#0F1535' }}>관심 과정을 선택해주세요</option>
                    {['입시미술 (디자인/만화)','디지털 드로잉','중등미술','상담 후 결정'].map(c => (
                      <option key={c} value={c} style={{ background: '#0F1535' }}>{c}</option>
                    ))}
                  </select>
                  {form.formState.errors.course && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.course.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label style={labelStyle}>문의 내용</label>
                <textarea
                  rows={4}
                  placeholder="궁금한 점이나 특별히 상담받고 싶은 내용을 자유롭게 작성해주세요"
                  {...form.register("message")}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <button
                type="submit"
                disabled={submitConsultation.isPending}
                className="btn-gradient w-full py-4 text-lg font-semibold flex items-center justify-center gap-2"
                style={{ borderRadius: '0.75rem', opacity: submitConsultation.isPending ? 0.7 : 1 }}
              >
                <Send className="h-5 w-5" />
                {submitConsultation.isPending ? "신청 중..." : "신청하기"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>학원 정보</h3>

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: MapPin,
                  title: '주소',
                  lines: ['[마산] 마산 합포구 고운로 235, 유진빌딩 4층', '[김해] 김해시 내외중앙로 74, 밝은메디컬센터 10층'],
                  accent: '#A78BFA',
                },
                {
                  icon: Phone,
                  title: '연락처',
                  lines: ['010.4472.2028', '평일 13:00-23:00, 토/일요일 12:00-18:00'],
                  accent: '#06B6D4',
                },
                {
                  icon: Mail,
                  title: '이메일',
                  lines: ['COCO2238050@NAVER.COM', '24시간 문의 접수 가능'],
                  accent: '#34D399',
                },
              ].map(({ icon: Icon, title, lines, accent }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl p-5" style={glassCard}>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{title}</h4>
                    {lines.map((l, i) => (
                      <p key={i} className="text-sm" style={{ color: i === 0 ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)' }}>
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {(['masan', 'gimhae'] as const).map((campus) => (
                  <button
                    key={campus}
                    onClick={() => setSelectedCampus(campus)}
                    className="flex-1 py-3 text-sm font-medium transition-all"
                    style={{
                      background: selectedCampus === campus
                        ? 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))'
                        : 'rgba(255,255,255,0.03)',
                      color: selectedCampus === campus ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                      borderBottom: selectedCampus === campus ? '2px solid #A78BFA' : '2px solid transparent',
                    }}
                  >
                    {campus === 'masan' ? '마산 캠퍼스' : '김해 캠퍼스'}
                  </button>
                ))}
              </div>
              <div className="h-64">
                {selectedCampus === 'masan' ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.123456789!2d128.5765!3d35.2143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rOg7Jq064Spams1MzUsIOuplOyynOy9lOuEvOw6ku2YuSwg7LC97JuQ7IucLCDqsr3sgZHrgqjrj4Qg64yA7ZWc66-86rWt!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="마산 캠퍼스"
                  />
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.987654321!2d128.8890!3d35.2280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z64K065OE7LWk7KSR7JWZ66GcIDc0LCDquYDtlbTsi5wg7KO86rK97YyM!5e0!3m2!1sko!2skr!4v1620000000001!5m2!1sko!2skr"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="김해 캠퍼스"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
