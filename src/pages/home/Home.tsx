import React from "react";
import Features from "../../components/features/Features";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import Hero from "../../components/hero/Hero";
import mission2 from "../../assets/img/mission2.png";
import save from "../../assets/img/save.png";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-white">
        <Hero />
        <div className="mt-[50px] md:mt-[400px]">
          <WhyChooseUs />
        </div>

        <div className="mx-6 pt-5" id="about">
          <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between border border-gray-600 rounded-[20px] py-10 px-6 md:px-15 mt-[70px] gap-10">
            <div className="flex-1">
              <p className="text-[30px] md:text-[50px] leading-[35px] md:leading-[50px] mb-6 font-semibold">
                Stellar XLM as a bridge on RendBit
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                With RendBit, sending money across African countries is seamless
                and hassle-free. You no longer need to worry about whether the
                recipient has an account in your country. RendBit ensures
                instant currency conversions, reducing dependency on traditional
                banking systems. Experience secure, transparent, and scalable
                cross-border transactions with ease.
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
                RendBit offers its own token launchpad (Coming Soon)
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

        <section className="mt-[200px] lg:max-w-[1200px] w-full mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Move Money Without Borders
              </h2>
              <p className="text-sm md:text-base font-light text-[#f1f1f1]">
                Send and receive funds globally—no foreign accounts, no
                headaches. Enjoy seamless transfers with little to no fees.
              </p>
            </div>
            <div className="w-full md:w-[480px] border border-[#2e2e2e] rounded-xl p-6 bg-[#121212]">
              <div className="mb-6 text-center">
                <img
                  src={mission2}
                  alt="Transaction Image"
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-teal-300 text-lg">Transfer Successful</p>
                <p className="text-sm text-gray-400 mt-2">
                  Amount received:
                </p>
                <p className="text-white text-xl font-semibold mt-2">
                  500 XLM credited to your recipient account
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 lg:max-w-[1200px] w-full mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full md:w-[480px] border border-[#2e2e2e] rounded-xl p-6 bg-[#121212]">
              <div className="mb-6 text-center">
                <img
                  src={save}
                  alt="Savings Card"
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-teal-300 text-lg">Savings Successful</p>
                <p className="text-white text-3xl font-bold mt-2">100 XLM</p>
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Smart Saving Starts Here
              </h2>
              <p className="text-sm md:text-base font-light text-[#f1f1f1]">
                Grow your savings in USD with daily interest payouts. Skip the
                bank queues—manage and track your assets in real time.
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
