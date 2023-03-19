import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiXMark } from "react-icons/hi2";
import { useUpdateBookAuthor } from "../../../hooks/useAuthors";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import Switch from "react-switch";

const EditAuthor = ({
  setEditStatus,
  editAuthor,
  setEditAuthor,
  refreshData,
}) => {
  const [active, setActive] = useState(false);
  const editAuthorMutation = useUpdateBookAuthor();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    if (active) {
      data["status"] = "a";
    } else {
      data["status"] = "p";
    }

    return editAuthorMutation.mutate({ data, id: editAuthor.id });
  };

  useEffect(() => {
    setValue("name", editAuthor.name);
    setActive(editAuthor.status === "a" ? true : false);
  }, [editAuthor]);

  useEffect(() => {
    if (editAuthorMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [editAuthorMutation.isSuccess]);

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
            Edit Author
          </h3>
          <HiXMark
            onClick={() => setEditStatus(false)}
            size={24}
            className="stroke-1 cursor-pointer"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <InputForm
              type="text"
              name="name"
              label="Author Name"
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
          {editAuthorMutation.isError && (
            <p className="text-red-400">{editAuthorMutation.error.message}</p>
          )}
          <button
            className="btn_primary mt-24 w-full font-semibold disabled:cursor-not-allowed disabled:bg-opacity-75"
            disabled={editAuthorMutation.isLoading}
          >
            {editAuthorMutation.isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <ClipLoader color="white" size={24} />
                <span>Editing...</span>
              </div>
            ) : (
              <span>Edit</span>
            )}
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EditAuthor;
