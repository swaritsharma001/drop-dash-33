import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products as seedProducts, type Product } from "@/utils/productData";

export type UserRole = "admin" | "manager" | "customer";
export type AdminUser = { id: string; name: string; email: string; role: UserRole };
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";
export type AdminOrder = {
  id: string;
  userId: string;
  total: number;
  status: OrderStatus;
  date: string; // ISO
};

export type Banner = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  badge?: string;
  image: string;
  bgColor?: string;
};

export type Coupon = {
  id: string;
  code: string;
  type: "percent" | "fixed";
  amount: number;
  startDate?: string; // ISO
  endDate?: string; // ISO
  usageLimit?: number;
  active: boolean;
};

export type AdminData = {
  products: Product[];
  announcements: string[];
  banners: Banner[];
  coupons: Coupon[];
  users: AdminUser[];
  orders: AdminOrder[];
};

type Ctx = AdminData & {
  // products
  addProduct: (p: Product) => void;
  updateProduct: (id: string, patch: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  // announcements
  addAnnouncement: (msg: string) => void;
  updateAnnouncement: (index: number, msg: string) => void;
  removeAnnouncement: (index: number) => void;
  // banners
  addBanner: (b: Banner) => void;
  updateBanner: (id: number, patch: Partial<Banner>) => void;
  removeBanner: (id: number) => void;
  // coupons
  addCoupon: (c: Coupon) => void;
  updateCoupon: (id: string, patch: Partial<Coupon>) => void;
  deleteCoupon: (id: string) => void;
  // users
  updateUserRole: (id: string, role: UserRole) => void;
  // orders
  addOrder: (o: AdminOrder) => void;
  updateOrder: (id: string, patch: Partial<AdminOrder>) => void;
  // metrics
  getRevenueByRange: (range: "today" | "yesterday" | "thisMonth" | "last30") => number;
};

const defaultAnnouncements = [
  "Use code S23 to get 23% OFF on all orders!",
  "Free shipping on orders above ₹1,999",
  "New arrivals dropping weekly — stay tuned!",
  "OK FLIPKART COPY",
];

const defaultBanners: Banner[] = [
  {
    id: 1,
    title: "Samsung Galaxy Watch7",
    subtitle: "Challenge your past for a better tomorrow",
    price: "From ₹15,473",
    badge: "FREEDOM SALE LIVE NOW",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
    bgColor: "from-green-400 to-blue-500",
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    price: "From ₹1,34,900",
    badge: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&h=600&fit=crop",
    bgColor: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "MacBook Air M3",
    subtitle: "Supercharged by M3 chip",
    price: "From ₹1,14,900",
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop",
    bgColor: "from-blue-400 to-purple-600",
  },
];

const defaultCoupons: Coupon[] = [];

const defaultUsers: AdminUser[] = [
  { id: "u1", name: "Admin User", email: "admin@example.com", role: "admin" },
  { id: "u2", name: "Manager User", email: "manager@example.com", role: "manager" },
  { id: "u3", name: "Jane Customer", email: "jane@example.com", role: "customer" },
];

const defaultOrders: AdminOrder[] = Array.from({ length: 24 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * 28));
  return {
    id: `o${i + 1}`,
    userId: defaultUsers[(i + 1) % defaultUsers.length].id,
    total: Math.round(500 + Math.random() * 5000),
    status: ["pending", "processing", "shipped", "delivered"][i % 4] as OrderStatus,
    date: d.toISOString(),
  };
});

const STORAGE_KEY = "adminData";

const AdminDataContext = createContext<Ctx | null>(null);

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AdminData>(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached) as AdminData;
      } catch {}
    }
    return {
      products: seedProducts,
      announcements: defaultAnnouncements,
      banners: defaultBanners,
      coupons: defaultCoupons,
      users: defaultUsers,
      orders: defaultOrders,
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const api: Ctx = useMemo(
    () => ({
      ...state,
      addProduct: (p) => setState((s) => ({ ...s, products: [...s.products, p] })),
      updateProduct: (id, patch) =>
        setState((s) => ({
          ...s,
          products: s.products.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),
      deleteProduct: (id) =>
        setState((s) => ({ ...s, products: s.products.filter((p) => p.id !== id) })),

      addAnnouncement: (msg) =>
        setState((s) => ({ ...s, announcements: [...s.announcements, msg] })),
      updateAnnouncement: (index, msg) =>
        setState((s) => ({
          ...s,
          announcements: s.announcements.map((m, i) => (i === index ? msg : m)),
        })),
      removeAnnouncement: (index) =>
        setState((s) => ({
          ...s,
          announcements: s.announcements.filter((_, i) => i !== index),
        })),

      addBanner: (b) =>
        setState((s) => ({ ...s, banners: [...s.banners, b] })),

      updateBanner: (id, patch) =>
        setState((s) => ({
          ...s,
          banners: s.banners.map((b) => (b.id === id ? { ...b, ...patch } : b)),
        })),

      removeBanner: (id) =>
        setState((s) => ({ ...s, banners: s.banners.filter((b) => b.id !== id) })),

      addCoupon: (c) => setState((s) => ({ ...s, coupons: [...s.coupons, c] })),
      updateCoupon: (id, patch) =>
        setState((s) => ({
          ...s,
          coupons: s.coupons.map((c) => (c.id === id ? { ...c, ...patch } : c)),
        })),
      deleteCoupon: (id) =>
        setState((s) => ({ ...s, coupons: s.coupons.filter((c) => c.id !== id) })),

      updateUserRole: (id, role) =>
        setState((s) => ({
          ...s,
          users: s.users.map((u) => (u.id === id ? { ...u, role } : u)),
        })),

      addOrder: (o) => setState((s) => ({ ...s, orders: [o, ...s.orders] })),
      updateOrder: (id, patch) =>
        setState((s) => ({
          ...s,
          orders: s.orders.map((o) => (o.id === id ? { ...o, ...patch } : o)),
        })),

      getRevenueByRange: (range) => {
        const now = new Date();
        const isSameDay = (a: Date, b: Date) =>
          a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

        const startEnd = () => {
          switch (range) {
            case "today": {
              const start = new Date(now);
              start.setHours(0, 0, 0, 0);
              const end = new Date(now);
              end.setHours(23, 59, 59, 999);
              return { start, end };
            }
            case "yesterday": {
              const start = new Date(now);
              start.setDate(start.getDate() - 1);
              start.setHours(0, 0, 0, 0);
              const end = new Date(start);
              end.setHours(23, 59, 59, 999);
              return { start, end };
            }
            case "thisMonth": {
              const start = new Date(now.getFullYear(), now.getMonth(), 1);
              const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
              return { start, end };
            }
            case "last30": {
              const end = new Date(now);
              const start = new Date(now);
              start.setDate(start.getDate() - 30);
              start.setHours(0, 0, 0, 0);
              return { start, end };
            }
          }
        };

        const { start, end } = startEnd();
        return state.orders
          .filter((o) => {
            const d = new Date(o.date);
            return d >= start && d <= end && o.status !== "cancelled";
          })
          .reduce((sum, o) => sum + o.total, 0);
      },
    }),
    [state]
  );

  return <AdminDataContext.Provider value={api}>{children}</AdminDataContext.Provider>;
};

export const useAdminData = () => {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData must be used within AdminDataProvider");
  return ctx;
};
