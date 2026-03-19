import nodemailer from 'nodemailer';

const NOTIFY_EMAIL = 'magmaart2238050@gmail.com';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

interface ConsultationEmailData {
  studentName: string;
  grade: string;
  phone: string;
  course: string;
  message?: string;
  createdAt: Date | string | null;
}

export async function sendConsultationNotification(data: ConsultationEmailData): Promise<boolean> {
  const submittedAt = data.createdAt
    ? new Date(data.createdAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    : '-';

  console.log('\n🔔 새로운 상담 신청 알림');
  console.log('================================');
  console.log(`📝 학생명: ${data.studentName}`);
  console.log(`🎓 학년: ${data.grade}`);
  console.log(`📞 연락처: ${data.phone}`);
  console.log(`📚 관심 과정: ${data.course}`);
  console.log(`⏰ 신청 시간: ${submittedAt}`);
  console.log(`💬 문의 내용: ${data.message || '별도 문의사항 없음'}`);
  console.log('================================');

  if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
    console.log('⚠️ Gmail 환경변수가 설정되지 않았습니다.');
    return true;
  }

  try {
    const transporter = createTransporter();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: #2563eb; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">📩 새 상담 신청이 들어왔습니다</h1>
          <p style="color: #bfdbfe; margin: 6px 0 0; font-size: 14px;">코코미술학원 상담 신청 알림</p>
        </div>
        <div style="padding: 32px; background: white;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; color: #6b7280; width: 120px;">학생 이름</td>
              <td style="padding: 12px 8px; font-weight: 600; color: #111827;">${data.studentName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; color: #6b7280;">학년</td>
              <td style="padding: 12px 8px; color: #111827;">${data.grade}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; color: #6b7280;">연락처</td>
              <td style="padding: 12px 8px; color: #111827;">${data.phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; color: #6b7280;">관심 과정</td>
              <td style="padding: 12px 8px; color: #111827;">${data.course}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; color: #6b7280;">문의 내용</td>
              <td style="padding: 12px 8px; color: #111827;">${data.message || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; color: #6b7280;">신청 시각</td>
              <td style="padding: 12px 8px; color: #111827;">${submittedAt}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #f3f4f6; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">코코미술학원 웹사이트 자동 발송 메일입니다.</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"코코미술학원" <${process.env.GMAIL_EMAIL}>`,
      to: NOTIFY_EMAIL,
      subject: `[코코 상담신청] ${data.studentName} (${data.grade}) - ${data.course}`,
      html,
    });

    console.log(`✅ 이메일 알림 발송 완료 → ${NOTIFY_EMAIL}`);
    return true;
  } catch (error) {
    console.error('⚠️ 이메일 발송 실패:', error);
    return true;
  }
}
