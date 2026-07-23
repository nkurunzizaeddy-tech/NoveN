export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'suits' | 'shirts' | 'tshirts' | 'jackets' | 'shoes' | 'caps' | 'accessories' | 'bags' | 'traditional';
}

export const STOCK_GALLERY_IMAGES: GalleryImage[] = [
  // Suits & Blazers
  {
    id: 'suit-1',
    url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    title: 'Italian Navy Tuxedo Suit',
    category: 'suits',
  },
  {
    id: 'suit-2',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    title: 'Classic Charcoal Executive Suit',
    category: 'suits',
  },
  {
    id: 'suit-3',
    url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=800',
    title: 'Double-Breasted Beige Blazer',
    category: 'suits',
  },

  // Shirts & Tops
  {
    id: 'shirt-1',
    url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800',
    title: 'White Oxford Slim Dress Shirt',
    category: 'shirts',
  },
  {
    id: 'shirt-2',
    url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800',
    title: 'Denim Button-Down Casual Shirt',
    category: 'shirts',
  },
  {
    id: 'shirt-3',
    url: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=800',
    title: 'Tailored Sky Blue Cotton Shirt',
    category: 'shirts',
  },

  // T-Shirts
  {
    id: 'tshirt-1',
    url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    title: 'Heavyweight White Crewneck T-Shirt',
    category: 'tshirts',
  },
  {
    id: 'tshirt-2',
    url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    title: 'Washed Charcoal Oversized Graphic Tee',
    category: 'tshirts',
  },
  {
    id: 'tshirt-3',
    url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    title: 'Black Minimalist Fitted Cotton Tee',
    category: 'tshirts',
  },

  // Jackets & Outerwear
  {
    id: 'jacket-1',
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    title: 'Genuine Leather Biker Jacket',
    category: 'jackets',
  },
  {
    id: 'jacket-2',
    url: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800',
    title: 'Vintage Tan Suede Jacket',
    category: 'jackets',
  },
  {
    id: 'jacket-3',
    url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800',
    title: 'Urban Puffer Winter Jacket',
    category: 'jackets',
  },

  // Footwear & Shoes
  {
    id: 'shoe-1',
    url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    title: 'High-Top Athletic Sneakers',
    category: 'shoes',
  },
  {
    id: 'shoe-2',
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    title: 'Classic Red/Black Retro Sneakers',
    category: 'shoes',
  },
  {
    id: 'shoe-3',
    url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    title: 'Hand-Stitched Italian Leather Dress Shoes',
    category: 'shoes',
  },
  {
    id: 'shoe-4',
    url: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800',
    title: 'Ergonomic Outdoor Trail Sandals',
    category: 'shoes',
  },

  // Caps & Hats
  {
    id: 'cap-1',
    url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    title: '3D Embroidered Snapback Cap',
    category: 'caps',
  },
  {
    id: 'cap-2',
    url: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80&w=800',
    title: 'Vintage Canvas Curved Brim Cap',
    category: 'caps',
  },
  {
    id: 'cap-3',
    url: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800',
    title: 'Knit Ribbed Winter Beanie',
    category: 'caps',
  },

  // Fashion Accessories & Watches
  {
    id: 'acc-1',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    title: 'Executive Automatic Mechanical Watch',
    category: 'accessories',
  },
  {
    id: 'acc-2',
    url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    title: '18K Gold Plated Cuban Link Chain',
    category: 'accessories',
  },
  {
    id: 'acc-3',
    url: 'https://images.unsplash.com/photo-1624222247344-550fb6ec5582?auto=format&fit=crop&q=80&w=800',
    title: 'Handcrafted Italian Leather Belt',
    category: 'accessories',
  },

  // Leather Bags & Luggage
  {
    id: 'bag-1',
    url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    title: 'Genuine Leather Executive Briefcase',
    category: 'bags',
  },
  {
    id: 'bag-2',
    url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    title: 'Minimalist Canvas & Leather Backpack',
    category: 'bags',
  },

  // Traditional & Fabric Prints
  {
    id: 'trad-1',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    title: 'African Fabric Print Couture',
    category: 'traditional',
  },
  {
    id: 'trad-2',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    title: 'Vibrant African Pattern Ensemble',
    category: 'traditional',
  },
];
