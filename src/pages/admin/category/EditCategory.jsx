import React from "react";
import { HiXMark } from "react-icons/hi2";

const EditCategory = ({ setEditStatus }) => {
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-end "
      onClick={() => setEditStatus(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl text-textColor1 font-semibold">
            Edit Category
          </h3>
          <HiXMark
            onClick={() => setEditStatus(false)}
            size={24}
            className="stroke-1 cursor-pointer"
          />
        </div>
      </div>
    </aside>
  );
};

export default EditCategory;
