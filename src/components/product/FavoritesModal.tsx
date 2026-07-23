import React from 'react';
import { X, Heart, Send, Trash2, AlertCircle } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { formatRWF } from '../../utils/formatCurrency';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteProducts: Product[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onRequestQuote: (p: Product) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favoriteProducts,
  onToggleFavorite,
  onSelectProduct,
  onRequestQuote,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 relative flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-gray-900">{t('nav.favorites')}</h3>
              <p className="text-xs text-gray-500">{favoriteProducts.length} saved products</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-3 flex-1 overflow-y-auto">
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Heart className="w-12 h-12 text-gray-300 mx-auto stroke-[1.5]" />
              <h4 className="text-sm font-bold text-gray-700">No favorites saved yet</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Click the heart icon on any product card to save items to your favorites list.
              </p>
            </div>
          ) : (
            favoriteProducts.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50 p-3 rounded-2xl border border-gray-200 flex items-center gap-3 hover:border-orange-300 transition-all"
              >
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-16 h-16 object-cover rounded-xl cursor-pointer border border-white"
                  onClick={() => {
                    onClose();
                    onSelectProduct(p);
                  }}
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-orange-600 uppercase">{p.brand}</span>
                    {p.status === 'Sold Out' && (
                      <span className="bg-rose-600 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Sold Out
                      </span>
                    )}
                  </div>

                  <h4
                    onClick={() => {
                      onClose();
                      onSelectProduct(p);
                    }}
                    className="text-xs font-bold text-gray-900 truncate hover:text-orange-600 cursor-pointer"
                  >
                    {p.name}
                  </h4>

                  <div className="text-xs text-gray-700 font-bold">
                    {formatRWF(p.price)} <span className="text-[10px] text-gray-500 font-normal">/ {p.unit}</span>
                  </div>

                  {p.status === 'Sold Out' && (
                    <p className="text-[11px] text-rose-600 font-bold">
                      This product has been sold out.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onRequestQuote(p);
                    }}
                    disabled={p.status === 'Sold Out'}
                    className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1 cursor-pointer ${
                      p.status === 'Sold Out'
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                    title={t('product.buyNow')}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onToggleFavorite(p.id)}
                    className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
