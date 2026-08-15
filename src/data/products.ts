import { Product, Category } from '../types';

import heroBg from '../assets/images/hardware_shop_hero_1786803309178.jpg';
import hardwareShopHeroImg from '../assets/images/hardware_shop_hero_1786803309178.jpg';
import storeCounterImg from '../assets/images/store_counter_hardware_1786804011939.jpg';
import pvcPipesStackImg from '../assets/images/pvc_hdpe_pipes_stack_1786804050735.jpg';
import plumbingFittingsImg from '../assets/images/plumbing_fittings_valves_1786803979833.jpg';
import dripCoilsImg from '../assets/images/drip_coils_accessories_1786803995244.jpg';
import dripFieldImg from '../assets/images/farmers_working_farm_1786801986393.jpg';
import pvcHdpeImg from '../assets/images/pvc_hdpe_pipes_stack_1786804050735.jpg';
import hardwareToolsImg from '../assets/images/hardware_tools_bolts_1786720233572.jpg';
import sprinklerImg from '../assets/images/sprinkler_system_farm_1786720250561.jpg';
import pumpValvesImg from '../assets/images/water_pump_valves_1786720268343.jpg';
import farmerCarryingPipeImg from '../assets/images/farmer_carrying_pipe_1786801957172.jpg';
import womanFarmerImg from '../assets/images/woman_farmer_field_1786801972423.jpg';
import dripFieldCropsImg from '../assets/images/drip_field_irrigation_crops_1786804120840.jpg';
import farmersWorkingFarmImg from '../assets/images/farmers_working_farm_1786801986393.jpg';
import lushGreenFarmlandImg from '../assets/images/hero_farm_farmers_1786801997582.jpg';

export const ASSET_IMAGES = {
  heroBg,
  hardwareShopHeroImg,
  storeCounterImg,
  pvcPipesStackImg,
  plumbingFittingsImg,
  dripCoilsImg,
  dripFieldImg,
  dripFieldCropsImg,
  pvcHdpeImg,
  hardwareToolsImg,
  sprinklerImg,
  pumpValvesImg,
  farmerCarryingPipeImg,
  womanFarmerImg,
  farmersWorkingFarmImg,
  lushGreenFarmlandImg,
};

export const BUSINESS_INFO = {
  name: "AMOL HARDWARE",
  tagline: "Hardware • Pipes • Drip Irrigation • Agricultural Solutions",
  marathiTagline: "आपल्या घरापासून शेतीपर्यंत आवश्यक Hardware आणि Irrigation Products एकाच ठिकाणी.",
  owner: "Rahul Somnath Umap",
  phone: "86056 26993",
  phoneRaw: "8605626993",
  phoneDisplay: "+91 86056 26993",
  whatsappNumber: "918605626993",
  address: "Shop No. 1, Near HP Petrol Pump, Girnare, Dugaon, Maharashtra – 422203",
  locationShort: "Girnare, Dugaon, Nashik - 422203",
  googleMapsUrl: "https://maps.google.com/?q=Girnare+Dugaon+Maharashtra+422203",
  workingHours: "Monday – Sunday: 7:30 AM – 8:30 PM",
};

/**
 * Universal WhatsApp Link generator that works reliably on Mobile Apps and Web
 */
export const getWhatsAppLink = (messageText: string = '', customPhone: string = BUSINESS_INFO.whatsappNumber): string => {
  const cleanPhone = customPhone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(messageText);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
};

