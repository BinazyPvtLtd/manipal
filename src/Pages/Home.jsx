import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import LimitedOffer from "../Components/LimitedOffer";
import UniversitySection from "../Components/Universities";
import CourseCards from "../Components/CourseCard";
import ImpactStrip from "../Components/ImpactStrip";
import Benefits from "../Components/Benefits";
import Company from "../Components/Company";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LimitedOffer />
      <UniversitySection />
      <CourseCards />

      <ImpactStrip />
      <Benefits />
      <Company />
    </>
  );
};

export default Home;
