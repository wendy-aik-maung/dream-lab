import React from "react";
import { Link } from "react-router-dom";
import { useGetArticlesByUsers } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";
import ArticleSwiper from "./ArticleSwiper";

const LatestArticles = () => {
  const { isLoading, data } = useGetArticlesByUsers(
    "",
    "",
    "",
    "",
    "",
    "",
    "l"
  );

  return (
    <section className="font-poppins px-2 md:px-6 lg:px-20  py-20 text-textColor1">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl lg:text-3xl text-center font-semibold ">
          Latest Articles
        </h2>
        <Link className="uppercase btn_primary font-semibold text-white !bg-dreamLabColor1">
          view more
        </Link>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <ArticleSwiper data={data.items} />
      )}
    </section>
  );
};

export default LatestArticles;
