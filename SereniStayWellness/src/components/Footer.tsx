// src/components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/logo1.png"
              alt="Wellness Logo"
              className="h-12 w-auto mr-3" // Changed from h-10 to h-12
            />
            <span className="text-xl font-bold">SereniStay WELLNESS</span>
          </div>
          <p className="text-sm text-teal-100">
            Personalized wellness plans for a healthier, stress-free life.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-teal-200 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-teal-200 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#appointment" className="hover:text-teal-200 transition">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-200 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-teal-100">
            <li>123 Wellness Street, Serenity City, 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@wellnesshaven.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-teal-200 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-teal-200 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-teal-200 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-teal-200 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 border-t border-teal-600 pt-4 text-center text-sm text-teal-100">
        <p>© {new Date().getFullYear()} Wellness Haven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;