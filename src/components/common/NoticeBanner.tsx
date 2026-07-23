import React from 'react';
import { ShieldAlert, PhoneCall, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DEFAULT_SELLER_CONTACT } from '../../data/categories';
import { SellerContactInfo } from '../../types';

interface NoticeBannerProps {
  contactInfo?: SellerContactInfo;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ contactInfo = DEFAULT_SELLER_CONTACT }) => {
  const { t } = useLanguage();
  const contact = contactInfo || DEFAULT_SELLER_CONTACT;

  return (
    <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white text-xs md:text-sm py-2 px-4 shadow-sm border-b border-orange-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShieldAlert className="w-4 h-4 text-amber-200 shrink-0 animate-pulse" />
          <span className="font-medium text-orange-50">
            {t('notice.noDirectPayment')}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs shrink-0 font-medium text-orange-100">
          <a
            href={`tel:${(contact.phone || '').replace(/\s+/g, '')}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{contact.phone}</span>
          </a>
          <span className="opacity-40">|</span>
          <a
            href={`https://wa.me/${(contact.whatsapp || '').replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Sales</span>
          </a>
        </div>
      </div>
    </div>
  );
};
