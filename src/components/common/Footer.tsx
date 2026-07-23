import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DEFAULT_SELLER_CONTACT, CATEGORIES } from '../../data/categories';
import { SellerContactInfo } from '../../types';
import { NovenLogo } from './NovenLogo';

interface FooterProps {
  onNavigateCategory: (catId: string) => void;
  onNavigate: (view: string) => void;
  contactInfo?: SellerContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateCategory, onNavigate, contactInfo = DEFAULT_SELLER_CONTACT }) => {
  const { t } = useLanguage();
  const contact = contactInfo || DEFAULT_SELLER_CONTACT;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <NovenLogo size="md" inline variant="white" />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {t('footer.aboutText')}
          </p>

          <div className="bg-gray-800/80 p-3 rounded-xl border border-gray-700/60 text-xs text-amber-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Quotation Notice:</strong> We do not ask for online credit cards or mobile money. Contact us directly to confirm size, pricing, and fulfillment.
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-gray-800 pb-2">
            {t('footer.quickLinks')}
          </h4>
          <ul className="space-y-2 text-xs font-medium text-gray-400">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onNavigateCategory(cat.id)}
                  className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-orange-500">›</span>
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('featured')}
                className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-orange-500">›</span>
                <span>{t('nav.featured')}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Seller Direct Contacts */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-gray-800 pb-2">
            {t('product.sellerContact')}
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <a href={`tel:${(contact.phone || '').replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`https://wa.me/${(contact.whatsapp || '').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors font-semibold"
              >
                {contact.whatsapp} (WhatsApp Direct)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{contact.location}</span>
            </li>
            <li className="flex items-center gap-2.5 text-gray-400">
              <Clock className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{contact.businessHours}</span>
            </li>
          </ul>
        </div>

        {/* Guarantee & Request Flow */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-gray-800 pb-2">
            Request Flow
          </h4>
          <div className="space-y-2.5 text-xs text-gray-400">
            <div className="p-2.5 bg-gray-800 rounded-lg flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </span>
              <span>Select products and desired sizes/quantities.</span>
            </div>
            <div className="p-2.5 bg-gray-800 rounded-lg flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </span>
              <span>Click <strong>Buy Now / Request Quote</strong> to submit request.</span>
            </div>
            <div className="p-2.5 bg-gray-800 rounded-lg flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </span>
              <span>Sales team contacts you via WhatsApp or Email.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
        <p>© {new Date().getFullYear()} NoveN Design & Craft Platform. {t('footer.rights')}</p>
        <div className="flex items-center gap-2 text-gray-400">
          <HeartHandshake className="w-4 h-4 text-orange-500" />
          <span>Professional Advertising & Direct Wholesale Platform</span>
        </div>
      </div>
    </footer>
  );
};
