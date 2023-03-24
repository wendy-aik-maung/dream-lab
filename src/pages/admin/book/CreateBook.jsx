import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { BsImage, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputForm from "../../../components/form/InputForm";
import Select from "react-select";
import Switch from "react-switch";
import TextAreaForm from "../../../components/form/TextAreaForm";
import { useGetBookAuthor } from "../../../hooks/useAuthors";
import { useGetCategories } from "../../../hooks/useCategory";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddBook } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";
import NoOptionsMessageForAuthor from "./NoOptionsMessageForAuthor";
import AuthorModal from "./AuthorModal";
import { useAuthorSelectContext } from "../../../contexts/AuthorSelectContext";
import NoOptionsMessageForCategory from "./NoOptionsMessageForCategory";
import { useCategorySelectContext } from "../../../contexts/CategorySelectContext";
import CategoryModal from "./CategoryModal";

const BookSchema = yup.object({
  bookCover: yup
    .mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported file format", (value) => {
      return ["image/jpeg", "image/png", "application/pdf"].includes(
        value[0]?.type
      );
    }),
  bookname: yup.string().required(),
  bookpages: yup.number().positive().required(),
  duration: yup.string().required(),
  description: yup.string().required(),
});

const CreateBook = () => {
  const [active, setActive] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const { authorModalOpen } = useAuthorSelectContext();
  const { categoryModalOpen } = useCategorySelectContext();

  // Category Fetch

  const {
    isLoading: categoryLoading,
    data: categories,
    isSuccess: categorySuccess,
    refetch: categoryRefetch,
  } = useGetCategories();

  const handleRefreshDataForCategory = () => {
    categoryRefetch();
  };

  // Authors Fetch

  const {
    isLoading: authorLoading,
    data: authors,
    isSuccess: authorSuccess,
    refetch: authorRefetch,
  } = useGetBookAuthor();

  const handleRefreshDataForAuthor = () => {
    authorRefetch();
  };

  const {
    watch,
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = useForm({ resolver: yupResolver(BookSchema) });

  const bookCover = watch("bookCover");

  const handleRemoveImage = () => {
    setValue("bookCover", []);
  };

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleAuthorChange = (selectedOptions) => {
    setSelectedAuthors(selectedOptions);
  };

  useEffect(() => {
    if (categorySuccess && authorSuccess) {
      setCategoryOptions(() => {
        return categories.map((category) => {
          return { label: category.name, value: category.id };
        });
      });
      setAuthorOptions(() => {
        return authors.map((author) => {
          return { label: author.name, value: author.id };
        });
      });
    }
  }, [categorySuccess, authorSuccess, authors, categories]);

  const bookAddMutation = useAddBook();

  const onSubmit = (data) => {
    const tempAuthorArr = selectedAuthors.map((author) => author.value);
    const tempCategoryArr = selectedCategories.map(
      (category) => category.value
    );

    const submitData = {
      title: data.bookname,
      readingTime: data.duration,
      shortDesc: data.description,
      page: data.bookpages,
      isFree: isFree ? 1 : 0,
      status: active ? "a" : "p",
      mainImage: data.bookCover,
      categories: tempCategoryArr,
      bookAuthors: tempAuthorArr,
    };

    bookAddMutation.mutate(submitData);
  };

  if (categoryLoading || authorLoading) {
    return (
      <div className="col-span-12 mt-8 flex justify-center items-center">
        <ClipLoader size={32} />
      </div>
    );
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    className="w-full  h-full object-cover"
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
              name="bookpages"
              type="number"
              placeholder="Type number of pages"
              register={register}
              errors={errors}
            />
            <fieldset className="w-full my-2">
              <label className="mb-2 block font-bold font-poppins text-textColor4 capitalize text-lg">
                author
              </label>

              <Select
                value={selectedAuthors}
                onChange={handleAuthorChange}
                options={authorOptions}
                isMulti={true}
                components={{ NoOptionsMessage: NoOptionsMessageForAuthor }}
                className="w-full  font-bold rounded-md font-poppins placeholder:text-[#bfbfbf]  placeholder:font-semibold z-50"
              />
            </fieldset>
            <fieldset className="w-full my-2">
              <label className="mb-2 block font-bold font-poppins text-textColor4 capitalize text-lg">
                category
              </label>
              <Select
                value={selectedCategories}
                onChange={handleCategoryChange}
                options={categoryOptions}
                components={{ NoOptionsMessage: NoOptionsMessageForCategory }}
                isMulti={true}
                className="w-full  font-bold rounded-md font-poppins placeholder:text-[#bfbfbf]  placeholder:font-semibold"
              />
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
        {bookAddMutation.isError ? (
          <div className={`bg-red-500 w-full text-center py-4 my-4 rounded-md`}>
            <p className="text-white font-medium font-poppins">
              {bookAddMutation.error.message}
            </p>
          </div>
        ) : null}
        <div className="mt-[7rem] flex justify-center items-center gap-8">
          <Link
            className="w-[10rem] rounded-md !bg-transparent border-2 border-slate-900 py-2 block text-center"
            to="/admin/books"
          >
            Cancel
          </Link>
          <button
            className="bg-[#0092ff] border-2 border-[#0092ff] text-white w-[10rem] rounded-md py-2"
            disabled={bookAddMutation.isLoading}
          >
            {bookAddMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader size={16} color="white" />
                <span>Creating...</span>
              </div>
            ) : (
              <span>Create</span>
            )}
          </button>
        </div>
      </form>
      {authorModalOpen ? (
        <AuthorModal
          handleRefreshData={handleRefreshDataForAuthor}
          setSelectedAuthors={setSelectedAuthors}
        />
      ) : null}
      {categoryModalOpen ? (
        <CategoryModal
          handleRefreshData={handleRefreshDataForCategory}
          setSelectedCategories={setSelectedCategories}
        />
      ) : null}
    </div>
  );
};

export default CreateBook;
