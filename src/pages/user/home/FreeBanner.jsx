import React from "react";
import Board from "../../../assets/Board.png";
import { FaBook, FaHeadphones, FaLongArrowAltRight } from "react-icons/fa";
import { MdArticle, MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
const freeArray = [
  {
    icon: <FaBook className="text-base lg:text-xl text-dreamLabColor3" />,
    text: "Free Books",
  },
  {
    icon: (
      <FaHeadphones className="text-base lg:text-xl  text-dreamLabColor3" />
    ),
    text: "Free Podcasts",
  },
  {
    icon: <MdArticle className="text-base lg:text-xl text-dreamLabColor3" />,
    text: "Free Articles",
  },
  {
    icon: (
      <MdVideoLibrary className="text-base lg:text-xl text-dreamLabColor3" />
    ),
    text: "Free Videos",
  },
];

const FreeBanner = () => {
  return (
    <section className="flex flex-col  px-2 md:px-6 lg:px-20 py-20 md:flex-row  justify-between font-poppins text-textColor1 ">
      <div className="basis-[45%] flex justify-center">
        <img src={Board} alt="board" />
      </div>
      <div className="basis-[45%] flex flex-col gap-8 py-4 items-center lg:items-start">
        <h2 className="font-semibold text-2xl lg:text-3xl ">Dream Lab FREE</h2>
        <p className=" text-base lg:text-lg">
          E-books are fun to read anywhere, anytime!
        </p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-8 mb-6">
          {freeArray.map((free) => (
            <div
              className="col-span-1 row-span-1 flex items-center gap-4"
              key={free.text}
            >
              <div className=" w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] flex justify-center items-center rounded-full bg-dreamLabColor3 bg-opacity-[20%]">
                {free.icon}
              </div>
              <span className="text-base lg:text-lg font-medium">
                {free.text}
              </span>
            </div>
          ))}
        </ul>
        <Link
          className="flex flex-nowrap items-center justify-center btn_primary gap-4 !py-3 max-w-[20rem]  w-full font-semibold text-base  lg:text-lg mb-8 text-textColor1"
          to="/library/books"
        >
          <span>Discover More</span>
          <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default FreeBanner;
