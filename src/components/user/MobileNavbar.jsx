import React from "react";
import { HiXMark } from "react-icons/hi2";
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo3.png";

const MobileNavbar = ({ onClose }) => {
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="w-3/4 bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={Logo} alt="logo" />
          <HiXMark onClick={onClose} size={18} className="stroke-1" />
        </div>

        <ul className="flex  flex-col gap-8">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold active:text-textColor2"
            >
              <AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold active:text-textColor2"
            >
              <MdLocalLibrary />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold active:text-textColor2"
            >
              <AiFillDollarCircle />
              <span>Pricing</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileNavbar;
