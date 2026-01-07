import React from "react";
import { HeroSection } from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import MovieCard from "../components/MovieCard";
import TrailersSection from "../components/TrailersSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TrailersSection/>
    </>
  );
};

export default Home;
