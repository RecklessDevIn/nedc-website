import React from "react";
import { FaLinkedin, FaGlobe, FaFacebook } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Eng. Ayman Taha",
    title: "Vice Chairman and Managing Director",
    description:
      'Eng. Ayman leads strategic planning and oversees high-level corporate decisions across the organization.',
    image: "/ayman.jpg",
    linkedin: "#",
    facebook: "https://www.facebook.com/ayman.taha.35",
    website: "https://nedc-eg.com/ayman-taha"
  },
  {
    name: "Eng.Mohamed Ayaman",
    title: "General Manager",
    description:
      "Eng. Mahmoud leads day-to-day operations and ensures seamless coordination across departments to meet strategic goals.",
    image: "/mohamed-ayman.jpeg",
    linkedin: "https://www.linkedin.com/in/mohamed-ayman-2285a536/",
    facebook: "https://www.facebook.com/aymanchen",
    website: "https://nedc-eg.com/mohamed-ayaman"
  },
  {
    name: "Eng. Ayman Taha",
    title: "Vice Chairman and Managing Director",
    description:
      'Eng. Ayman leads strategic planning and oversees high-level corporate decisions across the organization.',
    image: "/ayman.jpg",
    linkedin: "#",
    facebook: "https://www.facebook.com/ayman.taha.35",
    website: "https://nedc-eg.com/ayman-taha"
  },
  {
    name: "Eng.Mohamed Ayaman",
    title: "General Manager",
    description:
      "Eng. Mahmoud leads day-to-day operations and ensures seamless coordination across departments to meet strategic goals.",
    image: "/mohamed-ayman.jpeg",
    linkedin: "https://www.linkedin.com/in/mohamed-ayman-2285a536/",
    facebook: "https://www.facebook.com/aymanchen",
    website: "https://nedc-eg.com/mohamed-ayaman"
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(teamMembers.length, 3),
    slidesToScroll: 1,
    arrows: true,
    centerMode: teamMembers.length === 2,
    centerPadding: teamMembers.length === 2 ? "100px" : "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="team" className="bg-white pt-10 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-sm text-blue-800 font-semibold tracking-widest uppercase">
            Dedicated
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Meet the experts driving our success and innovation.
          </p>
        </div>

        <Slider {...settings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mx-auto max-w-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-gray-900 font-semibold text-base">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {member.description}
                  </p>
                  <div className="flex space-x-4 text-gray-500 text-lg">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="hover:text-blue-700" />
                    </a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="hover:text-black" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer">
                      <FaGlobe className="hover:text-blue-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;