import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff } from "lucide-react";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

export default function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 간단한 비밀번호 (실제 운영시에는 더 안전한 방법 사용)
  const ADMIN_PASSWORD = "coco2024admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // 간단한 지연 효과
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem("adminAuth", "true");
        onAuthenticated();
      } else {
        setError("비밀번호가 올바르지 않습니다.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            관리자 인증
          </CardTitle>
          <p className="text-gray-600">
            상담 신청 관리를 위해 비밀번호를 입력해주세요
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="관리자 비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700"
            >
              {isLoading ? "인증 중..." : "로그인"}
            </Button>
          </form>
          
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 text-center">
              관리자 권한이 필요한 페이지입니다.<br />
              비밀번호를 잊으셨다면 개발자에게 문의하세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}