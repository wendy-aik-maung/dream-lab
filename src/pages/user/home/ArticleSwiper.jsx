import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";

const dummyAuthors = ["Leon ", "Scott", "Kennedy", "Ashley"];

const ArticleSwiper = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      grabCursor={true}
      effect="fade"
      className="py-4 px-2"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="bg-[#F8F8FC] min-h-[28rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex flex-col"
        >
          <img
            src={item.mainImage}
            alt={item.title}
            className="w-full h-[15rem] object-contain"
          />
          <h3 className="mt-4 font-semibold text-lg mb-4">
            {item.title || "Testing Book title"}
          </h3>
          <span className="text-[#595959]">
            {item.articleAuthors.length > 0
              ? item.articleAuthors.reduce((prev, current, index) => {
                  if (index === 0) {
                    return current.name;
                  }

                  if (index === item.articleAuthors.length - 1) {
                    return prev + " and " + current.name;
                  } else {
                    return prev + " ," + current.name;
                  }
                }, "")
              : dummyAuthors.reduce((prev, current, index) => {
                  if (index === 0) {
                    return current;
                  }

                  if (index === dummyAuthors.length - 1) {
                    return prev + " and " + current;
                  } else {
                    return prev + " ," + current;
                  }
                }, "")}
          </span>
          <div className="mt-auto flex justify-between">
            <div className="flex items-center gap-2 text-[#595959]">
              <BsClock />
              <span>{item.readingTime}</span>
            </div>
            <Link to="/pricing" className="font-medium text-dreamLabColor1">
              Subscribe now
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArticleSwiper;
