import React from "react";
import Hero from "../components/hero";
import WhyChooseAnwrk from "../components/BodySection1";
import HowAnwrkWorks from "../components/BodySection2";
import WhatUsersSay from "../components/BodySection3";
import HomeServicesSection from "../components/BodySection4";
const Home = () => {

  return (
    <div>
      <Hero/>
    <WhyChooseAnwrk/>
    <HowAnwrkWorks/>
    <WhatUsersSay/>
    <HomeServicesSection/>
    </div>
  );
};

export default Home;