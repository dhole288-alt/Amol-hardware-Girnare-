import React from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MapPin, Navigation, Phone, ExternalLink, Clock, Compass, Fuel, CheckCircle } from 'lucide-react';

interface LocationSectionProps {
  lang: 'mr' | 'en';
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  return (
    <section id="location" className="py-20 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header in Kesari */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'दुकानाचा पत्ता व रस्ता' : 'Store Location & Directions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Visit Amol Hardware
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            {lang === 'mr'
              ? 'गिरणारे, दुगाव - HP पेट्रोल पंपाच्या अगदी जवळ, मुख्य रस्त्यावर.'
              : 'Conveniently situated on the main route in Girnare, next to the HP Petrol Pump.'}
          </p>
        </div>

        {/* Location Layout Box in Kesari Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-[#11161b] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              
              {/* Store Title */}
              <div className="border-b border-gray-800 pb-5">
                <span className="text-[11px] uppercase tracking-wider text-orange-400 font-bold">
                  Official Store Address
                </span>
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

              {/* Working Hours & Service Areas */}
              <div className="space-y-3 text-xs text-gray-300">
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
            <div className="space-y-3 pt-4 border-t border-gray-800">
              {/* Get Directions Button */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/60 transition"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'mr' ? 'Google Maps वर रस्ता पहा' : 'Get Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 bg-[#182026] hover:bg-[#202932] text-orange-400 hover:text-white border border-orange-500/40 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Visual Map Card / Interactive Route Preview */}
          <div className="lg:col-span-7 bg-[#11161b] border border-gray-800 rounded-3xl overflow-hidden shadow-xl flex flex-col">
            {/* Map Top Header */}
            <div className="bg-[#182026] px-6 py-3.5 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span>Girnare - Dugaon Location Map</span>
              </div>
              <span className="text-[11px] text-gray-400">Maharashtra – 422203</span>
            </div>

            {/* Simulated Clean Styled Interactive Map Frame */}
            <div className="relative flex-1 min-h-[350px] bg-[#0c1014] flex items-center justify-center p-6 text-center">
              {/* Map Graphic Background */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3a2e22_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Visual Map Elements */}
              <div className="relative z-10 max-w-md space-y-4">
                <div className="inline-flex p-4 rounded-2xl bg-[#182026] border border-orange-500/50 shadow-2xl animate-bounce">
                  <MapPin className="w-10 h-10 text-orange-400" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white font-heading">
                    AMOL HARDWARE
                  </h4>
                  <p className="text-xs text-orange-400 font-bold">
                    Shop No. 1, Near HP Petrol Pump, Girnare, Dugaon
                  </p>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Direct access from the main highway road with ample parking space for loading pipes, drip bundles, and hardware trucks.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-xs shadow-md transition"
                  >
                    <span>Open in Google Maps Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
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
