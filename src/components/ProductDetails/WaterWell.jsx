import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";
const WaterWell = () => {
  return (
    <>
      <ProductNavbar />
      <section className="pt-36 bg-white px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Water Well Drilling Services
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            National Egyptian Drilling & Petroleum Services Co. provides expert water well drilling solutions for diverse applications. With our advanced rigs and skilled operators, we ensure efficient and cost-effective drilling even in the most challenging terrains.
          </p>
          <img src="/pic1.jpg" alt="Water Well" className="rounded-lg mb-6 shadow-md w-full" />
          <ul className="list-disc text-gray-600 pl-6 space-y-2 mb-8">
            <li>Drilling up to 450 meters with advanced rotary rigs.</li>
            <li>Custom solutions for agricultural, municipal, and industrial use.</li>
            <li>Environmentally compliant and safe drilling operations.</li>
          </ul>
          
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let’s talk</h2>
        <p className="mb-6">We would love to hear from you!</p>
        <Link
          to="/contact"
          className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition"
        >
          GET IN TOUCH
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default WaterWell;
