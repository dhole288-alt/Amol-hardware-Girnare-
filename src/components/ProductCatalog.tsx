import React, { useState } from 'react';
import { PRODUCTS_CATALOG, CATEGORIES, BUSINESS_INFO, getWhatsAppLink } from '../data/products';
import { Product } from '../types';
import { Search, MessageCircle, Phone, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCatalogProps {
  lang: 'mr' | 'en';
  selectedCategory: string;
  onCategoryChange: (catId: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  selectedCategory,
  onCategoryChange,
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by selected category and search string
  const filteredProducts = PRODUCTS_CATALOG.filter((prod) => {
    const matchesCategory =
      selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.marathiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppEnquiry = (product: Product) => {
    const message = `Hello Amol Hardware, मला या प्रॉडक्टबद्दल माहिती व दर हवे आहेत:\n*${product.name}*\n(${product.marathiName})\nकॅटेगरी: ${product.category}`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section id="hardware-catalog" className="py-20 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'mr' ? 'प्रॉडक्ट दालन' : 'Hardware & Agricultural Inventory'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              {lang === 'mr' ? 'हार्डवेअर आणि पाईप साहित्य' : 'Hardware & Irrigation Products'}
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
              {lang === 'mr'
                ? 'शेती व घरासाठी लागणाऱ्या सर्व दर्जेदार वस्तूंची यादी. तुम्हाला हव्या असलेल्या उत्पादनाची त्वरित चौकशी करा.'
                : 'Browse our heavy-duty PVC & HDPE pipes, pipe fittings, drip lateral rolls, valves, nuts & bolts, tools and plumbing accessories.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-orange-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'mr' ? 'प्रॉडक्ट किंवा साहित्य शोधा...' : 'Search pipes, valves, tools, bolts...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#11161b] border border-gray-700/80 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-orange-400"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Pill Filters in Kesari Theme */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/60'
                : 'bg-[#11161b] text-gray-300 hover:bg-[#1b2229] hover:text-orange-300 border border-gray-800'
            }`}
          >
            {lang === 'mr' ? 'सर्व प्रॉडक्ट्स' : 'All Products'} ({PRODUCTS_CATALOG.length})
          </motion.button>

          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/60'
                  : 'bg-[#11161b] text-gray-300 hover:bg-[#1b2229] hover:text-orange-300 border border-gray-800'
              }`}
            >
              {lang === 'mr' ? cat.marathiName : cat.name}
            </motion.button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#11161b] rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              {lang === 'mr' ? 'कोणतेही प्रॉडक्ट सापडले नाही.' : 'No products found matching your search.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="mt-3 text-xs text-orange-400 font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod: Product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={prod.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-[#101418] border border-gray-800 hover:border-orange-500/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-950/30 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Product Top Image with Badges */}
                  <div className="relative h-52 w-full overflow-hidden bg-black/50">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101418] via-[#101418]/20 to-transparent" />
                    
                    {prod.isPopular && (
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-extrabold uppercase tracking-wide shadow">
                        Popular Demand
                      </div>
                    )}

                    {prod.specs && (
                      <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-orange-500/20 text-[10px] text-orange-200 truncate font-medium">
                        {prod.specs}
                      </div>
                    )}
                  </div>

                  {/* Product Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-heading leading-snug">
                        {prod.name}
                      </h3>

                      {/* Marathi Name in Kesari */}
                      <div className="text-xs font-bold text-orange-400 font-marathi">
                        {prod.marathiName}
                      </div>

                      <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                        {lang === 'mr' ? prod.marathiDescription : prod.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="space-y-1 pt-1">
                        {prod.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                            <CheckCircle className="w-3 h-3 text-orange-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enquiry Buttons */}
                    <div className="pt-3 border-t border-gray-800 flex items-center gap-2">
                      {/* Send WhatsApp Enquiry */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsAppEnquiry(prod)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-green-500/50 hover:border-green-400 text-xs font-extrabold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-green-400" />
                        <span>{lang === 'mr' ? 'WhatsApp चौकशी' : 'WhatsApp Enquiry'}</span>
                      </motion.button>

                      {/* Enquire Modal Form */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onOpenEnquiry(`${prod.name} (${prod.marathiName})`)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#182026] hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 text-gray-200 hover:text-white border border-gray-700 hover:border-orange-500 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{lang === 'mr' ? 'दर / कोटेशन' : 'Price Quote'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Wholesale & Bulk Order Banner in Kesari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#11161b] via-[#1a1f26] to-[#11161b] border border-orange-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              {lang === 'mr'
                ? 'मोठ्या प्रमाणावर शेतीसाठी किंवा बांधकामासाठी साहित्य हवे आहे का?'
                : 'Need Bulk Supplies for Farmland, Housing, or Construction Projects?'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Get special bulk discount pricing on PVC pipes, HDPE coils, drip bundles, and hardware fasteners. Fast delivery and local assistance in Girnare & Dugaon.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={getWhatsAppLink("Hello Amol Hardware, मला मोठ्या प्रमाणावर (Bulk Order) शेती / बांधकामाच्या साहित्यासाठी दर हवे आहेत.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-green-950/60 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'mr' ? 'WhatsApp वर कोटेशन मागा' : 'WhatsApp Bulk Quote'}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-orange-950/60 transition"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
