import React from "react";
import { useGetPopularBooks } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";

import BookSwiper from "./BookSwiper";

const PopularBooks = () => {
  const { isLoading, data } = useGetPopularBooks();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="font-poppins px-2 md:px-6 lg:px-20  pb-20 text-textColor1">
      <h2 className="text-2xl lg:text-3xl text-center font-semibold mb-12">
        Popular Books
      </h2>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <BookSwiper data={data} />
      )}
    </section>
  );
};

export default PopularBooks;
