import React, { useState } from "react";
import Features from "../../components/features/Features";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import RendBitWaitlistForm from "../../components/waitlistmodal/modal";

const Home: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="text-white">
        <div className="w-[1300px] mx-auto flex items-start justify-between mt-[100px]">
          <div className="w-[1300px] mx-auto flex items-start justify-between mt-[35px]">
            <div>
              <p className="text-[80px] leading-[70px]">
                the trusted crypto exchange
              </p>
              <p className="w-[400px] my-7">
                Be part of the early Users of Rendbit, receive relevant
                information on time. Join now
              </p>
              <button onClick={() => setIsModalOpen(true)} className="cursor-pointer px-[20px] py-[10px] border rounded-[10px] bg-gradient-to-r from-black to-gray-800">
                Join Wait-list
              </button>
            </div>
            <p className="w-[400px] mt-10">
              Facilitate seamless cross-border payments between African
              countries using stellar XLM as the currency bridge
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
              <p>Token Trading</p>
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
        style={{
          background:
            "radial-gradient(104.9% 118.4% at -4.27% 84.96%, rgba(121, 131, 240, 0.7) 0%, rgba(79, 85, 156, 0.7) 32.51%, rgba(0, 13, 44, 1) 100%)",
        }}
      >
        <WhyChooseUs />
        <Features />
      </div>
      {
        isModalOpen && (
          <RendBitWaitlistForm
            // isOpen={isModalOpen}
            // onClose={() => setIsModalOpen(false)}
            setIsModalOpen={setIsModalOpen}
          />
        )
      }
    </div>
  );
};

export default Home;
