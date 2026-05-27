import React, { useState } from "react";
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
import CTA from "../Components/CTA";

const Home = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  return (
    <>
      <Navbar onEnquireClick={() => setShowEnquiryForm(true)} />
      <Hero
        showModal={showEnquiryForm}
        setShowModal={setShowEnquiryForm}
      />
      <LimitedOffer />
      <UniversitySection />
      <CourseCards onReadMoreClick={() => setShowEnquiryForm(true)} />
      <ImpactStrip />
      <Benefits />
      <Company />
      <Review />
      <AllCourses />
      <WhyUs />
      <CTA onApplyClick={() => setShowEnquiryForm(true)} />
    </>
  );
};

export default Home;
