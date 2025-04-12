import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact.jsx";
import Milestones from "./components/Milestones.jsx";
import Excellence from "./components/Excellence.jsx";
import Footer from "./components/Footer.jsx";

// Styles + AOS
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import WellCasings from "./components/ProductDetails/WellCasings";
import WaterWell from "./components/ProductDetails/WaterWell.jsx";
import ContactPage from "./components/ProductDetails/ContactPage.jsx";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={
      <>
        <Hero />
        <About />
        <Products />
        <Team />
        <Testimonials />
        <Milestones />
        <Excellence />
        <Contact />
        <Footer />
      </>
    } />
    <Route path="/products/water-well" element={<WaterWell />} />
    <Route path="/products/well-casings" element={<WellCasings />} />
    {/* <Route path="/products/petroleum-pipes" element={<PetroleumPipes />} /> */}
    <Route path="/contact-page" element={<ContactPage />} />
  </Routes>
</Router>
  );
}

export default App;
