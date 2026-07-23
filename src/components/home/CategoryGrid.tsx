import React from 'react';
import { Shirt, Footprints, Crown, Watch, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useLanguage } from '../../contexts/LanguageContext';

interface CategoryGridProps {
  onSelectCategory: (catId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  const getCategoryImage = (id: string) => {
    switch (id) {
      case 'clothes':
        return 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800';
      case 'shoes':
        return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800';
      case 'caps':
        return 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800';
      case 'accessories':
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800';
      default:
        return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
            {t('section.popularCategories')}
          </h2>
          <p className="text-xs text-gray-500 font-medium">Explore product lines with verified factory pricing</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/3] shadow-md border border-gray-100 hover:border-orange-500 transition-all cursor-pointer"
          >
            <img
              src={getCategoryImage(cat.id)}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>

            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
              <span className="self-start text-[10px] font-black uppercase tracking-widest bg-orange-500 text-white px-2.5 py-1 rounded-md shadow-sm">
                {cat.subcategories.length} Subcategories
              </span>

              <div>
                <h3 className="text-lg font-black tracking-tight group-hover:text-orange-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-gray-300 font-medium line-clamp-1 mt-0.5">
                  {cat.subcategories.map((s) => s.name).join(' • ')}
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Browse Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
