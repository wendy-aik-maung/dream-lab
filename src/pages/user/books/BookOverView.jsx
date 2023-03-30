import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetPopularBooks,
  useGetRecommendedBooks,
  useGetSingleBookByUser,
} from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";
import { getToken } from "../../../utils/getToken";
import { BiArrowBack, BiCrown } from "react-icons/bi";
import { stringConcat } from "../../../utils/stringConcat";
import { BsBook, BsClock } from "react-icons/bs";

const dummyAuthors = [
  { name: "Leon" },
  { name: "Scott" },
  { name: "Kennedy" },
  { name: "Ashley" },
];

const BookOverView = () => {
  const { slug } = useParams();

  // const { isLoading: recommendedLoading, data: recommendedBooks } =
  //   useGetRecommendedBooks();

  const { isLoading: popularLoading, data: popularBooks } =
    useGetPopularBooks();

  const {
    isLoading: singleBookLoading,
    data: singleBook,
    isError,
    error: singleBookError,
    refetch: singleBookRefetch,
  } = useGetSingleBookByUser(slug);

  if (singleBookLoading || popularLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <ClipLoader color="black" size={48} />
      </div>
    );
  }

  const token = getToken();

  if (token) {
    singleBookRefetch();
  }

  console.log(popularBooks);

  return (
    <section>
      {!singleBookLoading && singleBook === "Unauthorized" ? (
        <div className="flex h-[50vh] flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-dreamLabColor1 mb-12">
            Please Login To Continue
          </h2>
        </div>
      ) : (
        <div className="px-4 lg:px-12 py-12">
          <header className=" flex gap-12  font-poppins font-bold text-xl mb-8">
            <Link
              to={"/library/books"}
              className="flex items-center text-dreamLabColor3"
            >
              <BiArrowBack />
              <span className="pl-2"> Back</span>
            </Link>
          </header>
          {/* main row */}
          <div className="flex justify-between">
            {/* first col */}
            <div className="basis-2/3 flex flex-col">
              <div className="flex gap-8">
                <img
                  src={singleBook.mainImage}
                  alt={singleBook.title}
                  className="w-[240px] h-[300px] object-cover"
                />
                {/* title , author,reading time and pages */}
                <div>
                  <h2 className="text-2xl text-textColor1 font-semibold mb-4">
                    {singleBook.title}
                  </h2>
                  <p className="text-lg text-[#595959] mb-4">
                    by {stringConcat(singleBook.bookAuthors)}
                  </p>
                  <div className="flex justify-between max-w-[320px] mb-8">
                    <span className="text-sm text-[#595959] flex items-center gap-2">
                      <BsBook size={16} />
                      {singleBook.page}{" "}
                      {Number(singleBook.page) === 1 ? "page" : "pages"}
                    </span>
                    <span className="text-sm text-[#595959] flex items-center gap-2">
                      <BsClock size={16} />
                      {singleBook.readingTime}
                    </span>
                  </div>
                  {singleBook.hasAccess ? (
                    <Link
                      className=" flex flex-nowrap !bg-dreamLabColor1 items-center justify-center btn_primary gap-4 !py-2 max-w-[20rem]  w-full font-semibold text-base  lg:text-lg mb-8 text-white"
                      to={`/books/${slug}/bookdetails`}
                    >
                      <BiCrown />
                      <span className="whitespace-nowrap">Read Now</span>
                    </Link>
                  ) : (
                    <Link
                      className=" flex flex-nowrap !bg-dreamLabColor1 items-center justify-center btn_primary gap-4 !py-2 max-w-[20rem]  w-full font-semibold text-base  lg:text-lg mb-8 text-white"
                      to="/pricing"
                    >
                      <BiCrown />
                      <span className="whitespace-nowrap">Subscribe Now</span>
                    </Link>
                  )}
                </div>
              </div>
              {/* category */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-textColor1 mb-4">
                  What is it about?
                </h3>
                <ul className="flex  gap-4">
                  {singleBook.categories.map((category) => (
                    <CategoryCard category={category} key={category.key} />
                  ))}
                </ul>
              </div>
              {/* book overview */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-textColor1 mb-4">
                  Book Overview
                </h3>
                <p>{singleBook.shortDesc}</p>
              </div>
            </div>
            {/* second col */}
            <div className="basis-1/3  grow flex flex-col items-center">
              <h2 className="font-semibold text-lg mb-8">Popular Books</h2>

              <ul className="grid grid-cols-2 gap-2">
                {popularBooks.map((popularbook) => (
                  <article
                    key={popularbook.id}
                    className="bg-[#F8F8FC] min-h-[28rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex flex-col"
                  >
                    <img
                      src={popularbook.mainImage}
                      alt={popularbook.title}
                      className="w-full h-[15rem] object-contain"
                    />
                    <h3 className="mt-4 font-semibold text-lg mb-4">
                      {popularbook.title || "Testing Book title"}
                    </h3>
                    <span className="text-[#595959]">
                      {popularbook.bookAuthors.length > 0
                        ? stringConcat(popularbook.bookAuthors)
                        : stringConcat(dummyAuthors)}
                    </span>
                    <div className="mt-auto flex justify-between">
                      <div className="flex items-center gap-2 text-[#595959]">
                        <BsClock />
                        <span>{popularbook.readingTime}</span>
                      </div>
                      <Link
                        to="/pricing"
                        className="font-medium text-dreamLabColor1"
                      >
                        Subscribe now
                      </Link>
                    </div>
                  </article>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CategoryCard = ({ category }) => {
  const { name, icon } = category;

  return (
    <article className="flex gap-4 items-center  shadow-slate-400 shadow  rounded-xl px-4 py-2">
      <img src={icon} alt={name} className="w-8 h-8" />
      <span className="text-sm font-medium text-[#434343]">{name}</span>
    </article>
  );
};

export default BookOverView;
