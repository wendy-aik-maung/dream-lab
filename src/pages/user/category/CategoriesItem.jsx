import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ data }) => {
  return (
    <Link to={`/category/${data.id}/books`}>
      <section className="bg-[#F8F8FC] rounded-lg px-4 py-2 md:px-8 md:py-4 flex items-center gap-4 justify-center shadow-md shadow-slate-400 ">
        <img
          src={data.icon}
          alt="Category image"
          className="w-[30px] h-[30px] md:w-[42px] md:h-[42px]"
        />
        <h4 className="text-sm font-semibold md:text-lg capitalize grow">
          {data.name}
        </h4>
      </section>
    </Link>
  );
};

export default CategoriesItem;
