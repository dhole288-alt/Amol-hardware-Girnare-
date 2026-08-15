import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FarmShowcase } from './components/FarmShowcase';
import { DripIrrigationFeature } from './components/DripIrrigationFeature';
import { ProductCatalog } from './components/ProductCatalog';
import { FarmCalculator } from './components/FarmCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll down to hardware catalog
    const catalogElement = document.getElementById('hardware-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c0f] text-[#e2e8f0] flex flex-col selection:bg-orange-600 selection:text-white pb-14 sm:pb-0">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenEnquiry={() => handleOpenEnquiry('Amol Hardware Consultation & Estimate')}
        />

        {/* Dedicated Farmers, Woman Farmer & Lush Green Farm Showcase */}
        <FarmShowcase
          lang={lang}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 8 Product Categories Grid */}
        <CategoryGrid
          lang={lang}
          onSelectCategory={handleSelectCategory}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Drip Irrigation Dedicated Feature Split Section */}
        <DripIrrigationFeature
          lang={lang}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Full Filterable Hardware & Irrigation Product Catalog */}
        <ProductCatalog
          lang={lang}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Agricultural Drip & Pipe Calculator for Farmers */}
        <FarmCalculator lang={lang} />

        {/* 4 Feature Why Choose Us Cards */}
        <WhyChooseUs lang={lang} />

        {/* About Amol Hardware & Rahul Somnath Umap */}
        <AboutUs
          lang={lang}
          onOpenEnquiry={() => handleOpenEnquiry('General Store Enquiry')}
        />

        {/* Location & Directions Map */}
        <LocationSection lang={lang} />

        {/* Contact & Order Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Mobile Sticky Quick Call & WhatsApp Bar */}
      <MobileStickyBar lang={lang} />

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialProduct={enquiryProduct}
        lang={lang}
      />
    </div>
  );
}
