import React from "react";
import bg_video from "../../assets/video.mp4";

const Hero: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bg_video}type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-[1300px] mx-auto flex items-start justify-between mt-[100px]">
        <div className="w-[1300px] mx-auto flex items-start justify-between mt-[35px]">
          <div>
            <p className="text-[80px] leading-[70px]">
              The trusted crypto exchange
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
      className="px-[70px] mx-auto flex items-start justify-between mt-[35px] border-t border-b border-gray-600 py-6"
      style={{
        borderImageSource:
        "linear-gradient(124.28deg, rgba(14, 123, 178, 0.7) 24.51%, rgba(14, 123, 178, 0.3) 53.26%)",
        borderImageSlice: 1,
      }}
    >
      <p>Anchor Integration</p>
      <p>Multi-currency conversion</p>
      <p>Fiat-to-XLM and XLM-to-Fiat swaps</p>
      <p>Deposit, Withdraw, Save, Lend, Stake</p>
    </div>
    </div>
  );
};

export default Hero;
