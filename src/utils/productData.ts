// Centralized product data for the entire app
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category?: string;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  images?: string[];
  inStock?: boolean;
  stockCount?: number;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Women's Floral Print Summer Dress",
    price: 1299,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 15234,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
    discount: 48,
    category: "fashion",
    description: "Elegant floral print summer dress made from premium cotton blend. Perfect for casual outings and summer parties. Features a comfortable fit with breathable fabric.",
    features: [
      "Premium cotton blend fabric",
      "Floral print design",
      "Comfortable relaxed fit",
      "Breathable and lightweight",
      "Machine washable",
      "Available in multiple sizes"
    ],
    specifications: {
      "Material": "Cotton Blend",
      "Fit": "Regular",
      "Pattern": "Floral Print",
      "Sleeve": "Short Sleeve",
      "Length": "Knee Length",
      "Care": "Machine Wash"
    },
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=600&fit=crop"
    ],
    inStock: true,
    stockCount: 25,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "2",
    title: "Men's Casual Cotton T-Shirt",
    price: 599,
    originalPrice: 999,
    rating: 4.5,
    reviews: 8905,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    discount: 40,
    category: "fashion",
    description: "Classic cotton t-shirt with premium quality fabric. Comfortable fit perfect for everyday wear. Available in various colors and sizes.",
    features: [
      "100% premium cotton",
      "Pre-shrunk fabric",
      "Comfortable crew neck",
      "Durable stitching",
      "Color-fast printing",
      "Soft and breathable"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Fit": "Regular",
      "Neck": "Crew Neck",
      "Sleeve": "Short Sleeve",
      "GSM": "180",
      "Care": "Machine Wash"
    },
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=600&fit=crop"
    ],
    inStock: true,
    stockCount: 50,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "3",
    title: "Designer Women's Handbag",
    price: 2499,
    originalPrice: 4999,
    rating: 4.6,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    discount: 50,
    category: "accessories",
    description: "Elegant designer handbag crafted from premium materials. Spacious interior with multiple compartments for organization. Perfect for work and casual occasions.",
    features: [
      "Premium synthetic leather",
      "Multiple compartments",
      "Adjustable shoulder strap",
      "Gold-tone hardware",
      "Secure zip closure",
      "Spacious interior"
    ],
    specifications: {
      "Material": "Synthetic Leather",
      "Dimensions": "30cm x 25cm x 12cm",
      "Weight": "0.8kg",
      "Closure": "Zip",
      "Strap": "Adjustable",
      "Color Options": "Black, Brown, Tan"
    },
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524498427321-98d4af6de2a6?w=600&h=600&fit=crop"
    ],
    inStock: true,
    stockCount: 15
  },
  {
    id: "4",
    title: "Men's Leather Formal Shoes",
    price: 2999,
    originalPrice: 5999,
    rating: 4.3,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    discount: 50,
    category: "footwear",
    description: "Classic formal leather shoes with premium craftsmanship. Perfect for office wear and formal occasions. Comfortable cushioned sole for all-day wear.",
    features: [
      "Genuine leather upper",
      "Cushioned insole",
      "Non-slip rubber sole",
      "Breathable lining",
      "Classic design",
      "Durable construction"
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Heel Height": "2.5cm",
      "Toe Shape": "Rounded",
      "Available Sizes": "6-11"
    },
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop"
    ],
    inStock: true,
    stockCount: 20
  },
  {
    id: "12",
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    originalPrice: 3490,
    rating: 4.8,
    reviews: 15234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    discount: 28,
    category: "electronics",
    description: "Premium wireless headphones with advanced noise cancellation technology. Enjoy crystal-clear audio with 30-hour battery life and exceptional comfort.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium leather ear cushions",
      "Bluetooth 5.0 connectivity",
      "Quick charge - 5 min for 2 hours playback",
      "Foldable design for portability"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 ohms",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g"
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop"
    ],
    inStock: true,
    stockCount: 35
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return products;
  
  return products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    (product.category && product.category.toLowerCase().includes(query.toLowerCase())) ||
    (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
  );
};