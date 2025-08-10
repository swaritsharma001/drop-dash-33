

import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AdminDataProvider } from "@/contexts/AdminDataContext";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load all pages for better performance
const Home = lazy(() => import("./pages/Home"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));
const Checkout = lazy(() => import("./pages/Checkout"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin pages
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminProducts = lazy(() => import("./pages/admin/AdminProducts"));
const AdminAnnouncements = lazy(() => import("./pages/admin/AdminAnnouncements"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));
const AdminSlider = lazy(() => import("./pages/admin/AdminSlider"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="eliteshop-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdminDataProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />

                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="announcements" element={<AdminAnnouncements />} />
                  <Route path="slider" element={<AdminSlider />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="orders" element={<AdminOrders />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AdminDataProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

