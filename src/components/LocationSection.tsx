import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MapPin, Navigation, Phone, ExternalLink, Clock, Compass, Fuel, CheckCircle, Copy, Check } from 'lucide-react';

interface LocationSectionProps {
  lang: 'mr' | 'en';
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.coordinatesDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header in Kesari */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'दुकानाचा पत्ता, GPS आणि थेट रस्ता' : 'Store Location & Live Navigation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Visit Amol Hardware
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            {lang === 'mr'
              ? 'गिरणारे, दुगाव - HP पेट्रोल पंपाच्या अगदी जवळ, मुख्य रस्त्यावर. थेट नेव्हिगेशनसाठी खालील बटणावर क्लिक करा.'
              : 'Conveniently situated on the main route in Girnare, next to the HP Petrol Pump. Click below for live GPS directions.'}
          </p>
        </div>

        {/* Location Layout Box in Kesari Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-[#11161b] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-5">
              
              {/* Store Title & GPS Badge */}
              <div className="border-b border-gray-800 pb-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-orange-400 font-bold">
                    Official Store Location
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-green-950/90 border border-green-500/40 text-green-400 text-[10px] font-bold">
                    GPS Verified
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white font-heading mt-1">
                  Amol Hardware
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Owner: <span className="text-gray-200 font-semibold">{BUSINESS_INFO.owner}</span>
                </p>
              </div>

              {/* Exact Address Highlight in Kesari */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0b0e12] border border-orange-500/40">
                <div className="p-2.5 rounded-xl bg-orange-950 text-orange-400 shrink-0 border border-orange-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-orange-400 font-bold uppercase">
                    {lang === 'mr' ? 'पत्ता:' : 'Full Address:'}
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <Fuel className="w-3.5 h-3.5 text-amber-400" />
                    <span>Landmark: Near HP Petrol Pump</span>
                  </div>
                </div>
              </div>

              {/* GPS Coordinates Display & Copy Button */}
              <div className="p-3.5 rounded-2xl bg-[#0b0e12] border border-gray-800 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400">GPS Coordinates (अक्षांश / रेखांश):</span>
                  <p className="text-xs font-mono font-bold text-orange-300">
                    {BUSINESS_INFO.coordinatesDisplay}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCoordinates}
                  className="px-3 py-1.5 rounded-xl bg-[#182026] hover:bg-[#222c35] border border-gray-700 text-gray-200 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  title="Copy GPS coordinates"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-orange-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Working Hours & Service Areas */}
              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <span><strong>Store Timings:</strong> 7:30 AM – 8:30 PM (All 7 Days)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span><strong>Serving Areas:</strong> Girnare, Dugaon, Gangapur, Trimbak Road & Nashik Rural</span>
                </div>
              </div>

            </div>

            {/* Action Buttons in Kesari */}
            <div className="space-y-3 pt-3 border-t border-gray-800">
              {/* Live Track Navigation Button */}
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/60 transition transform active:scale-95"
              >
                <Navigation className="w-4 h-4 text-white animate-pulse" />
                <span>{lang === 'mr' ? '📍 Track Now - थेट रस्ता नेव्हिगेट करा' : '📍 Track Now - Start Live Navigation'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 bg-[#182026] hover:bg-[#202932] text-orange-400 hover:text-white border border-orange-500/40 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Visual Map Card / Real Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#11161b] border border-gray-800 rounded-3xl overflow-hidden shadow-xl flex flex-col">
            {/* Map Top Header */}
            <div className="bg-[#182026] px-6 py-3.5 border-b border-gray-800 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                <span>Amol Hardware • 20.0705053, 73.6790837</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-bold transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in App</span>
              </a>
            </div>

            {/* Embedded Live Google Maps Iframe */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[400px] w-full bg-[#0c1014]">
              <iframe
                title="Amol Hardware Girnare Live Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[360px] sm:min-h-[400px] border-0 filter brightness-90 contrast-110"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Quick Action Overlay at Bottom of Map */}
              <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto z-10">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/90 hover:bg-black border border-orange-500/80 text-white font-extrabold text-xs shadow-2xl backdrop-blur-md flex items-center gap-2 transition"
                >
                  <Navigation className="w-4 h-4 text-orange-400 animate-bounce" />
                  <span>Start Turn-by-Turn GPS Tracking</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Map Bottom Features Strip */}
            <div className="p-4 bg-[#080c0f] border-t border-gray-800 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-400 text-center">
              <div>🚗 Easy Truck / Tempo Parking</div>
              <div>⚡ Fast Loading & Pickup</div>
              <div className="col-span-2 sm:col-span-1">📍 Landmark HP Petrol Pump</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
