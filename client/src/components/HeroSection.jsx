import React from "react";
import { FaClock, FaHeart, FaPlay, FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-[url('/backgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      
      <div className="relative z-10 px-8 md:px-16 lg:px-24 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Guardians of the Galaxy
        </h1>
        <p className="text-sm md:text-base text-gray-300 mb-8">
          Action | Adventure | Sci-Fi • 2018 • 2h 8m
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-500/30">
          Explore Movies
        </button>
      </div>
    </div>
  );
};

export { HeroSection };
