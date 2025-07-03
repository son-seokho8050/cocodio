import nodemailer from 'nodemailer';

// 네이버 SMTP 설정
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NAVER_EMAIL, // 네이버 이메일
      pass: process.env.NAVER_PASSWORD, // 네이버 비밀번호 또는 앱 비밀번호
    },
  });
};

interface ConsultationEmailData {
  studentName: string;
  grade: string;
  phone: string;
  course: string;
  message?: string;
  createdAt: Date;
}

export async function sendConsultationNotification(data: ConsultationEmailData): Promise<boolean> {
  try {
    if (!process.env.NAVER_EMAIL || !process.env.NAVER_PASSWORD) {
      console.log('네이버 이메일 설정이 없어 이메일 발송을 건너뜁니다.');
      return false;
    }

    const transporter = createTransporter();
    
    const emailContent = `
새로운 상담 신청이 접수되었습니다.

📝 신청 정보:
• 학생명: ${data.studentName}
• 학년: ${data.grade}
• 연락처: ${data.phone}
• 관심 과정: ${data.course}
• 신청 시간: ${data.createdAt.toLocaleString('ko-KR')}

💬 문의 내용:
${data.message || '별도 문의사항 없음'}

---
이 메일은 코코미술학원 홈페이지에서 자동으로 발송되었습니다.
관리자 페이지에서 자세한 내용을 확인하실 수 있습니다.
    `.trim();

    const mailOptions = {
      from: process.env.NAVER_EMAIL,
      to: 'COCO2238050@NAVER.COM', // 학원 이메일
      subject: `[코코미술학원] 새로운 상담 신청 - ${data.studentName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };

    await transporter.sendMail(mailOptions);
    console.log('상담 신청 알림 이메일이 발송되었습니다.');
    return true;
  } catch (error) {
    console.error('이메일 발송 실패:', error);
    return false;
  }
}