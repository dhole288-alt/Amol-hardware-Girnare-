import React from 'react';
import { BUSINESS_INFO, ASSET_IMAGES } from '../data/products';
import { ShieldCheck, Phone, Hammer } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  lang: 'mr' | 'en';
  onOpenEnquiry: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ lang, onOpenEnquiry }) => {
  return (
    <section id="about" className="py-24 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story & Owner Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/40 shadow-2xl">
              <img
                src={ASSET_IMAGES.storeCounterImg}
                alt="Amol Hardware Store Front & Service Counter in Girnare Dugaon"
                referrerPolicy="no-referrer"
                className="w-full h-[430px] object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c0f] via-black/30 to-transparent" />
              
              {/* Owner Info Box Overlay in Kesari */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-orange-500/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 border border-orange-400/50 flex items-center justify-center text-white font-bold text-lg font-heading shadow-md">
                    RU
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">
                      {BUSINESS_INFO.owner}
                    </div>
                    <div className="text-xs text-orange-400 font-medium">
                      Founder & Proprietor, Amol Hardware
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Experience Badge in Kesari */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-extrabold shadow-xl border border-orange-400/50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>100% Quality Guaranteed</span>
            </motion.div>
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
                <Hammer className="w-3.5 h-3.5" />
                <span>{lang === 'mr' ? 'आमच्याबद्दल' : 'About Our Store'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
                About Amol Hardware
              </h2>

              <p className="text-base sm:text-lg text-orange-300 font-marathi font-medium">
                “शेतीपासून घरापर्यंत – सर्वोत्कृष्ट हार्डवेअर व सिंचन साहित्याचा खात्रीशीर पत्ता.”
              </p>
            </div>

            {/* Main Descriptive Paragraph */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                <strong>Amol Hardware</strong> is a premier hardware, plumbing, pipe, agricultural and drip irrigation supply destination located at Girnare near HP Petrol Pump in Dugaon, Maharashtra. We cater directly to farmers, civil contractors, plumbing professionals, builders, and local households with authentic, heavy-duty products engineered for long-lasting performance.
              </p>

              <p className="font-marathi text-sm sm:text-base text-gray-300/90 leading-relaxed bg-[#11161b] p-4 rounded-xl border border-gray-800">
                आम्ही शेतकऱ्यांना त्यांच्या शेतीच्या आकारमानानुसार योग्य ठिबक सिंचन, तुषार, PVC आणि HDPE पाईप्सची अचूक निवड करण्यास मदत करतो. तसेच घरबांधणी, नळकाम, कुलूप-फास्टनर्स आणि शेती अवजारांचे सर्व साहित्य वाजवी दरात उपलब्ध करून देतो.
              </p>
            </div>

            {/* Audience Badges in Kesari */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <motion.div whileHover={{ y: -3 }} className="p-3 rounded-xl bg-[#11161b] border border-gray-800 text-xs transition-all">
                <div className="text-orange-400 font-bold mb-0.5">🌾 शेतकरी बांधव</div>
                <span className="text-gray-400 text-[11px]">Drip & Farm Accessories</span>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-3 rounded-xl bg-[#11161b] border border-gray-800 text-xs transition-all">
                <div className="text-orange-400 font-bold mb-0.5">🔧 प्लंबर्स व कारागीर</div>
                <span className="text-gray-400 text-[11px]">Pipes, Valves & Tools</span>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-3 rounded-xl bg-[#11161b] border border-gray-800 text-xs col-span-2 sm:col-span-1 transition-all">
                <div className="text-orange-400 font-bold mb-0.5">🏠 घरगुती व बांधकाम</div>
                <span className="text-gray-400 text-[11px]">Hardware & Fasteners</span>
              </motion.div>
            </div>

            {/* Contact Strip in Kesari */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEnquiry}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-950/50 transition cursor-pointer"
              >
                {lang === 'mr' ? 'चौकशी अर्ज पाठवा' : 'Send Fast Enquiry'}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-[#182026] hover:bg-[#222c35] border border-gray-700 hover:border-orange-500 text-gray-200 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
