import React from "react";
import { Link } from "react-router-dom";
import { BiCrown } from "react-icons/bi";
import PlayStore from "../../../assets/playstore.png";
import AppleStore from "../../../assets/applestore.png";
import Homebanner from "../../../assets/homebanner.png";
const MainHero = () => {
  return (
    <section className="bg-[#1f325e]   flex flex-col lg:flex-row items-center justify-between font-poppins">
      {/* First Col */}
      <div className="basis-1/2 px-10 lg:px-16 py-12 order-2 lg:order-1 flex flex-col items-center lg:items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          နေ့စဉ်စာ တစ်အုပ်ဖတ်ပါ{" "}
        </h1>
        <p className="text-white text-sm  lg:text-left md:text-lg  leading-9 mb-10 text-center">
          အဆီအနှစ်ထုတ်ထားတဲ့ Personal, Professional နဲ့ Business Development
          စာအုပ်များကို မြန်မာလို တစ်နေရာတည်းတွင် အချိန်မရွေး နေရာမရွေး
          ဖတ်ရှု့နိုင်ပါသည်။
        </p>
        <Link
          className=" flex flex-nowrap items-center justify-center btn_primary gap-4 !py-3 max-w-[20rem]  w-full font-semibold text-base  lg:text-lg mb-8 text-textColor1"
          to="/pricing"
        >
          <BiCrown />
          <span className="whitespace-nowrap">Subscribe to Premium</span>
        </Link>
        <div className="flex gap-8 ">
          <img src={PlayStore} alt="playstore" />
          <img src={AppleStore} alt="applestore" />
        </div>
      </div>
      {/* Second Col */}
      <div className="basis-1/2   border-red-700 w-full order-1 lg:order-2">
        <div className="pt-20 flex justify-end">
          <img
            src={Homebanner}
            alt="a lady with laptop"
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
