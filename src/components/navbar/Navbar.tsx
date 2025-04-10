import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="text-white bg-[transparent] w-[1300px] mx-auto flex items-center justify-between mt-[35px]">
      <Link to="/" className="flex items-end gap-2">
        <img src="./image/logo.svg" alt="" />
        RendBit
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <Link to="/about">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">Features</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center">
        {/* Button wrapper with gradient border */}
        <div className="relative rounded-[13px] p-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 shadow-lg">
          {/* Glow effect for the border */}
          <div className="absolute inset-0 rounded-[13px] bg-cyan-300 blur-md opacity-40 -z-10"></div>

          {/* Actual button */}
          <button className="relative text-white font-bold bg-[#0E7BB2] py-3 px-6 rounded-[13px] transition-all duration-300">
            <span className="relative z-10">Get started</span>

            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-[13px] bg-blue-400 opacity-30 blur-sm -z-10"></div>
          </button>
        </div>
      </div>
      {/* <button className=''>Get Started</button> */}
    </div>
  );
};

export default Navbar;
