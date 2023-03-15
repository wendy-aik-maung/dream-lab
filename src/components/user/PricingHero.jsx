import React from "react";
import Crown from "../../assets/Crown.png";
import Check from "../../assets/Check.png";
import { BiCrown } from "react-icons/bi";
const PricingHero = () => {
  return (
    <section className="bg-[#1f325e] px-2 md:px-6 lg:px-20 py-12 flex items-center justify-between">
      {/* first-col */}
      <div className="text-white relative">
        <img
          src={Crown}
          alt="crown"
          className="w-20 h-20 absolute -top-8 -left-8"
        />
        <div className="bg-dreamLabColor1 p-8 bg-opacity-10 rounded-[1rem] max-w-[480px] w-full">
          <h2 className="text-center text-3xl font-medium mb-10">
            Premium Features
          </h2>
          <ul className="flex flex-col gap-8">
            <li className="flex gap-6 items-center font-medium ">
              <BiCrown />
              <span className="text-xl">
                Go premium and get the best of books
              </span>
            </li>
            <li className="flex gap-6 items-center font-medium">
              <BiCrown />
              <span className="w-[90%] text-xl">
                မည်သည့် plan မဆို စိတ်တိုင်းမကျပါက တစ်ပတ်အတွင်း 100 % refund
              </span>
            </li>
          </ul>
          <div className=" absolute  bg-opacity-10 -right-[3rem] top-1/2 -translate-y-1/2  border-[1.5rem] border-l-[#1c3c6e]  border-t-transparent border-b-transparent border-r-transparent"></div>
        </div>
      </div>
      {/* second-col */}
      <div className="basis-1/2  p-4">
        <ul className="flex flex-col text-white gap-8">
          <li className="grid grid-cols-12 items-center">
            <div className="col-span-8"></div>
            <h3 className="col-span-2 font-semibold text-xl">FREE</h3>
            <h3 className="col-span-2 font-semibold text-xl">PREMIUM</h3>
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-8 text-[1.125rem]">
              Free Books, Articles, Podcasts , Videos
            </span>
            <img src={Check} alt="check" className="col-span-2" />
            <img src={Check} alt="check" className="col-span-2" />
          </li>
          <li className="grid grid-cols-12 ">
            <span className="col-span-8 text-[1.125rem]">Unlimited Books</span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" className="col-span-2" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-8 text-[1.125rem]">
              Unlimited Articles
            </span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-8 text-[1.125rem]">
              Unlimited Podcasts
            </span>
            <span className="col-span-2 pl-2  pt-1">-</span>
            <img src={Check} alt="check" />
          </li>
          <li className="grid grid-cols-12">
            <span className="col-span-8 text-[1.125rem]">Unlimited Videos</span>
            <span className="col-span-2 pl-2 pt-1">-</span>
            <img src={Check} alt="check" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PricingHero;
