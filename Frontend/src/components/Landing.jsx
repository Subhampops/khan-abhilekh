import React from 'react';
import Navbar from './landingpage/Navbar'; // Ensure correct path
import HeroSection from './landingpage/HeroSection';
import About from './landingpage/About';
import Features from './landingpage/Features';
import Report from './landingpage/Report';
import Footer from './landingpage/Footer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <Report />
      <Footer />
    </>
  );
};

export default Landing;
