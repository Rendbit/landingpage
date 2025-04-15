import React from "react";
import Features from "../../components/features/Features";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import Hero from "../../components/hero/Hero";
import { FiTarget } from "react-icons/fi";
import tag_user from "../../assets/svg/tag-user.svg";
import mission from "../../assets/svg/mission.svg";
import success_check from "../../assets/img/success_check.png";
import stellar from "../../assets/svg/Stellar_(XLM).svg";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-white">
        <Hero />
        <div className="mt-[50px] md:mt-[200px]">
          <WhyChooseUs />
        </div>

        <div className="mx-6 pt-5" id="about">
          <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between border border-gray-600 rounded-[20px] py-10 px-6 md:px-15 mt-[70px] gap-10">
            <div className="flex-1">
              <p className="text-[30px] md:text-[50px] leading-[35px] md:leading-[50px] mb-6 font-semibold">
                Stellar XLM as a bridge on RendBit
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Stellar XLM is an efficient blockchain network designed for
                fast, low-cost cross-border transactions. On RendBit, Stellar
                serves as a powerful bridge currency, enabling seamless value
                transfers between users, regardless of their local currency or
                payment method. RendBit offers instant conversions, reduces
                reliance on traditional banking systems, and facilitates secure,
                transparent, and scalable transactions across borders.
              </p>
            </div>

            <img
              src="./image/00021.svg"
              alt="Stellar XLM Illustration"
              className="w-full md:w-[700px] max-w-full flex-1"
            />
          </div>
        </div>

        <div className="mx-6">
          <div className="w-full  max-w-[1300px] mx-auto border border-gray-600 rounded-[20px] py-10 px-6 md:px-15 mt-[70px]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <p className="text-[30px] md:text-[50px] leading-[35px] md:leading-[50px] md:w-[50%] font-semibold">
                RendBit offers its own token launchpad
              </p>
              <div className="w-full md:w-[50%]">
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Rendbit offers an integrated token launchpad powered by the
                  Stellar (XLM) blockchain, ensuring fast, secure, and scalable
                  token creation. With minimal fees and instant transactions,
                  creators and projects can effortlessly mint, manage, trade,
                  and distribute their own custom tokens.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 font-medium">Token Creation</p>
                <img
                  src="./image/00031.svg"
                  alt="Token Creation"
                  className="w-[100px]"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 font-medium">Token Trading</p>
                <img
                  src="./image/00041.svg"
                  alt="Token Trading"
                  className="w-[100px]"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 font-medium">Token Management</p>
                <img
                  src="./image/00051.svg"
                  alt="Token Management"
                  className="w-[100px]"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-[200px] lg:max-w-[1200px] md:w-[100%] mx-auto px-[16px] md:px-[40px]">
          <div className="flex items-start justify-start flex-col md:flex-row">
            <div className="text-white md:w-[300px] w-full md:mx-auto md:mt-[12rem] mt-[6rem] mb-7">
              <p className="font-[500] leading-[42px] text-[25px] md:text-[40px] mb-4">
                NO MONTHLY CHARGES.
              </p>
              <p className="leading-[20px] text-[14px] md:text-[16px] font-[300] text-[#ffffff]">
                Create a savings account in USD and get 3-7% yearly interest,
                paid daily. You can track your earnings & add or withdraw money
                anytime.
              </p>
            </div>
            <div
              className={`md:mx-auto border border-[#B2B2B27A] lg:p-6 p-3 md:w-[400px] w-full mt-6 md:hidden block`}
            >
              <div className="flex items-center mb-4">
                <img src={stellar} alt="USD Coin" className="h-6 w-6 mr-2" />
                <h2 className="text-[#ffffff]">Lumen</h2>
              </div>
              <div className="my-[3rem]">
                <div className="inline-flex items-center gap-1 py-2 lg:px-4 px-2 bg-[#899EFD1A] rounded-[4px]">
                  <img src={tag_user} alt="" />
                  <p className="text-white text-[10px]">9143 Participants</p>
                </div>
                <div className="mb-2 mt-[2.5rem]">
                  <span className="text-[70px] text-[#ffffff] leading-[26px]">
                    4%
                  </span>
                  <span className="text-2xl">APY</span>
                </div>
                <div className="mb-6">
                  <p className="text-[#ffffff] text-[12px] lg:text-[16px] font-[300]">
                    With yXLM asset
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-white w-full text-black lg:px-6 px-3 py-2 rounded-lg font-semibold text-[12px] lg:text-[16px]">
                  Earn with yXLM &rarr; (Coming soon)
                </button>
              </div>
            </div>
            <div className="mx-auto border border-[#B2B2B27A] md:w-[500px] w-full rounded-[8px] hidden md:block">
              <div className="flex items-center mb-4">
                <img
                  src={mission} // Replace with the appropriate URL of the USD Coin logo
                  alt="USD Coin"
                  className="rounded-t-[8px]"
                />
              </div>
              <div className={`mt-[2rem] mb-[3rem] `}>
                <p className="text-[#4BAC0D] text-center text-[20px]">
                  Transaction Successful !
                </p>
                <p className="font-[300] text-center text-[#919090] mt-8">
                  The receiver received:
                </p>
                <p className="text-[#ffffff] text-center font-[500] mt-4">
                  2.00000 XLM (Fee: 0.1500 XLM)
                </p>

                <div className="mb-6 px-[4.5rem] mt-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[#ffffff] font-[300]">Coin</p>
                    <div className="flex items-center gap-1">
                      <img src={stellar} alt="" />
                      <p className="text-[#ffffff]">Stellar Lumen</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#ffffff] font-[300]">Address</p>
                    <p className="text-primary-color">
                      0xe4iJ78ufP9kwH56...k8Ty
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#ffffff] font-[300]">Network</p>
                    <p className="text-[#ffffff]">Stellar Classic Network</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#ffffff] font-[300]">Source</p>
                    <p className="text-[#ffffff]">Spot wallet</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-[4rem] pb-10">
                <button
                  className={` bg-primary-color w-full text-white lg:px-6 px-3 py-2 rounded-lg text-[12px] lg:text-[16px]`}
                >
                  Go to wallet
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 lg:max-w-[1600px] md:w-[100%] mx-auto px-[16px] md:px-[40px]">
          <div className="flex items-start justify-center flex-col-reverse md:flex-row">
            <div
              className={` mx-auto border border-[#B2B2B27A] w-[500px] rounded-[8px] hidden md:block`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={success_check}
                  alt="USD Coin"
                  className="rounded-t-[8px] w-[150px] mx-auto mt-12"
                />
              </div>
              <div className="mt-[2rem] mb-[3rem]">
                <p className="text-[#ffffff] font-[300] text-center text-[20px]">
                  Saving successful
                </p>
                <p className="text-[#ffffff] text-center font-[500] text-[30px] mt-4">
                  0.05456788 XLM
                </p>

                <div className="mb-6 px-[4.5rem] mt-10 flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-[#ffffff]">
                    <FiTarget />
                    <p>Summary</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#ffffff] font-[300]">Save date:</p>
                    <p className="text-[#ffffff]">March 31, 2025</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#ffffff] font-[300]">Value date:</p>
                    <p className="text-[#ffffff]">March 31, 2025</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#ffffff] font-[300]">
                      Interest end date:
                    </p>
                    <p className="text-[#ffffff]">March 31, 2025</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#ffffff] font-[300]">
                      Redemption period:
                    </p>
                    <p className="text-[#ffffff]">March 31, 2025</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#ffffff] font-[300]">
                      Redemption date:
                    </p>
                    <p className="text-[#ffffff]">March 31, 2025</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-[4rem] pb-10 flex-col gap-2">
                <button className="bg-primary-color w-full text-white lg:px-6 px-3 py-2 rounded-lg text-[12px] lg:text-[16px]">
                  Go to wallet
                </button>
                <button className="border border-primary-color w-full text-primary-color lg:px-6 px-3 py-2 rounded-lg text-[12px] lg:text-[16px]">
                  Monitor Savings
                </button>
              </div>
            </div>
            <div className="md:mx-auto border border-[#B2B2B27A] lg:p-6 p-3 md:w-[400px] w-full mt-6 md:hidden block">
              <div className="flex items-center mb-4">
                <img src={stellar} alt="USD Coin" className="h-6 w-6 mr-2" />
                <h2 className="text-[#ffffff]">Lumen</h2>
              </div>
              <div className="my-[3rem]">
                <div className="inline-flex items-center gap-1 py-2 lg:px-4 px-2 bg-[#899EFD1A] rounded-[4px]">
                  <img src={tag_user} alt="User" />
                  <p className="text-white text-[10px]">9143 Participants</p>
                </div>
                <div className="mb-2 mt-[2.5rem]">
                  <span className="text-[70px] text-[#ffffff] leading-[26px]">
                    4%
                  </span>
                  <span className="text-2xl">APY</span>
                </div>
                <div className="mb-6">
                  <p className="text-[#ffffff] text-[12px] lg:text-[16px] font-[300]">
                    With yXLM asset
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-white w-full text-black lg:px-6 px-3 py-2 rounded-lg font-semibold text-[12px] lg:text-[16px]">
                  Earn with yXLM &rarr; (Coming soon)
                </button>
              </div>
            </div>
            <div className="text-white md:w-[300px] w-full md:mx-auto md:mt-[12rem] mt-[6rem] mb-7">
              <p className="font-[500] leading-[42px] text-[25px] md:text-[40px] mb-4">
                INVEST IN THE FUTURE.
              </p>
              <p className="leading-[20px] text-[14px] md:text-[16px] font-[300]">
                Create a savings account in USD and get 3-7% yearly interest,
                paid daily. You can track your earnings & add or withdraw money
                anytime.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <Features />
      </div>
    </div>
  );
};

export default Home;
