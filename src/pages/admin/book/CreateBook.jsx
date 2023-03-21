import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { BsImage, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputForm from "../../../components/form/InputForm";
import Select from "react-select";
import Switch from "react-switch";
import TextAreaForm from "../../../components/form/TextAreaForm";
const CreateBook = () => {
  const [active, setActive] = useState(false);
  const [isFree, setIsFree] = useState(false);

  const {
    watch,
    formState: { errors },
    register,
    setValue,
  } = useForm();

  const bookCover = watch("bookCover");

  const handleRemoveImage = () => {
    setValue("bookCover", []);
  };

  return (
    <div className="container mx-auto">
      <header className=" flex gap-12  font-poppins font-bold text-xl mb-8">
        <Link
          to={"/admin/books"}
          className="flex items-center text-dreamLabColor3"
        >
          <BiArrowBack />
          <span className="pl-2"> Back</span>
        </Link>
        <div>
          <h2 className="text-textColor1">Create Books</h2>
        </div>
      </header>
      {/* Form */}
      <form
        action="
      "
      >
        <div className="flex items-start justify-between gap-x-8">
          {/* first-col */}
          <div className="basis-1/2">
            <fieldset className="  flex flex-col items-start gap-4 my-8 relative">
              {bookCover?.[0] ? (
                <div className="w-full  border border-dashed grid place-items-center  border-slate-900  rounded-lg  relative">
                  <button
                    className="p-2 bg-red-200 rounded-md absolute top-4 right-4 hover:bg-red-300"
                    onClick={handleRemoveImage}
                  >
                    <BsTrash className="text-red-700 text-lg" />
                  </button>
                  <img
                    src={URL.createObjectURL(bookCover?.[0])}
                    alt="bankslip"
                    className="w-full max-h-[15rem] h-full object-cover"
                  />
                </div>
              ) : (
                <label
                  htmlFor="bookCover"
                  className="w-full  border border-dashed flex justify-center gap-4 items-center  border-slate-900 h-[15rem]   rounded-lg "
                >
                  <BsImage className="text-[#8C8C8C] text-2xl " />
                  <span className="text-dreamLabColor1 text-sm">
                    Upload a image
                  </span>
                </label>
              )}

              {errors.bookCover ? (
                <span className="text-red-500">{errors.bookCover.message}</span>
              ) : null}
              <input
                type="file"
                id="bookCover"
                name="bookCover"
                className=" absolute top-10 hidden"
                {...register("bookCover")}
              />
            </fieldset>
            {/* textArea */}
            <TextAreaForm
              label="Short Description"
              name="description"
              placeholder="Type Book Description"
              register={register}
              errors={errors}
              row="8"
            />
          </div>
          {/* sec-col */}
          <div className="basis-1/2 flex flex-col">
            <InputForm
              label="Book Name"
              name="bookname"
              placeholder="Type book name"
              register={register}
              errors={errors}
            />
            <InputForm
              label="Book Pages"
              name="pages"
              type="number"
              placeholder="Type number of chapter"
              register={register}
              errors={errors}
            />
            <fieldset className="w-full my-2">
              <label className="mb-2 block font-bold font-poppins text-textColor4 capitalize text-lg">
                author
              </label>
              <Select />
            </fieldset>
            <fieldset className="w-full my-2">
              <label className="mb-2 block font-bold font-poppins text-textColor4 capitalize text-lg">
                category
              </label>
              <Select />
            </fieldset>
            <InputForm
              label="Duration"
              name="duration"
              placeholder="Type duration"
              register={register}
              errors={errors}
            />

            <section className="flex w-3/4  items-center gap-x-20 my-8">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch
                onChange={() => setActive(!active)}
                checked={active}
                className="ml-auto"
              />
            </section>
            <section
              className="flex w-3/4 items-center  gap-x-20 
            "
            >
              <p className="font-semibold  text-lg">Free Status</p>
              <Switch
                onChange={() => setIsFree(!isFree)}
                checked={isFree}
                className="ml-auto"
              />
            </section>
          </div>
        </div>
        <div className="mt-[7rem] flex justify-center items-center gap-8">
          <button className="w-[10rem] rounded-md !bg-transparent border-2 border-slate-900 py-2">
            Cancel
          </button>
          <button className="bg-[#0092ff] border-2 border-[#0092ff] text-white w-[10rem] rounded-md py-2">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
