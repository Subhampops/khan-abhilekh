import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151414] text-white py-6 flex flex-col items-center justify-center pt-10">
      {/* Logo Image */}
      <img 
        src="/assets/logo.png" 
        alt="Logo" 
        className="mb-4"
      />
      {/* Footer Text */}
      <p className="text-center text-sm">
        All rights reserved | copyright @ 2024 <strong>KHAN ABHILEKH</strong>
      </p>
    </footer>
  );
};

export default Footer;
