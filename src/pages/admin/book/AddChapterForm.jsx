import React, { useEffect } from "react";
import InputForm from "../../../components/form/InputForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import TextAreaForm from "../../../components/form/TextAreaForm";
import { useAddChapter } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";

const ChapterSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  priority: yup.mixed(),
});

const AddChapterForm = ({ setAddChapterStatus, bookId, handleRefreshData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ChapterSchema),
  });

  const addChapterMutation = useAddChapter();

  const onSubmit = (data) => {
    data["bookId"] = bookId;
    data["priority"] = Number(data.priority);

    addChapterMutation.mutate(data);
  };

  useEffect(() => {
    if (addChapterMutation.isSuccess) {
      handleRefreshData();
      setAddChapterStatus(false);
    }
  }, [addChapterMutation.isSuccess]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center py-4"
      onClick={() => setAddChapterStatus(false)}
    >
      <div
        className="bg-white rounded-lg p-8 flex flex-col items-center min-w-[720px] "
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm
            errors={errors}
            label="Chapter Title Name"
            name="title"
            placeholder="Type Title"
            register={register}
          />
          <InputForm
            errors={errors}
            label="Book Chapter Priority"
            name="priority"
            placeholder="Type Chapter Priority(optional)"
            register={register}
            type="number"
          />
          <TextAreaForm
            errors={errors}
            label="Book Chapter Content"
            name="content"
            placeholder="Type Chapter Content"
            register={register}
            row="10"
          />
          <div className=" mt-6 flex justify-center items-center gap-8">
            <div
              className="px-4 rounded-md !bg-transparent border-2 border-slate-900 py-2 block text-center"
              type="button"
              onClick={() => setAddChapterStatus(false)}
            >
              Cancel
            </div>
            <button className="bg-[#0092ff] border-2 border-[#0092ff] text-white px-8  rounded-md py-2">
              {addChapterMutation.isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader size={16} color="white" />
                  <span>Adding...</span>
                </div>
              ) : (
                <span>Add</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChapterForm;
