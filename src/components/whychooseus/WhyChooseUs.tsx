import React from "react";
import why_choose_us_bg from "../../assets/svg/why_choose_us_bg.svg";
import world from "../../assets/svg/world_svg.svg";
import speed from "../../assets/svg/speed_svg.svg";
import desktop from "../../assets/svg/desktop_svg.svg";
import mobile from "../../assets/svg/mobile_svg.svg";

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="text-white py-20 px-4"
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">WHY SAVE WITH US</h2>
      </div>

      {/* Background image with overlayed content */}
      <div className="relative max-w-6xl mx-auto rounded-[40px] overflow-hidden">
        {/* Background image */}
        <img src={why_choose_us_bg} alt="Background" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 text-sm md:text-base">
            {/* Desktop & Mobile */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="flex h-[150px] gap-2 items-center justify-center">
                <img src={desktop} alt="Desktop" />
                <img src={mobile} alt="Mobile" />
              </div>
              <h3 className="font-semibold text-lg">Desktop & Mobile</h3>
              <hr className="w-full border-gray-500" />
              <p className="text-left">
                Manage your funds anytime and anywhere with our great mobile and
                web view. Track prices and stay up to date with markets.
              </p>
            </div>

            {/* Across African countries */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="h-[150px] flex items-center justify-center">
                <img src={world} alt="World" />
              </div>
              <h3 className="font-semibold text-lg">
                Across African countries
              </h3>
              <hr className="w-full border-gray-500" />
              <p className="text-left">
                Rendbit allows multiple African countries to carry out payment
                and swaps of currencies seamlessly.
              </p>
            </div>

            {/* Speed */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="h-[150px] flex items-center justify-center">
                <img src={speed} alt="Speed" />
              </div>
              <h3 className="font-semibold text-lg">Speed</h3>
              <hr className="w-full border-gray-500" />
              <p className="text-left">
                Rendbit is effective providing fast, low-cost cross border
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
