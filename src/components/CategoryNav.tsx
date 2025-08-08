import { ChevronRight } from "lucide-react";

const categories = [
  { name: "New Arrivals", icon: "✨" },
  { name: "Women's Fashion", icon: "👗" },
  { name: "Men's Fashion", icon: "👔" },
  { name: "Footwear", icon: "👟" },
  { name: "Accessories", icon: "👜" },
  { name: "Beauty & Care", icon: "💄" },
  { name: "Jewelry", icon: "💍" },
  { name: "Electronics", icon: "📱" },
  { name: "Home & Lifestyle", icon: "🏠" },
];

const CategoryNav = () => {
  return (
    <div className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide py-2 md:py-3 gap-2 md:gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[70px] md:min-w-[80px] cursor-pointer group hover:bg-secondary/50 p-1.5 md:p-2 rounded-lg transition-colors"
            >
              <div className="text-xl md:text-2xl mb-1 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <span className="text-xs font-medium text-center text-foreground whitespace-nowrap leading-tight">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;