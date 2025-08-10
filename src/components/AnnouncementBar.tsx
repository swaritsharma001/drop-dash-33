import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Sparkles, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminData } from "@/contexts/AdminDataContext";

const AnnouncementBar = () => {
  const [dismissed, setDismissed] = useState<boolean>(false);
  const { announcements } = useAdminData();

  useEffect(() => {
    const wasDismissed = localStorage.getItem("announcement:dismissed") === "1";
    setDismissed(wasDismissed);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("announcement:dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="premium-gradient text-primary-foreground">
      <div className="container mx-auto px-3 md:px-4 py-2 relative">
        <div className="flex items-center justify-center">
          <Megaphone className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 opacity-90" aria-hidden="true" />
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2800, stopOnInteraction: true })]}
            className="w-full max-w-3xl"
          >
            <CarouselContent>
              {announcements.map((msg, i) => (
                <CarouselItem key={i} className="basis-full">
                  <p className="text-center text-xs md:text-sm font-medium tracking-wide">
                    <Sparkles className="inline h-3 w-3 md:h-3.5 md:w-3.5 mr-1 align-[-2px]" aria-hidden="true" />
                    {msg}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-foreground/90 hover:bg-white/10"
          onClick={handleDismiss}
        >
          ✕
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
