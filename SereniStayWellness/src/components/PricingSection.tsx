// src/components/PricingSection.tsx
import React from 'react';
import { FaSpa, FaHeartbeat, FaGem } from 'react-icons/fa'; // Importing icons from react-icons

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: 'Basic Relaxation Plan',
      features: ['Includes basic rare', 'Primed regianace-balance'],
      price: '$59',
      buttonText: 'View Details',
      icon: <FaHeartbeat className="text-4xl text-teal-700 mb-4 mx-auto" />, // Icon for relaxation
    },
    {
      title: 'Premium Spa Plan',
      features: ['Includes access to phlistherapy', 'Rejuvenate-plot chic'],
      price: '$199',
      buttonText: 'Subscribe',
      icon: <FaSpa className="text-4xl text-teal-700 mb-4 mx-auto" />, // Icon for spa
    },
    {
      title: 'Luxury Wellness Retreat',
      features: ['Includes 25-day vare plans', 'Full parallisolne plan'],
      price: '$149 rmo',
      buttonText: 'Subscribe',
      icon: <FaGem className="text-4xl text-teal-700 mb-4 mx-auto" />, // Icon for luxury
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-10">Wellness Programs / Membership Plans</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            {plan.icon}
            <h3 className="text-xl font-semibold text-teal-700 mb-4">{plan.title}</h3>
            <ul className="text-gray-600 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">• {feature}</li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-teal-700 mb-4">{plan.price}</p>
            <button
              className={`${
                plan.buttonText === 'View Details' ? 'bg-gray-500' : 'bg-teal-600'
              } text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;