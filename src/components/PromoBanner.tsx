import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const banners = [
  {
    id: 1,
    title: "Samsung Galaxy Watch7",
    subtitle: "Challenge your past for a better tomorrow",
    price: "From ₹15,473",
    badge: "FREEDOM SALE LIVE NOW",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
    bgColor: "from-green-400 to-blue-500"
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    price: "From ₹1,34,900",
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&h=600&fit=crop",
    bgColor: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "MacBook Air M3",
    subtitle: "Supercharged by M3 chip",
    price: "From ₹1,14,900",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop",
    bgColor: "from-blue-400 to-purple-600"
  }
];

const PromoBanner = () => {
  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({ delay: 3500, stopOnInteraction: true })
        ]}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((b) => (
            <CarouselItem key={b.id} className="basis-full">
              <Card className="overflow-hidden border-0 rounded-lg mx-3 md:mx-4 shadow-lg">
                <div className="relative h-48 md:h-64 lg:h-80 hero-gradient">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10 flex items-center h-full">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                      <div className="flex items-center justify-between">
                        <div className="text-white space-y-2 md:space-y-3 lg:space-y-4 flex-1 pr-4 md:pr-0">
                          {b.badge && (
                            <div className="inline-block premium-gradient text-primary-foreground px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                              {b.badge}
                            </div>
                          )}
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
                            {b.title}
                          </h2>
                          <p className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed">
                            {b.subtitle}
                          </p>
                          <div className="text-lg md:text-2xl lg:text-3xl font-bold">
                            {b.price}
                          </div>
                          <Button className="premium-gradient text-white hover:opacity-90 font-semibold px-4 md:px-6 py-2 text-sm md:text-base h-auto">
                            Shop Now
                          </Button>
                        </div>
                        <div className="hidden lg:block flex-1">
                          <img
                            src={b.image}
                            alt={`${b.title} premium promo image`}
                            className="w-full h-48 object-cover rounded-lg ml-8"
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground rounded-full shadow-md h-8 w-8 md:h-10 md:w-10">
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground rounded-full shadow-md h-8 w-8 md:h-10 md:w-10">
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default PromoBanner;
