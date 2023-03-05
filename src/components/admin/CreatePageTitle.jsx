import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const CreatePageTitle = ({ title, buttonTitle, setCreateStatus }) => {
  return (
    <div className="flex justify-between font-poppins">
      <h2 className="text-2xl font-bold text-textColor1">{title}</h2>
      <div>
        <button
          onClick={setCreateStatus}
          className="btn_primary flex gap-2 items-center justify-center font-medium w-[15rem]"
        >
          <AiFillPlusCircle size={18} />
          <span>{buttonTitle}</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePageTitle;
