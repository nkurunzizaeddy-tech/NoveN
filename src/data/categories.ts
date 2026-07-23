import { Category, Brand, SellerContactInfo } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'clothes',
    name: 'Clothes',
    slug: 'clothes',
    iconName: 'Shirt',
    subcategories: [
      { id: 'shirts', name: 'Shirts', slug: 'shirts' },
      { id: 'tshirts', name: 'T-Shirts', slug: 'tshirts' },
      { id: 'hoodies', name: 'Hoodies', slug: 'hoodies' },
      { id: 'jackets', name: 'Jackets', slug: 'jackets' },
    ],
  },
  {
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes',
    iconName: 'Footprints',
    subcategories: [
      { id: 'sneakers', name: 'Sneakers', slug: 'sneakers' },
      { id: 'sandals', name: 'Sandals', slug: 'sandals' },
      { id: 'formal-shoes', name: 'Formal Shoes', slug: 'formal-shoes' },
    ],
  },
  {
    id: 'caps',
    name: 'Caps & Hats',
    slug: 'caps',
    iconName: 'Crown',
    subcategories: [
      { id: 'baseball-caps', name: 'Baseball Caps', slug: 'baseball-caps' },
      { id: 'hats', name: 'Hats & Beanies', slug: 'hats' },
    ],
  },
  {
    id: 'accessories',
    name: 'Fashion Accessories',
    slug: 'accessories',
    iconName: 'Watch',
    subcategories: [
      { id: 'chains', name: 'Chains & Necklaces', slug: 'chains' },
      { id: 'belts', name: 'Leather Belts', slug: 'belts' },
      { id: 'watches', name: 'Luxury Watches', slug: 'watches' },
    ],
  },
];

export const BRANDS: Brand[] = [
  { id: 'nike', name: 'Nike Fashion', productCount: 14 },
  { id: 'adidas', name: 'Adidas Originals', productCount: 12 },
  { id: 'zara', name: 'Zara Premium', productCount: 18 },
  { id: 'gucci', name: 'Gucci Studio', productCount: 9 },
  { id: 'jordan', name: 'Air Jordan', productCount: 11 },
  { id: 'lacoste', name: 'Lacoste Couture', productCount: 8 },
  { id: 'puma', name: 'Puma Select', productCount: 10 },
  { id: 'patek', name: 'Patek & Co.', productCount: 6 },
];

export const DEFAULT_SELLER_CONTACT: SellerContactInfo = {
  phone: '+250 788 123 456',
  whatsapp: '+250 788 123 456',
  email: 'sales@noven.rw',
  businessHours: 'Mon - Sat: 8:00 AM - 7:00 PM (CAT)',
  location: 'NoveN Design & Craft Showroom, Suite 402, Kigali - Rwanda',
};
