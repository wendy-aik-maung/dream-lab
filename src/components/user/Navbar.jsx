import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  AiFillHome,
  AiFillDollarCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import SearchInput from "./SearchInput";
import Logo from "../../assets/Icon.svg";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import MobileNavbar from "./MobileNavbar";
import { useUserDataContext } from "../../contexts/UserDataContext";
import Profile from "../../assets/profile.png";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { setIsUserLoginModalOpen } = useLoginModalContext();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { userData, logout } = useUserDataContext();
  const dropDownRef = useRef();

  const handleUserDropDownOpen = () => {
    setIsUserDropdownOpen(true);
  };

  const handleUserDropDownClose = () => {
    setIsUserDropdownOpen(false);
  };

  const handleLoginModalOpen = () => {
    return setIsUserLoginModalOpen(true);
  };

  const handleMobileNavbarOpen = () => {
    return setIsMobileNavbarOpen(true);
  };

  const handleMobileNavbarClose = () => {
    return setIsMobileNavbarOpen(false);
  };

  useEffect(() => {
    const dropdown = document.addEventListener("click", (event) => {
      if (event.target !== dropDownRef.current) {
        handleUserDropDownClose();
      }
    });

    return () => document.removeEventListener("click", dropdown);
  }, []);

  return (
    <>
      <nav className="py-4 px-2 md:px-6  lg:px-12 flex justify-between items-baseline text-textColor1">
        <HiOutlineMenuAlt2
          className="text-3xl block lg:hidden"
          onClick={handleMobileNavbarOpen}
        />
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8 ml-8">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold hover:text-textColor2"
            >
              <AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold hover:text-textColor2"
            >
              <MdLocalLibrary />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="flex items-center gap-2 font-semibold hover:text-textColor2"
            >
              <AiFillDollarCircle />
              <span>Pricing</span>
            </Link>
          </li>
        </ul>
        <SearchInput />
        {userData ? (
          <article className="my-auto pt-3 relative">
            <div
              className="flex items-center gap-4 cursor-pointer "
              onClick={handleUserDropDownOpen}
              ref={dropDownRef}
            >
              <img
                src={Profile}
                alt="profile picture"
                className="pointer-events-none"
              />
              <span className="hidden md:block overflow-x-hidden pointer-events-none">
                {userData?.displayname || userData?.email}
              </span>
            </div>

            {isUserDropdownOpen ? (
              <div className="absolute top-16 -left-[8rem] md:left-0  w-[10rem] bg-white border border-dreamLabColor2 rounded shadow-lg p-4 flex flex-col gap-4">
                <Link
                  to="/"
                  className="flex items-center  gap-2 text-[#54595F] font-medium hover:text-dreamLabColor2"
                >
                  <BsPerson size={18} />
                  <span>Profile</span>
                </Link>
                <button
                  to="/"
                  className="flex items-center  gap-2 text-[#54595F] font-medium hover:text-dreamLabColor2"
                  onClick={logout}
                >
                  <AiOutlineLogout size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : null}
          </article>
        ) : (
          <button
            className="btn_primary flex items-center justify-center font-semibold rounded-xl text-sm lg:text-base"
            onClick={handleLoginModalOpen}
          >
            <RxPerson className="mr-2" size={18} />
            <span>Login</span>
          </button>
        )}
      </nav>
      {isMobileNavbarOpen ? (
        <MobileNavbar onClose={handleMobileNavbarClose} />
      ) : null}
    </>
  );
};

export default Navbar;
