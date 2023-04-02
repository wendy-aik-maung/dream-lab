import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleArticleByUser } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";

import { BiArrowBack, BiCrown } from "react-icons/bi";
import { stringConcat } from "../../../utils/stringConcat";
import {  BsClock } from "react-icons/bs";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const dummyAuthors = [
  { name: "Leon" },
  { name: "Scott" },
  { name: "Kennedy" },
  { name: "Ashley" },
];

const ArticleOverView = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { userData } = useUserDataContext();
  const token = userData?.access_token;
  const {
    isLoading: singleArticleLoading,
    data: singleArticle,
    isError,
    error: singleArticleError,
    refetch: singleArticleRefetch,
  } = useGetSingleArticleByUser(slug);

  useEffect(() => {
    if (token) {
      singleArticleRefetch();
    }
  }, [token]);

  if (singleArticleLoading) {
    return (
      <div className="flex justify-center items-center py-[160px]">
        <ClipLoader color="black" size={48} />
      </div>
    );
  }
  if(isError){
    return(
      <div className="text-red-400">{singleArticleError.message}</div>
    )
  }

  return (
    <section>
      {!singleArticleLoading && singleArticle === "Unauthorized" ? (
        <div className="flex h-[50vh] flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-dreamLabColor1 mb-12">
            Please Login To Continue
          </h2>
        </div>
      ) : (
        <div className="px-4 lg:px-12 py-12">
          <header className=" flex gap-12  font-poppins font-bold text-xl mb-8">
            <button
              className="flex items-center text-dreamLabColor3"
              onClick={() => navigate(-1)}
            >
              <BiArrowBack />
              <span className="pl-2"> Back</span>
            </button>
          </header>
          {/* main row */}
          <div className="flex justify-between flex-col xl:flex-row">
            {/* first col */}
            <div className="basis-2/3 flex flex-col items-center xl:items-start  mb-0 md:mb-8">
              <div className="flex gap-8">
                <img
                  src={singleArticle.mainImage}
                  alt={singleArticle.title}
                  className="w-[100px] h-[150px]  md:w-[240px] md:h-[300px] object-cover"
                />
                {/* title , author,reading time */}
                <div>
                  <h2 className="text-base md:text-2xl text-textColor1 font-semibold mb-4">
                    {singleArticle.title}
                  </h2>
                  <p className="text-base md:text-lg text-[#595959] mb-4">
                    by {stringConcat(singleArticle.articleAuthors)}
                  </p>
                  <div className="flex justify-between max-w-[320px] mb-8">
                    
                    <span className="text-sm text-[#595959] flex items-center gap-2">
                      <BsClock size={16} />
                      {singleArticle.readingTime}
                    </span>
                  </div>
                  {singleArticle.hasAccess ? (
                    <Link
                      className=" flex flex-nowrap !bg-dreamLabColor1 items-center justify-center btn_primary gap-4 !py-2 max-w-[20rem]  w-full font-semibold text-base  lg:text-lg mb-8 text-white"
                      to={`/articles/${slug}/${singleArticle.id}/articledetails`}
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
              <div className="my-8 xl:mt-8">
                <h3 className="font-semibold text-lg text-textColor1 mb-4 text-center xl:text-left">
                  What is it about?
                </h3>
                <ul className="flex gap-4 flex-wrap">
                  {singleArticle.categories.map((category) => (
                    <CategoryCard category={category} key={category.id} />
                  ))}
                </ul>
              </div>
              {/* article overview */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-textColor1 mb-4 text-center md:text-left">
                  Article Overview
                </h3>
                <p className="text-sm md:text-base leading-7">
                  {singleArticle.shortDesc}
                </p>
              </div>
            </div>
            {/* second col */}
            <div className="basis-1/3  grow flex flex-col items-center mt-8 xl:mt-0">
              <h2 className="font-semibold text-lg mb-8">Related Articles</h2>

              <ul className="grid md:grid-cols-3 xl:grid-cols-2 gap-4">
                {singleArticle.related.map((relatedArticle) => (
                  <RelatedArticleCard
                    relatedArticle={relatedArticle}
                    key={relatedArticle.id}
                  />
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

const RelatedArticleCard = ({ relatedArticle }) => {
  return (
    <article
      key={relatedArticle.id}
      className="bg-[#F8F8FC] md:min-h-[10rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex md:flex-col gap-4 md:gap-0"
    >
      <img
        src={relatedArticle.mainImage}
        alt={relatedArticle.title}
        className="w-[100px] h-[150px]  object-cover mx-auto"
      />
      <div className="flex flex-col gap-4 w-full h-full">
        <h3 className="mt-4 font-semibold text-base md:text-lg ">
          {relatedArticle.title || "Testing Article title"}
        </h3>
        <span className="text-[#595959] text-sm md:text-base">
          {relatedArticle.articleAuthors.length > 0
            ? stringConcat(relatedArticle.articleAuthors)
            : stringConcat(dummyAuthors)}
        </span>
        <div className="mt-auto flex justify-between">
          <div className="flex items-center gap-2 text-[#595959] text-sm md:text-base">
            <BsClock />
            <span>{relatedArticle.readingTime}</span>
          </div>
          <Link
            to={`/articles/${relatedArticle.slug}`}
            className="font-medium text-dreamLabColor1 text-sm md:text-base"
          >
            Read Now
          </Link>
        </div>
      </div>
    </article>
  );
};


export default ArticleOverView;
