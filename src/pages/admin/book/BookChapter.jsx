import React, { useState } from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import DeleteModal from "./DeleteModal";
import AddChapterForm from "./AddChapterForm";
import ChapterItem from "./ChapterItem";
import EditChapterForm from "./EditChapterForm";

const BookChapter = ({ chapters, bookId, handleRefreshData }) => {
  const [addChapterStatus, setAddChapterStatus] = useState(false);
  const [editChapterStatus, setEditChapterStatus] = useState(false);
  const [editChapter, setEditChapter] = useState({
    id: "",
    title: "",
    content: "",
    priority: "",
  });
  const [deleteChapterId, setDeleteChapterId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState(false);
  // console.log(chapters);

  return (
    <section className="">
      <h2 className="text-center text-xl font-semibold text-textColor1 mb-8">
        Chapters
      </h2>
      <div className="rounded-lg border border-slate-600 p-4">
        <div className="mb-8">
          <CreatePageTitle
            buttonTitle="Create New"
            title="Content"
            setCreateStatus={setAddChapterStatus}
          />
        </div>
        {chapters?.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {chapters.map((chapter) => (
              <ChapterItem
                chapter={chapter}
                key={chapter.id}
                setEditChapterStatus={setEditChapterStatus}
                setDeleteChapterId={setDeleteChapterId}
                setDeleteStatus={setDeleteStatus}
                setEditChapter={setEditChapter}
              />
            ))}
          </ul>
        ) : (
          <div className="py-2">
            <h2 className="text-center text-xl font-semibold">
              Currently Empty...
            </h2>
          </div>
        )}
      </div>
      {addChapterStatus ? (
        <AddChapterForm
          setAddChapterStatus={setAddChapterStatus}
          bookId={bookId}
          handleRefreshData={handleRefreshData}
        />
      ) : null}
      {editChapterStatus ? (
        <EditChapterForm
          setEditChapterStatus={setEditChapterStatus}
          editChapter={editChapter}
          handleRefreshData={handleRefreshData}
        />
      ) : null}
      {/* chapterId, setDeleteStatus, refreshData */}
      {deleteStatus ? (
        <DeleteModal
          chapterId={deleteChapterId}
          setDeleteStatus={setDeleteStatus}
          refreshData={handleRefreshData}
        />
      ) : null}
    </section>
  );
};

export default BookChapter;
