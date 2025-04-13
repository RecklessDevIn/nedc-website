import React from "react";
import { FaFlagCheckered, FaTools, FaChartLine, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const milestones = [
  {
    icon: <FaFlagCheckered className="text-white" />,
    title: "Foundation Laid",
    desc: "Established in 2000, we began our journey in water well drilling and manufacturing.",
  },
  {
    icon: <FaTools className="text-white" />,
    title: "First Project",
    desc: "Completed our first major drilling project in 2005, setting the standard for quality.",
  },
  {
    icon: <FaChartLine className="text-white" />,
    title: "Expansion Phase",
    desc: "In 2010, we expanded our operations to include well casings and petroleum filter pipes.",
  },
  {
    icon: <FaCrown className="text-white" />,
    title: "Industry Leader",
    desc: "Recognized as a leader in the industry by 2018, with numerous successful projects nationwide.",
  },
];

const Milestones = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Title */}
        <div className="space-y-4">
          <p className="text-sm text-blue-800 font-semibold uppercase tracking-wide">
            Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Journey: Key Milestones and Achievements
          </h2>
          <button className="mt-4 inline-block bg-white border border-gray-300 px-4 py-2 rounded text-sm text-gray-800 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

        {/* Right Timeline */}
        <div className="relative pl-8 border-l-2 border-blue-600 space-y-10">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Dot icon */}
              <motion.div
                whileHover={{ scale: 1.2, backgroundColor: "#2563eb" }} // blue-600
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -left-6 top-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