export const CATEGORIES: Category[] = [
  {
    id: "hardware",
    name: "Hardware Products",
    marathiName: "हार्डवेअर प्रॉडक्ट्स",
    description: "Wide assortment of heavy-duty locks, fasteners, ironmongery, wire nails, wire mesh, and general hardware.",
    marathiDescription: "सर्व प्रकारचे कुलूप, नट-बोल्ट, खिळे, वायर, जाळी व आवश्यक हार्डवेअर साहित्य.",
    image: hardwareToolsImg,
    itemCount: "150+ Items",
    iconName: "Hammer",
  },
  {
    id: "pipes",
    name: "PVC & HDPE Pipes",
    marathiName: "PVC आणि HDPE पाईप्स",
    description: "Agricultural & domestic pressure pipes, ASTM PVC, CPVC hot/cold water pipes, and HDPE coil pipes.",
    marathiDescription: "शेतीसाठी व घरासाठी हेवी ड्युटी PVC, CPVC, UPVC व काळे HDPE कॉईल पाईप्स.",
    image: pvcPipesStackImg,
    itemCount: "40+ Sizes",
    iconName: "Cylinder",
  },
  {
    id: "fittings",
    name: "Pipe Fittings",
    marathiName: "पाईप फिटिंग्ज",
    description: "Elbows, tees, couplers, reducers, unions, tank connectors, MTA/FTA, and brass threaded joints.",
    marathiDescription: "एल्बो, टी, युनियन, सॉकेट, रिड्यूसर आणि टाकीचे कनेक्शन फिटिंग्ज.",
    image: plumbingFittingsImg,
    itemCount: "80+ Types",
    iconName: "GitMerge",
  },
  {
    id: "drip-irrigation",
    name: "Drip Irrigation",
    marathiName: "ठिबक सिंचन प्रणाली",
    description: "Complete drip systems: 16mm & 12mm inline/online lateral pipes, drippers, joiners, and end caps.",
    marathiDescription: "१६ मि.मी. व १२ मि.मी. इनलाईन/ऑनलाईन लॅटरल पाईप्स, ड्रीपर्स आणि ठिबक ऍक्सेसरीज.",
    image: dripCoilsImg,
    itemCount: "Complete Kits",
    iconName: "Droplets",
  },
  {
    id: "sprinklers",
    name: "Sprinkler Systems",
    marathiName: "तुषार सिंचन (Sprinklers)",
    description: "Micro-sprinklers, mini sprinklers, overhead impact sprinklers, HDPE sprinkler pipes, and rainguns.",
    marathiDescription: "मायक्रो व मिनी स्प्रिंकलर, इम्पॅक्ट स्प्रिंकलर व रेनगन सिस्टीम्स.",
    image: sprinklerImg,
    itemCount: "All Flow Rates",
    iconName: "CloudRain",
  },
  {
    id: "agriculture",
    name: "Agriculture Accessories",
    marathiName: "कृषी व सिंचन साहित्य",
    description: "Screen & disc filters, venturi fertilizer injectors, pressure relief valves, air valves, and suction pipes.",
    marathiDescription: "डिस्क व स्क्रीन फिल्टर्स, व्हेंचुरी खत यंत्रणा, एअर व्हॉल्व्ह व सक्शन पाईप्स.",
    image: pumpValvesImg,
    itemCount: "60+ Accessories",
    iconName: "Sprout",
  },
  {
    id: "plumbing",
    name: "Plumbing Products",
    marathiName: "प्लंबिंग मटेरियल्स",
    description: "Brass bib cocks, PVC ball valves, CP bathroom taps, solvent cements, Teflon tapes, and waste pipes.",
    marathiDescription: "पितळी व प्लास्टिक नळ, बॉल व्हॉल्व्ह, सॉल्व्हंट सिमेंट, टेफ्लॉन टेप आणि प्लंबिंग फिटिंग.",
    image: plumbingFittingsImg,
    itemCount: "Complete Range",
    iconName: "Wrench",
  },
  {
    id: "tools",
    name: "Tools & Construction Hardware",
    marathiName: "टूल्स व बांधकाम साहित्य",
    description: "Pipe wrenches, spanners, pliers, screw drivers, cutting blades, measuring tapes, and binding wire.",
    marathiDescription: "पाईप पाना, पाना संच, कटर, मापन टेप, स्क्रू ड्रायव्हर आणि बांधकाम साहित्य.",
    image: hardwareToolsImg,
    itemCount: "Professional Grade",
    iconName: "Tool",
  },
];

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: "prod-drip-lateral",
    name: "Agricultural Drip Lateral Pipes (16mm / 12mm)",
    marathiName: "१६mm / १२mm ठिबक लॅटरल पाईप (इनलाईन / ऑनलाईन)",
    category: "drip-irrigation",
    description: "Virgin polymer high-grade drip lateral tubes with uniform discharge rate, UV stabilization for long outdoor lifespan.",
    marathiDescription: "अतिशय टिकाऊ, ऊन व खतांच्या संपर्कात न खराब होणारे दर्जेदार लॅटरल पाईप्स.",
    features: ["Class II / Standard UV stabilized", "Spaced drippers (20cm, 30cm, 40cm, 50cm)", "Long clog-free operating life"],
    specs: "Sizes: 12mm, 16mm, 20mm | 400m / 500m Bundles",
    image: dripCoilsImg,
    isPopular: true,
  },
  {
    id: "prod-pvc-pipes",
    name: "Heavy Duty PVC Agriculture & Plumbing Pipes",
    marathiName: "हेवी ड्युटी PVC शेती व प्लंबिंग पाईप्स",
    category: "pipes",
    description: "Rigid PVC pressure pipes with high burst strength, smooth inner bore for maximum water flow and minimal pressure drop.",
    marathiDescription: "शेतीतील पाणी पुरवठ्यासाठी व घरासाठी मजबूत प्रेशर PVC पाईप्स.",
    features: ["Pressure ratings: 2.5 kg, 4 kg, 6 kg, 10 kg/cm²", "ISI quality compliance", "Socket & plain end options"],
    specs: "Diameters: 1 inch to 8 inch (20mm to 200mm)",
    image: pvcPipesStackImg,
    isPopular: true,
  },
  {
    id: "prod-hdpe-pipes",
    name: "HDPE Agricultural Coil & Sub-Main Pipes",
    marathiName: "HDPE कॉईल व सब-मेन पाईप्स",
    category: "pipes",
    description: "High-Density Polyethylene flexible pipes designed for rugged farm topography, underground delivery, and borewells.",
    marathiDescription: "डोंगर, उतार व शेतीसाठी लवचिक आणि अतिशय मजबूत काळे पाईप्स.",
    features: ["Crack & chemical resistant", "Handles high ground pressure", "Continuous seamless coils"],
    specs: "PE-63 / PE-80 / PE-100 Grades | 20mm to 110mm",
    image: pvcPipesStackImg,
    isPopular: true,
  },
  {
    id: "prod-disc-filters",
    name: "Agriculture Disc & Screen Filters (2\" & 3\")",
    marathiName: "२ इंच व ३ इंच डिस्क आणि स्क्रीन फिल्टर्स",
    category: "agriculture",
    description: "High-volume filtration units to eliminate sand, silt, algae and prevent emitter clogging in drip lines.",
    marathiDescription: "ठिबकच्या ड्रीपर्समध्ये कचरा व माती अडकू नये म्हणून मजबूत वॉटर फिल्टर्स.",
    features: ["Easy-to-clean disc stack", "Corrosion-resistant glass-filled polymer", "Pressure gauge port included"],
    specs: "Flow Capacity: 25 m³/hr – 50 m³/hr | 2\" & 3\" Inlet",
    image: pumpValvesImg,
    isPopular: true,
  },
  {
    id: "prod-venturi",
    name: "Venturi Fertilizer & Chemical Injectors",
    marathiName: "व्हेंचुरी खत यंत्रणा (Fertigation Kit)",
    category: "agriculture",
    description: "Precision differential pressure suction injector for uniform application of water-soluble fertilizers.",
    marathiDescription: "पाण्यासोबत पिकांना विद्राव्य खते सहज देण्यासाठी व्हेंचुरी युनिट.",
    features: ["Suction control rotameter", "Acid & chemical resistant build", "Complete with suction hose & strainer"],
    specs: "Inlet Sizes: 3/4\", 1\", 1.5\", 2\"",
    image: pumpValvesImg,
  },
  {
    id: "prod-impact-sprinkler",
    name: "Brass & Polymer Overhead Impact Sprinklers",
    marathiName: "पितळी व पॉलिमर इम्पॅक्ट तुषार स्प्रिंकलर",
    category: "sprinklers",
    description: "360° rotating high-throw sprinklers suitable for onion, wheat, vegetables, groundnuts, and nurseries.",
    marathiDescription: "कांदा, गहू, भाजीपाला व हरभरा पिकांसाठी एकसमान पाणी शिंपडणारे स्प्रिंकलर.",
    features: ["Dual nozzle for even distribution", "Stainless steel spring & pin", "High throwing radius up to 14 meters"],
    specs: "Thread: 1/2\" & 3/4\" Male BSP | 2.0 to 4.0 Bar",
    image: sprinklerImg,
    isPopular: true,
  },
  {
    id: "prod-drip-fittings",
    name: "Drip Connectors, Joiners, Grommets & End Caps",
    marathiName: "ठिबक फिटिंग्ज - जॉईनर, रबर ग्रॉमेट, कॉक व एंड कॅप",
    category: "drip-irrigation",
    description: "Complete assembly kit of 16mm take-off valves, joiners, start connectors, punched grommets, and flush valves.",
    marathiDescription: "ठिबक जोडण्यासाठी लागणारे सर्व प्रकारचे कॉक, जॉईनर व फिटिंग्ज.",
    features: ["Leak-proof barbed design", "UV resistant virgin plastic", "Easy installation with hand punches"],
    specs: "Packets: 50 pcs, 100 pcs, 500 pcs",
    image: dripCoilsImg,
  },
  {
    id: "prod-ball-valves",
    name: "UPVC & Brass Heavy Duty Water Ball Valves",
    marathiName: "UPVC आणि पितळी बॉल व्हॉल्व्ह",
    category: "plumbing",
    description: "Smooth quarter-turn on/off flow control valves with Teflon seal and solid reinforced handles.",
    marathiDescription: "पाण्याचा प्रवाह नियंत्रित करण्यासाठी गळतीमुक्त बॉल व्हॉल्व्ह.",
    features: ["100% leak tested", "High temperature & pressure endurance", "Solid grip long handle"],
    specs: "Sizes: 1/2\" to 4\" (15mm to 100mm)",
    image: plumbingFittingsImg,
    isPopular: true,
  },
  {
    id: "prod-fasteners-bolts",
    name: "Industrial Fasteners, Nuts, Bolts & SS Screws",
    marathiName: "नट, बोल्ट, वॉशर व स्टेनलेस स्टील स्क्रू",
    category: "hardware",
    description: "Full stock of metric & imperial bolts, GI threaded rods, self-drilling roofing screws, and anchor fasteners.",
    marathiDescription: "सर्व प्रकारचे लोखंडी व स्टील नट-बोल्ट, पतऱ्याचे स्क्रू व फास्टनर्स.",
    features: ["High tensile steel & SS 304/316", "Zinc plated rust resistance", "Bulk & retail quantities available"],
    specs: "All M4 to M24 sizes & various lengths",
    image: hardwareToolsImg,
  },
  {
    id: "prod-pipe-wrenches",
    name: "Heavy Duty Plumber & Mechanic Hand Tools",
    marathiName: "हेवी ड्युटी पाईप पाना व मेकॅनिक टूल्स",
    category: "tools",
    description: "Drop-forged carbon steel pipe wrenches, adjustable spanners, heavy water-pump pliers, and tube cutters.",
    marathiDescription: "प्लंबर, शेतकरी व कारागिरांसाठी दर्जेदार पाईप पाना व अवजारे.",
    features: ["Hardened alloy steel jaws", "Non-slip grip ergonomic handles", "High torque tolerance"],
    specs: "Pipe Wrench sizes: 10\", 12\", 14\", 18\", 24\"",
    image: hardwareToolsImg,
  },
  {
    id: "prod-solvents-tapes",
    name: "PVC Solvent Cement, Teflon Tapes & Plumbing Adhesives",
    marathiName: "PVC सॉल्व्हंट सिमेंट, टेफ्लॉन टेप व ऍडेसिव्ह",
    category: "plumbing",
    description: "Heavy bodied fast-curing PVC solvent glue, 100% pure PTFE thread seal tapes, and waterproofing pastes.",
    marathiDescription: "पाईप जोडण्यासाठी मजबूत सॉल्व्हंट आणि गळती रोखण्यासाठी टेफ्लॉन टेप.",
    features: ["Quick bonding in 5 minutes", "Withstands high water pressure", "Available in small cans & bulk bottles"],
    specs: "Solvent: 50ml, 100ml, 250ml, 500ml, 1L",
    image: plumbingFittingsImg,
  },
  {
    id: "prod-construction-hardware",
    name: "Construction Hardware, Wire Nails & Binding Wire",
    marathiName: "बांधकाम खिळे, बाइंडिंग वायर व हार्डवेअर",
    category: "tools",
    description: "Black annealed binding wire, bright common wire nails, GI wire netting, door fittings, and tower bolts.",
    marathiDescription: "घर बांधकामासाठी लागणारे खिळे, तार, कुलूप व लोखंडी फिटिंग्ज.",
    features: ["Tough tensile strength", "Standard gauge certified", "Available by weight (kg) or boxes"],
    specs: "Wire Gauge: 18G, 20G | Nails: 1\" to 5\"",
    image: hardwareToolsImg,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Wide Product Range",
    marathiTitle: "विस्तृत प्रॉडक्ट्स रेंज",
    description: "From household plumbing & fasteners to multi-acre commercial drip irrigation and HDPE sub-mains, get everything under one roof.",
    marathiDescription: "घरातील लहान स्क्रूपासून ते अनेक एकर शेतीच्या ठिबक सिंचन साहित्यापर्यंत सर्व एकाच छताखाली.",
    icon: "Boxes",
  },
  {
    title: "Quality Products",
    marathiTitle: "१००% विश्वासार्ह गुणवत्ता",
    description: "We stock only ISI-standard, crack-resistant pipes, precision drippers, and heavy-duty hardware built for extreme farm conditions.",
    marathiDescription: "ऊन, वारा आणि खतांच्या संपर्कात टिकून राहणारे मजबूत व दर्जेदार ब्रँडेड साहित्य.",
    icon: "ShieldCheck",
  },
  {
    title: "Local & Trusted",
    marathiTitle: "स्थानिक व हक्काचे दुकान",
    description: "Centrally located at Girnare near HP Petrol Pump, proudly serving farming families and contractors across Dugaon and Nashik belt.",
    marathiDescription: "गिरणारे-दुगाव परिसरातील शेतकरी बांधव आणि कॉन्ट्रॅक्टर्सचा अनेक वर्षांचा विश्वास.",
    icon: "MapPin",
  },
  {
    title: "Expert Assistance",
    marathiTitle: "तज्ज्ञ मार्गदर्शन",
    description: "Rahul Somnath Umap personally helps you calculate exact water pressure, pipe diameters, and lateral spacing for maximum crop yield.",
    marathiDescription: "पिकांनुसार लागणारे अचूक प्रेशर, पाईप साईज व ठिबकचे राहुल सोमनाथ उमाप यांच्याकडून मार्गदर्शन.",
    icon: "UserCheck",
  },
];
