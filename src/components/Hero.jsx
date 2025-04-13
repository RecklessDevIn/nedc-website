import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Background Image with Animation */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-110 animate-zoomOut z-0"
        style={{ backgroundImage: 'url("./hero-image.jpg")' }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-3xl px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          National Egyptian Drilling & Petroleum Services Co.
        </h1>
        <p
          className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Experts in water well drilling and petroleum pipe manufacturing across
          the republic.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white text-blue-900 font-bold px-8 py-3 rounded-md shadow-lg hover:bg-blue-900 hover:text-white transition"
        >
          VIEW PRODUCTS
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
