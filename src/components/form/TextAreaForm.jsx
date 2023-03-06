import React from "react";

const TextAreaForm = ({ placeholder, id, label, rows = 4 }) => {
  return (
    <fieldset className="w-full">
      <label
        htmlFor={id}
        className={
          "mb-2 block font-semibold font-poppins text-textColor4 capitalize"
        }
      >
        {label}
      </label>
      <textarea
        className="w-full  py-2 px-2 border-2 font-bold rounded-md font-poppins focus:outline-none focus:border-black placeholder:text-[#bfbfbf] placeholder:font-semibold resize-none"
        placeholder={placeholder}
        id={id}
        rows={rows}
      ></textarea>
    </fieldset>
  );
};

export default TextAreaForm;
