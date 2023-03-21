import React, { useEffect, useState } from "react";
import BookImage from "../../../assets/book-image.jpg";
import { GiCutDiamond } from "react-icons/gi";
const BookItem = ({ book, number }) => {
  const { title, mainImage, isFree, status, categories, bookAuthors } = book;

  const handleStatus = () => {
    if (status === "a") {
      setStatus({ cls: "bg-[#058F23]", text: "active" });
    } else {
      setStatus({ cls: "bg-[#C99206]", text: "pending" });
    }
  };
  const [currentStatus, setStatus] = useState({ cls: "", text: "" });

  useEffect(() => {
    handleStatus();
  }, [book]);

  return (
    <article className="grid grid-cols-12 border-b  py-6 items-center gap-4">
      <div className="col-span-1 text-textColor1 font-semibold">
        <img
          src={mainImage}
          className="max-w-[5rem] max-h-[7rem] object-cover"
        />
      </div>

      <div className="col-span-1">
        <span className="font-medium  rounded-full text-textColor1">
          {title}
        </span>
      </div>

      <div className="col-span-3  text-textColors1 font-medium whitespace-nowrap overflow-hidden ">
        {bookAuthors.map((author) => (
          <span key={author.id}>{author.name}</span>
        ))}
      </div>

      <div className="col-span-2   flex gap-2">
        <div className="w-1/2 bg-green-600 py-1 flex justify-center items-center rounded">
          {isFree ? (
            <span className="text-white text-sm">Free</span>
          ) : (
            <GiCutDiamond className="text-white" size={18} />
          )}
        </div>
        <span
          className={`w-1/2 py-1  text-white text-center rounded text-sm ${currentStatus.cls}`}
        >
          {currentStatus.text}
        </span>
      </div>
      <div className="col-span-3   flex gap-2 whitespace-nowrap overflow-hidden">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" border-2 border-slate-900 p-1 flex justify-center items-center rounded-full text-sm"
          >
            {category.name}
          </div>
        ))}
      </div>

      <button className=" col-span-1 btn_primary font-medium !py-1 ">
        Edit
      </button>
    </article>
  );
};

export default BookItem;
