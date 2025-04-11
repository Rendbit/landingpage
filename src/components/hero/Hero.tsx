import React, { useState } from "react";
import bg_video from "../../assets/video.mp4";
import nigeria from "../../assets/svg/Nigeria.svg";
import xlm from "../../assets/svg/Stellar_(XLM).svg";
import stellar from "../../assets/svg/stellar.svg";
import stellarFoundation from "../../assets/svg/stellar-foundation.svg";
import { IoChevronDown } from "react-icons/io5";
import RendBitWaitlistForm from "../waitlistmodal/modal";
import { logEvent, analytics } from "../../tools/firebase";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-black opacity-50 md:hidden w-full h-full absolute top-0 left-0"></div>
      </div>
      <div className="flex justify-between">
        <main className="md:px-[64px]  mt-[50px] px-[16px] flex items-center lg:max-w-[1400px] w-[100%] mx-auto flex-col md:flex-row">
          <div className="mt-[100px] md:mt-[2rem]">
            <p className="home-text-gradient lg:text-[62px] md:text-[52px] text-[45px] font-[600] md:w-[400px] md:leading-[68px] leading-[45px]">
              Earn, Save, Spend, Create Token
            </p>
            <p className="text-[#ffffff] lg:text-[72px] md:text-[52px] text-[45px] font-[600]">
              Like A Boss.
            </p>
            <p className="text-[#ffffff] md:w-[70%] font-[300]">
              Be part of the early Users of <b>RendBit</b>, receive relevant
              information on time. Facilitate seamless cross-border payments
              between African countries using stellar XLM as the currency
              bridge. Join now
            </p>
            <button
              onClick={() => {
                toggleModal();
                logEvent(analytics, "rendbit_waitlist_join_hero");
              }}
              className="cursor-pointer mt-3 px-[20px] py-[10px] border rounded-[10px] bg-gradient-to-r from-black to-gray-800"
            >
              Join Wait-list
            </button>
          </div>
          <div className="flex justify-center mt-[300px] md:mt-9 items-center rounded-[11px]  flex-col">
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#000000] border border-[#B2B2B27A] py-6 sm:px-[40px] p-[15px] rounded-[8px]  lg:w-[500px] w-full">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className={`text-[#ffffff] text-[14px] font-[300] `}>
                      Swap
                    </p>
                    <div className={`flex text-[14px] text-[#ffffff] `}>
                      <p className={`text-[#ffffff]`}>Balance:</p>
                      <span className="text-white">200.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 border border-[#B2B2B27A] rounded-[24px] p-2 items-center">
                    <div className="flex item-center gap-2">
                      <div className="flex items-center bg-[#76748014] rounded-full p-2">
                        <img src={nigeria} alt="" />
                        <p className="mr-2 ml-1 text-[14px]">NGN</p>
                        <IoChevronDown className="text-white" />
                      </div>
                      <input
                        type="number"
                        id="input-amount"
                        disabled
                        className="outline-none lg:w-1/2 w-full bg-transparent text-[#ffffff]"
                        placeholder="300000"
                      />
                    </div>
                    <p className="text-whitemr-3 text-[12px]">Max</p>
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <p className={`text-[#ffffff] text-[14px] font-[300] `}>
                      Receive amount
                    </p>
                    <div className={`flex text-[14px] text-[#ffffff] `}>
                      <p className="text-[#ffffff]">Balance:</p>
                      <span className="text-white">200.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between border border-[#B2B2B27A] rounded-[24px] p-2 items-center">
                    <div className="flex item-center gap-2">
                      <div className="flex items-center bg-[#76748014] rounded-full p-2">
                        <img src={xlm} className="w-[20px] mx-2" alt="" />
                        <p className="mr-2 ml-1 text-[14px]">XLM</p>
                        <IoChevronDown className="text-white" />
                      </div>
                      <input
                        type="number"
                        id="input-amount"
                        disabled
                        className="outline-none w-1/2 bg-transparent text-[#ffffff]"
                        placeholder="0.00345"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="small-range"
                    className={`text-[#ffffff] text-[14px] font-[300] `}
                  >
                    Slippage
                  </label>
                  <input
                    id="small-range"
                    type="range"
                    step={0.01}
                    disabled
                    className="w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                  />
                  <p className="text-[#ffffff] text-[14px] font-[300] text-center">
                    2.5%
                  </p>
                </div>

                <button className="bg-gradient-to-r from-cyan-300 to-[#0A1F35] text-white p-3 rounded-lg w-full mt-[1rem]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        className={`flex md:flex-row-reverse flex-col mt-[50px] md:mt-[0px] md:px-[64px] px-[16px] items-end justify-between lg:max-w-[1400px] md:w-[100%] mx-auto`}
      >
        <div className=" flex justify-center items-center w-full">
          <div className="py-4 px-[40px] rounded-[8px] lg:w-[500px] w-full bg-black mt-[1rem] border border-[#B2B2B27A]">
            <p className="text-[14px] text-[#ffffff] border-b border-[#CFCFCF] pb-2">
              yUSDC = $3,000
            </p>
            <div className="flex flex-col gap-[8px] mt-5">
              <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                <p>Reference APR</p>
                <p>3.50%</p>
              </div>
              <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                <p>Exchange Rate</p>
                <p>1 USDC = 0.98911 yUSDC</p>
              </div>
              <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                <p>Transaction Cost</p>
                <p>~$11.24</p>
              </div>
              <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                <p>Reward Fee</p>
                <p>10%</p>
              </div>
              <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                <p>Referrer</p>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:mr-[20rem] md:mt-0 mt-10 ">
          <p className="text-[#ffffff] uppercase tracking-[8.319px] self-end font-[500]">
            Supported by:
          </p>
          <div className="flex items-center gap-10 mt-[2rem]">
            <img
              src={stellarFoundation}
              className="w-[70px] md:w-[100%]"
              alt="Stellar Foundation"
            />
            <img src={stellar} className="w-[70px] md:w-[100%]" alt="Stellar" />
          </div>
        </div>
      </div>

      <div
        className="px-[70px] absolute left-0 w-full bottom-0 mx-auto flex items-start justify-between mt-[35px] border-t border-b border-gray-600 py-6 overflow-hidden"
        style={{
          borderImageSource:
            "linear-gradient(124.28deg, rgba(14, 123, 178, 0.7) 24.51%, rgba(14, 123, 178, 0.3) 53.26%)",
          borderImageSlice: 1,
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          <p className="mr-10">Anchor Integration</p>
          <p className="mr-10">Multi-currency conversion</p>
          <p className="mr-10">Fiat-to-XLM and XLM-to-Fiat swaps</p>
          <p className="mr-10">Deposit, Withdraw, Save, Lend, Stake</p>
        </div>
      </div>

      {isModalOpen && (
        <RendBitWaitlistForm
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      )}

      <style>{`
      @keyframes marquee {
        0% {
        transform: translateX(100%);
        }
        100% {
        transform: translateX(-100%);
        }
      }
      .animate-marquee {
        animation: marquee 15s linear infinite;
      }
    `}</style>
    </div>
  );
};

export default Hero;
