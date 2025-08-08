
import { useState, Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Truck, Headphones } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load heavy components
const ProductCard = lazy(() => import("@/components/ProductCard"));
const PromoBanner = lazy(() => import("@/components/PromoBanner"));

// Import products from centralized data
import { products } from "@/utils/productData";

// Organize products by categories
const fashionProducts = products.filter(p => p.category === "fashion");
const allProducts = products;

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Free shipping on orders over ₹1,999"
  },
  {
    icon: Shield,
    title: "Secure Payment", 
    description: "100% secure payment processing"
  },
  {
    icon: Truck,
    title: "Easy Returns",
    description: "30-day hassle-free returns"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support"
  }
];

// Product loading skeleton
const ProductSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-40 md:h-48 lg:h-52 w-full rounded-lg" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3 w-1/2" />
    <Skeleton className="h-8 w-full" />
  </div>
);

const Home = () => {
  const [visibleFashion, setVisibleFashion] = useState(4);
  const [visibleAll, setVisibleAll] = useState(8);

  const loadMoreFashion = () => {
    setVisibleFashion(prev => Math.min(prev + 4, fashionProducts.length));
  };

  const loadMoreAll = () => {
    setVisibleAll(prev => Math.min(prev + 4, allProducts.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Promotional Banner */}
        <section className="py-4 md:py-6">
          <Suspense fallback={<Skeleton className="h-20 w-full mx-4 rounded-lg" />}>
            <PromoBanner />
          </Suspense>
        </section>

        {/* Trending Fashion Section */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Trending Fashion
              </h2>
              <Button variant="outline" size="sm" className="text-primary text-xs md:text-sm">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
              {fashionProducts.slice(0, visibleFashion).map((product, index) => (
                <div
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Suspense fallback={<ProductSkeleton />}>
                    <ProductCard {...product} showAddToCart={false} />
                  </Suspense>
                </div>
              ))}
            </div>

            {visibleFashion < fashionProducts.length && (
              <div className="text-center mt-6 md:mt-8">
                <Button 
                  onClick={loadMoreFashion}
                  variant="outline"
                  className="px-6 md:px-8"
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Accessories & More Section */}
        <section className="py-6 md:py-8 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                All Products
              </h2>
              <Button variant="outline" size="sm" className="text-primary text-xs md:text-sm">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
              {allProducts.slice(0, visibleAll).map((product, index) => (
                <div
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Suspense fallback={<ProductSkeleton />}>
                    <ProductCard {...product} showAddToCart={false} />
                  </Suspense>
                </div>
              ))}
            </div>

            {visibleAll < allProducts.length && (
              <div className="text-center mt-6 md:mt-8">
                <Button 
                  onClick={loadMoreAll}
                  variant="outline"
                  className="px-6 md:px-8 hover-scale"
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center group p-3 md:p-4"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-foreground px-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed px-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base leading-relaxed px-4">
                Subscribe to our newsletter for exclusive deals and latest product updates
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto px-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 md:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm md:text-base"
                />
                <Button className="premium-gradient text-white px-6 py-3 h-auto font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
