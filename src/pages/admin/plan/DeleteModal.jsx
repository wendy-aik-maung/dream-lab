import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
const DeleteModal = ({ setDeleteStatus }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80 flex justify-center items-center "
      onClick={() => setDeleteStatus()}
    >
      <div
        className="bg-white rounded-lg p-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <RiDeleteBin5Line size={96} fill={"#bfbfbf"} className="mb-8" />
        <p className="font-medium text-[#333333] mb-12">
          Are you sure want to delete this plan?
        </p>
        <div className="flex gap-4">
          <button
            className="font-medium bg-[#E4E4E4] px-4 py-2 rounded"
            onClick={() => setDeleteStatus(false)}
          >
            Cancel
          </button>
          <button className="font-medium bg-[#BC3131] px-4 py-2 rounded text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
