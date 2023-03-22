import React from "react";
import { BsTrash } from "react-icons/bs";
const ChapterItem = ({
  chapter,
  setEditChapterStatus,
  setEditChapter,
  setDeleteChapterId,
  setDeleteStatus,
}) => {
  const onEdit = () => {
    setEditChapter(chapter);
    setEditChapterStatus(true);
  };

  const onDelete = (e) => {
    e.stopPropagation();
    setDeleteChapterId(chapter.id);
    setDeleteStatus(true);
  };

  return (
    <article
      className="bg-white rounded p-4 flex items-center justify-between shadow-md border"
      onClick={() => onEdit(true)}
    >
      <h4 className="text-lg">{chapter.title}</h4>
      <button
        className="text-red-700 w-8 h-8 flex justify-center items-center bg-red-300 rounded"
        onClick={onDelete}
      >
        <BsTrash size={18} />
      </button>
    </article>
  );
};

export default ChapterItem;
