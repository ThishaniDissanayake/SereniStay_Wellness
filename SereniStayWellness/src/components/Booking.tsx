import React from "react";

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">Book an Appointment</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="date" className="w-full p-3 border border-gray-300 rounded-md" />
          <button className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700">Confirm Booking</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
