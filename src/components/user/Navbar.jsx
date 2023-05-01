import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  AiFillHome,
  AiFillDollarCircle,
  AiOutlineLogout,
  AiTwotoneAppstore,
} from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
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
      <nav className="py-4 lg:py-6 px-2 md:px-6  lg:px-12 flex justify-between items-center text-textColor1 sticky top-0 bg-white z-40 shadow-md">
        <HiOutlineMenuAlt2
          className="text-3xl block xl:hidden mr-4 lg:ml-0"
          onClick={handleMobileNavbarOpen}
        />
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[8rem] lg:[10rem] object-cover"
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-8 ml-8">
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
              to="/library/books"
              className="flex items-center gap-2 font-semibold hover:text-textColor2"
            >
              <MdLocalLibrary />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className="flex items-center gap-2 font-semibold hover:text-textColor2"
            >
              <AiTwotoneAppstore />
              <span>Category</span>
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
          <article className="my-auto  relative">
            <div
              className="flex items-center gap-4 cursor-pointer "
              onClick={handleUserDropDownOpen}
              ref={dropDownRef}
            >
              <img
                src={userData?.profileImage || Profile}
                alt="profile picture"
                className="pointer-events-none w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <span className="hidden md:block overflow-x-hidden pointer-events-none">
                {userData?.displayName || userData?.email}
              </span>
            </div>

            {isUserDropdownOpen ? (
              <div className="absolute top-14   -left-[10rem] md:-left-[5rem]  w-[12rem] md:w-[14rem] bg-white border border-dreamLabColor2 rounded shadow-lg p-4 flex flex-col gap-4 z-40">
                <Link
                  to="/myaccount"
                  className="flex items-center  gap-2 text-[#54595F] font-medium hover:text-dreamLabColor2"
                >
                  <BsPerson size={18} />
                  <span className="text-sm md:text-base">My Account</span>
                </Link>
                <Link
                  to="/subscriptionplans"
                  className="flex items-center  gap-2 text-[#54595F] font-medium hover:text-dreamLabColor2"
                >
                  <BiCrown size={18} />
                  <span className="text-sm md:text-base">
                    Subscription Plans
                  </span>
                </Link>
                <button
                  to="/"
                  className="flex items-center  gap-2 text-[#54595F] font-medium hover:text-dreamLabColor2"
                  onClick={logout}
                >
                  <AiOutlineLogout size={18} />
                  <span className="text-sm md:text-base">Logout</span>
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
