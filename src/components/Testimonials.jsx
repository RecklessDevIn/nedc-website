import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Ali Mohamed",
    role: "Project Manager at PetroWell",
    quote:
      "NEDC’s professionalism and commitment to excellence made our joint drilling project a success from start to finish!",
    image: null,
  },
  {
    name: "Mustafa Ismail",
    role: "Operations Lead at Nile Oil",
    quote:
      "The well casing quality and support from NEDC were unmatched. They are truly leaders in the industry.",
    image: null,
  },
  {
    name: "Youmna Shokry",
    role: "Field Engineer, Gulf Energy",
    quote:
      "Working with NEDC was a smooth and efficient experience. Highly recommend their petroleum services!",
    image: null,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-10">
          Hear directly from our partners and clients across the republic.
        </p>

        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
              ) : (
                <FaUserCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              )}
              <p className="text-gray-700 italic mb-3">“{item.quote}”</p>
              <h4 className="text-blue-800 font-semibold text-lg">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;