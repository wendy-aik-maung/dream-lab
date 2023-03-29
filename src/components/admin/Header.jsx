import React from "react";
import { BiBell } from "react-icons/bi";
import Logo from "../../assets/Icon.svg";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";
import { useUserDataContext } from "../../contexts/UserDataContext";

const Header = ({ children }) => {
  const { userData } = useUserDataContext();

  return (
    <nav className="fixed top-0 left-0 z-20  flex flex-row justify-between items-center w-full  h-20 bg-white shadow-lg md:pl-14 ">
      <Link to="/admin">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center font-bold">{children}</div>
      <div className="flex flex-row items-center gap-4  pr-2 md:pr-20 ">
        <div className="flex justify-center items-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-dreamLabColor1">
          <BiBell className=" text-white relative" size={24} />
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <figure>
            <img
              src={userData?.profileImage || ProfileImg}
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
          </figure>
          <h4 className="font-bold">Admin</h4>
        </div>
      </div>
    </nav>
  );
};

export default Header;
