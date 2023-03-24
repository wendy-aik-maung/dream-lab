import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsImage, BsTrash } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import InputForm from "../../../components/form/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateCategory } from "../../../hooks/useCategory";
import { ClipLoader } from "react-spinners";
import { useCategorySelectContext } from "../../../contexts/CategorySelectContext";

const CategorySchema = yup.object().shape({
  icon: yup
    .mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported file format", (value) => {
      return ["image/jpeg", "image/png", "application/pdf"].includes(
        value[0]?.type
      );
    }),
  name: yup.string().required(),
});

const CategoryModal = ({ handleRefreshData, setSelectedCategories }) => {
  const { setCategoryModalOpen } = useCategorySelectContext();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(CategorySchema) });

  const categoryMutation = useCreateCategory();

  const onSubmit = (data) => {
    categoryMutation.mutate(data);
  };

  const iconWatch = watch("icon");

  const handleRemoveImage = () => {
    setValue("icon", []);
  };

  useEffect(() => {
    if (categoryMutation.isSuccess) {
      handleRefreshData();
      setCategoryModalOpen(false);

      setSelectedCategories((prev) => [
        ...prev,
        { label: categoryMutation.data.name, value: categoryMutation.data.id },
      ]);
    }
  }, [categoryMutation.isSuccess]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center items-center py-4"
      onClick={() => setCategoryModalOpen(false)}
    >
      <div
        className="bg-white rounded-lg p-8 flex flex-col items-center min-w-[480px] min-h-[480px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10 w-full ">
          <h3 className="text-2xl text-textColor1 font-semibold">
            Create New Category
          </h3>
          <HiXMark
            onClick={() => setCategoryModalOpen(false)}
            size={24}
            className="stroke-1 cursor-pointer"
          />
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col items-start  gap-4  relative mb-8 max-w-[480px]">
            {iconWatch?.[0] ? (
              <div className="w-full   max-h-[20rem]  border border-dashed grid place-items-center  border-slate-900  rounded-lg  relative">
                <button
                  className="p-2 bg-red-200 rounded-md absolute top-4 right-4 hover:bg-red-300"
                  onClick={handleRemoveImage}
                >
                  <BsTrash className="text-red-700 text-lg" />
                </button>
                <img
                  src={URL.createObjectURL(iconWatch?.[0])}
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

          <button
            type="submit"
            className="btn_primary w-full disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={categoryMutation.isLoading}
          >
            {categoryMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader size={16} color="white" />
                <span>Creating...</span>
              </div>
            ) : (
              <span>Create</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
