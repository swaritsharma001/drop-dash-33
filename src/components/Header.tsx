import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import AnnouncementBar from "@/components/AnnouncementBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <AnnouncementBar />

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/9c6855b1-b5f1-42e1-9cb3-494ac3adba6a.png"
                alt="Luke & Fashion logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-premium"
                loading="lazy"
              />
              <span className="text-lg md:text-xl font-bold text-foreground">Luke &amp; Fashion</span>
            </Link>

            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, brands and more..."
                  className="pl-10 h-12 border-border focus:ring-2 focus:ring-primary/20"
                />
              </form>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/login")}
                  className="flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/cart")}
                  className="flex items-center space-x-2 relative"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-10 h-9 text-sm"
              />
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="container mx-auto px-3 py-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start h-11 text-sm"
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
              >
                <User className="h-4 w-4 mr-3" />
                Login
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-11 text-sm"
                onClick={() => {
                  navigate("/cart");
                  setIsMenuOpen(false);
                }}
              >
                <ShoppingCart className="h-4 w-4 mr-3" />
                Cart
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-11 text-sm"
                onClick={() => {
                  navigate("/account");
                  setIsMenuOpen(false);
                }}
              >
                <User className="h-4 w-4 mr-3" />
                My Account
              </Button>
              <div className="px-3 py-3 flex items-center justify-between border-t border-border mt-2 pt-4">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;