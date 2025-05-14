import React, { useEffect, useRef, useState } from "react";
import bg_video from "../../assets/video.mp4";
import nigeria from "../../assets/svg/Nigeria.svg";
import xlm from "../../assets/svg/Stellar_(XLM).svg";
import usdc from "../../assets/img/usd-coin-usdc-logo.png";
import stellar from "../../assets/svg/stellar.svg";
import stellarFoundation from "../../assets/svg/stellar-foundation.svg";
import { IoChevronDown } from "react-icons/io5";
import RendBitWaitlistForm from "../waitlistmodal/modal";
import { logEvent, analytics } from "../../tools/firebase";
import { getXlmConversionRates } from "../../utils";
import { toast } from "react-toastify";

const currencies = [
  {
    symbol: "NGN",
    displaySymbol: "NGN",
    name: "Naira",
    logo: nigeria,
  },
  {
    symbol: "USD",
    displaySymbol: "USDC",
    name: "Dollar",
    logo: usdc,
  },
];
const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [swap, setSwap] = useState<boolean>(false);
  const [swapping, setSwapping] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currencyAmount, setCurrencyAmount] = useState<number | string>("");
  const [rateExchangerate, setRateExchangerate] = useState<number | string>("");
  const [xlmRate, setXlmRate] = useState<number | string>("");
  const [slippage, setSlippage] = useState<number>(2.5);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleCurrencyChange = (currencySymbol: string) => {
    const currency = currencies.find((cur) => cur.symbol === currencySymbol);
    if (currency) {
      setSelectedCurrency(currency);
      setDropdownOpen(false);
      fetchXlmRate();
    }
  };

  useEffect(() => {
    if (!currencyAmount || !xlmRate) {
      setNext(false);
      setSwap(false);
    }
  }, [currencyAmount, xlmRate]);

  const fetchXlmRate = async (value?: number) => {
    if (currencyAmount || value) {
      setProcessing(true);
      try {
        const rate = await getXlmConversionRates(
          Number(currencyAmount || value),
          selectedCurrency.symbol
        );
        setXlmRate(rate.currencyToXlm);
        setRateExchangerate(rate.xlmToCurrency);
      } catch (error) {
        console.error("Error fetching XLM conversion rate:", error);
      } finally {
        setProcessing(false);
      }
    } else {
      setXlmRate("");
    }
  };

  const handleNairaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setCurrencyAmount(value);
    }
    if (!value) {
      setXlmRate("");
    }
  };

  const handleMax = (value: number) => {
    setCurrencyAmount(value);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleNext = () => {
    if (currencyAmount && xlmRate) {
      setNext(true);
    }
  };

  const formatNumberWithCommas = (number: number | string): string => {
    return Number(number).toLocaleString();
  };

  const handleSwap = () => {
    if (currencyAmount && xlmRate) {
      setSwap(true);
      setSwapping(true);
      console.log(swap);
      setTimeout(() => {
        setXlmRate("");
        setSlippage(2.5);
        setSwap(false);
        setNext(false);
        setSwapping(false);
        toast.success(
          `${selectedCurrency.displaySymbol} ${formatNumberWithCommas(
            currencyAmount
          )} swapped to XLM successfully.`
        );
        setCurrencyAmount("");
      }, 3000);
    }
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
        <main className="md:px-[64px] mt-[50px] px-[16px] flex items-center lg:max-w-[1400px] w-[100%] mx-auto flex-col md:flex-row">
          <div className="mt-[100px] md:mt-[2rem]">
            <p className="home-text-gradient lg:text-[62px] md:text-[52px] text-[45px] font-[600] md:w-[400px] md:leading-[68px] leading-[45px]">
              Build for You, Growing with You
            </p>
            <p className="text-[#ffffff] lg:text-[72px] md:text-[52px] text-[45px] font-[600]">
              Take control now
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
          <div className="flex justify-center mt-[300px] sm:mt-[100px] md:mt-9 items-center rounded-[11px]  flex-col">
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#000000] border border-[#B2B2B27A] py-6 sm:px-[40px] p-[15px] rounded-[8px]  lg:w-[500px] w-full">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className={`text-[#ffffff] text-[14px] font-[300] `}>
                      Swap
                    </p>
                    {/* <div className={`flex text-[14px] text-[#ffffff] `}>
                      <p className={`text-[#ffffff]`}>Balance:</p>
                      <span className="text-white">200.00</span>
                    </div> */}
                  </div>
                  <div className="flex justify-between mt-2 border border-[#B2B2B27A] rounded-[24px] p-2 items-center">
                    <div className="flex item-center gap-2">
                      <div
                        className="flex items-center bg-[#76748014] rounded-full p-2 cursor-pointer relative"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        <img
                          src={selectedCurrency.logo}
                          alt={selectedCurrency.name}
                          className="w-[20px]"
                        />
                        <p className="mr-2 ml-1 text-[14px]">
                          {selectedCurrency.displaySymbol}
                        </p>
                        <IoChevronDown className="text-white" />
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 bg-[#000000] border border-[#B2B2B27A] rounded-[8px] mt-2 w-full z-10">
                            {currencies.map((currency) => (
                              <div
                                key={currency.symbol}
                                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#1a1a1a]"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!swapping) {
                                    handleCurrencyChange(currency.symbol);
                                    setDropdownOpen(false);
                                  }
                                }}
                              >
                                <img
                                  src={currency.logo}
                                  alt={currency.name}
                                  className="w-[20px]"
                                />
                                <p className="text-[14px]">
                                  {currency.displaySymbol}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        type="number"
                        id="input-amount"
                        className="outline-none lg:w-1/2 w-full bg-transparent text-[#ffffff]"
                        placeholder="Enter amount"
                        value={currencyAmount}
                        disabled={swapping}
                        onChange={(e) => {
                          handleNairaChange(e);
                          if (typingTimeoutRef.current)
                            clearTimeout(typingTimeoutRef.current);
                          typingTimeoutRef.current = setTimeout(() => {
                            fetchXlmRate();
                          }, 500);
                        }}
                      />
                    </div>
                    <p
                      className="text-whitemr-3 text-[12px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!swapping) {
                          fetchXlmRate(300000);
                          handleMax(300000);
                        }
                      }}
                    >
                      Max
                    </p>
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <p className={`text-[#ffffff] text-[14px] font-[300] `}>
                      Receive amount
                    </p>
                  </div>
                  <div className="flex justify-between border border-[#B2B2B27A] rounded-[24px] p-2 items-center">
                    <div className="flex item-center gap-2">
                      <div className="flex items-center bg-[#76748014] rounded-full p-2">
                        <img src={xlm} className="w-[20px] mx-2" alt="" />
                        <p className="mr-2 ml-1 text-[14px]">XLM</p>
                        {/* <IoChevronDown className="text-white" /> */}
                      </div>
                      <input
                        type="number"
                        id="input-amount"
                        disabled
                        className="outline-none w-1/2 bg-transparent text-[#ffffff]"
                        placeholder="0.00345"
                        value={currencyAmount ? Number(xlmRate).toFixed(4) : ""}
                      />
                    </div>
                    {processing && currencyAmount && (
                      <p className="text-whitemr-3 text-[12px] cursor-pointer">
                        Loading...
                      </p>
                    )}
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
                    min={0.5}
                    max={5}
                    disabled={swapping}
                    value={slippage}
                    onChange={(e) => setSlippage(Number(e.target.value))}
                    className="w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                  />
                  <p className="text-[#ffffff] text-[14px] font-[300] text-center">
                    {slippage}%
                  </p>
                </div>

                {next ? (
                  <button
                    className="bg-gradient-to-r from-cyan-300 to-[#0A1F35] text-white p-3 rounded-lg w-full mt-[1rem] cursor-pointer"
                    disabled={!currencyAmount || !xlmRate || swapping}
                    onClick={() => {
                      handleSwap();
                      setTimeout(() => {
                        const starAnimation = document.createElement("div");
                        starAnimation.className =
                          "fixed top-0 left-0 w-full h-full z-50 pointer-events-none star-animation";
                        document.body.appendChild(starAnimation);

                        for (let i = 0; i < 50; i++) {
                          const star = document.createElement("div");
                          star.className = "star";
                          star.style.left = `${Math.random() * 100}%`;
                          star.style.top = `${Math.random() * 100}%`;
                          starAnimation.appendChild(star);
                        }

                        setTimeout(() => {
                          document.body.removeChild(starAnimation);
                        }, 5000);
                      }, 3000);
                    }}
                  >
                    {swapping ? "Processing..." : "Swap"}
                  </button>
                ) : (
                  <button
                    className="bg-gradient-to-r from-cyan-300 to-[#0A1F35] text-white p-3 rounded-lg w-full mt-[1rem] cursor-pointer"
                    disabled={!currencyAmount && !xlmRate}
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}

                <style>{`
                  .star-animation {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    pointer-events: none;
                  }

                  .star {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(0,255,255,0) 70%);
                    border-radius: 50%;
                    animation: star-move 5s ease-out forwards;
                  }

                  @keyframes star-move {
                    0% {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                    100% {
                      opacity: 0;
                      transform: scale(1.5) translateY(-50px);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        className={`flex md:flex-row-reverse flex-col mt-[50px] md:mt-[0px] md:px-[64px] px-[16px] items-end justify-between lg:max-w-[1400px] md:w-[100%] mx-auto`}
      >
        {next && (
          <div className="flex justify-center items-center w-full">
            <div className="py-4 px-[40px] rounded-[8px] lg:w-[500px] w-full bg-black mt-[1rem] border border-[#B2B2B27A] animate-fade-in">
              <p className="text-[14px] text-[#ffffff] border-b border-[#CFCFCF] pb-2">
                {selectedCurrency.displaySymbol}{" "}
                {formatNumberWithCommas(currencyAmount)} = XLM{" "}
                {formatNumberWithCommas(xlmRate)}
              </p>
              <div className="flex flex-col gap-[8px] mt-5">
                <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                  <p>Slippage</p>
                  <p>{slippage}%</p>
                </div>
                <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                  <p>Exchange Rate</p>
                  <p>
                    1 {selectedCurrency.displaySymbol} ={" "}
                    {Number(formatNumberWithCommas(rateExchangerate)).toFixed(
                      4
                    )}{" "}
                    XLM
                  </p>
                </div>
                <div className="flex items-center justify-between text-[14px] text-[#ffffff]">
                  <p>Transaction Cost</p>
                  <p>~XLM 0.0000001</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
        <div className="w-full md:mr-[20rem] md:mt-0 mt-10 ">
          <p
            className={`text-[#ffffff] ${
              !next && "mt-5"
            } uppercase tracking-[8.319px] self-end font-[500]`}
          >
            Supported by:
          </p>
          {!next ? (
            <div className="flex items-center gap-10 mt-[2rem]">
              <img
                src={stellarFoundation}
                className="w-[200px]"
                alt="Stellar Foundation"
              />
              <img src={stellar} className="w-[200px]" alt="Stellar" />
            </div>
          ) : (
            <div className="flex items-center gap-10 mt-[2rem]">
              <img
                src={stellarFoundation}
                className="w-[70px] md:w-[100%]"
                alt="Stellar Foundation"
              />
              <img
                src={stellar}
                className="w-[70px] md:w-[100%]"
                alt="Stellar"
              />
            </div>
          )}
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
