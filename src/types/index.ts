export type ProductStatus = 'Available' | 'Out of Stock' | 'Sold Out' | 'Hidden' | 'Archived';

export type RequestStatus = 'Pending' | 'Contacted' | 'Completed' | 'Cancelled';

export type Language = 'en' | 'fr' | 'rw';

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  subcategories: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface Brand {
  id: string;
  name: string;
  logoUrl?: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  subcategoryId: string;
  description: string;
  price: number; // Advertised price in USD or local currency
  currency?: string;
  minOrderQty: number;
  unit: string; // e.g. "Pcs", "Pairs", "Sets"
  status: ProductStatus;
  specifications: Record<string, string>;
  sizes: string[];
  colors: { name: string; hex: string }[];
  availableSizes?: string[];
  availableColors?: string[];
  images: string[];
  isFeatured: boolean;
  isNewArrival: boolean;
  viewsCount: number;
  likesCount: number;
  createdAt: string;
}

export interface CustomerRequest {
  id: string;
  productId: string;
  productName: string;
  productImage?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  message: string;
  requestDate: string;
  status: RequestStatus;
  notes?: string;
}

export interface AdminUser {
  uid: string;
  email: string;
  displayName?: string;
  role: 'superadmin' | 'admin';
  createdAt: string;
}

export interface FilterState {
  searchQuery: string;
  categoryId: string;
  subcategoryId: string;
  brand: string;
  minPrice: number | null;
  maxPrice: number | null;
  status: ProductStatus | 'All';
  selectedSize: string;
  selectedColor: string;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'popular';
}

export interface SellerContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  businessHours: string;
  location: string;
}
