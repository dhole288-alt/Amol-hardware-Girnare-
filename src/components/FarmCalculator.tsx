import React, { useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/products';

interface FarmCalculatorProps {
  lang: 'mr' | 'en';
}

interface CropPreset {
  id: string;
  name: string;
  marathiName: string;
  rowSpacingFeet: number; // Row-to-row spacing in feet
  dripperSpacingCm: number;
  dischargeLph: number;
}

const CROPS: CropPreset[] = [
  { id: 'grapes', name: 'Grapes (द्राक्ष बाग)', marathiName: 'द्राक्ष बाग', rowSpacingFeet: 9, dripperSpacingCm: 40, dischargeLph: 4 },
  { id: 'onion', name: 'Onion (कांदा पीक)', marathiName: 'कांदा पीक', rowSpacingFeet: 4, dripperSpacingCm: 30, dischargeLph: 2 },
  { id: 'pomegranate', name: 'Pomegranate (डाळिंब)', marathiName: 'डाळिंब', rowSpacingFeet: 12, dripperSpacingCm: 50, dischargeLph: 8 },
  { id: 'tomato', name: 'Tomato / Vegetables (भाजीपाला)', marathiName: 'टोमॅटो / भाजीपाला', rowSpacingFeet: 4.5, dripperSpacingCm: 30, dischargeLph: 2.5 },
  { id: 'sugarcane', name: 'Sugarcane (ऊस)', marathiName: 'ऊस शेती', rowSpacingFeet: 5, dripperSpacingCm: 40, dischargeLph: 4 },
];

export const FarmCalculator: React.FC<FarmCalculatorProps> = ({ lang }) => {
  const [areaUnit, setAreaUnit] = useState<'acre' | 'guntha'>('acre');
  const [areaValue, setAreaValue] = useState<number>(1);
  const [selectedCropId, setSelectedCropId] = useState<string>('grapes');

  const selectedCrop = CROPS.find((c) => c.id === selectedCropId) || CROPS[0];

  // Calculations
  // 1 Acre = 43,560 sq ft. 1 Guntha = 1,089 sq ft.
  const totalSqFt = areaUnit === 'acre' ? areaValue * 43560 : areaValue * 1089;
  
  // Total lateral length (ft) approx = totalSqFt / rowSpacing
  const lateralLengthFeet = Math.round(totalSqFt / selectedCrop.rowSpacingFeet);
  const lateralLengthMeters = Math.round(lateralLengthFeet * 0.3048);
  const bundlesCount = Math.ceil(lateralLengthMeters / 400); // 400m per standard bundle
  const estimatedSubMainLengthMeters = Math.round(Math.sqrt(totalSqFt) * 0.3048 * 1.2);
  const recommendedFilter = areaUnit === 'acre' && areaValue >= 2 ? '3" (75mm) Disc Filter' : '2" (50mm) Disc / Screen Filter';
  const recommendedSubMain = areaUnit === 'acre' && areaValue >= 2 ? '75mm (2.5") or 90mm PVC / HDPE' : '63mm (2") or 50mm PVC / HDPE';

  const handleShareOnWhatsApp = () => {
    const areaText = `${areaValue} ${areaUnit === 'acre' ? (lang === 'mr' ? 'एकर' : 'Acre') : (lang === 'mr' ? 'गुंठा' : 'Guntha')}`;
    const text = 
      `*🚜 ठिबक सिंचन अंदाज / Drip Estimate Request*\n\n` +
      `• *शेतकरी / जागा:* ${areaText}\n` +
      `• *पीक:* ${selectedCrop.name} (${selectedCrop.marathiName})\n` +
      `• *अपेक्षित लॅटरल लांबी:* ~${lateralLengthMeters} मीटर (${bundlesCount} बंडल्स)\n` +
      `• *शिफारस केलेला फिल्टर:* ${recommendedFilter}\n` +
      `• *सब-मेन पाईप:* ${recommendedSubMain}\n\n` +
      `कृपया यानुसार आवश्यक साहित्य व दरपत्रक द्यावे. - Amol Hardware Girnare`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#080c0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in Kesari */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'mr' ? 'स्मार्ट कृषी कॅल्क्युलेटर' : 'Smart Farm Calculator'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'mr' ? 'ठिबक सिंचन व पाईप साहित्य अंदाज' : 'Instant Drip Irrigation Estimator'}
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm">
            {lang === 'mr'
              ? 'तुमच्या शेताचे क्षेत्रफळ आणि पीक निवडून अंदाजे किती लॅटरल बंडल, पाईप आणि फिल्टर लागेल ते लगेच तपासा.'
              : 'Select your land acreage and crop type to get an instant calculation of drip lateral tubing, sub-main pipes, and filtration units.'}
          </p>
        </div>

        {/* Calculator Main Box in Kesari Theme */}
        <div className="max-w-4xl mx-auto bg-[#11161b] border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (Left Column) */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Unit Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-orange-300 mb-2">
                  {lang === 'mr' ? '१. क्षेत्रफळ एकक निवडा:' : '1. Select Area Unit:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAreaUnit('acre')}
                    className={`py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                      areaUnit === 'acre'
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                        : 'bg-[#182026] text-gray-400 border border-gray-700 hover:text-white'
                    }`}
                  >
                    {lang === 'mr' ? 'एकर (Acre)' : 'Acres'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAreaUnit('guntha')}
                    className={`py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                      areaUnit === 'guntha'
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                        : 'bg-[#182026] text-gray-400 border border-gray-700 hover:text-white'
                    }`}
                  >
                    {lang === 'mr' ? 'गुंठा (Guntha)' : 'Gunthas'}
                  </button>
                </div>
              </div>

              {/* Area Slider & Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-300">
                    {lang === 'mr' ? '२. क्षेत्रफळ टाका:' : '2. Enter Land Area:'}
                  </label>
                  <span className="text-sm font-extrabold text-orange-400">
                    {areaValue} {areaUnit === 'acre' ? (lang === 'mr' ? 'एकर' : 'Acre(s)') : (lang === 'mr' ? 'गुंठे' : 'Guntha(s)')}
                  </span>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max={areaUnit === 'acre' ? 10 : 40}
                  step={areaUnit === 'acre' ? 0.5 : 1}
                  value={areaValue}
                  onChange={(e) => setAreaValue(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              {/* Crop Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-orange-300 mb-2">
                  {lang === 'mr' ? '३. पीक निवडा:' : '3. Select Target Crop:'}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {CROPS.map((crop) => (
                    <button
                      key={crop.id}
                      type="button"
                      onClick={() => setSelectedCropId(crop.id)}
                      className={`px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold transition flex items-center justify-between border cursor-pointer ${
                        selectedCropId === crop.id
                          ? 'bg-orange-950/80 border-orange-500 text-white shadow-sm'
                          : 'bg-[#182026] border-gray-800 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <span>{crop.name}</span>
                      <span className="text-[11px] text-orange-400/90 font-semibold">
                        {crop.rowSpacingFeet} ft spacing
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculated Breakdown Results (Right Column) */}
            <div className="md:col-span-6 bg-[#0c1014] p-6 rounded-2xl border border-orange-500/30 space-y-5">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <span className="text-xs uppercase tracking-wider text-orange-400 font-extrabold">
                  Estimated Requirement
                </span>
                <span className="text-xs text-gray-400">
                  {areaValue} {areaUnit} • {selectedCrop.name}
                </span>
              </div>

              {/* Metric 1: Drip Lateral in Kesari */}
              <div className="p-3.5 rounded-xl bg-[#141920] border border-gray-800 space-y-1">
                <div className="text-xs text-gray-400">
                  {lang === 'mr' ? 'अंदाजे ठिबक लॅटरल पाईप:' : 'Estimated Drip Lateral Tube:'}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white flex items-baseline gap-2">
                  <span>{lateralLengthMeters.toLocaleString()} Meters</span>
                  <span className="text-xs font-bold text-orange-400">
                    (~{bundlesCount} बंडल्स / 400m rolls)
                  </span>
                </div>
              </div>

              {/* Metric 2: Sub-Main Pipes */}
              <div className="p-3.5 rounded-xl bg-[#141920] border border-gray-800 space-y-1">
                <div className="text-xs text-gray-400">
                  {lang === 'mr' ? 'शिफारस सब-मेन PVC / HDPE पाईप:' : 'Recommended Sub-Main Pipeline:'}
                </div>
                <div className="text-sm sm:text-base font-bold text-orange-300">
                  {recommendedSubMain} (~{estimatedSubMainLengthMeters}m)
                </div>
              </div>

              {/* Metric 3: Filtration */}
              <div className="p-3.5 rounded-xl bg-[#141920] border border-gray-800 space-y-1">
                <div className="text-xs text-gray-400">
                  {lang === 'mr' ? 'शिफारस केलेले फिल्टर युनिट:' : 'Recommended Filter Unit:'}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {recommendedFilter}
                </div>
              </div>

              {/* Send Estimate on WhatsApp */}
              <button
                onClick={handleShareOnWhatsApp}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-green-950/60 transition cursor-pointer border border-green-400/40"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>{lang === 'mr' ? 'हा अंदाज WhatsApp वर पाठवा (Get Quote)' : 'Send Estimate to Amol Hardware'}</span>
              </button>

              <p className="text-[10px] text-gray-400 text-center">
                * हा अंदाज सर्वसाधारण जमिनीच्या रचनेवर आधारित आहे. अचूक कोटेशनसाठी राहुल सोमनाथ उमाप यांच्याशी संपर्क साधा.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
