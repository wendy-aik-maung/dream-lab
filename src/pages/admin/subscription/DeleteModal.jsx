import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ isDelete, setIsDelete }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80 flex justify-center items-center ${
        isDelete ? "block" : "hidden"
      }`}
      onClick={() => setIsDelete(false)}
    >
      <div
        className={` rounded-lg p-8 flex flex-col items-center bg-white w-[400px]`}
        onClick={(e) => e.stopPropagation()}
      >
        <RiDeleteBin6Line size={96} fill={"#bfbfbf"} className="mb-8 " />
        <p className="font-medium text-xl text-center mb-12 text-[#333]">
          Are you sure want to delete this subscription plan?
        </p>

        <div className="flex gap-x-7">
          <button
            className="bg-[#E4E4E4] rounded-md py-2 px-4"
            onClick={() => setIsDelete(false)}
          >
            Cancel
          </button>
          <button className="bg-red-600 rounded-md text-white py-2 px-4 flex items-center gap-x-3">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;
