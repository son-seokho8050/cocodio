import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PortfolioItem } from "@shared/schema";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "all" || item.category === activeFilter
  );

  const filterButtons = [
    { id: "all", label: "전체" },
    { id: "entrance-exam", label: "입시미술" },
    { id: "digital", label: "디지털 드로잉" },
    { id: "traditional", label: "전통미술" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "entrance-exam":
        return "text-primary-600";
      case "digital":
        return "text-secondary-600";
      case "traditional":
        return "text-accent-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            학생 <span className="text-primary-600">작품 갤러리</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            체계적인 교육과정을 통해 완성된 학생들의 우수한 작품들을 만나보세요.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-xl"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.student}</p>
                  {item.achievement && (
                    <p className={`text-sm ${getCategoryColor(item.category)}`}>
                      {item.achievement}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
            더 많은 작품 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
