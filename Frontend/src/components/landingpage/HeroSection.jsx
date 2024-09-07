import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black">
      {/* Background overlay with image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('./assets/bg.jpg')" }}
      />

      {/* Content of the Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 md:px-12">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Revolutionizing Safety <br /> & <br />
            Productivity in <span className="italic">Coal Mines</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-6">
            Digital Shift Handover Log System and Safety Management Plan to Enhance Efficiency and Compliance
          </p>

          {/* Diamond Image */}
          <img
            src="/assets/diamond.png"
            alt="Diamond Icon"
            className="mx-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
