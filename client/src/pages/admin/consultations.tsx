import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Phone, Mail, User, BookOpen, MessageSquare, LogOut } from "lucide-react";
import { Link } from "wouter";
import type { Consultation } from "@shared/schema";
import AdminAuth from "@/components/admin-auth";

export default function AdminConsultations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const { data: consultations = [], isLoading } = useQuery<Consultation[]>({
    queryKey: ["/api/consultations"],
    enabled: isAuthenticated, // 인증된 경우에만 데이터 로드
  });

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  // 인증되지 않은 경우 로그인 화면 표시
  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCourseColor = (course: string) => {
    switch (course) {
      case "입시미술":
        return "bg-blue-100 text-blue-800";
      case "SPACE":
        return "bg-purple-100 text-purple-800";
      case "디지털 드로잉":
        return "bg-green-100 text-green-800";
      case "중등미술":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">상담 신청 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>홈으로</span>
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">상담 신청 관리</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                총 {consultations.length}건의 상담 신청
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                <span>로그아웃</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {consultations.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                아직 상담 신청이 없습니다
              </h3>
              <p className="text-gray-500">
                새로운 상담 신청이 들어오면 여기에 표시됩니다.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {consultations.map((consultation) => (
              <Card key={consultation.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-100 text-primary-600 rounded-full w-10 h-10 flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {consultation.studentName}
                        </CardTitle>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(consultation.createdAt)}
                        </div>
                      </div>
                    </div>
                    <Badge className={getCourseColor(consultation.course)}>
                      {consultation.course}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        연락처 정보
                      </h4>
                      
                      <div className="space-y-2 pl-6">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{consultation.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">학년: {consultation.grade}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">관심 과정: {consultation.course}</span>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    {consultation.message && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          문의 내용
                        </h4>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {consultation.message}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline" size="sm">
                        메모 추가
                      </Button>
                      <Button variant="outline" size="sm">
                        상담 완료
                      </Button>
                      <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                        연락하기
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Summary Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {consultations.length}
              </div>
              <div className="text-sm text-gray-500">총 상담 신청</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {consultations.filter(c => c.course === "입시미술").length}
              </div>
              <div className="text-sm text-gray-500">입시미술</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {consultations.filter(c => c.course === "디지털 드로잉").length}
              </div>
              <div className="text-sm text-gray-500">디지털 드로잉</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {consultations.filter(c => c.course === "중등미술").length}
              </div>
              <div className="text-sm text-gray-500">중등미술</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}