import React from "react";
import why_choose_us_bg from "../../assets/svg/why_choose_us_bg.svg";
import world from "../../assets/svg/world_svg.svg";
import speed from "../../assets/svg/speed_svg.svg";
import desktop from "../../assets/svg/desktop_svg.svg";
import mobile from "../../assets/svg/mobile_svg.svg";
import { motion } from "framer-motion";

const WhyChooseUs: React.FC = () => {
  return (
    <div>

    <section className="text-white hidden md:block  py-20 px-4">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">WHY SAVE WITH US</h2>
      </div>

      {/* Background image with overlayed content */}
      <div className="relative max-w-6xl mt-[-50px] md:mt-[0px] mx-auto rounded-[40px] overflow-hidden">
        {/* Background image */}
        <img
          src={why_choose_us_bg}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
            {/* Desktop & Mobile */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 px-2"
            >
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
            </motion.div>

            {/* Across African countries */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 px-2"
            >
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
            </motion.div>

            {/* Speed */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 px-2"
            >
              <div className="h-[150px] flex items-center justify-center">
                <img src={speed} alt="Speed" />
              </div>
              <h3 className="font-semibold text-lg">Speed</h3>
              <hr className="w-full border-gray-500" />
              <p className="text-left">
                Rendbit is effective in providing fast, low-cost cross-border
                transactions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="block md:hidden text-gray-100 py-12 md:py-20 px-4 md:px-6">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-14">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
        >
          WHY SAVE WITH US
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-cyan-400 mx-auto"
        ></motion.div>
      </div>

      {/* Cards Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Desktop & Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-xl p-6 md:p-8 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex h-28 md:h-36 gap-3 items-center justify-center mb-4">
              <img 
                src={desktop} 
                alt="Desktop" 
                className="w-16 md:w-20 filter brightness-0 invert" 
              />
              <img 
                src={mobile} 
                alt="Mobile" 
                className="w-10 md:w-14 filter brightness-0 invert" 
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 text-cyan-400 text-center">Desktop & Mobile</h3>
            <div className="w-16 h-0.5 bg-cyan-500 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
              Manage your funds anytime and anywhere with our great mobile and
              web view. Track prices and stay up to date with markets.
            </p>
          </motion.div>

          {/* Across African countries */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-xl p-6 md:p-8 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="h-28 md:h-36 flex items-center justify-center mb-4">
              <img 
                src={world} 
                alt="World" 
                className="w-24 md:w-32 filter brightness-0 invert" 
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 text-cyan-400 text-center">
              Across African countries
            </h3>
            <div className="w-16 h-0.5 bg-cyan-500 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
              Rendbit allows multiple African countries to carry out payment
              and swaps of currencies seamlessly.
            </p>
          </motion.div>

          {/* Speed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-xl p-6 md:p-8 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="h-28 md:h-36 flex items-center justify-center mb-4">
              <img 
                src={speed} 
                alt="Speed" 
                className="w-24 md:w-32 filter brightness-0 invert" 
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 text-cyan-400 text-center">Speed</h3>
            <div className="w-16 h-0.5 bg-cyan-500 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
              Rendbit is effective in providing fast, low-cost cross-border
              transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default WhyChooseUs;



