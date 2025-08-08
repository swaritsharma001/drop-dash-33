import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  discount 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log("Added to cart:", id);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300 rounded-lg bg-card h-full flex flex-col"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden bg-secondary/5">
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 lg:h-52 object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        
          <div className="absolute top-2 md:top-3 left-2 md:left-3 premium-gradient text-primary-foreground px-2 md:px-2.5 py-1 rounded-md text-xs font-bold shadow-md">
            {discount}% OFF
          </div>
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 md:top-3 right-2 md:right-3 h-8 w-8 md:h-9 md:w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-sm transition-all duration-200 ${
            isWishlisted ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={handleWishlist}
        >
          <Heart className={`h-3 w-3 md:h-4 md:w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-3 md:p-4 space-y-2 md:space-y-3 flex-1 flex flex-col">
        <h3 className="font-medium text-card-foreground text-xs md:text-sm leading-4 md:leading-5 line-clamp-2 group-hover:text-accent transition-colors duration-200 min-h-[2rem] md:min-h-[2.5rem]">
          {title}
        </h3>
        
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="flex items-center bg-success text-success-foreground px-1.5 md:px-2 py-0.5 rounded text-xs font-semibold">
            {rating} <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-current ml-0.5 md:ml-1" />
          </div>
          <span className="text-xs text-muted-foreground">({reviews.toLocaleString('en-IN')})</span>
        </div>

        <div className="flex flex-col gap-1 md:gap-2 mt-auto">
          <div className="flex items-baseline gap-1.5 md:gap-2 flex-wrap">
            <span className="text-lg md:text-xl font-bold text-foreground">₹{price.toLocaleString('en-IN')}</span>
            {originalPrice && (
              <>
                <span className="text-xs md:text-sm text-muted-foreground line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
                <span className="text-xs text-success font-medium">
                  ₹{(originalPrice - price).toLocaleString('en-IN')} off
                </span>
              </>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 md:p-4 pt-0">
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all duration-200 group-hover:shadow-md h-8 md:h-10 text-xs md:text-sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;