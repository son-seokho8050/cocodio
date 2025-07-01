import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter } from "lucide-react";
import { Link } from "wouter";
import type { PortfolioItem } from "@shared/schema";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: portfolioItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const categories = ["all", "캐릭터 디자인", "일러스트", "웹툰", "게임 아트", "컨셉 아트"];

  const filteredItems = portfolioItems?.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  ) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">작품을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>홈으로</span>
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">FOLLOW 수업 갤러리</h1>
            </div>
            <div className="text-sm text-gray-500">
              전체 {filteredItems.length}개 작품
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">카테고리별 보기</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-primary-600 hover:bg-primary-700" 
                  : "hover:bg-gray-50"
                }
              >
                {category === "all" ? "전체" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  작가: {item.student}
                </p>
                {item.achievement && (
                  <div className="mt-4">
                    <Badge variant="outline" className="text-primary-600 border-primary-600">
                      🏆 {item.achievement}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              도슨트 발표
            </h3>
            <p className="text-gray-500">
              다른 카테고리를 선택해보세요.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            여러분도 이런 작품을 만들어보세요!
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            코코미술학원의 체계적인 교육과정을 통해 
            여러분의 창작 능력을 한 단계 업그레이드할 수 있습니다.
          </p>
          <Link href="/#contact">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
              상담 신청하기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}