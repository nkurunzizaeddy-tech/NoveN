import React, { useState } from 'react';
import { Shirt, Footprints, Crown, Watch, ChevronRight, Zap, ShieldCheck, Clock, Send } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroBannerProps {
  onSelectCategory: (catId: string, subId?: string) => void;
  onRequestQuoteClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectCategory,
  onRequestQuoteClick,
}) => {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const heroBanners = [
    {
      title: '2026 Premium Apparel & Footwear Catalog',
      subtitle: 'Factory-direct quotes on T-shirts, Hoodies, Sneakers, Caps & Accessories.',
      tag: 'NEW COLLECTION',
      bgGradient: 'from-orange-600 via-amber-600 to-amber-700',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt className="w-4 h-4 text-orange-500" />;
      case 'Footprints':
        return <Footprints className="w-4 h-4 text-amber-500" />;
      case 'Crown':
        return <Crown className="w-4 h-4 text-yellow-500" />;
      case 'Watch':
        return <Watch className="w-4 h-4 text-emerald-500" />;
      default:
        return <Shirt className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <div className="bg-gray-100 py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Category Sidebar (Alibaba Style) */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-3 relative flex flex-col justify-between">
            <div>
              <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                <span className="font-extrabold text-xs uppercase tracking-wider text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  {t('nav.categories')}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">All Types</span>
              </div>

              <div className="mt-2 space-y-1">
                {CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveCategoryIndex(idx)}
                    onMouseLeave={() => setActiveCategoryIndex(null)}
                    className="relative"
                  >
                    <button
                      onClick={() => onSelectCategory(cat.id)}
                      className="w-full px-3 py-2.5 rounded-xl flex items-center justify-between text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        {getCategoryIcon(cat.iconName)}
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
                    </button>

                    {/* Subcategories Flyout Menu */}
                    {activeCategoryIndex === idx && (
                      <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50 animate-in fade-in slide-in-from-left-1">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                          {cat.name} Subcategories
                        </div>
                        <div className="space-y-1">
                          {cat.subcategories.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => onSelectCategory(cat.id, sub.id)}
                              className="w-full text-left px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 bg-orange-50/60 rounded-xl p-3">
              <div className="flex items-center gap-2 text-orange-700 text-xs font-bold mb-1">
                <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>Bulk Custom Quotes</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-snug">
                Need customized branding, specific sizes or bulk discounts?
              </p>
            </div>
          </div>

          {/* Center Main Promotional Banner */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md group flex flex-col justify-end min-h-[300px] lg:min-h-[360px]">
            <img
              src={heroBanners[0].image}
              alt="Fashion Showcase"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>

            <div className="relative p-6 lg:p-8 text-white space-y-3">
              <span className="inline-block bg-orange-500 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                {heroBanners[0].tag}
              </span>
              <h1 className="text-2xl lg:text-3xl font-black leading-tight tracking-tight drop-shadow-md">
                {heroBanners[0].title}
              </h1>
              <p className="text-xs lg:text-sm text-gray-200 max-w-xl font-medium leading-relaxed">
                {heroBanners[0].subtitle}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onRequestQuoteClick}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-extrabold px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('hero.rfqTitle')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right RFQ Box & Seller Guarantee (Alibaba Sourcing Box) */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-900 font-extrabold text-sm border-b border-gray-100 pb-2">
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  RFQ
                </div>
                <div>
                  <h3 className="text-xs font-bold leading-none">Instant Quote Box</h3>
                  <span className="text-[10px] text-gray-400 font-normal">Direct Vendor Reply</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                One request connects you directly with our sales manager for exact price, color options, and delivery timelines.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Response Time: <strong>&lt; 2 Hours</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Quality Assurance Guaranteed</span>
                </div>
              </div>
            </div>

            <button
              onClick={onRequestQuoteClick}
              className="w-full bg-gray-900 hover:bg-orange-600 text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer shadow-sm text-center flex items-center justify-center gap-2"
            >
              <span>{t('product.requestQuote')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
