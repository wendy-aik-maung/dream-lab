import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <div className="ml-auto mr-8 max-w-[400px]  items-center px-3 py-4 bg-[#d9f9ff] gap-4 rounded-full hidden xl:flex">
      <FaSearch size={18} className="stroke-2 fill-dreamLabColor1 shrink-0" />

      <input
        type="text"
        placeholder="Search Here"
        className="bg-transparent focus:outline-none shrink"
      />
    </div>
  );
};

export default SearchInput;
