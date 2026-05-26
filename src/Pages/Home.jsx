import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import LimitedOffer from "../Components/LimitedOffer";
import UniversitySection from "../Components/Universities";
import CourseCards from "../Components/CourseCard";
import ImpactStrip from "../Components/ImpactStrip";
import Benefits from "../Components/Benefits";
import Company from "../Components/Company";
import Review from "../Components/Review";
import AllCourses from "../Components/AllCourses";
import WhyUs from "../Components/WhyUs";

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
      <Review />
      <AllCourses />
      <WhyUs />
    </>
  );
};

export default Home;
