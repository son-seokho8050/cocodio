import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, GraduationCap, ArrowUpRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const jonghapFormSchema = z.object({
  studentName: z.string().trim().min(1, "학생 이름을 입력해주세요"),
  grade: z.string().trim().min(1, "학년을 선택해주세요"),
  phone: z
    .string()
    .trim()
    .min(1, "연락처를 입력해주세요")
    .regex(/^[0-9+\-\s()]{7,20}$/, "올바른 연락처를 입력해주세요"),
  targetUniversity: z.string().trim().optional(),
  message: z.string().trim().optional(),
});
type JonghapForm = z.infer<typeof jonghapFormSchema>;

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.6)",
  border: "1px solid rgba(0,0,0,0.08)",
  color: "var(--text-heading)",
  borderRadius: "12px",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  fontSize: "0.875rem",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.4rem",
  fontSize: "0.7rem",
  color: "var(--color-coral-deep)",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = "var(--color-coral-deep)";
  e.currentTarget.style.background = "rgba(255,255,255,0.85)";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,181,168,0.25)";
};
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
  e.currentTarget.style.background = "rgba(255,255,255,0.6)";
  e.currentTarget.style.boxShadow = "none";
};

export default function JonghapToggle() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<JonghapForm>({
    resolver: zodResolver(jonghapFormSchema),
    defaultValues: { studentName: "", grade: "", phone: "", targetUniversity: "", message: "" },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: JonghapForm) => apiRequest("POST", "/api/jonghap-inquiry", data),
    onSuccess: () => {
      toast({ title: "문의 신청 완료", description: "서울대 총원장 학종 상담을 위해 빠르게 연락드리겠습니다." });
      form.reset();
      setModalOpen(false);
    },
    onError: () => {
      toast({ title: "신청 실패", description: "다시 시도해주세요.", variant: "destructive" });
    },
  });

  return (
    <div className="mx-auto mt-6 lg:mt-10" style={{ maxWidth: "685px" }} data-testid="jonghap-toggle">
      {/* ───── 글로시 토글 ───── */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 20px 60px -22px rgba(199,121,101,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* 상단 글로시 하이라이트 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "55%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* 토글 헤더 버튼 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="relative z-10 w-full flex items-center justify-between gap-3 px-5 sm:px-7 py-4 sm:py-5 text-left"
          data-testid="button-jonghap-toggle"
        >
          <span className="flex items-center gap-3">
            <span
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
            >
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span className="flex flex-col">
              <span
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color: "#1A1A1A", letterSpacing: "-0.01em" }}
              >
                학종전형
              </span>
              <span className="text-[11px] sm:text-xs" style={{ color: "var(--color-coral-deep)", fontWeight: 600 }}>
                서울대 총원장 직강
              </span>
            </span>
          </span>
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.85)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ChevronDown className="w-4 h-4" style={{ color: "#1A1A1A" }} />
          </span>
        </button>

        {/* 펼쳐지는 영역 */}
        <div
          className="relative z-10 overflow-hidden transition-all duration-400 ease-out"
          style={{
            maxHeight: open ? "200px" : "0px",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1">
            <div
              className="flex items-center justify-between gap-3 rounded-2xl px-4 sm:px-5 py-3.5"
              style={{
                backgroundColor: "#1A1A1A",
                boxShadow: "0 14px 40px -18px rgba(0,0,0,0.5)",
              }}
            >
              <span className="text-sm sm:text-[15px] font-medium leading-snug text-white">
                서울대 총원장 직강
                <span className="block text-[11px] sm:text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  학생부종합전형 문의하기
                </span>
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full flex-shrink-0 transition-transform hover:scale-105"
                style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                data-testid="button-open-jonghap-modal"
              >
                <span className="text-[11px] sm:text-xs font-semibold">문의하기</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ───── 모달 (shadcn Dialog) ───── */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="max-w-lg max-h-[90vh] overflow-y-auto border-0 p-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            borderRadius: "26px",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 40px 100px -30px rgba(120,40,30,0.45), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
          data-testid="modal-jonghap"
        >
          <DialogHeader className="px-6 sm:px-8 pt-6 sm:pt-7 pb-2 text-left space-y-1">
            <div
              className="text-[11px] uppercase tracking-widest font-bold"
              style={{ color: "var(--color-coral-deep)" }}
            >
              서울대 총원장 직강
            </div>
            <DialogTitle
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#1A1A1A", letterSpacing: "-0.02em" }}
            >
              학생부종합전형 문의 신청서
            </DialogTitle>
            <DialogDescription style={{ color: "var(--text-subtle)" }}>
              아래 정보를 남겨주시면 학종전형 상담을 도와드립니다.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={form.handleSubmit((d) => submitInquiry.mutate(d))}
            className="px-6 sm:px-8 pb-7 sm:pb-8 pt-2 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="jonghap-name" style={labelStyle}>학생 이름</label>
                <input
                  id="jonghap-name"
                  placeholder="학생 이름"
                  {...form.register("studentName")}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  data-testid="input-jonghap-name"
                />
                {form.formState.errors.studentName && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.studentName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="jonghap-grade" style={labelStyle}>학년</label>
                <select
                  id="jonghap-grade"
                  style={{ ...inputStyle, appearance: "none" }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={(e) => form.setValue("grade", e.target.value, { shouldValidate: true })}
                  defaultValue=""
                  data-testid="select-jonghap-grade"
                >
                  <option value="" disabled>학년 선택</option>
                  {["중학교 1학년", "중학교 2학년", "중학교 3학년", "고등학교 1학년", "고등학교 2학년", "고등학교 3학년", "N수생"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {form.formState.errors.grade && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.grade.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="jonghap-phone" style={labelStyle}>연락처</label>
              <input
                id="jonghap-phone"
                type="tel"
                placeholder="010-0000-0000"
                {...form.register("phone")}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
                data-testid="input-jonghap-phone"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="jonghap-university" style={labelStyle}>지원 희망 대학·학과</label>
              <input
                id="jonghap-university"
                placeholder="예) 서울대 디자인과"
                {...form.register("targetUniversity")}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
                data-testid="input-jonghap-university"
              />
            </div>

            <div>
              <label htmlFor="jonghap-message" style={labelStyle}>문의 내용</label>
              <textarea
                id="jonghap-message"
                rows={4}
                placeholder="학생부종합전형에 대해 궁금한 점을 자유롭게 작성해주세요"
                {...form.register("message")}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={onFocus}
                onBlur={onBlur}
                data-testid="textarea-jonghap-message"
              />
            </div>

            <button
              type="submit"
              disabled={submitInquiry.isPending}
              className="pill-arrow-wide w-full justify-between py-3"
              style={{ opacity: submitInquiry.isPending ? 0.7 : 1 }}
              data-testid="button-submit-jonghap"
            >
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                {submitInquiry.isPending ? "신청 중..." : "신청"}
              </span>
              <span className="arrow-circle">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
