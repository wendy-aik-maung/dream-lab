import React from "react";
import { HiXMark } from "react-icons/hi2";
import {
  AiFillHome,
  AiFillDollarCircle,
  AiTwotoneAppstore,
} from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo3.png";
import { FaSearch } from "react-icons/fa";

const MobileNavbar = ({ onClose }) => {
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[320px] bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={Logo} alt="logo" />
          <HiXMark onClick={onClose} size={18} className="stroke-1" />
        </div>

        <ul className="flex  flex-col gap-8">
          <li>
            <div className="flex  items-center px-3 py-4 bg-[#d9f9ff] gap-4 rounded-full ">
              <FaSearch
                size={18}
                className="stroke-2 fill-dreamLabColor1 shrink-0"
              />

              <input
                type="text"
                placeholder="Search Here"
                className="bg-transparent focus:outline-none shrink"
              />
            </div>
          </li>
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
              <AiTwotoneAppstore />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
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
