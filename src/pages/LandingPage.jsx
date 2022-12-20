import React from "react";
import { Helmet } from "react-helmet-async";
import DownloadSection from "../components/LandingPage/DownloadSection";
import TestimonialSection from "../components/LandingPage/TestimonialSection";
import FeatureSection from "../components/LandingPage/FeatureSection";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "../components/LandingPage/Navbar";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Discuss.In</title>
        <meta name="description" content="Discuss.In landing page" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DownloadSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default LandingPage;
