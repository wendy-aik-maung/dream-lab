import React from "react";
import Crown from "../../../assets/Crown.png";
import Check from "../../../assets/Check.png";
import { BiCrown } from "react-icons/bi";
const PricingHero = () => {
  return (
    <section className="bg-[#1f325e] px-4 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
      {/* first-col */}
      <div className="text-white relative mb-12 xl:mb-0">
        <img
          src={Crown}
          alt="crown"
          className="w-16 h-16 xl:w-20 xl:h-20 absolute  -left-4  -top-8 xl:-left-8"
        />
        <div className="bg-dreamLabColor1 p-8 bg-opacity-10 rounded-[1rem]  lg:max-w-[420px] w-full">
          <h2 className="text-center md:text-2xl xl:text-3xl font-medium mb-5 lg:mb-10">
            Premium Features
          </h2>
          <ul className="flex flex-col gap-8">
            <li className="flex gap-6 items-center font-medium ">
              <BiCrown className="shrink-0" />
              <span className="text-base lg:text-xl shrink">
                Go premium and get the best of books
              </span>
            </li>
            <li className="flex gap-6 items-center font-medium">
              <BiCrown className="shrink-0" />
              <span className=" text-base lg:text-xl shrink">
                မည်သည့် plan မဆို စိတ်တိုင်းမကျပါက တစ်ပတ်အတွင်း 100 % refund
              </span>
            </li>
          </ul>
          <div className="hidden lg:block absolute  bg-opacity-10 -right-[3rem] top-1/2 -translate-y-1/2  border-[1.5rem] border-l-[#1c3c6e]  border-t-transparent border-b-transparent border-r-transparent"></div>
          <div className="lg:hidden block absolute  bg-opacity-10  -bottom-[3rem] left-1/2 -translate-x-1/2  border-[1.5rem] border-l-transparent  border-t-[#1c3c6e] border-b-transparent border-r-transparent"></div>
        </div>
      </div>
      {/* second-col */}
      <div className="basis-full lg:basis-1/2  p-2">
        <ul className="flex flex-col text-white gap-8">
          <li className="grid grid-cols-12 items-center">
            <div className="md:col-span-8 col-span-7"></div>
            <h3 className="col-span-2 font-semibold text-lg lg:text-xl">
              FREE
            </h3>
            <h3 className="col-span-2 font-semibold text-lg lg:text-xl">
              PREMIUM
            </h3>
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-7 md:col-span-8 text-sm md:text-[1.125rem]">
              Free Books, Articles,
              <br className="md:hidden" /> Podcasts , Videos
            </span>
            <img src={Check} alt="check" className="col-span-2 w-6 h-6" />
            <img src={Check} alt="check" className="col-span-2 w-6 h-6" />
          </li>
          <li className="grid grid-cols-12 ">
            <span className="col-span-7 md:col-span-8 text-sm md:text-[1.125rem]">
              Unlimited Books
            </span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" className="col-span-2 w-6 h-6" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-7 md:col-span-8 text-sm md:text-[1.125rem]">
              Unlimited Articles
            </span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" className="w-6 h-6" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-7 md:col-span-8 text-sm md:text-[1.125rem]">
              Unlimited Podcasts
            </span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" className="w-6 h-6" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-7 md:col-span-8 text-sm md:text-[1.125rem]">
              Unlimited Videos
            </span>
            <span className="col-span-2 pl-2 pt-1">-</span>
            <img src={Check} alt="check" className="w-6 h-6" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PricingHero;
