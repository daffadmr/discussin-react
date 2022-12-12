import React from "react";
import DownloadSection from "../components/LandingPage/DownloadSection";
import FaqSection from "../components/LandingPage/FaqSection";
import FeatureSection from "../components/LandingPage/FeatureSection";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "../components/LandingPage/Navbar";
import { TabTitle } from "../components/title";

const LandingPage = () => {
  TabTitle("Landing Page");
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DownloadSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default LandingPage;
