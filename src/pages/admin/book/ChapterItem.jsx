import React from "react";
import { BsTrash } from "react-icons/bs";
const ChapterItem = () => {
  return (
    <article className="bg-white rounded p-4 flex items-center justify-between shadow-md border">
      <h4 className="text-lg">Hello</h4>
      <button className="text-red-700 w-8 h-8 flex justify-center items-center bg-red-300 rounded">
        <BsTrash size={18} />
      </button>
    </article>
  );
};

export default ChapterItem;
