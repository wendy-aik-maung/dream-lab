import React from "react";
import { useGetBooksByUsers } from "../../../hooks/useBooks";
import BookSwiper from "./BookSwiper";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const LatestBooks = () => {
  const { isLoading, data } = useGetBooksByUsers("", "", "", "", "", "", "l");

  return (
    <section className="font-poppins px-2 md:px-6 lg:px-20  py-20 text-textColor1">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl lg:text-3xl text-center font-semibold ">
          Latest Books
        </h2>
        <Link
          className="uppercase btn_primary font-semibold text-white !bg-dreamLabColor1"
          to="/library/books"
        >
          view more
        </Link>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <BookSwiper data={data.items} />
      )}
    </section>
  );
};

export default LatestBooks;
