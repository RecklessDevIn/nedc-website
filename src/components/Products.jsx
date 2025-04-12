import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const products = [
  {
    title: "Water well drilling services",
    description: "Expert water well drilling services for diverse needs.",
    image: "/hero-image.jpg",
    slug: "water-well",
  },
  {
    title: "Well casings manufacturing",
    description: "Durable and reliable well casings tailored for your needs.",
    image: "/pic2.jpg",
    slug: "well-casings",
  },
  {
    title: "Petroleum filter pipes",
    description: "High-quality petroleum filter pipes for efficient operations.",
    image: "/pic3.jpg",
    slug: "petroleum-pipes",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-gray-100 py-20 px-6 scroll-mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm text-blue-800 font-semibold tracking-widest uppercase">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Innovative solutions for drilling and casing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              to={`/products/${product.slug}`}
              key={index}
              className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 flex justify-between items-center">
                  {product.title} <span className="text-2xl">&#8250;</span>
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
