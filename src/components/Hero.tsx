import React from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle, Droplets, Shield, Sparkles, Navigation, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, ASSET_IMAGES, getWhatsAppLink } from '../data/products';
import { motion } from 'motion/react';

interface HeroProps {
  lang: 'mr' | 'en';
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenEnquiry }) => {
  const defaultWhatsAppMsg = "Hello Amol Hardware, मला तुमच्या Hardware / PVC Pipe / Drip Irrigation साहित्याची चौकशी व दर हवे आहेत.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#090c0f]">
      {/* Hero Background Image - Full Width, High-Resolution Hardware & Irrigation Products */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSET_IMAGES.heroBg}
          alt="Amol Hardware PVC Pipes, Drip Irrigation, Pumps and Plumbing Equipment"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_65%] sm:object-center filter brightness-95 contrast-105 select-none"
        />
        {/* Subtle transparent gradient overlay - maintains text contrast while keeping all products crisp & visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080b0e]/85 via-[#080b0e]/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c0f] via-transparent to-black/20" />
        {/* Ambient Saffron Accent Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <motion.div
            className="lg:col-span-8 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Mobile-First Prominent Marketing Hardware & Irrigation Photo Banner (Front & Center) */}
            <motion.div
              variants={itemVariants}
              className="block lg:hidden w-full mb-6 rounded-3xl overflow-hidden border-2 border-orange-500/50 shadow-2xl shadow-orange-950/80 group relative"
            >
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#0c1014]">
                <img
                  src={ASSET_IMAGES.hardwareShopHeroImg}
                  alt="Amol Hardware Agriculture and Drip Irrigation Equipment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating Marketing Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 border border-orange-500/60 text-orange-400 text-[11px] font-extrabold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>अमोल हार्डवेअर • संपूर्ण शेती व सिंचन साहित्य</span>
                </div>

                {/* Bottom Product Highlight Bar */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold bg-black/80 px-3 py-1.5 rounded-xl border border-orange-500/40 backdrop-blur-md">
                  <span className="text-orange-300">PVC, HDPE, ठिबक व पंप्स</span>
                  <span className="text-[10px] bg-orange-600 px-2 py-0.5 rounded text-white font-extrabold">होलसेल दर</span>
                </div>
              </div>
            </motion.div>

            {/* Kesari Top Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-bold tracking-wide shadow-lg backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
              <span>
                {lang === 'mr'
                  ? 'हार्डवेअर आणि ठिबक सिंचन - गिरणारे, दुगाव'
                  : 'Authorized Hardware & Drip Irrigation Hub - Girnare, Dugaon'}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Amol <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Hardware</span>
              </h1>
              
              {/* Kesari Subheadline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 tracking-wide font-heading">
                Hardware • Pipes • Drip Irrigation • Agricultural Solutions
              </p>
            </motion.div>

            {/* Supporting Text in Marathi & English with Kesari Border */}
            <motion.div
              variants={itemVariants}
              className="max-w-2xl bg-[#12171c]/90 border-l-4 border-orange-500 p-4 sm:p-5 rounded-r-2xl backdrop-blur-md shadow-xl border-t border-r border-b border-orange-500/15"
            >
              <p className="text-base sm:text-lg text-orange-100 font-marathi font-semibold leading-relaxed">
                “आपल्या घरापासून शेतीपर्यंत आवश्यक Hardware आणि Irrigation Products एकाच ठिकाणी.”
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                Trusted partner for farmers, contractors, plumbers, and homeowners with complete plumbing, irrigation fittings, and durable hardware.
              </p>
            </motion.div>

            {/* Buttons Group with WhatsApp & Kesari CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* WhatsApp Enquiry Button - Vibrant & Prominent */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={getWhatsAppLink(defaultWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white rounded-xl font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-green-950/60 hover:shadow-green-600/40 transition-all cursor-pointer border border-green-400/40"
              >
                <MessageCircle className="w-5 h-5 text-white animate-bounce" />
                <span>{lang === 'mr' ? 'WhatsApp चौकशी' : 'WhatsApp Enquiry'}</span>
              </motion.a>

              {/* View Products */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#products"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-orange-950/60 hover:shadow-orange-600/40 transition-all cursor-pointer"
              >
                <span>{lang === 'mr' ? 'प्रॉडक्ट्स पहा' : 'View Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Call Now in Kesari */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3.5 bg-[#161c22] hover:bg-orange-950/80 text-orange-300 hover:text-white border border-orange-500/50 hover:border-orange-400 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-lg backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{lang === 'mr' ? 'कॉल करा' : 'Call Now'}</span>
              </motion.a>

              {/* Track Location Now */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#location"
                className="px-4 py-3.5 bg-[#10151a]/80 hover:bg-orange-950/50 text-gray-200 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/60 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-orange-400 animate-pulse" />
                <span>{lang === 'mr' ? '📍 Track Now' : '📍 Track Now'}</span>
              </motion.a>
            </motion.div>

            {/* Kesari Prominent Phone & WhatsApp Highlight */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2 text-sm text-gray-300">
              <span className="text-orange-300 font-semibold">
                {lang === 'mr' ? 'थेट संपर्क व ऑर्डर:' : 'Direct Order & Inquiries:'}
              </span>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={getWhatsAppLink(defaultWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-green-950/80 border border-green-500/50 text-green-400 font-extrabold text-sm tracking-wider hover:bg-green-900/60 hover:text-green-300 transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-orange-950/80 border border-orange-500/50 text-orange-400 font-extrabold text-sm tracking-wider hover:bg-orange-900/60 hover:text-orange-300 transition shadow-md"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>कॉल: {BUSINESS_INFO.phone}</span>
              </motion.a>
              <span className="text-xs text-orange-200/80 font-medium">
                (संचालक: {BUSINESS_INFO.owner})
              </span>
            </motion.div>

            {/* Micro Feature Trust Strip in Kesari */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-800/80">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                <span>100% Genuine ISI Pipes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Droplets className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Complete Drip & Sprinklers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 col-span-2 sm:col-span-1">
                <Shield className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Wholesale & Retail Rates</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero Farmer Spotlight & Quick Service Cards */}
          <motion.div
            className="lg:col-span-4 space-y-4"
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Visual Farm & Shop Cards */}
            <div className="glass-panel p-4 rounded-3xl border border-orange-500/40 shadow-2xl relative overflow-hidden space-y-3">
              
              {/* Store Front & Service Hub Preview */}
              <div className="relative rounded-2xl overflow-hidden group h-44 border border-orange-500/40 shadow-lg">
                <img
                  src={ASSET_IMAGES.storeCounterImg}
                  alt="Amol Hardware Store Front & Farm Service Hub"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/80 border border-orange-500/50 text-[10px] font-extrabold text-orange-300 backdrop-blur-md">
                  🏢 अमोल हार्डवेअर व कृषी भांडार
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-xs font-extrabold text-white leading-tight">
                  दुकान, सेवा केंद्र व प्रत्यक्ष साहित्य उपलब्ध
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Farmer carrying pipe */}
                <div className="relative rounded-xl overflow-hidden group h-24 border border-orange-500/30">
                  <img
                    src={ASSET_IMAGES.farmerCarryingPipeImg}
                    alt="Farmer carrying irrigation pipe"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2 text-[10px] font-extrabold text-white leading-tight">
                    🌾 पाईप्स व शेती
                  </div>
                </div>

                {/* Woman Farmer in lush green farm */}
                <div className="relative rounded-xl overflow-hidden group h-24 border border-orange-500/30">
                  <img
                    src={ASSET_IMAGES.womanFarmerImg}
                    alt="Woman farmer in lush green farm"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2 text-[10px] font-extrabold text-white leading-tight">
                    💧 ठिबक व हिरवीगार शेती
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-orange-900/40 pb-2.5 pt-1">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-extrabold">
                    गिरणारे • दुगाव शेतकरी सेवा
                  </span>
                  <h3 className="text-base font-bold text-white font-heading">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
                <div className="p-1.5 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Shop Highlights */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-orange-400">Drip & Sprinklers:</strong> 16mm/12mm लॅटरल, ड्रीपर्स, फिल्टर्स व तुषार.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-orange-400">PVC & HDPE Pipes:</strong> शेतीसाठी हेवी ड्युटी प्रेशर पाईप्स.
                  </div>
                </div>
              </div>

              {/* Owner / Location pill */}
              <div className="p-2.5 rounded-xl bg-[#0c1417] border border-gray-800 space-y-1">
                <div className="flex items-center gap-2 text-[11px] text-gray-300">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.address}</span>
                </div>
                <div className="text-[11px] text-orange-400 font-bold">
                  संचालक: {BUSINESS_INFO.owner} ({BUSINESS_INFO.phone})
                </div>
              </div>

              {/* Quick Estimate Kesari CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEnquiry}
                className="w-full py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-xs shadow-lg shadow-orange-950/60 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'mr' ? 'दरपत्रक व माहिती विचारा' : 'Get Price Quote / Estimate'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
