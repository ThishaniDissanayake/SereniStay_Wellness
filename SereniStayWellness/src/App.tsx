// src/App.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default App;