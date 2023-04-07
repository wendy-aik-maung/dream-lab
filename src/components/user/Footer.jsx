import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/Logo2.svg";
import { MdPhoneInTalk } from "react-icons/md";
import { HiEnvelope } from "react-icons/hi2";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-dreamLabColor3 bg-opacity-10 font-poppins pt-8 py-4 px-2 md:px-6  lg:px-12">
      <div className="pb-12  max-w-[1440px] mx-auto">
        <div className="flex justify-between md:items-center flex-col md:flex-row ">
          {/* col-1 */}

          <div>
            <img
              src={FooterLogo}
              alt="logo"
              className="w-[10rem] h-[10rem] object-cover mx-auto md:ml-0 mb-4 md:mb-0"
            />
          </div>

          {/* col-2 */}
          <div className="grid grid-cols-2  basis-2/3 grow xl:ml-[10rem] lg:ml-[5rem] md:ml-[2rem]">
            <div className="p-4 ">
              <h2 className="mb-6 text-base md:text-xl lg:text-2xl font-semibold  text-dreamLabColor4 ">
                Useful Links
              </h2>
              <ul className="grid grid-cols-2  gap-4 max-w-[320px] w-full mb-10">
                <Link
                  to="/"
                  className="lg:text-lg  md:text-base text-xs font-medium text-dreamLabColor4  w-max  "
                >
                  Home
                </Link>
                <Link
                  to="/library/books"
                  className="lg:text-lg md:text-base text-xs font-medium text-dreamLabColor4  w-max  "
                >
                  Library
                </Link>
                <Link
                  to="/pricing"
                  className="lg:text-lg md:text-base text-xs font-medium text-dreamLabColor4  w-max  "
                >
                  Pricing
                </Link>
                <Link
                  to="/category"
                  className="lg:text-lg md:text-base text-xs font-medium text-dreamLabColor4  w-max  "
                >
                  Category
                </Link>
              </ul>
              <div className=" flex md:items-center flex-col md:flex-row gap-2">
                <h3 className="text-dreamLabColor4 font-semibold text-base md:text-lg lg:text-2xl  mb-4 md:mb-0">
                  Follow Us
                </h3>
                <ul className="flex gap-4 items-center">
                  <Link to="/">
                    <AiFillFacebook className="text-dreamLabColor1 lg:text-3xl text-2xl" />
                  </Link>
                  <Link to="/">
                    <AiFillInstagram className="text-dreamLabColor1 lg:text-3xl text-2xl" />
                  </Link>
                  <Link to="/">
                    <AiFillLinkedin className="text-dreamLabColor1 lg:text-3xl text-2xl" />
                  </Link>
                  <Link to="/">
                    <AiFillYoutube className="text-dreamLabColor1 lg:text-3xl text-2xl" />
                  </Link>
                </ul>
              </div>
            </div>

            <div className="p-4 ">
              <h2 className="mb-6 text-base md:text-xl lg:text-2xl font-semibold   text-dreamLabColor4 ">
                Contact Us
              </h2>
              <ul className="mb-12">
                <li className="flex gap-4 items-center mb-6">
                  <div className="w-[20px] h-[20px] lg:w-[34px] lg:h-[34px] flex items-center justify-center rounded-full bg-dreamLabColor1 shrink-0">
                    <MdPhoneInTalk className="fill-white text-xs lg:text-lg" />
                  </div>
                  <span className="text-dreamLabColor4 font-semibold lg:text-lg md:text-base text-xs">
                    09794461888
                  </span>
                </li>
                <li className="flex gap-4 items-center ">
                  <div className="w-[20px] h-[20px] lg:w-[34px] lg:h-[34px] flex items-center justify-center rounded-full bg-dreamLabColor1 shrink-0">
                    <HiEnvelope className="fill-white text-xs lg:text-lg" />
                  </div>
                  <span className="text-dreamLabColor4 font-semibold lg:text-lg md:text-base text-xs">
                    www.m.me/
                    <br className="md:hidden block" />
                    dreamlab.news
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className=" px-4 text-textColor1 text-sm md:text-base lg:text-base text-center md:text-left">
            Copyright 2022 Dreamlabnews.All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
