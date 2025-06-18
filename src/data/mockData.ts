
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  images: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAdmin: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    tags: ["wireless", "noise-cancelling", "premium"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ]
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smart notifications. Water-resistant design for active lifestyles.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ["fitness", "smartwatch", "gps"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500"
    ]
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Perfect for everyday wear.",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Clothing",
    rating: 4.4,
    reviews: 67,
    inStock: true,
    tags: ["organic", "cotton", "sustainable"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    ]
  },
  {
    id: "4",
    name: "Professional Camera Lens",
    description: "High-performance camera lens for professional photography. Sharp images with excellent color reproduction.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
    category: "Electronics",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    tags: ["camera", "photography", "professional"],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500"
    ]
  },
  {
    id: "5",
    name: "Modern Coffee Maker",
    description: "Sleek and efficient coffee maker with programmable settings. Brew the perfect cup every time.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
    category: "Home & Garden",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    tags: ["coffee", "kitchen", "appliance"],
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500"
    ]
  },
  {
    id: "6",
    name: "Running Shoes",
    description: "Lightweight and comfortable running shoes with advanced cushioning technology. Perfect for daily runs and marathons.",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Sports",
    rating: 4.7,
    reviews: 324,
    inStock: true,
    tags: ["running", "shoes", "athletic"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    ]
  },
  {
    id: "7",
    name: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    category: "Electronics",
    rating: 4.6,
    reviews: 98,
    inStock: false,
    tags: ["gaming", "mouse", "wireless"],
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
    ]
  },
  {
    id: "8",
    name: "Luxury Handbag",
    description: "Elegant leather handbag crafted from premium materials. Perfect for professional and casual occasions.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Clothing",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    tags: ["handbag", "leather", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    ]
  }
];

export const mockUser: User = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  isAdmin: false
};

export const mockAdmin: User = {
  id: "admin1",
  name: "Admin User",
  email: "admin@Ollivve cart.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  isAdmin: true
};
