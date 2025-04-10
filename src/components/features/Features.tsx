import React from "react";
import deposit_svg from "../../assets/svg/deposit.svg";
import swap_svg from "../../assets/svg/swap.svg";
import withdraw_svg from "../../assets/svg/withdraw.svg";
import ai_svg from "../../assets/svg/ai.svg";

const features = [
  {
    title: "Deposit",
    description:
      "Use a card, Apple Pay, Google Pay or PayPal to buy crypto fast. We also accept bank transfers and wires in applicable jurisdictions.",
    imagePosition: "left",
    image: deposit_svg,
    imageStyle: "mt-[-80px] sm:mt-[-100px]",
    titleStyle: "text-[70px] font-semibold mb-4 ",
    contentStyle: "",
  },
  {
    title: "Swap",
    description:
      "Swap between tokens, even if they’re on different chains, we make bridging seamless too.",
    imagePosition: "right",
    image: swap_svg,
    imageStyle: "mt-[-30px]",
    titleStyle: "text-[70px] font-semibold mb-4 ",
    contentStyle: "",
  },
  {
    title: "Withdraw",
    description:
      "Turn your crypto into cash in a flash. Get paid straight to your bank account, card or PayPal account.",
    imagePosition: "left",
    image: withdraw_svg,
    imageStyle: "mt-[0px]",
    titleStyle: "text-[70px] font-semibold mb-4 ",
    contentStyle: "",
  },
  {
    title: "AI Savings",
    description:
      "Our AI system analyses your spending pattern and suggest a saving structure for you, and help you save.",
    imagePosition: "right",
    image: ai_svg,
    imageStyle: "mt-[0px]",
    titleStyle: "text-[70px] font-semibold mb-4 justify-center",
    contentStyle: "justify-center item-center",
  },
];

const Features: React.FC = () => {
  return (
    <section
      className="text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          From cash to crypto – and back again.
        </h2>

        <div className="grid gap-20">
          {features.map((feature, index) => {
            const isImageLeft = feature.imagePosition === "right";

            return (
              <div
                key={index}
                className={`relative px-6 flex flex-col-reverse sm:flex-row ${
                  isImageLeft ? "" : "sm:flex-row-reverse"
                }  gap-8 rounded-2xl  bg-[#000D2C4D] border border-[#323b3f]`}
              >
                <div
                  className={`w-full sm:w-1/2 z-10 mt-7 pb-5 sm:text-left ${feature.contentStyle}`}
                >
                  <h3 className={`${feature.titleStyle}`}>{feature.title}</h3>
                  <p className="text-gray-300 mt-6 text-base">
                    {feature.description}
                  </p>
                </div>

                <div
                  className={`w-full  sm:w-1/2 relative z-0 flex ${feature.imageStyle}`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full object-contain`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
