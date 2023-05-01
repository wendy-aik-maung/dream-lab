import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useGetArticlesByUsers } from "../../../hooks/useArticles";
import Pagination from "../../../components/user/Paginations";
import ArticleItems from "./ArticleItems";
const ArticleLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { isLoading, data, isSuccess } = useGetArticlesByUsers(
    currentPage,
    8,
    "",
    "",
    "",
    "",
    ""
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (isSuccess) {
      setPageCount(data.meta.totalPages);
    }
  }, [isSuccess, data]);

  return (
    <div className="font-poppins px-2 md:px-6 lg:px-12 py-10 text-textColor1">
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {data?.items?.map((item, index) => (
            <ArticleItems key={item?.id} data={item} number={index + 1} />
          ))}
        </div>
      )}
      {pageCount > 1 ? (
        <Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
      ) : null}
    </div>
  );
};

export default ArticleLibrary;
