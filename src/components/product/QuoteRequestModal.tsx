import React, { useState } from 'react';
import { X, Send, PhoneCall, MessageSquare, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Product, CustomerRequest, SellerContactInfo } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { DEFAULT_SELLER_CONTACT } from '../../data/categories';
import { formatRWF } from '../../utils/formatCurrency';

interface QuoteRequestModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitRequest: (requestData: Omit<CustomerRequest, 'id' | 'requestDate' | 'status'>) => void;
  contactInfo?: SellerContactInfo;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  product,
  isOpen,
  onClose,
  onSubmitRequest,
  contactInfo = DEFAULT_SELLER_CONTACT,
}) => {
  const { t } = useLanguage();
  const contact = contactInfo || DEFAULT_SELLER_CONTACT;
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(product ? product.minOrderQty : 1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) return;

    onSubmitRequest({
      productId: product.id,
      productName: product.name,
      productImage: product.images[0],
      customerName: fullName.trim(),
      customerPhone: phone.trim(),
      customerEmail: email.trim(),
      quantity: Number(quantity),
      selectedSize,
      selectedColor,
      message: message.trim(),
    });

    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello NoveN Sales! I am inquiring about product: ${product.name} (ID: ${product.id}). Desired Quantity: ${quantity} ${product.unit}. Size: ${selectedSize}, Color: ${selectedColor}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 md:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* SUCCESS SCREEN */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                {t('modal.successTitle')}
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                {t('modal.successMsg')}
              </p>
            </div>

            {/* Direct WhatsApp Action for instant response */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-2 max-w-md mx-auto">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Want Instant Live Response?
              </span>
              <a
                href={`https://wa.me/${(contact.whatsapp || '').replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer w-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp Now</span>
              </a>
            </div>

            <button
              onClick={resetAndClose}
              className="bg-gray-900 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          /* REQUEST FORM SCREEN */
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs uppercase tracking-wider mb-1">
                <Send className="w-4 h-4" />
                <span>Direct Quotation Request</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">
                {t('modal.quoteTitle')}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {t('modal.quoteSubtitle')}
              </p>
            </div>

            {/* Product Summary Pill */}
            <div className="flex items-center gap-3 bg-orange-50/70 border border-orange-200/80 p-3 rounded-2xl">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-14 h-14 object-cover rounded-xl border border-white shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 truncate">{product.name}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                  <span className="text-orange-600 font-bold">{formatRWF(product.price)} / {product.unit}</span>
                  <span>•</span>
                  <span>Min Order: {product.minOrderQty} {product.unit}</span>
                </div>
              </div>
            </div>

            {/* Seller Contact Quick Bar */}
            <div className="bg-gray-900 text-white p-4 rounded-2xl space-y-2 text-xs">
              <span className="text-orange-400 font-bold uppercase tracking-wider block text-[10px]">
                {t('product.sellerContact')}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                <a href={`tel:${DEFAULT_SELLER_CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-orange-300">
                  <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
                  <span>{DEFAULT_SELLER_CONTACT.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${DEFAULT_SELLER_CONTACT.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>{DEFAULT_SELLER_CONTACT.email}</span>
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{DEFAULT_SELLER_CONTACT.location}</span>
                </span>
              </div>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t('modal.fullName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t('modal.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+250 788 000 000"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t('modal.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t('modal.quantity')} ({product.unit})
                  </label>
                  <input
                    type="number"
                    min={product.minOrderQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500"
                  />
                </div>

                {/* Size Choice */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t('modal.selectSize')}
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500 bg-white"
                  >
                    {product.sizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  {t('modal.message')}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify custom sizes, color preferences, delivery destination, or questions..."
                  className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('modal.submit')}</span>
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
