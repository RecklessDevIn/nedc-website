import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0f1c] text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">
            Leading Drilling Experts
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Innovative water well <br /> solutions
          </h2>
        </div>

        {/* Right Column */}
        <div data-aos="fade-left">
          <p className="text-gray-300 leading-relaxed mb-6">
            National Egyptian Drilling & Petroleum Services Co. stands at the
            forefront of water well drilling, offering unparalleled expertise
            and quality services. Our main headquarters is located in Mokattam,
            Upper Hill, Region C, No. 7378, 11571 Cairo, Egypt. We specialize in
            manufacturing well casings and petroleum filter pipes, ensuring our
            clients receive the best possible solutions. Our commitment to
            excellence has allowed us to complete major national projects and
            solidify our reputation as a trusted partner in the industry.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#0a0f1c] transition font-semibold"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
