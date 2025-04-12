import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0b1736] text-white w-full z-50 relative">
      <div className="w-full border-b border-white/20 backdrop-blur-md bg-white/5 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="space-x-6 flex items-center">
            <span>📞 +20225084915</span>
            <span>✉️ info@nedc-eg.com</span>
          </div>
        <a
          href="https://www.facebook.com/nedcegco"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12" />
          </svg>
        </a>
      </div>
      </div>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/nedc.jpg"
            alt="logo"
            className="h-16 w-16 rounded-full object-cover shadow-md border border-white"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex space-x-10 font-medium">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <a href="#about" className="hover:text-blue-300">
            About
          </a>
          <Link to="/products" className="hover:text-blue-300">
            Products
          </Link>
          <Link to="/projects" className="hover:text-blue-300">
            Projects
          </Link>
        </nav>

        {/* Contact Button - Desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-block border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
        >
          CONTACT
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden px-6 pb-4 space-y-3 bg-[#0b1736] text-white text-sm font-medium transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="block">
          Home
        </Link>
        <a href="#about" onClick={() => setIsOpen(false)} className="block">
          About
        </a>
        <Link to="/products" onClick={() => setIsOpen(false)} className="block">
          Products
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className="block">
          Projects
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
