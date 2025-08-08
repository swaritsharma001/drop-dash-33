import { useState, useEffect, Suspense, lazy } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load ProductCard for better performance
const ProductCard = lazy(() => import("@/components/ProductCard"));

// Product loading skeleton
const ProductSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-40 md:h-48 lg:h-52 w-full rounded-lg" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3 w-1/2" />
    <Skeleton className="h-8 w-full" />
  </div>
);

// Import products from Home page data
const products = [
  {
    id: "1",
    title: "Women's Floral Print Summer Dress",
    price: 1299,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 15234,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
    discount: 48,
    category: "fashion"
  },
  {
    id: "2",
    title: "Men's Casual Cotton T-Shirt",
    price: 599,
    originalPrice: 999,
    rating: 4.5,
    reviews: 8905,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    discount: 40,
    category: "fashion"
  },
  {
    id: "3",
    title: "Designer Women's Handbag",
    price: 2499,
    originalPrice: 4999,
    rating: 4.6,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    discount: 50,
    category: "accessories"
  },
  {
    id: "4",
    title: "Men's Leather Formal Shoes",
    price: 2999,
    originalPrice: 5999,
    rating: 4.3,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    discount: 50,
    category: "footwear"
  },
  {
    id: "5",
    title: "Women's Denim Jacket",
    price: 1899,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 5678,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=300&fit=crop",
    discount: 37,
    category: "fashion"
  },
  {
    id: "6",
    title: "Men's Casual Sneakers",
    price: 2199,
    originalPrice: 3999,
    rating: 4.7,
    reviews: 12543,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    discount: 45,
    category: "footwear"
  },
  {
    id: "7",
    title: "Women's Gold Plated Necklace",
    price: 1499,
    originalPrice: 2499,
    rating: 4.5,
    reviews: 9789,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    discount: 40,
    category: "jewelry"
  },
  {
    id: "8",
    title: "Men's Cotton Polo Shirt",
    price: 899,
    originalPrice: 1599,
    rating: 4.2,
    reviews: 7234,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
    discount: 44,
    category: "fashion"
  },
  {
    id: "9",
    title: "Women's Ankle Boots",
    price: 2799,
    originalPrice: 4499,
    rating: 4.6,
    reviews: 4567,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
    discount: 38,
    category: "footwear"
  },
  {
    id: "10",
    title: "Men's Formal Blazer",
    price: 3999,
    originalPrice: 7999,
    rating: 4.4,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    discount: 50,
    category: "fashion"
  },
  {
    id: "11",
    title: "Women's Silk Scarf",
    price: 799,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
    discount: 38,
    category: "accessories"
  },
  {
    id: "12",
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    originalPrice: 3490,
    rating: 4.8,
    reviews: 15234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    discount: 28,
    category: "electronics"
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [query]);

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    let sorted = [...filteredProducts];
    
    switch (sortType) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        // Keep original order for relevance
        break;
    }
    
    setFilteredProducts(sorted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Search Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {query ? `Search results for "${query}"` : "All Products"}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-secondary/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Sort by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "relevance", label: "Relevance" },
                { value: "price-low", label: "Price: Low to High" },
                { value: "price-high", label: "Price: High to Low" },
                { value: "rating", label: "Highest Rated" },
                { value: "discount", label: "Best Offers" }
              ].map((option) => (
                <Button
                  key={option.value}
                  variant={sortBy === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSort(option.value)}
                  className="text-xs"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 animate-fade-in">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Suspense fallback={<ProductSkeleton />}>
                    <ProductCard {...product} />
                  </Suspense>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <Link to="/">
                <Button className="premium-gradient text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
