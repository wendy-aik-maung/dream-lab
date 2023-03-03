import React from "react";

const InputForm = ({ label, id, type = "text", placeholder = "" }) => {
  return (
    <fieldset className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block font-semibold font-poppins text-textColor4 capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-[#f5f5f5] py-2 px-2 border-2 font-bold rounded-md font-poppins focus:outline-none focus:border-black placeholder:text-[#bfbfbf]  placeholder:font-semibold"
        placeholder={placeholder}
      />
    </fieldset>
  );
};

export default InputForm;
