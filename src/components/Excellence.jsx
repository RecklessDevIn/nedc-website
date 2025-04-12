import React from "react";

const Excellence = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Content */}
        <div>
          <p className="text-sm text-blue-800 font-semibold tracking-widest uppercase mb-2">
            Excellence
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Delivering Quality Water Solutions Since 2000
          </h2>
          <p className="text-gray-700 mb-6">
            With over 20 years of experience, we have successfully completed
            numerous projects across the republic. Our commitment to quality and
            innovation has earned us the trust of countless clients.
          </p>
          <div className="flex space-x-12 mb-6">
            <div>
              <p className="text-3xl font-bold text-blue-800">75%</p>
              <p className="text-sm text-gray-600">
                Projects completed on time and within budget.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800">100%</p>
              <p className="text-sm text-gray-600">
                Client satisfaction is our top priority.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white border border-gray-300 text-gray-800 font-medium px-4 py-2 rounded hover:bg-gray-100">
              Learn More
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-blue-700 font-medium hover:underline"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right: Placeholder for video */}
        <div className="w-full aspect-video bg-gray-300 rounded flex items-center justify-center">
          <span className="text-4xl text-gray-500">▶</span>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
