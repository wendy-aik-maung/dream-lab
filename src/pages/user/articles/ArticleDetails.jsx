import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetArticleContentByUser } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";
import Navbar from "../../../components/user/Navbar";
import { BiArrowBack } from "react-icons/bi";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { isLoading, data, isError, error} =
    useGetArticleContentByUser(slug);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <ClipLoader color="black" size={48} />
      </div>
    );
  }
  if(isError){
    return(
      <div className="text-red-400">{error.message}</div>
    )
  }
  return (
    <main className="font-poppins h-screen overflow-y-hidden">
      <div className="sticky top-0 z-30">
        <Navbar />
      </div>
      <section className="px-4 lg:px-12 py-12">
        <header className=" flex gap-12  font-poppins font-bold text-xl mb-8 ">
          <button
            className="flex items-center text-dreamLabColor3"
            onClick={() => navigate(-1)}
          >
            <BiArrowBack />
            <span className="pl-2"> Back</span>
          </button>
        </header>
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-textColor1 font-medium mb-4">{data.title}</h1>
            <p className="text-textColor1 leading-7">{data.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetails;
