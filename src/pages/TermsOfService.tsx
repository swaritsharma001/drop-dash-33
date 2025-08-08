import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
            <span className="text-foreground">Terms of Service</span>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
              <p className="text-muted-foreground">
                Last updated: January 1, 2024
              </p>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using EliteShop, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Permission is granted to temporarily download one copy of the materials on EliteShop's website 
                    for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                    transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Product Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide accurate product descriptions and pricing information. However, we do not 
                    warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. 
                    We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Orders and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    By placing an order, you agree to provide current, complete, and accurate purchase and account information. 
                    You agree to promptly update your account and other information so that we can complete your transactions.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>All orders are subject to availability</li>
                    <li>We reserve the right to refuse or cancel orders</li>
                    <li>Payment must be received before shipment</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Shipping and Delivery</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We will make every effort to ship your order within the timeframe specified. However, delivery 
                    dates are estimates and we cannot guarantee delivery by a specific date. We are not responsible 
                    for delays caused by shipping carriers or circumstances beyond our control.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Returns and Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Returns are accepted within 30 days of purchase with original receipt and in original condition. 
                    Refunds will be processed within 5-7 business days after we receive the returned item. 
                    Return shipping costs are the responsibility of the customer unless the item was defective or incorrect.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account and password. 
                    You agree to accept responsibility for all activities that occur under your account or password. 
                    You must notify us immediately of any unauthorized use of your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall EliteShop or its suppliers be liable for any damages (including, without limitation, 
                    damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                    to use the materials on EliteShop's website, even if EliteShop or an authorized representative has been 
                    notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                    of the website, to understand our practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    EliteShop may revise these terms of service at any time without notice. By using this website, 
                    you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-3 p-4 bg-secondary/30 rounded-lg">
                    <p className="text-foreground">Email: legal@eliteshop.com</p>
                    <p className="text-foreground">Phone: +1 (555) 123-4567</p>
                    <p className="text-foreground">Address: 123 Commerce St, New York, NY 10001</p>
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

export default TermsOfService;