'use client';
import './Styles/hero.css';
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

function HeroSection() {
  return (
    <section className="relative text-gray-600 body-font mt-0 mb-0 pb-0 flex flex-row-reverse max-md:flex-col max-lg:mt-10 bg-[#FEF7F2]">
      {/* Background Beams - Set in the background with lower z-index */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Full-screen image at the top with higher z-index */}
      <div className="relative z-10 flex items-center justify-center md:w-1/2 hero-image bg-transparent">
        <img
          className="w-full h-full object-contain object-center bg-transparent"
          src="https://cdn.pixabay.com/photo/2024/09/08/07/35/ai-generated-9031398_1280.png"
          alt="Hero Background"
        />
      </div>

      {/* Content section with sufficient offset and higher z-index */}
      <div className="relative z-10 mx-auto flex px-5 py-10 items-center max-md:px-8 md:w-1/2 justify-center flex-col bg-transparent">
        <div className="text-center lg:w-2/3 w-full bg-transparent">
          <h1 className="title-font sm:text-4xl lg:text-6xl text-3xl mb-4 text-left text-[#2B1B12] bg-transparent">
            Welcome to Chris Simons Realty
          </h1>
          <p className="mb-8 leading-relaxed bg-transparent text-left">
            With over 15 years of experience in the real estate market, Chris Simons is dedicated to helping you find your dream home or sell your property at the best price. Whether you're a first-time homebuyer or looking to invest, I am here to guide you every step of the way.
          </p>
          <div className="flex flex-col items-start justify-center mb-8 bg-transparent">
            <img 
              src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/1785/trustpilot-3-512.png" 
              alt="Trustpilot Rating" 
              className="w-20 h-20 mr-2"
            />
            <p className="text-[#2B1B12] text-lg bg-transparent">
              Rated <strong>4.8</strong> on Trustpilot
            </p>
          </div>
          <div className="flex justify-start">
            <button className="inline-flex text-white bg-[#81543a] border-0 py-2 px-6 focus:outline-none hover:bg-[#5f3923] rounded text-lg">
              Get a Free Consultation!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;