import React from "react";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import TrustedBy from "../../components/trusted-by/TrustedBy";
import SeamlessFinancial from "../../components/seamless-financial/SeamlessFinancial";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonials/testimonials";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";

const RendbitLanding: React.FC = () => (
  <div>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');`}</style>
    <Hero />
    <HowItWorks />
    <TrustedBy />
    <SeamlessFinancial />
    <WhyChooseUs />
    <Testimonials />
  </div>
);

export default RendbitLanding;