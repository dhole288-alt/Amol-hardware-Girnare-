import React from 'react';
import { CATEGORIES } from '../data/products';
import { Category } from '../types';
import { ArrowRight, Layers } from 'lucide-react';

interface CategoryGridProps {
  lang: 'mr' | 'en';
  onSelectCategory: (categoryId: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ lang, onSelectCategory, onOpenEnquiry }) => {
  return (
    <section id="products" className="py-20 bg-[#080c0f] relative">
      {/* Background accents in Kesari */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'आमची उत्पादने' : 'Our Products'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'mr' ? 'सर्वसमावेशक हार्डवेअर व सिंचन साहित्य' : 'Product Categories'}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {lang === 'mr'
              ? 'शेतीसाठी दर्जेदार ठिबक, तुषार, PVC/HDPE पाईप्स आणि घरासाठी लागणारे सर्व हार्डवेअर व प्लंबिंग साहित्य उपलब्ध.'
              : 'Explore our complete inventory of industrial-grade hardware, irrigation systems, agricultural pipes, valves, and precision tools.'}
          </p>
        </div>

        {/* Categories Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat: Category, index: number) => (
            <div
              key={cat.id}
              className="group relative bg-[#11161b] border border-gray-800/80 hover:border-orange-500/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-950/40 transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Product Category Image */}
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161b] via-[#11161b]/20 to-transparent" />
                
                {/* Item count tag in Kesari */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#080b0e]/90 backdrop-blur-md border border-orange-500/40 text-[11px] font-bold text-orange-400">
                  {cat.itemCount}
                </div>

                {/* Index badge */}
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white text-xs font-bold flex items-center justify-center shadow">
                  {index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-heading">
                    {cat.name}
                  </h3>
                  
                  {/* Marathi name in Kesari */}
                  <p className="text-xs font-bold text-orange-400 font-marathi">
                    {cat.marathiName}
                  </p>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {lang === 'mr' ? cat.marathiDescription : cat.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition py-1 cursor-pointer"
                  >
                    <span>{lang === 'mr' ? 'प्रॉडक्ट्स पहा' : 'View Products'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`${cat.name} (${cat.marathiName})`)}
                    className="px-2.5 py-1 rounded-lg bg-[#182026] hover:bg-orange-600 text-orange-300 hover:text-white text-[11px] font-bold transition border border-orange-500/30 hover:border-orange-500 cursor-pointer"
                  >
                    {lang === 'mr' ? 'चौकशी' : 'Enquire'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
