import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HiXMark } from "react-icons/hi2";
import { BsImage, BsTrash } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import {
  useGetSingleCategory,
  useUpdateCategory,
} from "../../../hooks/useCategory";
import ErrorMessage from "../../../components/form/ErrorMessage";

const UpdateCategorySchema = yup.object().shape({
  icon: yup.mixed().required("A file is required"),
  name: yup.string().required(),
});

const EditCategory = ({ id, setEditStatus, handleRefreshData }) => {
  const [active, setActive] = useState(false);
  const [authorName, setAuthorName] = useState("");

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm({ resolver: yupResolver(UpdateCategorySchema) });

  const {
    isLoading,
    isSuccess: categorySuccess,
    data: categoryData,
    refetch,
  } = useGetSingleCategory(id);

  const updateCategoryMutation = useUpdateCategory();

  const onSubmit = (data) => {
    try {
      console.log("update data", data);
      updateCategoryMutation.mutate({ data, id });
    } catch (err) {
      console.log(err);
    }
  };

  const iconWatch = watch("icon");

  const handleRemoveImage = () => {
    setValue("icon", []);
  };

  useEffect(() => {
    if (categorySuccess) {
      setValue("icon", categoryData?.icon);
      setValue("name", categoryData?.name);
    }
  }, [categorySuccess, setValue, categoryData]);

  useEffect(() => {
    if (updateCategoryMutation.isSuccess) {
      handleRefreshData();
      setEditStatus(false);
    }
  }, [updateCategoryMutation.isSuccess]);

  console.log(iconWatch);

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

        <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col items-start gap-4  relative mb-8">
            {iconWatch?.[0] ? (
              <div className="w-full max-h-[20rem]  border border-dashed grid place-items-center  border-slate-900  rounded-lg  relative">
                <button
                  className="p-2 bg-red-200 rounded-md absolute top-4 right-4 hover:bg-red-300"
                  onClick={handleRemoveImage}
                >
                  <BsTrash className="text-red-700 text-lg" />
                </button>
                <img
                  src={
                    typeof iconWatch === "string"
                      ? iconWatch
                      : URL.createObjectURL(iconWatch?.[0])
                  }
                  alt="bankslip"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <label
                htmlFor="icon"
                className="w-full  border border-dashed grid place-items-center  border-slate-900 py-4 rounded-lg "
              >
                <div className="flex justify-center items-center gap-4 ">
                  <BsImage className="text-[#8C8C8C] " />
                  <div className="flex items-center justify-center flex-col">
                    <span className="text-sm text-dreamLabColor1 font-medium">
                      upload a file
                    </span>
                    <span className="text-sm">(PNG or SVG only)</span>
                  </div>
                </div>
              </label>
            )}
            {errors.icon ? (
              <span className="text-red-500">
                {"File is required or unsupported file format"}
              </span>
            ) : null}
            <input
              type="file"
              id="icon"
              name="icon"
              {...register("icon")}
              className=" absolute top-10 hidden"
            />
          </fieldset>

          <fieldset className="mb-8">
            <InputForm
              name="name"
              label="Name"
              placeholder="Type category name"
              errors={errors}
              register={register}
            />
          </fieldset>

          {updateCategoryMutation.isError && (
            <p className="text-red-400">
              {updateCategoryMutation.error.message}
            </p>
          )}
          <button
            type="submit"
            className="btn_primary w-full disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {updateCategoryMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader size={16} color="white" />
                <span>Saving...</span>
              </div>
            ) : (
              <span>Save</span>
            )}
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EditCategory;
