import React from 'react';
import { Filter, X, ArrowUpDown, SlidersHorizontal, Check, Sparkles, Flame, Layers } from 'lucide-react';
import { Product, FilterState } from '../../types';
import { CATEGORIES, BRANDS } from '../../data/categories';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProductGridProps {
  products: Product[];
  filterState: FilterState;
  onFilterChange: (updater: (prev: FilterState) => FilterState) => void;
  onResetFilters: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onRequestQuote: (p: Product) => void;
  currentView?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  filterState,
  onFilterChange,
  onResetFilters,
  isFavorite,
  onToggleFavorite,
  onSelectProduct,
  onRequestQuote,
  currentView = 'products',
}) => {
  const { t } = useLanguage();

  const selectedCategoryObj = CATEGORIES.find((c) => c.id === filterState.categoryId);

  // Dynamic header configuration based on active tab
  let title = "Fashion Products Catalog";
  let subtitle = `Showing ${products.length} items available for direct buyer quotation`;
  let badge = null;

  if (currentView === 'featured') {
    title = "Featured Fashion Showcase";
    subtitle = `Handpicked top-selling apparel, luxury suits, and spotlighted listings (${products.length} items)`;
    badge = (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-700 border border-amber-300 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        FEATURED COLLECTION
      </span>
    );
  } else if (currentView === 'new-arrivals') {
    title = "Fresh New Arrivals";
    subtitle = `Explore our latest apparel drops, fresh releases, and seasonal trends (${products.length} items)`;
    badge = (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-rose-50 text-rose-700 border border-rose-300 shadow-xs">
        <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        NEW ARRIVALS
      </span>
    );
  } else {
    badge = (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-orange-50 text-orange-700 border border-orange-300 shadow-xs">
        <Layers className="w-3.5 h-3.5 text-orange-500" />
        ALL CATALOG
      </span>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Filter Sidebar */}
        <div className="lg:col-span-1 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-6 h-fit">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-orange-500" />
              <span>Filter Catalog</span>
            </h3>
            <button
              onClick={onResetFilters}
              className="text-xs text-orange-600 font-bold hover:underline cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              {t('nav.categories')}
            </label>
            <div className="space-y-1">
              <button
                onClick={() =>
                  onFilterChange((prev) => ({ ...prev, categoryId: '', subcategoryId: '' }))
                }
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  !filterState.categoryId ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Categories
              </button>

              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-0.5">
                  <button
                    onClick={() =>
                      onFilterChange((prev) => ({ ...prev, categoryId: cat.id, subcategoryId: '' }))
                    }
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                      filterState.categoryId === cat.id && !filterState.subcategoryId
                        ? 'bg-orange-100 text-orange-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>

                  {/* Subcategories if category selected */}
                  {filterState.categoryId === cat.id && (
                    <div className="pl-4 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() =>
                            onFilterChange((prev) => ({ ...prev, subcategoryId: sub.id }))
                          }
                          className={`w-full text-left px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                            filterState.subcategoryId === sub.id
                              ? 'bg-orange-500 text-white font-bold'
                              : 'text-gray-600 hover:bg-orange-50'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Brands
            </label>
            <select
              value={filterState.brand}
              onChange={(e) => onFilterChange((prev) => ({ ...prev, brand: e.target.value }))}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500 bg-white"
            >
              <option value="">All Brands</option>
              {BRANDS.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product Availability Status Filter */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Availability Status
            </label>
            <div className="space-y-1">
              {['All', 'Available', 'Sold Out', 'Out of Stock'].map((st) => (
                <button
                  key={st}
                  onClick={() => onFilterChange((prev) => ({ ...prev, status: st as any }))}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                    filterState.status === st ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{st}</span>
                  {filterState.status === st && <Check className="w-3.5 h-3.5 text-orange-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Max Price (RWF)
            </label>
            <input
              type="number"
              placeholder="e.g. 100"
              value={filterState.maxPrice ?? ''}
              onChange={(e) =>
                onFilterChange((prev) => ({
                  ...prev,
                  maxPrice: e.target.value ? Number(e.target.value) : null,
                }))
              }
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500"
            />
          </div>

        </div>

        {/* Right Main Grid */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Header Bar with Count & Sorting */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {badge}
                <h2 className="text-xl font-black text-gray-900 tracking-tight">
                  {title}
                </h2>
              </div>
              <p className="text-xs text-gray-500">
                {subtitle}
              </p>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-400" />
              <select
                value={filterState.sortBy}
                onChange={(e) =>
                  onFilterChange((prev) => ({ ...prev, sortBy: e.target.value as any }))
                }
                className="px-3 py-2 text-xs font-semibold border border-gray-300 rounded-xl outline-none focus:border-orange-500 bg-white cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest Arrivals</option>
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filter Pills */}
          {(filterState.categoryId || filterState.brand || filterState.status !== 'All' || filterState.searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-200/50">
              <span className="text-xs font-bold text-orange-800">Active Filters:</span>
              {filterState.searchQuery && (
                <span className="bg-white text-orange-900 font-bold text-xs px-2.5 py-1 rounded-lg border border-orange-200 shadow-sm flex items-center gap-1">
                  Query: "{filterState.searchQuery}"
                </span>
              )}
              {filterState.categoryId && (
                <span className="bg-white text-orange-900 font-bold text-xs px-2.5 py-1 rounded-lg border border-orange-200 shadow-sm flex items-center gap-1">
                  Category: {selectedCategoryObj?.name || filterState.categoryId}
                </span>
              )}
              {filterState.brand && (
                <span className="bg-white text-orange-900 font-bold text-xs px-2.5 py-1 rounded-lg border border-orange-200 shadow-sm flex items-center gap-1">
                  Brand: {filterState.brand}
                </span>
              )}
              {filterState.status !== 'All' && (
                <span className="bg-white text-orange-900 font-bold text-xs px-2.5 py-1 rounded-lg border border-orange-200 shadow-sm flex items-center gap-1">
                  Status: {filterState.status}
                </span>
              )}
              <button
                onClick={onResetFilters}
                className="text-xs text-orange-600 font-extrabold hover:underline ml-auto"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Product Cards Grid */}
          {products.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 mx-auto flex items-center justify-center font-bold text-2xl">
                ?
              </div>
              <h3 className="text-lg font-bold text-gray-900">No products match your search or filter</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try clearing selected filters, searching for broader terms like "Shirt", "Shoes", or "Caps".
              </p>
              <button
                onClick={onResetFilters}
                className="bg-orange-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isFavorite={isFavorite(p.id)}
                  onToggleFavorite={onToggleFavorite}
                  onSelectProduct={onSelectProduct}
                  onRequestQuote={onRequestQuote}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
