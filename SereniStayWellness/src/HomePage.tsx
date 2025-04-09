import React from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Services from "./components/ServicesSection";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Footer />
    </>
  );
};

export default HomePage;