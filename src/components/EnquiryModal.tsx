import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  lang: 'mr' | 'en';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  lang,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(initialProduct || 'General Hardware / Irrigation Enquiry');
  const [village, setVillage] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = 
      `*🛒 उत्पादन दर / ऑर्डर चौकशी - Amol Hardware*\n\n` +
      `• *नाव:* ${name}\n` +
      `• *फोन:* ${phone}\n` +
      `• *गाव / ठिकाण:* ${village || 'Girnare / Dugaon'}\n` +
      `• *उत्पादन:* ${product}\n` +
      `• *तपशील / गरज:* ${note || 'कृपया दर व उपलब्धता सांगावी.'}`;

    window.open(getWhatsAppLink(message), '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#11161b] border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#182026] text-gray-400 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-orange-950 border border-orange-500 text-orange-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              {lang === 'mr' ? 'चौकशी पाठवली आहे!' : 'Enquiry Sent!'}
            </h3>
            <p className="text-xs text-gray-300">
              Opening WhatsApp chat with Amol Hardware...
            </p>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-950/80 border border-orange-500/30 text-orange-400 text-[11px] font-extrabold">
                <Sparkles className="w-3 h-3" />
                <span>Fast Enquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {lang === 'mr' ? 'उत्पादन चौकशी व दरपत्रक' : 'Product & Pricing Enquiry'}
              </h3>
              <p className="text-xs text-gray-400">
                Amol Hardware • Rahul Somnath Umap (Girnare, Dugaon)
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-orange-300 uppercase mb-1.5">
                  {lang === 'mr' ? 'तुमचे नाव (Your Name)*' : 'Your Name*'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#182026] border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-300 uppercase mb-1.5">
                  {lang === 'mr' ? 'मोबाईल नंबर (Mobile Number)*' : 'Mobile Number*'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 86056 26993"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#182026] border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-300 uppercase mb-1.5">
                  {lang === 'mr' ? 'निवडलेले उत्पादन (Product)' : 'Selected Product'}
                </label>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#182026] border border-gray-700 text-orange-300 font-semibold text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-300 uppercase mb-1.5">
                  {lang === 'mr' ? 'गाव / परिसर (Village / Location)' : 'Village / Location'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Girnare, Dugaon, Nashik"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#182026] border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-300 uppercase mb-1.5">
                  {lang === 'mr' ? 'तपशील किंवा प्रश्न (Note/Quantity)' : 'Note / Quantity required'}
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2 bundles required, need price quote with delivery..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#182026] border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-950/60 cursor-pointer border border-green-400/40 transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>{lang === 'mr' ? 'WhatsApp वर चौकशी पाठवा' : 'Send Enquiry via WhatsApp'}</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
