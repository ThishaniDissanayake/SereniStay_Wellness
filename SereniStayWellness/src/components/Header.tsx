// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-teal-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo1.png" // Reference the logo from the public folder
            alt="Wellness Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
          <li>
              <a href="#pricing" className="hover:text-teal-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-teal-200 transition">
                 Our Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-teal-200 transition">
              Book Appointment
              </a>
            </li>
            <li>
              <a href="#appointment" className="hover:text-teal-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;