import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Switch from "react-switch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../../../components/form/InputForm";
import { useCreateBookAuthor } from "../../../hooks/useAuthors";
import { ClipLoader } from "react-spinners";

const BookAuthorSchema = yup.object({
  name: yup.string().required(),
});

const CreateAuthor = ({ setCreateStatus,refreshData }) => {
  const [active, setActive] = useState(false);
  const createBookAuthorMutation = useCreateBookAuthor();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(BookAuthorSchema),
  });

  const onSubmit = (data) => {
    if (active) {
      data["status"] = "a";
    } else {
      data["status"] = "p";
    }
    
    createBookAuthorMutation.mutate(data);
  };

  useEffect(() => {
    if (createBookAuthorMutation.isSuccess) {
      reset({name: "" });
      refreshData();
      setCreateStatus(false);
    }
  }, [createBookAuthorMutation.isSuccess]);

  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-end "
      onClick={() => setCreateStatus(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl text-textColor1 font-semibold">
            Create New Author
          </h3>
          <HiXMark
            onClick={() => setCreateStatus(false)}
            size={24}
            className="stroke-1 cursor-pointer"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <InputForm
              type="text"
              name="name"
              label="Plan Name"
              id="name"
              placeholder="Type Author Name"
              register={register}
              errors={errors}
            />
            <section className="flex items-center gap-x-20 my-10">
              <p className="font-semibold text-lg">Active Status</p>
              <Switch onChange={() => setActive(!active)} checked={active} />
            </section>
          </div>
          {createBookAuthorMutation.isError && (
            <p className="text-red-400">{createBookAuthorMutation.error.message}</p>
          )}
          <button
            className="btn_primary mt-24 w-full font-semibold disabled:cursor-not-allowed disabled:bg-opacity-75"
            disabled={createBookAuthorMutation.isLoading}
          >
            {createBookAuthorMutation.isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <ClipLoader color="white" size={24} />
                <span>Creating...</span>
              </div>
            ) : (
              <span>Create</span>
            )}
          </button>
        </form>
      </div>
    </aside>
  );
};

export default CreateAuthor;
