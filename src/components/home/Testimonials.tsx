import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: 'Eric Nshuti',
      role: 'Boutique Owner, Kigali',
      comment: 'Requested 50 pairs of sneakers via WhatsApp. Response was under 30 minutes with exact fabric sample photos. Delivered right on schedule!',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Aline Mugabo',
      role: 'Fashion Retailer, Huye',
      comment: 'Extremely clean catalog. I placed a request for bulk heavy hoodies with custom size ratios. The quotation was transparent with zero hidden fees.',
      rating: 5,
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jean-Pierre Laurent',
      role: 'Apparel Wholesaler, Gisenyi',
      comment: 'Top quality shirts and caps. Direct phone communication made ordering simple without online credit card hassles.',
      rating: 5,
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/50">
            {t('section.testimonials')}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            Trusted by Verified Buyers & Wholesalers
          </h2>
          <p className="text-xs text-gray-500">
            Read feedback from boutique owners and apparel buyers across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 hover:border-orange-300 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-orange-200" />
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-gray-900 flex items-center gap-1">
                    <span>{rev.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <span className="text-[10px] text-gray-500 font-medium">{rev.role}</span>
                </div>
                <span className="text-[10px] text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
