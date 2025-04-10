import React from "react";
import Features from "../../components/features/Features";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-white w-[1300px] mx-auto flex items-start justify-between mt-[100px]">
        <div className="w-[1300px] mx-auto flex items-start justify-between mt-[35px]">
          <div>
            <p className="text-[80px] leading-[70px]">
              the trusted crypto exchange
            </p>
            <p className="w-[400px] my-7">
              Be part of the early Users of Rendbit, receive relevant
              information on time. Join now
            </p>
            <button className="cursor-pointer px-[20px] py-[10px] border rounded-[10px] bg-gradient-to-r from-black to-gray-800">
              Join Wait-list
            </button>
          </div>
          <p className="w-[400px] mt-10">
            Facilitate seamless cross-border payments between African countries
            using stellar XLM as the currency bridge
          </p>
        </div>
      </div>
      <div
        style={{
          background:
            "radial-gradient(104.9% 118.4% at -4.27% 84.96%, rgba(121, 131, 240, 0.7) 0%, rgba(79, 85, 156, 0.7) 32.51%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      >
        <WhyChooseUs />
        <Features />
      </div>
    </div>
  );
};

export default Home;
