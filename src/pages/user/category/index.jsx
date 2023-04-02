import React from "react";
import { ClipLoader } from "react-spinners";
import { useGetCategories } from "../../../hooks/useCategory";
import CategoriesItem from "./CategoriesItem";
const Category = () => {
  const { isLoading, data } = useGetCategories();

  return (
    <div className="font-poppins px-2 md:px-6 lg:px-12 pb-20 pt-12 text-textColor1">
      <h2 className="text-center font-poppins text-xl font-bold mt-3 lg:mt-0 mb-3">
        Categories
      </h2>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 pt-5 gap-4 md:gap-8">
          {data?.map((item) => (
            <CategoriesItem key={item?.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
