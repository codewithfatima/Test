// AboutUs.jsx
import React from 'react';
import About from '../../src/assets/Aboutpic.png'

const AboutsUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            We are a passionate team dedicated to delivering high-quality products and seamless shopping experiences. Our mission is to connect customers with the best items in the market using the power of technology.
          </p>
          <p className="text-gray-600 text-lg">
            Built with care, designed with love — we strive to create more than just an e-commerce site. We build trust and long-term relationships.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={About}
            alt="About us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutsUs;
