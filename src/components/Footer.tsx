import React from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';
import { Phone, MapPin, Wrench, Droplets, ArrowUp, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  lang: 'mr' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultMsg = "Hello Amol Hardware, मला तुमच्या Hardware व Drip Irrigation साहित्याची माहिती हवी आहे.";

  return (
    <footer className="bg-[#05080a] border-t border-gray-800/80 text-gray-400 relative">
      
      {/* Top glowing line in Kesari */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10"
        >
          
          {/* Col 1: Brand & Subtitle (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-950/60">
                <div className="flex items-center">
                  <Wrench className="w-4 h-4 -rotate-45" />
                  <Droplets className="w-4 h-4 -ml-1 text-orange-100" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
                AMOL <span className="text-orange-500">HARDWARE</span>
              </span>
            </div>

            <p className="text-sm font-bold text-orange-400 font-heading">
              Hardware • Pipes • Drip Irrigation • Agricultural Solutions
            </p>

            <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
              आपल्या घरापासून शेतीपर्यंत आवश्यक Hardware आणि Irrigation Products एकाच ठिकाणी. Serving farmers, contractors, plumbers, and local residents with authentic quality materials.
            </p>

            <div className="pt-2 text-xs text-gray-400">
              <strong className="text-gray-300">Owner / संचालक:</strong> {BUSINESS_INFO.owner}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-extrabold font-heading border-b border-gray-800 pb-2">
              {lang === 'mr' ? 'महत्वाच्या लिंक्स' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Home (मुख्य पान)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Products (प्रॉडक्ट्स)
                </a>
              </li>
              <li>
                <a href="#drip-irrigation" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Drip Irrigation (ठिबक सिंचन)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Farm Estimator (कॅल्क्युलेटर)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  About Us (आमच्याबद्दल)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Location (पत्ता व रस्ता)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-150">
                  Contact & Enquiry (संपर्क)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-extrabold font-heading border-b border-gray-800 pb-2">
              {lang === 'mr' ? 'संपर्क व पत्ता' : 'Contact & Address'}
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white font-bold text-sm hover:text-orange-400 transition"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Direct WhatsApp button in Footer */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={getWhatsAppLink(defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-xs shadow-md shadow-green-950/60 transition border border-green-400/40"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{lang === 'mr' ? 'WhatsApp वर थेट बोला' : 'Chat on WhatsApp'}</span>
              </motion.a>

              <div className="p-3 rounded-xl bg-[#11161b] border border-gray-800 text-[11px] text-gray-400">
                ⏰ Open Daily: 7:30 AM – 8:30 PM (सर्व दिवस सुरू)
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Amol Hardware. All Rights Reserved.
          </div>

          <div className="text-center">
            Girnare • Dugaon, Maharashtra – 422003
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-orange-400 transition cursor-pointer p-1 group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
