import React, { useState } from 'react';
import { Heart, Eye, Send, CheckCircle2, AlertTriangle, XCircle, Share2 } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { formatRWF } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onRequestQuote: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onSelectProduct,
  onRequestQuote,
}) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getStatusBadge = () => {
    switch (product.status) {
      case 'Sold Out':
        return (
          <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <XCircle className="w-3 h-3" />
            {t('product.soldOut')}
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="bg-amber-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <AlertTriangle className="w-3 h-3" />
            {t('product.outOfStock')}
          </span>
        );
      case 'Available':
      default:
        return (
          <span className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <CheckCircle2 className="w-3 h-3" />
            {t('product.available')}
          </span>
        );
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-200/80 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
      
      {/* Top Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Status & Featured Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {getStatusBadge()}
          {product.isNewArrival && (
            <span className="bg-orange-500 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
              NEW
            </span>
          )}
        </div>

        {/* Like Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md flex items-center justify-center transition-all cursor-pointer z-10"
          title="Like Product"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'text-rose-600 fill-rose-600' : 'text-gray-500 hover:text-rose-500'
            }`}
          />
        </button>

        {/* Thumbnail Indicator Dots if multiple images */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === idx ? 'bg-orange-500 w-4' : 'bg-white/80 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-semibold mb-1">
            <span className="text-orange-600 font-bold tracking-tight">{product.brand}</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.unit}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-sm font-bold text-gray-900 group-hover:text-orange-600 line-clamp-2 leading-snug cursor-pointer transition-colors"
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Minimum Order Quantity */}
        <div className="pt-2 border-t border-gray-100 space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-black text-gray-900 tracking-tight">
              {formatRWF(product.price)}
            </span>
            <span className="text-xs text-gray-500">/ {product.unit}</span>
          </div>

          <p className="text-[11px] text-gray-500 font-medium">
            {t('product.minOrder')}: <strong className="text-gray-800">{product.minOrderQty} {product.unit}</strong>
          </p>

          {/* Sizes & Colors Preview */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-1 pt-1 overflow-x-auto text-[10px] text-gray-500">
              <span className="font-semibold text-gray-400">Sizes:</span>
              {product.sizes.slice(0, 4).map((s) => (
                <span key={s} className="bg-gray-100 px-1.5 py-0.5 rounded font-bold text-gray-700">
                  {s}
                </span>
              ))}
              {product.sizes.length > 4 && <span className="text-gray-400">+{product.sizes.length - 4}</span>}
            </div>
          )}
        </div>

        {/* Buy Now / Request Quote Action */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onSelectProduct(product)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            title={t('product.viewDetails')}
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => onRequestQuote(product)}
            disabled={product.status === 'Sold Out'}
            className={`flex-1 py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
              product.status === 'Sold Out'
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{product.status === 'Sold Out' ? t('product.soldOut') : t('product.buyNow')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
