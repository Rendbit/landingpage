import React from "react";
import bg_video from "../../assets/video.mp4";
import nigeria from "../../assets/svg/Nigeria.svg";
import xlm from "../../assets/svg/Stellar_(XLM).svg";
import { IoChevronDown } from "react-icons/io5";

const Hero: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-between">
        <main className="md:px-[64px] mt-[150px] px-[16px] flex items-center lg:max-w-[1400px] w-[100%] mx-auto flex-col md:flex-row">
          <div className="md:mt-[2rem]">
            <p className="home-text-gradient lg:text-[72px] md:text-[52px] text-[45px] font-[600] md:w-[400px] md:leading-[68px] leading-[45px]">
              Earn, Save, Spend
            </p>
            <p className="text-[#ffffff] lg:text-[72px] md:text-[52px] text-[45px] font-[600]">
              Like A Boss.
            </p>
            <p className="text-[#ffffff] md:w-[70%] font-[300]">
              Be part of the early Users of Rendbit, receive relevant
              information on time. Facilitate seamless cross-border payments
              between African countries using stellar XLM as the currency
              bridge. Join now
            </p>
            <button className="cursor-pointer mt-3 px-[20px] py-[10px] border rounded-[10px] bg-gradient-to-r from-black to-gray-800">
              Join Wait-list
            </button>
          </div>
          <div className="flex justify-center items-center rounded-[11px] mt-9 flex-col">
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
                <button className="bg-[#0E7BB2] text-white p-3 rounded-lg w-full mt-[1rem]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div
        className="px-[70px] absolute left-0 w-full bottom-0 mx-auto flex items-start justify-between mt-[35px] border-t border-b border-gray-600 py-6"
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
