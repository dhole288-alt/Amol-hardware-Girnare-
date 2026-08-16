import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';
import { motion } from 'motion/react';

interface MobileStickyBarProps {
  lang: 'mr' | 'en';
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ lang }) => {
  const defaultMessage = "Hello Amol Hardware, मला तुमच्या Hardware / Pipe / Drip Irrigation products बद्दल माहिती हवी आहे.";

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="fixed bottom-0 inset-x-0 z-40 bg-[#080c0f]/95 border-t border-gray-800/90 backdrop-blur-lg p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2">
        {/* Sticky Call Button in Kesari */}
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="py-3 px-3 bg-gradient-to-r from-orange-600 to-amber-600 active:from-orange-500 active:to-amber-500 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-950/60 transition text-center"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>{lang === 'mr' ? 'कॉल करा (Call)' : 'Call 86056 26993'}</span>
        </motion.a>

        {/* Sticky WhatsApp Enquiry Button */}
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={getWhatsAppLink(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3 bg-gradient-to-r from-emerald-600 to-green-600 active:from-emerald-500 active:to-green-500 border border-green-400/50 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-950/60 transition text-center"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>{lang === 'mr' ? 'WhatsApp चौकशी' : 'WhatsApp Enquiry'}</span>
        </motion.a>
      </div>
    </motion.div>
  );
};
