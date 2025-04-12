import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/hero-image.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide">
          National Egyptian Drilling & Petroleum Services Co.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          Experts in water well drilling and petroleum pipe manufacturing across the republic.
        </p>
        <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-md shadow-lg hover:bg-blue-900 hover:text-white transition">
          VIEW PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default Hero;
