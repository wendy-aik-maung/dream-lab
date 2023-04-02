import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetBooksByAdmin } from "../../../hooks/useBooks";
import BookItem from "./BookItem";
import Pagination from "../../../components/admin/Pagination";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import { useGetBookAuthor } from "../../../hooks/useAuthors";

const sortingOptions = [
  { value: "l", label: "Latest" },
  { value: "o", label: "Oldest" },
  { value: "a", label: "A-Z" },
];

const statusOptions = [
  {
    value: "",
    label: "All Status",
  },
  {
    value: "a",
    label: "Active",
  },
  {
    value: "p",
    label: "Pending",
  },
];
const pricingOptions = [
  {
    value: "",
    label: "All Pricing",
  },
  {
    value: "0",
    label: "Premium",
  },
  {
    value: "1",
    label: "Free",
  },
];

const BookIndex = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sorting, setSorting] = useState({ value: "l", label: "Latest" });
  const [status, setStatus] = useState({ value: "", label: "All Status" });
  const [author, setAuthor] = useState({ value: "", label: "All Authors" });
  const [authorOptions, setAuthorOptions] = useState([
    { value: "", label: "All Authors" },
  ]);
  const [isFree, setIsFree] = useState({ value: "", label: "All Pricing" });

  const {
    isLoading: authorLoading,
    data: authors,
    isSuccess: authorSuccess,
  } = useGetBookAuthor();

  const {
    data: books,
    isLoading,
    isSuccess,
  } = useGetBooksByAdmin(
    currentPage,
    "",
    search,
    status.value,
    author.value,
    isFree.value,
    sorting.value
  );

  useEffect(() => {
    if (isSuccess) {
      setPageCount(books.meta.totalPages);
    }
  }, [
    isSuccess,
    pageCount,
    currentPage,
    search,
    inputValue,
    sorting,
    status,
    author,
    isFree,
  ]);

  // sorting

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortingChange = (selectedOption) => {
    setSorting(selectedOption);
  };

  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption);
  };

  const handleAuthorChange = (selectedOption) => {
    setAuthor(selectedOption);
  };

  const handlePricingChange = (selectedOption) => {
    setIsFree(selectedOption);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  useEffect(() => {
    if (authorSuccess && isSuccess) {
      handleAuthorOptions();
    }
  }, [authorSuccess, isSuccess]);

  const handleAuthorOptions = () => {
    const tempArr = authors.map((author) => {
      return { value: author.id, label: author.name };
    });

    const finalArr = [{ value: "", label: "All Authors" }, ...tempArr];

    setAuthorOptions(finalArr);
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
      {isLoading || authorLoading ? (
        <div className="col-span-12 mt-8 flex justify-center items-center">
          <ClipLoader size={32} />
        </div>
      ) : (
        <section>
          <ul className="grid grid-cols-12 gap-4 ">
            <Select
              className="col-span-2"
              defaultValue={sorting}
              options={sortingOptions}
              onChange={handleSortingChange}
            />
            <Select
              className="col-span-2"
              defaultValue={status}
              options={statusOptions}
              onChange={handleStatusChange}
            />
            <Select
              className="col-span-2"
              defaultValue={author}
              options={authorOptions}
              onChange={handleAuthorChange}
            />
            <Select
              className="col-span-2"
              defaultValue={isFree}
              options={pricingOptions}
              onChange={handlePricingChange}
            />
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="border  focus:outline-none focus:border-black grid-cols-4 rounded h-full px-2"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </ul>
          <ul>
            {books.items.map((book, index) => (
              <BookItem key={book.slug} book={book} number={index + 1} />
            ))}
          </ul>
        </section>
      )}

      <Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
    </div>
  );
};

export default BookIndex;
