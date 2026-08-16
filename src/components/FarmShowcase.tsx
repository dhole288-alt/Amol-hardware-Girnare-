import React from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/products';
import { Sprout, Droplets, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FarmShowcaseProps {
  lang: 'mr' | 'en';
  onOpenEnquiry: (productName?: string) => void;
}

export const FarmShowcase: React.FC<FarmShowcaseProps> = ({ lang, onOpenEnquiry }) => {
  const farmHighlights = [
    {
      id: 'pipe-farmer',
      title: lang === 'mr' ? 'खांद्यावर पाईप घेऊन शेतात जाणारे शेतकरी' : 'Farmer with Heavy-Duty Irrigation Pipes',
      subtitle: lang === 'mr' ? 'मजबूत PVC व HDPE पाईप्सची विश्वासार्ह साथ' : 'Durable pipes built for tough farm terrain',
      desc: lang === 'mr' 
        ? 'गिरणारे, दुगाव व नाशिक परिसरातील शेतकरी बांधवांसाठी उच्च दाबाचे व उन्हात न तडकणारे खात्रीशीर पाईप्स.'
        : 'Engineered for high water pressure, crack-resistant in extreme sunlight, serving farmers across Girnare & Dugaon.',
      image: ASSET_IMAGES.farmerCarryingPipeImg,
      badge: lang === 'mr' ? 'शेतीसाठी मजबूत पाईप्स' : 'Heavy-Duty Farm Pipes',
      tag: 'PVC & HDPE',
    },
    {
      id: 'woman-farmer',
      title: lang === 'mr' ? 'हिरव्यागार शेतात काम करणाऱ्या महिला शेतकरी' : 'Women Farmers in Lush Green Farmlands',
      subtitle: lang === 'mr' ? 'ठिबक सिंचनामुळे पिकांची उत्तम वाढ व पाण्याची बचत' : 'Micro-irrigation boosting crop health & water conservation',
      desc: lang === 'mr'
        ? 'आधुनिक १६mm व १२mm ठिबक सिंचनामुळे भाजीपाला, द्राक्षे, कांदा व इतर पिकांना मुळांशी अचूक पाणी व खते मिळतात.'
        : 'Precision drip emitters delivering water and soluble nutrients directly to plant roots, transforming farm yields.',
      image: ASSET_IMAGES.womanFarmerImg,
      badge: lang === 'mr' ? 'समृद्ध हिरवीगार शेती' : 'Lush Green Fields',
      tag: 'Drip Irrigation',
    },
    {
      id: 'farmers-working',
      title: lang === 'mr' ? 'शेतात एकत्रित काम करणारे शेतकरी बांधव' : 'Farmers Working with Modern Drip Systems',
      subtitle: lang === 'mr' ? 'सर्व सिंचन व शेती साहित्य एकाच छताखाली' : 'Complete irrigation hardware under one roof',
      desc: lang === 'mr'
        ? 'फिल्टर्स, व्हॉल्व्ह, ड्रीपर्स, तुषार सिंचन व शेती अवजारे - अमोल हार्डवेअर नेहमी बळीराजाच्या सेवेत तत्पर.'
        : 'From disc filters and take-off valves to overhead impact sprinklers, Amol Hardware supports every step of cultivation.',
      image: ASSET_IMAGES.farmersWorkingFarmImg,
      badge: lang === 'mr' ? 'बळीराजाच्या सेवेत' : 'Dedicated to Farmers',
      tag: 'Complete Solutions',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 bg-[#06090c] relative overflow-hidden border-t border-b border-orange-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Kesari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <Sprout className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'आमचे शेतकरी व समृद्ध शेती' : 'Our Farmers & Lush Green Farmlands'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'mr' ? (
              <>
                हिरवीगार शेती आणि <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">कष्टकरी शेतकरी बांधव</span>
              </>
            ) : (
              <>
                Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Farmers with Modern Irrigation</span>
              </>
            )}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {lang === 'mr'
              ? 'शेतात काबाडकष्ट करणाऱ्या बळीराजाला आणि महिला शेतकऱ्यांना दर्जेदार ठिबक पाईप्स, सिंचन साहित्य व हार्डवेअर पुरवून आम्ही शेती समृद्ध बनवण्यास हातभार लावत आहोत.'
              : 'Dedicated to empowering the hardworking farmers and women farmers across Maharashtra with state-of-the-art drip systems, heavy-duty pipes, and farm hardware.'}
          </p>
        </motion.div>

        {/* 3 Large Visual Story Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {farmHighlights.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#0f1418] border border-gray-800 hover:border-orange-500/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:shadow-orange-950/40"
            >
              {/* Image Container with high clarity */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1418] via-transparent to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-orange-500/40 text-orange-400 text-xs font-bold backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-950/90 border border-orange-400/50 text-orange-300 text-xs font-extrabold backdrop-blur-md">
                  {item.tag}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-orange-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs font-extrabold text-orange-400 font-marathi">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onOpenEnquiry(item.title)}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-orange-400 hover:text-orange-300 transition cursor-pointer"
                  >
                    <span>{lang === 'mr' ? 'या साहित्याची माहिती विचारा' : 'Enquire for this Material'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Farmer Support Banner in Kesari */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-950/80 via-[#131a20] to-orange-950/80 border border-orange-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-600/30 border border-orange-400/50 text-orange-400 flex items-center justify-center shrink-0 shadow-lg">
              <Droplets className="w-7 h-7 animate-bounce" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white font-heading">
                {lang === 'mr' ? 'तुमच्या शेतीसाठी मोफत सल्ला व अंदाजपत्रक' : 'Free Irrigation Planning & Estimates for Farmers'}
              </div>
              <p className="text-xs sm:text-sm text-orange-200/90 mt-0.5 font-marathi">
                पिकांनुसार (द्राक्ष, कांदा, भाजीपाला, फळबागा) योग्य लॅटरल व पाईप साईजसाठी राहुल सोमनाथ उमाप यांच्याशी थेट चर्चा करा.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenEnquiry('Farm Irrigation Consultation & Material Quote')}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-950/60 transition cursor-pointer flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'mr' ? 'शेतकरी सल्ला अर्ज' : 'Get Free Consultation'}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 bg-[#182026] hover:bg-[#222c35] text-orange-300 hover:text-white border border-orange-500/40 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
