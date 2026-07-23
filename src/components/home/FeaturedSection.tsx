import React, { useState } from 'react';
import { Sparkles, TrendingUp, Flame, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';
import { useLanguage } from '../../contexts/LanguageContext';

interface FeaturedSectionProps {
  products: Product[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onRequestQuote: (p: Product) => void;
  onViewAllProducts: () => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  products,
  isFavorite,
  onToggleFavorite,
  onSelectProduct,
  onRequestQuote,
  onViewAllProducts,
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'featured' | 'trending' | 'new'>('featured');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'featured') return p.isFeatured;
    if (activeTab === 'new') return p.isNewArrival;
    if (activeTab === 'trending') return p.viewsCount > 500 || p.likesCount > 50;
    return true;
  });

  return (
    <section className="bg-gray-50 py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Advertising Showcase</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {t('section.featured')}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm self-start">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'featured'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('nav.featured')}</span>
            </button>

            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'trending'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>{t('section.trending')}</span>
            </button>

            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'new'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('nav.newArrivals')}</span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProduct={onSelectProduct}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white font-black text-xs px-8 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>View Full Product Catalog ({products.length} Items)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
