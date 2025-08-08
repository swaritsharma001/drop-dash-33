import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/9c6855b1-b5f1-42e1-9cb3-494ac3adba6a.png"
                alt="Luke & Fashion logo"
                className="w-8 h-8 rounded-full object-cover shadow-premium"
                loading="lazy"
              />
              <span className="text-xl font-bold text-foreground">Luke &amp; Fashion</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premium destination for quality products. We deliver excellence with every purchase.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Policies</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Refund Policy
              </Link>
              <Link to="/return-policy" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Return Policy
              </Link>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe for updates and exclusive offers
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="h-9" />
              <Button className="w-full premium-gradient text-white" size="sm">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 mt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@eliteshop.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Luke &amp; Fashion. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Secure Payment</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">
                💳
              </div>
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">
                🏦
              </div>
              <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">
                📱
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;