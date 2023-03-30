import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetChapters } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";
import { BiArrowBack } from "react-icons/bi";
const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [titles, setTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentChapter, setCurrentChapter] = useState({});
  const { isLoading, isError, data, isSuccess } = useGetChapters(id);

  useEffect(() => {
    if (isSuccess) {
      const tempTitles = data.bookChapters.map((chapter) => {
        return { title: chapter.title, priority: chapter.priority };
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
      <div className="flex justify-center items-center py-12">
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
    <section className="px-4 lg:px-12 py-12">
      <header className=" flex gap-12  font-poppins font-bold text-xl mb-8">
        <button
          className="flex items-center text-dreamLabColor3"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack />
          <span className="pl-2"> Back</span>
        </button>
      </header>
      <div className="flex gap-8">
        <aside className="basis-1/4 border-r">
          <h2 className="text-xl font-semibold text-textColor1 mb-4">
            Content
          </h2>
          <ul className="flex flex-col gap-2">
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
                {title.priority}. {title.title}
              </li>
            ))}
          </ul>
        </aside>
        <div className="px-4 basis-1/2 ">
          <h2 className="text-2xl text-textColor1 font-medium mb-4">
            {currentChapter.title}
          </h2>
          <p className="text-textColor1 leading-7">{currentChapter.content}</p>
          <div className="w-full h-[1px] bg-textColor4 my-8" />
          <div className="flex justify-between items-center">
            <button
              className="btn_primary text-textColor2 border !border-dreamLabColor1 !bg-transparent"
              onClick={handlePrevPage}
            >
              prev
            </button>
            <span className="text-textColor1">
              {currentChapter.priority} of {titles.length}
            </span>
            <button className="btn_primary text-white" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
