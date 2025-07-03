import nodemailer from 'nodemailer';

// Gmail SMTP 설정 (더 안정적)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail 앱 비밀번호
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
    // 이메일 대신 콘솔에 상세한 알림 출력
    console.log('\n🔔 새로운 상담 신청 알림');
    console.log('================================');
    console.log(`📝 학생명: ${data.studentName}`);
    console.log(`🎓 학년: ${data.grade}`);
    console.log(`📞 연락처: ${data.phone}`);
    console.log(`📚 관심 과정: ${data.course}`);
    console.log(`⏰ 신청 시간: ${data.createdAt.toLocaleString('ko-KR')}`);
    console.log(`💬 문의 내용: ${data.message || '별도 문의사항 없음'}`);
    console.log('================================');
    console.log('💡 관리자 페이지에서 확인하세요: /admin/consultations');
    console.log('');
    
    // 이메일 설정이 있다면 발송 시도
    if (process.env.GMAIL_EMAIL && process.env.GMAIL_APP_PASSWORD) {
      try {
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
          from: process.env.GMAIL_EMAIL,
          to: 'COCO2238050@NAVER.COM',
          subject: `[코코미술학원] 새로운 상담 신청 - ${data.studentName}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>'),
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ 이메일 알림도 발송되었습니다.');
        return true;
      } catch (emailError) {
        console.log('⚠️ 이메일 발송은 실패했지만 상담 신청은 정상 접수되었습니다.');
        console.log('💡 관리자 페이지에서 확인 가능합니다.');
        return true; // 이메일 실패해도 성공으로 처리
      }
    } else {
      console.log('💡 이메일 설정이 없습니다. 관리자 페이지에서 확인하세요.');
      return true;
    }
  } catch (error) {
    console.error('알림 처리 실패:', error);
    return false;
  }
}