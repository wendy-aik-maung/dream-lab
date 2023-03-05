import React from "react";
import { BiBell } from "react-icons/bi";

import Logo from "../../assets/Icon.svg";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";

const Header = ({ children }) => {
  return (
    <nav className="  flex flex-row justify-between w-full h-20 bg-white shadow-lg md:pl-14 ">
      <Link to="/admin">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center font-bold">{children}</div>
      <div className="flex flex-row gap-4  pr-2 md:pr-20 ">
        <div className="flex justify-center items-center">
          <BiBell className=" text-white  rounded-full  bg-dreamLabColor1 relative w-7 h-7 md:w-8 md:h-8" />
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <figure>
            <img src={ProfileImg} alt="" className="w-8 h-8 md:w-10 md:h-10" />
          </figure>
          <h4 className="font-bold">Admin</h4>
        </div>
      </div>
    </nav>
  );
};

export default Header;
