import React from "react";
import Features from "../../components/features/Features";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import Hero from "../../components/hero/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-white">
        <Hero />

        <div className="w-[1300px] mx-auto flex items-center justify-between border border-gray-600 rounded-[20px] py-10 px-15 mt-[70px]">
          <div>
            <p className="text-[50px] leading-[50px] mb-7">
              Stellar XLM as a bridge on RendBit
            </p>
            <p>
              Stellar XLM is an efficient blockchain network designed for fast,
              low-cost cross-border transactions. on RebdBit, Stellar serve as a
              powerful bridge currency, enabling seamless value transfers
              between users, regardless of their local currency or payment
              method. Rendbit offer instant conversions, reduce reliance on
              traditional banking systems and facilitate secure, transparent,
              and scalable transactions across borders.
            </p>
          </div>
          <img src="./image/00021.svg" alt="" className="w-[700px]" />
        </div>
        <div className="w-[1300px] mx-auto border border-gray-600 rounded-[20px] py-10 px-15 mt-[70px]">
          <div className="flex items-center justify-between">
            <p className="text-[50px] leading-[50px] w-[50%]">
              RendBit offers it's own token launch pad
            </p>
            <div className="w-[50%]">
              <p>
                RendBit features a built-in token launchpad that leverages the
                speed, security and scalability of the stellar XLM blockchain.
                This allows creators and projects to easily issue, manage, and
                distribute their own custom tokens with low fees and fast
                transaction times.
              </p>
              <button className="mt-4 bg-white text-[#0E7BB2] px-3 py-2 rounded-[10px]">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center justify-between mt-10 flex-col">
              <p>Token Creation</p>
              <img src="./image/00031.svg" alt="" />
            </div>
            <div className="flex items-center justify-between mt-10 flex-col">
              <p>Token Traading</p>
              <img src="./image/00041.svg" alt="" />
            </div>
            <div className="flex items-center justify-between mt-10 flex-col">
              <p>Token Managemennt</p>
              <img src="./image/00051.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
      // style={{
      //   background:
      //     "radial-gradient(104.9% 118.4% at -4.27% 84.96%, rgba(121, 131, 240, 0.7) 0%, rgba(79, 85, 156, 0.7) 32.51%, rgba(0, 0, 0, 0.7) 100%)",
      // }}
      >
        <WhyChooseUs />
        <Features />
      </div>
    </div>
  );
};

export default Home;
