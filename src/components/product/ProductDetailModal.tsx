import React, { useState } from 'react';
import { X, Heart, Share2, Send, PhoneCall, MessageSquare, Mail, MapPin, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { Product, SellerContactInfo } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { DEFAULT_SELLER_CONTACT } from '../../data/categories';
import { formatRWF } from '../../utils/formatCurrency';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onRequestQuote: (p: Product) => void;
  contactInfo?: SellerContactInfo;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  onRequestQuote,
  contactInfo = DEFAULT_SELLER_CONTACT,
}) => {
  const { t } = useLanguage();
  const contact = contactInfo || DEFAULT_SELLER_CONTACT;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !product) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 md:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md backdrop-blur-sm">
                {product.status}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      selectedImageIndex === idx ? 'border-orange-500 scale-105 shadow-sm' : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Quote CTA */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Brand & Category */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/50">
                  {product.brand}
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1"
                    title={t('product.share')}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copied ? 'Copied Link!' : t('product.share')}</span>
                  </button>

                  <button
                    onClick={() => onToggleFavorite(product.id)}
                    className="p-2 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title={t('product.like')}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'text-rose-600 fill-rose-600' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                {product.name}
              </h1>

              {/* Advertised Price & Minimum Order */}
              <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-200/60 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-gray-500 block font-semibold">Advertised Wholesale Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl md:text-2xl font-black text-gray-900">{formatRWF(product.price)}</span>
                    <span className="text-xs font-semibold text-gray-600">/ {product.unit}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-500 block font-semibold">{t('product.minOrder')}</span>
                  <span className="text-sm font-black text-gray-900">{product.minOrderQty} {product.unit}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Description</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{t('product.availableSizes')}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((sz) => (
                      <span key={sz} className="px-3 py-1 bg-gray-100 hover:bg-orange-100 text-gray-800 font-bold text-xs rounded-lg border border-gray-200">
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              {product.specifications && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{t('product.specifications')}</h4>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-1.5 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200/60 last:border-0 pb-1 last:pb-0">
                        <span className="text-gray-500 font-medium">{key}</span>
                        <span className="font-bold text-gray-800">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Seller Contact Quick Card */}
              <div className="bg-gray-900 text-white p-4 rounded-2xl space-y-2">
                <span className="text-orange-400 font-bold text-[10px] uppercase tracking-wider block">
                  {t('product.sellerContact')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a href={`tel:${(contact.phone || '').replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-orange-300">
                    <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
                    <span>{contact.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${(contact.whatsapp || '').replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Sales</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Request Quotation CTA Button */}
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              disabled={product.status === 'Sold Out'}
              className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer ${
                product.status === 'Sold Out'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/25'
              }`}
            >
              <Send className="w-5 h-5" />
              <span>{product.status === 'Sold Out' ? 'THIS PRODUCT HAS BEEN SOLD OUT' : t('product.buyNow')}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
