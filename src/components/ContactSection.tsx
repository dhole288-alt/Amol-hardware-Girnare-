import React, { useState } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';
import { Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  lang: 'mr' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productRequired: 'Drip Irrigation Systems (ठिबक सिंचन)',
    village: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted WhatsApp inquiry directly
    const text = 
      `*📩 नवीन चौकशी / New Enquiry - Amol Hardware*\n\n` +
      `• *नाव (Name):* ${formData.name}\n` +
      `• *मोबाईल (Phone):* ${formData.phone}\n` +
      `• *गाव / ठिकाण (Location):* ${formData.village || 'Girnare/Dugaon'}\n` +
      `• *साहित्य (Product Required):* ${formData.productRequired}\n` +
      `• *मेसेज / गरज (Message):* ${formData.message || 'दर व माहिती हवी आहे.'}`;

    window.open(getWhatsAppLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title in Kesari */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'थेट चौकशी व संपर्क' : 'Contact & Enquiry'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'mr' ? 'दरपत्रक व साहित्यासाठी संपर्क करा' : 'Get in Touch for Pricing & Orders'}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            {lang === 'mr'
              ? 'खालील फॉर्म भरा किंवा थेट फोन अथवा WhatsApp द्वारे संपर्क साधा. आम्ही लगेच उत्तर देऊ.'
              : 'Fill out the form below or connect via direct phone or WhatsApp for quick pricing and availability.'}
          </p>
        </div>

        {/* Contact Form & Direct Contacts Grid in Kesari Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Enquiry Card */}
            <a
              href={getWhatsAppLink("Hello Amol Hardware (Rahul Umap), मला साहित्याचे दर व माहिती हवी आहे.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-950/70 via-[#11161b] to-[#11161b] border border-green-500/50 hover:border-green-400 transition-all duration-200 group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-green-950/90 border border-green-500/50 text-green-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <div className="text-xs text-green-400 font-bold uppercase tracking-wide flex items-center gap-2">
                    <span>{lang === 'mr' ? 'WhatsApp वर थेट बोला' : 'Direct WhatsApp Chat'}</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px]">Online</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-green-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {lang === 'mr' ? 'त्वरित मेसेज पाठवून दर जाणून घ्या' : 'Instant chat for pricing & photos'}
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="block p-6 rounded-2xl bg-[#11161b] border border-gray-800 hover:border-orange-500/60 transition-all duration-200 group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-wide">
                    {lang === 'mr' ? 'थेट फोनवर बोला' : 'Direct Call'}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    संचालक: {BUSINESS_INFO.owner}
                  </div>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#11161b] border border-gray-800 space-y-3 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-wide">
                    {lang === 'mr' ? 'पत्ता' : 'Shop Location'}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marathi Guidance Promise Card in Kesari */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/60 to-[#11161b] border border-orange-500/40 space-y-2 shadow-lg">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-extrabold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>शेतकऱ्यांसाठी मोफत सल्ला</span>
              </div>
              <p className="text-xs text-gray-300 font-marathi leading-relaxed">
                तुमच्या विहिरीचे किंवा बोअरचे पाणी, मोटरची क्षमता आणि जमिनीचा उतार यानुसार योग्य पाईप व ठिबक सिस्टीमचे मार्गदर्शन विनामूल्य केले जाईल.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-[#11161b] border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-950 border border-orange-500/60 text-orange-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {lang === 'mr' ? 'चौकशी पाठवली आहे!' : 'Enquiry Received!'}
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  {lang === 'mr'
                    ? 'तुमची चौकशी अमोल हार्डवेअर (राहुल उमाप) यांच्याकडे पाठवली गेली आहे. आम्ही लवकरच संपर्क करू.'
                    : 'Your enquiry has been formatted and forwarded to Amol Hardware. We will respond promptly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs cursor-pointer shadow-md"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-800 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {lang === 'mr' ? 'ऑनलाइन दर / ऑर्डर चौकशी' : 'Product & Pricing Enquiry'}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill the form below to receive immediate quote details on WhatsApp.
                  </p>
                </div>

                {/* Name & Mobile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                      {lang === 'mr' ? 'तुमचे नाव (Name)*' : 'Your Name*'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil / Plumber Sachin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#182026] border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                      {lang === 'mr' ? 'मोबाईल नंबर (Mobile Number)*' : 'Mobile Number*'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 86056 26993"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#182026] border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Product Required Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                    {lang === 'mr' ? 'आवश्यक उत्पादन (Product Required)' : 'Product Category Needed'}
                  </label>
                  <select
                    value={formData.productRequired}
                    onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#182026] border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="Drip Irrigation Systems (ठिबक सिंचन साहित्य)">Drip Irrigation Systems (ठिबक सिंचन साहित्य)</option>
                    <option value="PVC & HDPE Pipes (PVC व HDPE पाईप्स)">PVC & HDPE Pipes (PVC व HDPE पाईप्स)</option>
                    <option value="Pipe Fittings & Valves (फिटिंग्ज व व्हॉल्व्ह)">Pipe Fittings & Valves (फिटिंग्ज व व्हॉल्व्ह)</option>
                    <option value="Sprinkler Systems (तुषार सिंचन / स्प्रिंकलर)">Sprinkler Systems (तुषार सिंचन / स्प्रिंकलर)</option>
                    <option value="Plumbing & Taps (प्लंबिंग व नळ साहित्य)">Plumbing & Taps (प्लंबिंग व नळ साहित्य)</option>
                    <option value="Nuts, Bolts, Tools & Hardware (नट-बोल्ट, टूल्स व हार्डवेअर)">Nuts, Bolts, Tools & Hardware (नट-बोल्ट, टूल्स व हार्डवेअर)</option>
                    <option value="Water Pumps & Filters (पाण्याचे पंप व फिल्टर्स)">Water Pumps & Filters (पाण्याचे पंप व फिल्टर्स)</option>
                    <option value="Bulk Project / Farm Estimation (मोठी शेती किंवा बांधकाम ऑर्डर)">Bulk Project / Farm Estimation (मोठी शेती किंवा बांधकाम ऑर्डर)</option>
                  </select>
                </div>

                {/* Village / Location */}
                <div>
                  <label className="block text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                    {lang === 'mr' ? 'गाव / परिसर (Village / Location)' : 'Village / Location'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Girnare, Dugaon, Gangapur, Trimbak Road"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#182026] border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                    {lang === 'mr' ? 'तुमचा संदेश किंवा साहित्याची यादी (Message)' : 'Message / Details of Requirement'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need 10 rolls of 16mm drip lateral and 2 inch PVC pipes for 2 acre grapes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#182026] border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Submit Button in WhatsApp Green */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold rounded-xl text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-green-950/60 transition cursor-pointer border border-green-400/40 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 text-white animate-bounce" />
                  <span>{lang === 'mr' ? 'WhatsApp वर चौकशी पाठवा' : 'Send Enquiry via WhatsApp'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
