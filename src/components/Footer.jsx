// import React from "react";
// import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-white pt-10 pb-6 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

//         {/* Company Info */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">NEDC</h2>
//           <p className="text-sm text-white/80">
//             National Egyptian Drilling & Petroleum Services Co.
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Contact</h3>
//           <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
//             <FaMapMarkerAlt /> Mokattam, Cairo, Egypt
//           </p>
//           <p className="flex items-center gap-2 text-sm text-white/80 mb-1">
//             <FaPhoneAlt /> +20225084915
//           </p>
//           <p className="flex items-center gap-2 text-sm text-white/80">
//             <FaEnvelope /> info@nedc-eg.com
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//           <ul className="space-y-1 text-sm text-white/80">
//             <li><Link to="/" className="hover:text-white">Home</Link></li>
//             <li><Link to="/about" className="hover:text-white">About</Link></li>
//             <li><Link to="/products" className="hover:text-white">Products</Link></li>
//             <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
//             <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Social */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a
//               href="https://www.facebook.com/nedcegco"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-blue-900 transition"
//             >
//               <FaFacebookF />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer bottom */}
//       <div className="text-center text-sm text-white/60 mt-10 border-t border-white/10 pt-4">
//         © {new Date().getFullYear()} NEDC. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/nedc.jpg" alt="Logo" className="h-16 w-16 rounded-full mb-4" />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            National Egyptian Drilling & Petroleum Services Co. – Specializing in water well drilling and petroleum pipe manufacturing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt /> +20225084915
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> info@nedc-eg.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGlobe /> Mokattam,Region C,No. 7378, 11571 Cairo
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/nedcegco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} NEDC Petroleum. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
