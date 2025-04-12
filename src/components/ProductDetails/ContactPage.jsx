import React, { useState } from "react";
import ProductNavbar from "../ProductDetails/ProductNavbar";
import Footer from "../Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "customer from website";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:ali.mohamed@nedc-eg.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <ProductNavbar />
      <section className="bg-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              We're here to assist you! Fill in the form and we'll get back to you
              as soon as possible.
            </p>
            {submitted && (
              <div className="mb-4 p-4 rounded bg-green-100 text-green-800 border border-green-300">
                ✅ Your message has been sent successfully.
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Info Section */}
          <div className="space-y-6">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.770152562378!2d31.3159474!3d30.0132984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f585fb389a1%3A0xd8ebd99edfee5552!2z2YXYrNin2YXYuSDYp9mE2KfZhNio2YjYsdin2Kog2KfZhNiq2LfYqSDYp9mE2YXYsdmK2Yog2KfZhNiu2KfYtdmK2Kkg2YXYt9i52YUg2YjYsdmK2KfYqQ!5e0!3m2!1sar!2seg!4v1712878322874!5m2!1sar!2seg"
              className="w-full h-72 rounded border-2 border-gray-200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="text-sm text-gray-700">
              <h3 className="text-lg font-bold text-gray-800 mb-1">Get in touch</h3>
              <p>📍 Mokattam, Region C, No. 7378, 11571 Cairo, Egypt</p>
              <p>
                📞{" "}
                <a href="tel:+20225084915" className="text-blue-700">
                  +20225084915
                </a>
              </p>
              <p>
                📠{" "}
                <a href="tel:+20225084914" className="text-blue-700">
                  +202 25084914
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@nedc-eg.com" className="text-blue-700">
                  info@nedc-eg.com
                </a>
              </p>
              <div className="mt-4">
                <h4 className="text-md font-semibold">Working Hours</h4>
                <p>🕒 Sunday - Thursday: 8:00 AM – 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
