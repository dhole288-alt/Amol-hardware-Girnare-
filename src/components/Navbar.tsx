import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Droplets, Wrench, Languages, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  lang: 'mr' | 'en';
  setLang: (lang: 'mr' | 'en') => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const defaultWhatsAppMsg = "Hello Amol Hardware, मला तुमच्या Hardware / Pipe / Drip Irrigation साहित्याबद्दल माहिती व दर हवे आहेत.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = ['home', 'products', 'drip-irrigation', 'calculator', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: lang === 'mr' ? 'होम' : 'Home', href: '#home' },
    { id: 'products', name: lang === 'mr' ? 'प्रॉडक्ट्स' : 'Products', href: '#products' },
    { id: 'drip-irrigation', name: lang === 'mr' ? 'ठिबक सिंचन' : 'Drip Irrigation', href: '#drip-irrigation' },
    { id: 'calculator', name: lang === 'mr' ? 'कॅल्क्युलेटर' : 'Irrigation Calculator', href: '#calculator' },
    { id: 'about', name: lang === 'mr' ? 'आमच्याबद्दल' : 'About Us', href: '#about' },
    { id: 'contact', name: lang === 'mr' ? 'पत्ता / संपर्क' : 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification / Contact Strip with Kesari Accent */}
      <div className="bg-[#0e1216] border-b border-orange-900/40 text-xs text-gray-300 py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold transition-colors hover:text-orange-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate max-w-[240px] sm:max-w-none">{BUSINESS_INFO.address}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {BUSINESS_INFO.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#191f26] hover:bg-orange-950/70 border border-orange-500/40 text-orange-400 hover:text-orange-300 transition-colors text-xs font-bold cursor-pointer shadow-sm"
              title="Change Language / भाषा बदला"
            >
              <Languages className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold">{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-orange-300 font-bold hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation with Smooth Backdrop Blur and Transition */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 will-change-transform ${
          isScrolled
            ? 'bg-[#0a0d10]/95 backdrop-blur-md border-b border-orange-500/30 shadow-2xl py-3'
            : 'bg-[#0a0d10]/85 backdrop-blur-sm border-b border-orange-500/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Kesari Gradient Emblem */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg bhagwa-glow-subtle transition-shadow"
            >
              <div className="flex items-center">
                <Wrench className="w-5 h-5 -rotate-45" />
                <Droplets className="w-5 h-5 -ml-1 text-amber-100" />
              </div>
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-orange-300 transition-colors">
                  AMOL <span className="text-orange-500">HARDWARE</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-orange-200/70 tracking-wide font-medium">
                Pipes • Drip Irrigation • Agriculture • Hardware
              </p>
            </div>
          </a>

          {/* Desktop Nav Links with Active/Hover Underline */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide relative py-1.5 transition-colors duration-200 ${
                    isActive ? 'text-orange-400 font-bold' : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Enquiry Button */}
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href={getWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-lg shadow-green-950/40 hover:shadow-green-500/25 transition-all cursor-pointer border border-green-400/40"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>{lang === 'mr' ? 'WhatsApp चौकशी' : 'WhatsApp Enquiry'}</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenEnquiry()}
              className="px-3.5 py-2 text-xs font-bold text-orange-300 hover:text-white bg-[#161c22] hover:bg-orange-950/80 border border-orange-500/40 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-orange-950/40"
            >
              {lang === 'mr' ? 'फॉर्म चौकशी' : 'Form Enquiry'}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-950/40 hover:shadow-orange-500/30 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>{lang === 'mr' ? 'कॉल करा' : 'Call'}</span>
            </motion.a>
          </div>

          {/* Mobile Quick Action Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.a
              whileTap={{ scale: 0.9 }}
              href={getWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md shadow-green-950/50 active:scale-95 transition-transform"
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-orange-600 text-white hover:bg-orange-500 transition shadow-md shadow-orange-950/50 active:scale-95"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#161c22] text-orange-400 hover:text-white border border-orange-500/40 transition active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-[#0c0f12]/98 backdrop-blur-lg border-b border-orange-500/30 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-2 pt-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      activeSection === link.id
                        ? 'bg-orange-950/80 text-orange-400 border border-orange-500/40'
                        : 'text-gray-200 hover:bg-[#1a2026] hover:text-orange-400'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="pt-3 border-t border-orange-900/40 flex flex-col gap-2">
                <a
                  href={getWhatsAppLink(defaultWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-extrabold rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white flex items-center justify-center gap-2 shadow-md shadow-green-950/60 active:scale-98 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'mr' ? 'WhatsApp वर थेट चौकशी करा' : 'WhatsApp Enquiry'}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold rounded-xl bg-[#161c22] text-orange-400 border border-orange-500/40 active:scale-98 transition-transform"
                >
                  {lang === 'mr' ? 'ऑनलाइन दर / कोटेशन फॉर्म' : 'Online Price Enquiry'}
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 text-center text-sm font-bold rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-center gap-2 shadow-md shadow-orange-950/60 active:scale-98 transition-transform"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
