import React from 'react';
import { PhoneCall, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Send } from 'lucide-react';
import { DEFAULT_SELLER_CONTACT } from '../../data/categories';
import { SellerContactInfo } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactSectionProps {
  contactInfo?: SellerContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo = DEFAULT_SELLER_CONTACT }) => {
  const { t } = useLanguage();
  const contact = contactInfo || DEFAULT_SELLER_CONTACT;

  return (
    <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800/80">
                Direct Seller Inquiry
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                Have Custom Product Requirements? Contact Us Directly
              </h2>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Whether you need custom shirt embroidery, specific sneaker sizes in bulk, or price quotes, our dedicated sales representatives are ready to assist you.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-800/90 p-4 rounded-2xl border border-gray-700/80 space-y-1">
                <span className="text-orange-400 font-bold block text-[10px] uppercase">Phone Line</span>
                <a href={`tel:${(contact.phone || '').replace(/\s+/g, '')}`} className="text-sm font-bold hover:text-orange-400 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-orange-500" />
                  <span>{contact.phone}</span>
                </a>
              </div>

              <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800/80 space-y-1">
                <span className="text-emerald-400 font-bold block text-[10px] uppercase">WhatsApp Sales</span>
                <a
                  href={`https://wa.me/${(contact.whatsapp || '').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-300 hover:underline flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{contact.whatsapp}</span>
                </a>
              </div>

              <div className="bg-gray-800/90 p-4 rounded-2xl border border-gray-700/80 space-y-1">
                <span className="text-orange-400 font-bold block text-[10px] uppercase">Official Email</span>
                <a href={`mailto:${contact.email}`} className="text-xs font-bold hover:text-orange-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>{contact.email}</span>
                </a>
              </div>

              <div className="bg-gray-800/90 p-4 rounded-2xl border border-gray-700/80 space-y-1">
                <span className="text-orange-400 font-bold block text-[10px] uppercase">Location & Hours</span>
                <div className="text-xs text-gray-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{contact.businessHours}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-900/50">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>No online credit cards required • Direct invoice & order agreement</span>
            </div>
          </div>

          {/* Business Location & Hours Card */}
          <div className="bg-gray-800/90 rounded-3xl p-6 md:p-8 border border-gray-700 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Showroom & Distribution Center</span>
            </h3>

            <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <p>
                Visit our showroom in Kigali to inspect product fabric, sample shoe fits, and consult with our sales directors in person.
              </p>
              
              <div className="p-3 bg-gray-900/90 rounded-xl font-bold text-orange-300 border border-gray-700">
                {contact.location}
              </div>

              <div className="pt-2 text-[11px] text-gray-400 space-y-1">
                <p>• Bulk order processing: 1-3 business days</p>
                <p>• Custom brand printing / stitching available upon request</p>
                <p>• Regional delivery available across East Africa</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
