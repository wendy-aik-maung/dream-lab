import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useGetCategories } from "../../../hooks/useCategory";
import CategoriesItem from "./CategoriesItem";
import SingleCategory from "./SingleCategory";
const Category = () => {
  const [singlecategory, setSingleCategory] = useState(false);
  const [id, setId] = useState("");

  const { isLoading, data } = useGetCategories();

  return (
    <div className="font-poppins px-2 md:px-6 lg:px-20 py-20 text-textColor1">
      <h2 className="text-center font-poppins text-xl font-bold">Categories</h2>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((item) => (
            <CategoriesItem
              key={item?.id}
              setId={setId}
              setSingleCategory={setSingleCategory}
              data={item}
            />
          ))}
        </div>
      )}
      {singlecategory && <SingleCategory id={id} data={data} />}
    </div>
  );
};

export default Category;
