import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/products';
import { Boxes, ShieldCheck, MapPin, UserCheck, Award, HeartHandshake, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  lang: 'mr' | 'en';
}

const ICONS_MAP: Record<string, React.ElementType> = {
  Boxes,
  ShieldCheck,
  MapPin,
  UserCheck,
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  return (
    <section id="why-us" className="py-20 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in Kesari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'विश्वास व गुणवत्ता' : 'Our Commitment'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Why Choose Amol Hardware
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            {lang === 'mr'
              ? 'स्थानिक शेतकरी, प्लंबर आणि बांधकाम व्यावसायिकांसाठी हक्काचे आणि खात्रीशीर विश्वासाचे नाव.'
              : 'Delivering unmatched product quality, transparent pricing, and technical advice tailored to Maharashtra farming conditions.'}
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid in Kesari Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICONS_MAP[item.icon] || Boxes;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-gray-800 hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-orange-950/40"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-heading">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-orange-400 font-marathi">
                    {item.marathiTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {lang === 'mr' ? item.marathiDescription : item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>Amol Hardware Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Local Community Trust Strip in Kesari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl bg-[#11161b] border border-orange-500/30 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-orange-950 text-orange-400 border border-orange-500/40">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {lang === 'mr' ? 'गिरणारे व दुगाव परिसरातील हक्काचे सेवा केंद्र' : 'Rooted in Girnare & Dugaon Communities'}
              </div>
              <div className="text-xs text-gray-400">
                Directly managed by Rahul Somnath Umap with full after-sales support and guidance.
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-4 py-2 rounded-xl bg-orange-600/20 text-orange-300 border border-orange-500/40 hover:bg-orange-600 hover:text-white transition-all text-xs font-bold flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.phone}</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
