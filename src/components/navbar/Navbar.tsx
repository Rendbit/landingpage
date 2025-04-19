import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RendBitWaitlistForm from "../waitlistmodal/modal";
import { analytics, logEvent } from "../../tools/firebase";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="text-white bg-[transparent] w-full max-w-[1300px] mx-auto flex items-center justify-between mt-[35px] px-4 relative z-30">
      <a
        href="#home"
        onClick={() => {
          logEvent(analytics, "rendbit_logo");
        }}
        className="flex items-end gap-2 text-xl font-bold"
      >
        <img src="./image/logo.svg" alt="logo" />
        RendBit
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-12">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>

      {/* Get Started Button */}
      <div className="hidden md:flex justify-center items-center">
        <div className="relative rounded-[13px] p-0.5 bg-gradient-to-r from-cyan-300 to-[#0A1F35] shadow-lg">
          <div className="absolute cursor-pointer inset-0 rounded-[13px] bg-cyan-300 blur-md opacity-40 -z-10"></div>
          <a href="https://finance.rendbit.com/"
          onClick={() => {
            // toggleModal();
            logEvent(analytics, "rendbit_finance");
          }}>
          <button
            // onClick={() => {
            //   toggleModal();
            //   logEvent(analytics, "rendbit_waitlist_join_desktop_navbar");
            // }}
            className="relative cursor-pointer text-white font-bold bg-[#0A1F35] py-3 px-6 rounded-[13px] transition-all duration-300"
          >
            <span className="relative z-10">Get started</span>
            <div className="absolute inset-0 rounded-[13px] bg-[#0A1F35] opacity-30 blur-sm -z-10"></div>
          </button>
          </a>
        </div>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden z-40">
        {isOpen ? (
          <FaTimes
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0E7BB290]  z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A1F35] p-6 flex flex-col gap-6 text-lg font-semibold z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#home"
          onClick={() => {
            setIsOpen(false);
            logEvent(analytics, "rendbit_home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setIsOpen(false);
            logEvent(analytics, "rendbit_about");
          }}
        >
          About
        </a>
        <a
          href="#features"
          onClick={() => {
            setIsOpen(false);
            logEvent(analytics, "rendbit_features");
          }}
        >
          Features
        </a>
        <a
          href="https://finance.rendbit.com/"
          onClick={() => {
            // setIsOpen(false);
            // toggleModal();
            logEvent(analytics, "rendbit_finance");
          }}
        >
          <button
            className="bg-white cursor-pointer text-[#0A1F35] px-6 py-2 rounded-md mt-4 font-bold"
            // onClick={() => {
            //   // setIsOpen(false);
            //   // toggleModal();
            //   logEvent(analytics, "rendbit_waitlist_join_mobile_navbar");
            // }}
          >
            Get Started
          </button>
        </a>
      </div>

      {isModalOpen && (
        <RendBitWaitlistForm
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
