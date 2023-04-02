import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetChapters } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../../components/user/Navbar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [titles, setTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentChapter, setCurrentChapter] = useState({});
  const [contentSidebarOpen, setContentSidebarOpen] = useState(false);
  const { isLoading, isError, data, isSuccess } = useGetChapters(id);

  useEffect(() => {
    if (isSuccess) {
      const tempTitles = data.bookChapters.map((chapter) => {
        return { name: chapter.title, priority: chapter.priority };
      });

      setTitles(tempTitles);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      const tempCurrentChapters = data.bookChapters.find(
        (bookChapter) => bookChapter.priority === currentIndex
      );
      setCurrentChapter(tempCurrentChapters);
    }
  }, [currentIndex, isSuccess]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <ClipLoader color="black" size={48} />
      </div>
    );
  }

  if (!isLoading && data.bookChapters.length <= 0) {
    return (
      <div className="flex h-[50vh] flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-dreamLabColor1 mb-12">
          No Chapters
        </h2>
      </div>
    );
  }

  const handleNextPage = () => {
    if (currentIndex === data.bookChapters.length) {
      return;
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentIndex === 1) {
      return;
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="font-poppins h-screen overflow-y-hidden">
      <div className="sticky top-0 z-30">
        <Navbar />
      </div>
      <section className="px-2 md:px-6  lg:px-12 py-12">
        <div className="flex md:gap-4 lg:gap-8">
          <aside className="fixed px-4 h-screen w-full md:max-w-[200px] lg:max-w-[240px] border-r hidden md:block overflow-y-auto">
            <header className=" flex gap-12  font-poppins font-bold text-xl mb-8 ">
              <button
                className="flex items-center text-dreamLabColor3"
                onClick={() => navigate(-1)}
              >
                <BiArrowBack />
                <span className="pl-2"> Back</span>
              </button>
            </header>
            <h2 className="text-xl font-semibold text-textColor1 mb-4">
              Content
            </h2>
            <ul className=" flex flex-col gap-2">
              {titles.map((title) => (
                <li
                  key={title.priority}
                  className={`py-2 cursor-pointer font-medium ${
                    title.priority === currentChapter.priority
                      ? "text-textColor2"
                      : null
                  }`}
                  onClick={() => setCurrentIndex(title.priority)}
                >
                  {title.priority}. {title.name}
                </li>
              ))}
            </ul>
          </aside>

          <div className="ml-0 md:ml-[240px] px-2 lg:px-16 w-full  max-w-[720px] max-h-[75vh] overflow-y-auto relative ">
            <div className="flex justify-between items-center  mb-8  md:hidden">
              <header className=" flex gap-12  font-poppins font-bold text-xl  ">
                <button
                  className="flex items-center text-dreamLabColor3"
                  onClick={() => navigate(-1)}
                >
                  <BiArrowBack />
                  <span className="pl-2"> Back</span>
                </button>
              </header>
              <button
                className="flex items-center gap-2 text-base md:text-lg"
                onClick={() => setContentSidebarOpen(true)}
              >
                <HiOutlineMenuAlt2 className="text-lg" />
                <span className="text-lg font-semibold">Contents</span>
              </button>
            </div>
            <h2 className="text-2xl text-textColor1 font-medium mb-4">
              {currentChapter.title}
            </h2>
            <p className="text-textColor1 leading-7">
              {currentChapter.content}
            </p>
            <div className="sticky bottom-0  mx-auto w-full  bg-white">
              <div className="w-full h-[1px] bg-textColor4 my-4" />
              <div className="flex justify-between items-center  ">
                <button
                  className="btn_primary text-sm md:text-base text-textColor2 border !border-dreamLabColor1 !bg-transparent"
                  onClick={handlePrevPage}
                >
                  prev
                </button>
                <span className="text-textColor1">
                  {currentChapter.priority} of {titles.length}
                </span>
                <button
                  className="btn_primary text-white text-sm md:text-base"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {contentSidebarOpen ? (
        <ContentSidebar
          setContentSidebarOpen={setContentSidebarOpen}
          titles={titles}
          setCurrentIndex={setCurrentIndex}
          currentChapter={currentChapter}
        />
      ) : null}
    </main>
  );
};

const ContentSidebar = ({
  setContentSidebarOpen,
  titles,
  setCurrentIndex,
  currentChapter,
}) => {
  const onPageChange = (newPage) => {
    setCurrentIndex(newPage);
    setContentSidebarOpen(false);
  };

  return (
    <aside
      className="fixed flex justify-end top-0 left-0 w-full h-full z-40 bg-black bg-opacity-80"
      onClick={() => setContentSidebarOpen(false)}
    >
      <div
        className="w-[90vw] max-w-[480px] bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-textColor1 ">Content</h2>
          <HiXMark
            onClick={() => setContentSidebarOpen(false)}
            size={21}
            className="stroke-1"
          />
        </div>
        <ul className=" flex flex-col gap-2">
          {titles.map((title) => (
            <li
              key={title.priority}
              className={`py-2 cursor-pointer font-medium ${
                title.priority === currentChapter.priority
                  ? "text-textColor2"
                  : null
              }`}
              onClick={() => onPageChange(title.priority)}
            >
              {title.priority}. {title.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BookDetails;
