import React from "react";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import SeamlessFinancial from "../../components/seamless-financial/SeamlessFinancial";
import Hero from "../../components/hero/Hero";
import AppInAction from "../../components/app-in-action/AppInAction";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import Partners from "../../components/partners/Partners";

const RendbitLanding: React.FC = () => (
  <div>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');`}</style>
    <Hero />
    <HowItWorks />
    <AppInAction />
    {/* <TrustedBy /> */}
    <SeamlessFinancial />
    <WhyChooseUs />
    <Partners />
  </div>
);

export default RendbitLanding;