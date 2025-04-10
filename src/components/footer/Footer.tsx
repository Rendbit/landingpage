import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-[#000D2C] text-white py-10 px-20">
      <p> &copy; 2025 Rendbit. All right reserved.</p>
      <div className="flex items-center justify-between w-[400px]">
        <div className="flex items-center justify-between gap-3">
          <Link to="#">Login</Link>
          <p>-</p>
          <Link to="#">Sign Up</Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Link to="#">Privacy</Link>
          <p>-</p>
          <Link to="#">Terms</Link>
        </div>
      </div>
      <BsTwitterX />
    </div>
  )
};
export default Footer;
