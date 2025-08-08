import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getProductById, type Product } from "@/utils/productData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")} className="premium-gradient text-white">
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${quantity} item(s) added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist!",
      description: `Product ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const increaseQuantity = () => {
    if (quantity < (product.stockCount || 0)) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="p-2 h-auto hover-scale"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <span>/</span>
            <span className="capitalize">{product.category || "Products"}</span>
            <span>/</span>
            <span className="text-foreground">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4 animate-scale-in">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30 hover-scale">
                <img
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover-scale ${
                        selectedImage === index 
                          ? 'border-primary' 
                          : 'border-transparent hover:border-border'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {product.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
                  </div>
                  {product.inStock ? (
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      In Stock ({product.stockCount} left)
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <Badge className="bg-destructive text-destructive-foreground">
                        {product.discount}% OFF
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection for Fashion Items */}
              {product.category === "fashion" && product.sizes && (
                <div className="space-y-3">
                  <span className="font-medium">Size:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="w-12 h-10 hover-scale"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                  {product.category === "fashion" && !selectedSize && (
                    <p className="text-sm text-muted-foreground">Please select a size</p>
                  )}
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="h-8 w-8 hover-scale"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseQuantity}
                      disabled={quantity >= (product.stockCount || 0)}
                      className="h-8 w-8 hover-scale"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    className="flex-1 premium-gradient text-white h-12 text-lg hover-scale"
                    onClick={handleAddToCart}
                    disabled={!product.inStock || (product.category === "fashion" && !selectedSize)}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-12 w-12 hover-scale ${isWishlisted ? 'text-destructive border-destructive' : ''}`}
                    onClick={handleWishlist}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <Card className="animate-fade-in">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg hover-scale">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders over ₹1,999</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg hover-scale">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">30-day policy</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg hover-scale">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Warranty</div>
                  <div className="text-xs text-muted-foreground">2-year coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-12 animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;