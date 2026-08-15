import React from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/products';
import { CheckCircle2, Droplets, Sparkles, ArrowRight, ShieldCheck, Zap, Phone, Sprout } from 'lucide-react';

interface DripIrrigationFeatureProps {
  lang: 'mr' | 'en';
  onOpenEnquiry: (productName?: string) => void;
}

export const DripIrrigationFeature: React.FC<DripIrrigationFeatureProps> = ({ lang, onOpenEnquiry }) => {
  const dripFeatures = [
    {
      title: "Drip Pipes (लॅटरल पाईप्स)",
      desc: "16mm / 12mm inline & online drip lateral rolls with high UV durability and precision dripper spacing.",
      icon: Droplets,
    },
    {
      title: "Connectors & Fittings (फिटिंग्ज)",
      desc: "Leak-proof start connectors, joiners, rubber grommets, take-off valves, and end-stops.",
      icon: CheckCircle2,
    },
    {
      title: "Filters (फिल्टर्स)",
      desc: "Heavy-duty 2\" & 3\" Disc and Screen filters to protect emitters from clogging by sand and algae.",
      icon: ShieldCheck,
    },
    {
      title: "Valves & Controls (व्हॉल्व्ह्ज)",
      desc: "Ball valves, air release valves, pressure relief valves, and flush valves for uniform field pressure.",
      icon: Zap,
    },
    {
      title: "Sprinklers (तुषार सिंचन)",
      desc: "Micro, mini, and overhead impact sprinklers and rain guns for vegetable, onion, and grain crops.",
      icon: Sprout,
    },
    {
      title: "Irrigation Accessories (खत यंत्रणा)",
      desc: "Venturi fertilizer injectors, pressure gauges, punch tools, and micro-tubes for accurate fertigation.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="drip-irrigation" className="py-24 bg-[#080b0e] relative overflow-hidden">
      {/* Ambient background Kesari glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Agricultural Field with Drip Pipes in Kesari Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/40 shadow-2xl shadow-orange-950/60 group">
              <img
                src={ASSET_IMAGES.dripFieldCropsImg}
                alt="Precision drip irrigation system in lush green farm with water droplets nourishing healthy crops"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0e] via-transparent to-black/30" />

              {/* Floating Highlight Card 1: Water Conservation in Kesari */}
              <div className="absolute top-6 left-6 max-w-xs glass-panel p-3.5 rounded-2xl border border-orange-500/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                    <Droplets className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">६०% पाण्याची बचत</div>
                    <div className="text-[11px] text-orange-200/90">Up to 60% Water & Fertilizer Efficiency</div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 2: Maximum Crop Yield in Kesari */}
              <div className="absolute bottom-6 right-6 max-w-xs glass-panel p-3.5 rounded-2xl border border-orange-500/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">हिरवीगार समृद्ध शेती</div>
                    <div className="text-[11px] text-orange-200/90">भरघोस पीक वाढ व उत्कृष्ट उत्पादन</div>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 px-3.5 py-1.5 rounded-xl bg-black/85 border border-orange-500/40 text-xs font-extrabold text-orange-300 backdrop-blur-md">
                🌾 गिरणारे • दुगाव शेती पट्टा
              </div>
            </div>
          </div>

          {/* RIGHT: Complete Drip Irrigation Solutions Content */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
                <Droplets className="w-3.5 h-3.5" />
                <span>Modern Agriculture Irrigation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                Complete Drip Irrigation Solutions
              </h2>

              <p className="text-base sm:text-lg text-orange-300 font-marathi font-bold leading-relaxed">
                “शेतीसाठी आधुनिक आणि efficient irrigation solutions — Drip Pipes, Fittings, Filters, Valves, Sprinklers आणि आवश्यक accessories उपलब्ध.”
              </p>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you have an orchard of grapes or pomegranate, open field onion crops, polyhouse vegetables, or cash crops, Amol Hardware supplies complete, durable, and cost-effective micro-irrigation hardware tailored to your field acreage.
              </p>
            </div>

            {/* Checklist Grid in Kesari styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {dripFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#11161b] border border-gray-800 hover:border-orange-500/50 transition-colors flex items-start gap-3 shadow-md"
                  >
                    <div className="p-1.5 rounded-xl bg-orange-950/80 text-orange-400 shrink-0 mt-0.5 border border-orange-500/30">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <span className="text-orange-400 font-extrabold">✓</span> {item.title}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-2">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTAs with Kesari styling */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry('Complete Drip Irrigation System (संपूर्ण ठिबक सिंचन प्रणाली)')}
                className="px-7 py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-orange-950/60 hover:shadow-orange-600/40 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{lang === 'mr' ? 'ठिबक सिंचन चौकशी करा' : 'Enquire Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-[#161c22] hover:bg-orange-950/80 text-orange-300 hover:text-white border border-orange-500/40 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
