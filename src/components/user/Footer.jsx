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
    <footer className="bg-dreamLabColor3 bg-opacity-10 font-poppins pt-8 py-4">
      <div className="pb-12 max-w-[1440px] mx-auto">
        <div className="grid items-baseline content-center sm:grid-cols-2 xl:grid-cols-4">
          {/* col-1 */}
          <div className="p-4">
            <img src={FooterLogo} alt="logo" className="object-contain" />
          </div>
          {/* col-2 */}
          <div className="p-4 ">
            <h2 className="mb-6 text-2xl font-semibold  text-dreamLabColor4">
              Get Started
            </h2>
            <ul className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max"
              >
                Books
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max"
              >
                Articles
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max"
              >
                Podcasts
              </Link>
              <Link
                href="/"
                className="text-lg font-medium  text-dreamLabColor4 w-max"
              >
                Blogs
              </Link>
            </ul>
          </div>
          {/* col-3 */}
          <div className="p-4">
            <h2 className="mb-6 text-2xl font-semibold  text-dreamLabColor4">
              Useful Links
            </h2>
            <ul className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max  "
              >
                Library
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max  "
              >
                Why Choose
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max  "
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="text-lg font-medium text-dreamLabColor4  w-max  "
              >
                About Us
              </Link>
            </ul>
          </div>
          {/* col-4 */}
          <div className="p-4">
            <h2 className="mb-6 text-2xl font-semibold   text-dreamLabColor4">
              Contact Us
            </h2>
            <ul className="mb-12">
              <li className="flex gap-4 items-center mb-6">
                <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-dreamLabColor1">
                  <MdPhoneInTalk className="fill-white" size={18} />
                </div>
                <span className="text-dreamLabColor4 font-semibold text-lg">
                  09794461888
                </span>
              </li>
              <li className="flex gap-4 items-center ">
                <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-dreamLabColor1">
                  <HiEnvelope className="fill-white" size={18} />
                </div>
                <span className="text-dreamLabColor4 font-semibold text-lg">
                  www.m.me/dreamlab.news
                </span>
              </li>
            </ul>
            <div className="flex">
              <h3 className="text-dreamLabColor4 font-semibold text-2xl mr-4">
                Follow Us
              </h3>
              <ul className="flex gap-4 items-center">
                <Link to="/">
                  <AiFillFacebook className="text-dreamLabColor1 text-3xl" />
                </Link>
                <Link to="/">
                  <AiFillInstagram className="text-dreamLabColor1 text-3xl" />
                </Link>
                <Link to="/">
                  <AiFillLinkedin className="text-dreamLabColor1 text-3xl" />
                </Link>
                <Link to="/">
                  <AiFillYoutube className="text-dreamLabColor1 text-3xl" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-textColor1">
            Copyright 2022 Dreamlabnews.All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
