import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, XCircle } from "lucide-react";

const RefundPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="p-2 h-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <span>/</span>
            <span className="text-foreground">Refund Policy</span>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Refund Policy</CardTitle>
              <p className="text-muted-foreground">
                Last updated: January 1, 2024
              </p>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">30-Day Return Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                    you can return it within 30 days of delivery for a full refund or exchange.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Eligible Items</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="font-medium text-success">Returnable Items</span>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Unopened electronics in original packaging</li>
                        <li>• Clothing with tags attached</li>
                        <li>• Books in original condition</li>
                        <li>• Home & garden items (unused)</li>
                        <li>• Sports equipment (unused)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <XCircle className="h-5 w-5 text-destructive" />
                        <span className="font-medium text-destructive">Non-Returnable Items</span>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Personal care items</li>
                        <li>• Perishable goods</li>
                        <li>• Custom or personalized items</li>
                        <li>• Digital downloads</li>
                        <li>• Gift cards</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Return Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Initiate Return</h4>
                        <p className="text-muted-foreground text-sm">
                          Log into your account and go to "My Orders" or contact our customer service team.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Get Return Label</h4>
                        <p className="text-muted-foreground text-sm">
                          We'll email you a prepaid return shipping label within 24 hours.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Package & Ship</h4>
                        <p className="text-muted-foreground text-sm">
                          Pack the item in its original packaging and attach the return label.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Receive Refund</h4>
                        <p className="text-muted-foreground text-sm">
                          Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Refund Timeline</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Processing Time:</span>
                        <span className="text-muted-foreground ml-2">1-2 business days after we receive your return</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Refund to Card:</span>
                        <span className="text-muted-foreground ml-2">3-5 business days</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">PayPal Refund:</span>
                        <span className="text-muted-foreground ml-2">1-2 business days</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Return Conditions</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Items must be returned within 30 days of delivery</li>
                    <li>Items must be in original, unused condition</li>
                    <li>Original packaging and accessories must be included</li>
                    <li>Return shipping is free for defective or incorrect items</li>
                    <li>Customer pays return shipping for change of mind returns</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Exchanges</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're happy to exchange items for a different size or color, subject to availability. 
                    The exchange process follows the same steps as returns, but please specify you'd like an 
                    exchange when initiating the return.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Damaged or Defective Items</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you receive a damaged or defective item, please contact us immediately with photos of the damage. 
                    We'll arrange for a replacement or full refund at no cost to you, including return shipping.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you have questions about returns or need assistance, our customer service team is here to help:
                  </p>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="text-foreground">Email: returns@eliteshop.com</p>
                    <p className="text-foreground">Phone: +1 (555) 123-4567</p>
                    <p className="text-foreground">Hours: Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;