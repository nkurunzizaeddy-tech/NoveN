import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Luxury Italian Slim Fit Cotton Dress Shirt',
    brand: 'Zara Premium',
    categoryId: 'clothes',
    subcategoryId: 'shirts',
    description: '100% Egyptian combed cotton Oxford slim fit dress shirt with French cuffs. Wrinkle-resistant finish for executive elegance.',
    price: 45000,
    currency: 'RWF',
    minOrderQty: 5,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Material: '100% Egyptian Cotton',
      Sleeve: 'Long Sleeve',
      Collar: 'Button-Down Collar',
      Care: 'Machine Washable / Dry Clean'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Midnight Black', hex: '#111111' }
    ],
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: false,
    viewsCount: 420,
    likesCount: 38,
    createdAt: '2026-07-01T10:00:00Z'
  },
  {
    id: 'prod-2',
    name: 'Heavyweight Oversized Streetwear Graphic T-Shirt',
    brand: 'Nike Fashion',
    categoryId: 'clothes',
    subcategoryId: 'tshirts',
    description: '280 GSM heavyweight organic cotton drop-shoulder T-shirt featuring vintage acid-wash finish and custom screen print graphics.',
    price: 25000,
    currency: 'RWF',
    minOrderQty: 10,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Fabric: '280 GSM Organic Cotton',
      Fit: 'Oversized Streetwear',
      Neckline: 'Ribbed Crewneck'
    },
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Washed Charcoal', hex: '#2B2B2B' },
      { name: 'Vintage Olive', hex: '#556B2F' }
    ],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: true,
    viewsCount: 890,
    likesCount: 94,
    createdAt: '2026-07-15T12:00:00Z'
  },
  {
    id: 'prod-3',
    name: 'Fleece-Lined Tactical Urban Pullover Hoodie',
    brand: 'Adidas Originals',
    categoryId: 'clothes',
    subcategoryId: 'hoodies',
    description: 'Ultra-warm 350 GSM cotton-poly blend hoodie with kangaroo pouch, double-lined hood, and reinforced thumbhole wrist cuffs.',
    price: 55000,
    currency: 'RWF',
    minOrderQty: 3,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Weight: '350 GSM',
      Features: 'Kangaroo Pocket, Metal Aglets',
      Blend: '80% Cotton, 20% Polyester'
    },
    sizes: ['S', 'M', 'L', 'XL', '3XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D3D3D3' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Crimson Red', hex: '#990000' }
    ],
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: false,
    isNewArrival: true,
    viewsCount: 310,
    likesCount: 45,
    createdAt: '2026-07-18T08:30:00Z'
  },
  {
    id: 'prod-4',
    name: 'Genuine Leather Biker Jacket with Matte Hardware',
    brand: 'Gucci Studio',
    categoryId: 'clothes',
    subcategoryId: 'jackets',
    description: 'Premium handcrafted lambskin leather jacket featuring asymmetric zipper closure, padded shoulders, and satin interior lining.',
    price: 240000,
    currency: 'RWF',
    minOrderQty: 2,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Outer: '100% Genuine Lambskin',
      Lining: 'Quilted Satin',
      Hardware: 'Matte Black YKK Zippers'
    },
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Black', hex: '#1C1C1C' },
      { name: 'Espresso Brown', hex: '#3D2314' }
    ],
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: false,
    viewsCount: 1240,
    likesCount: 182,
    createdAt: '2026-06-20T14:15:00Z'
  },
  {
    id: 'prod-5',
    name: 'Air Retro High OG High-Top Athletic Sneakers',
    brand: 'Air Jordan',
    categoryId: 'shoes',
    subcategoryId: 'sneakers',
    description: 'Iconic basketball high-top sneakers engineered with air-cushioned sole units, genuine leather paneling, and grip rubber outsole.',
    price: 140000,
    currency: 'RWF',
    minOrderQty: 2,
    unit: 'Pairs',
    status: 'Available',
    specifications: {
      Upper: 'Full Grain Leather & Suede',
      Sole: 'Encapsulated Air Cushion Rubber',
      Closure: 'Lace-Up'
    },
    sizes: ['40 EU', '41 EU', '42 EU', '43 EU', '44 EU', '45 EU'],
    colors: [
      { name: 'Bred Red/Black', hex: '#B22222' },
      { name: 'University Blue', hex: '#4169E1' }
    ],
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: true,
    viewsCount: 1580,
    likesCount: 230,
    createdAt: '2026-07-20T09:00:00Z'
  },
  {
    id: 'prod-6',
    name: 'Ergonomic Unisex Outdoor Trail Sandals',
    brand: 'Puma Select',
    categoryId: 'shoes',
    subcategoryId: 'sandals',
    description: 'Lightweight quick-dry outdoor sandals with adjustable nylon webbing straps and anti-slip shock-absorbing EVA footbeds.',
    price: 30000,
    currency: 'RWF',
    minOrderQty: 6,
    unit: 'Pairs',
    status: 'Available',
    specifications: {
      Footbed: 'Molded Contoured EVA',
      Straps: 'Heavy Duty Webbing Nylon',
      Outsole: 'Traction Rubber'
    },
    sizes: ['38 EU', '39 EU', '40 EU', '41 EU', '42 EU'],
    colors: [
      { name: 'Tactical Tan', hex: '#D2B48C' },
      { name: 'Stealth Black', hex: '#111111' }
    ],
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: false,
    isNewArrival: false,
    viewsCount: 220,
    likesCount: 19,
    createdAt: '2026-06-11T11:00:00Z'
  },
  {
    id: 'prod-7',
    name: 'Hand-Stitched Italian Calfskin Derby Shoes',
    brand: 'Lacoste Couture',
    categoryId: 'shoes',
    subcategoryId: 'formal-shoes',
    description: 'Classic Goodyear welted leather dress shoes crafted from hand-waxed calfskin leather with breathable leather lining.',
    price: 120000,
    currency: 'RWF',
    minOrderQty: 3,
    unit: 'Pairs',
    status: 'Sold Out',
    specifications: {
      Crafting: 'Goodyear Welted',
      Upper: 'Top Calfskin Leather',
      Sole: 'Leather Outsole with Rubber Heel'
    },
    sizes: ['41 EU', '42 EU', '43 EU', '44 EU'],
    colors: [
      { name: 'Chestnut Tan', hex: '#8B4513' },
      { name: 'Polished Black', hex: '#050505' }
    ],
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: false,
    isNewArrival: false,
    viewsCount: 650,
    likesCount: 77,
    createdAt: '2026-05-14T16:00:00Z'
  },
  {
    id: 'prod-8',
    name: '3D Embroidered Structured Baseball Snapback Cap',
    brand: 'Nike Fashion',
    categoryId: 'caps',
    subcategoryId: 'baseball-caps',
    description: 'High-crown 6-panel snapback cap featuring high-density 3D logo embroidery, moisture-wicking sweatband, and adjustable strap.',
    price: 15000,
    currency: 'RWF',
    minOrderQty: 12,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Material: '100% Premium Twill Cotton',
      Closure: 'Adjustable Snapback',
      Brim: 'Pre-Curved Visor'
    },
    sizes: ['One Size Fits All'],
    colors: [
      { name: 'Black/White', hex: '#111111' },
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: true,
    viewsCount: 430,
    likesCount: 52,
    createdAt: '2026-07-19T15:20:00Z'
  },
  {
    id: 'prod-9',
    name: '18K Gold Plated Cuban Link Heavyweight Chain',
    brand: 'Gucci Studio',
    categoryId: 'accessories',
    subcategoryId: 'chains',
    description: '12mm wide 24-inch Cuban link chain electroplated with 5 layers of real 18K yellow gold over solid stainless steel. Tarnishing resistant.',
    price: 60000,
    currency: 'RWF',
    minOrderQty: 5,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Width: '12 mm',
      Length: '24 Inches',
      Plating: '5x 18K Gold PVD Coating',
      Base: '316L Surgical Stainless Steel'
    },
    sizes: ['20 Inch', '24 Inch', '28 Inch'],
    colors: [
      { name: '18K Yellow Gold', hex: '#FFD700' },
      { name: 'Iced Silver', hex: '#C0C0C0' }
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611591475179-8581e05d259e?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: false,
    viewsCount: 1100,
    likesCount: 140,
    createdAt: '2026-06-28T10:10:00Z'
  },
  {
    id: 'prod-10',
    name: 'Skeleton Automatic Mechanical Executive Watch',
    brand: 'Patek & Co.',
    categoryId: 'accessories',
    subcategoryId: 'watches',
    description: 'Self-winding mechanical movement watch featuring fully transparent skeleton dial, scratch-resistant sapphire crystal glass, and solid stainless bracelet.',
    price: 280000,
    currency: 'RWF',
    minOrderQty: 1,
    unit: 'Pcs',
    status: 'Available',
    specifications: {
      Movement: 'Automatic Self-Winding 24 Jewels',
      Case: '316L Stainless Steel 41mm',
      Water: '50 Meters (5 ATM)',
      Glass: 'Synthetic Sapphire Crystal'
    },
    sizes: ['41mm Case'],
    colors: [
      { name: 'Silver/Blue Dial', hex: '#4682B4' },
      { name: 'All Black Stealth', hex: '#1C1C1C' },
      { name: 'Rose Gold Accent', hex: '#B76E79' }
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
    ],
    isFeatured: true,
    isNewArrival: true,
    viewsCount: 2100,
    likesCount: 310,
    createdAt: '2026-07-21T07:00:00Z'
  }
];
