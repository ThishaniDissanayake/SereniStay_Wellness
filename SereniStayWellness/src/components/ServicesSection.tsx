// src/components/ServicesSection.tsx
import React from 'react';
import { FaSpa, FaLeaf } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi'; // Using GiMeditation for yoga/meditation

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Yoga & Meditation Sessions',
      description: 'Relax your reel-shages and therapies',
      icon: <GiMeditation className="text-4xl text-teal-700 mb-4 mx-auto" />, // Better icon for yoga/meditation
    },
    {
      title: 'Spa & Massage Therapy',
      description: 'Improves your well-being',
      icon: <FaSpa className="text-4xl text-teal-700 mb-4 mx-auto" />,
    },
    {
      title: 'Aromatherapy & Detox Plans',
      description: 'Detox plate mineraind',
      icon: <FaLeaf className="text-4xl text-teal-700 mb-4 mx-auto" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-10">Our Wellness Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            {service.icon}
            <h3 className="text-xl font-semibold text-teal-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;