// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/herosec.jpg')" }} // Reference the image from the public folder
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center px-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Experience Ultimate Wellness & Relaxation</h1>
        <p className="text-lg text-white mb-6">Personalized wellness plans for a healthier, stress-free life.</p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
          Book Your Wellness Session
        </button>
      </div>
    </div>
  );
};

export default HeroSection;