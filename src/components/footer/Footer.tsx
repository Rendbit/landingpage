import React from "react";
import { BsDashLg, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import useModal from "../../hooks/useModal";
import RendBitWaitlistForm from "../waitlistmodal/modal";

const Footer: React.FC = () => {
  const { openModal, isModalOpen } = useModal();
  return (
    <div className="bg-[#000D2C] text-white py-10 px-4 md:px-20">
      <footer className="lg:max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left text-[14px]">
        {/* Footer Copyright */}
        <p className="mb-5 md:mb-0">
          &copy; {new Date().getFullYear()} RendBit. All rights reserved.
        </p>

        {/* Links Section */}
        <div className="flex items-center gap-5 mb-5 md:mb-0">
          <div className="flex items-center gap-3">
            <a
              className="cursor-pointer"
              onClick={() => {
                openModal();
              }}
            >
              Join Waitlist
            </a>
            {/* <BsDashLg /> */}
            {/* <Link to="/create-account">Signup</Link> */}
          </div>
          <RxDividerVertical />
          <div className="flex items-center gap-3">
            <p>Privacy</p>
            <BsDashLg />
            <p>Terms</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-5 text-[20px]">
          <a
            href="https://www.linkedin.com/company/rendbit"
            target="_blank"
            className="text-white p-2 rounded-full hover:bg-[#0A1F35] transition-all"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/Rend_bit"
            target="_blank"
            className="text-white p-2 rounded-full hover:bg-[#0A1F35] transition-all"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://t.me/rendbit"
            target="_blank"
            className="text-white p-2 rounded-full hover:bg-[#0A1F35] transition-all"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </footer>

      {isModalOpen && <RendBitWaitlistForm />}
    </div>
  );
};

export default Footer;
