import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! 코코미술학원입니다. 궁금한 점이 있으시면 언제든 문의해주세요. 😊',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickResponses = [
    "안녕하세요! 상담을 받고 싶습니다.",
    "입시미술 과정에 대해 알고 싶어요.",
    "디지털 드로잉 수업은 어떻게 진행되나요?",
    "학원 위치와 시간표를 알려주세요."
  ];

  const botResponses: Record<string, string> = {
    "상담": "상담 신청해주셔서 감사합니다! 전화(010-4472-2028) 또는 하단 상담신청 폼을 통해 자세한 상담을 받으실 수 있습니다.",
    "입시미술": "입시미술 과정은 FOLLOW 4단계 사고체계를 통해 체계적으로 진행됩니다. 기초부터 실전까지 단계별 맞춤 교육을 제공합니다.",
    "디지털": "디지털 드로잉은 클립스튜디오, ASEPRITE, 스파인2D 등 전문 소프트웨어를 활용한 실무 중심 교육입니다.",
    "위치": "마산점(고운로 235, 유진빌딩 4층), 김해점(내외중앙로 74, 밝은메디컬센터 10층) 2곳에서 운영중입니다.",
    "안녕": "안녕하세요! 코코미술학원에 관심 가져주셔서 감사합니다. 어떤 도움이 필요하신가요?"
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // 봇 응답 생성
    setTimeout(() => {
      const keywords = Object.keys(botResponses);
      const matchedKeyword = keywords.find(keyword => text.includes(keyword));
      const botResponse = matchedKeyword ? botResponses[matchedKeyword] : 
        "문의해주셔서 감사합니다! 더 자세한 상담을 위해 전화(010-4472-2028)로 연락주시거나 하단의 상담신청 폼을 이용해주세요.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      {/* 채팅 버튼 */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg"
          aria-label="실시간 상담 채팅 열기"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* 채팅 창 */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border">
          {/* 헤더 */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">실시간 상담</h3>
              <p className="text-xs text-primary-100">코코미술학원</p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-primary-700"
              aria-label="채팅창 닫기"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* 메시지 영역 */}
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* 빠른 응답 버튼들 */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">빠른 질문 선택</p>
                {quickResponses.map((response, index) => (
                  <Button
                    key={index}
                    onClick={() => sendMessage(response)}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                  >
                    {response}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* 입력 영역 */}
          <div className="p-4 border-t flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
              placeholder="메시지를 입력하세요..."
              className="flex-1"
            />
            <Button
              onClick={() => sendMessage(inputValue)}
              size="sm"
              className="px-3"
              aria-label="메시지 전송"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}