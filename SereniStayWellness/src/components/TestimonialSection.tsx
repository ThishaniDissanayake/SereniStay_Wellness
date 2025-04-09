// src/components/TestimonialSection.tsx
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-10">Book an Appointment</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 italic mb-4">
          "The spa treatments and wellness plans here are fantastic! I feel rejuvenated and stress-free after every visit."
        </p>
        <p className="text-teal-700 font-semibold">Sarah M.</p>
      </div>
    </div>
  );
};

export default TestimonialSection;