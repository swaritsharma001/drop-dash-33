import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Megaphone, Package, Sliders, Users, Truck, BadgePercent } from "lucide-react";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50"
  }`;

const AdminLayout: React.FC = () => {
  React.useEffect(() => {
    document.title = "Admin Panel | EliteShop";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <Button asChild variant="outline" size="sm">
            <NavLink to="/">Back to Store</NavLink>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <Card className="p-3 h-max sticky top-20">
          <nav className="space-y-1">
            <NavLink to="/admin" end className={linkCls}>
              <BarChart3 className="h-4 w-4" /> Dashboard
            </NavLink>
            <NavLink to="/admin/products" className={linkCls}>
              <Package className="h-4 w-4" /> Products
            </NavLink>
            <NavLink to="/admin/announcements" className={linkCls}>
              <Megaphone className="h-4 w-4" /> Announcements
            </NavLink>
            <NavLink to="/admin/coupons" className={linkCls}>
              <BadgePercent className="h-4 w-4" /> Coupons
            </NavLink>
            <NavLink to="/admin/slider" className={linkCls}>
              <Sliders className="h-4 w-4" /> Slider
            </NavLink>
            <NavLink to="/admin/users" className={linkCls}>
              <Users className="h-4 w-4" /> Users
            </NavLink>
            <NavLink to="/admin/orders" className={linkCls}>
              <Truck className="h-4 w-4" /> Orders
            </NavLink>
          </nav>
        </Card>

        <main className="space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;