import React from "react";
import NavbarSolid from "./ProductNavbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const WellCasings = () => {
  return (
    <div className="bg-white text-gray-800">
      {" "}
      <NavbarSolid />
      <main className="pt-36 pb-16 px-6 max-w-6xl mx-auto space-y-10">
        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Well Casings Manufacturing
          </h1>
          <p className="text-gray-700 leading-relaxed">
            National Egyptian Drilling & Petroleum Services Co. offers durable
            and reliable well casings tailored to meet various operational
            needs. Using high-grade materials and precision manufacturing
            techniques, our casings ensure stability, corrosion resistance, and
            longevity in diverse drilling environments.
          </p>
          <img
            src="/pic2.jpg"
            alt="Well Casings"
            className="w-full rounded shadow-lg object-cover max-h-[500px]"
          />
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>
              Manufactured using high-strength steel for maximum durability.
            </li>
            <li>Available in multiple diameters and thread types.</li>
            <li>
              Designed for compatibility with different rig specifications.
            </li>
          </ul>
          <Link to="/contact-page">
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WellCasings;
