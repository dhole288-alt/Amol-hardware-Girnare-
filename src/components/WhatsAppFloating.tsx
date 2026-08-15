import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/products';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = "Hello Amol Hardware, मला तुमच्या Hardware / Pipe / Drip Irrigation products बद्दल माहिती व दर हवे आहेत.";

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex items-end gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e1713] border border-green-500/60 text-white text-xs font-bold shadow-2xl animate-fade-in backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          <span className="text-green-300">WhatsApp वर थेट चौकशी करा / Chat with us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 cursor-pointer"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={getWhatsAppLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/50 hover:scale-110 active:scale-95 transition-all duration-300 relative group border-2 border-white/20"
        aria-label="Chat on WhatsApp with Amol Hardware"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/10" />
        
        {/* Pulsing Outer Ping */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#090e10]"></span>
        </span>
      </a>
    </div>
  );
};

