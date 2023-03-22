import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetBooksByAdmin } from "../../../hooks/useBooks";
import BookItem from "./BookItem";
import Pagination from "../../../components/admin/Pagination";
import { ClipLoader } from "react-spinners";
const BookIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const {
    data: books,
    isLoading,
    isSuccess,
  } = useGetBooksByAdmin(currentPage, "", "", "", "", "", "l");

  useEffect(() => {
    if (isSuccess) {
      setPageCount(books.meta.totalPages);
    }
  }, [isSuccess]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-between font-poppins mb-8">
        <h2 className="text-2xl font-bold text-textColor1">Uploaded Books</h2>
        <Link
          to={"/admin/books/create"}
          className="btn_primary flex gap-2 items-center justify-center font-medium w-[15rem]"
        >
          <AiFillPlusCircle size={18} />
          <span>Create Book</span>
        </Link>
      </header>
      {isLoading ? (
        <div className="col-span-12 mt-8 flex justify-center items-center">
          <ClipLoader size={32} />
        </div>
      ) : (
        <ul>
          {books.items.map((book, index) => (
            <BookItem key={book.slug} book={book} number={index + 1} />
          ))}
        </ul>
      )}

      <Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
    </div>
  );
};

export default BookIndex;
