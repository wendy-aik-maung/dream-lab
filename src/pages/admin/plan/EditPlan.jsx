import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiXMark } from "react-icons/hi2";
import { ClipLoader } from "react-spinners";
import { useUpdatePlan } from "../../../hooks/usePlans";
import InputForm from "../../../components/form/InputForm";


const EditPlan = ({ editPlan, setEditPlan, setEditStatus, refreshData }) => {
  const editPlanMutation = useUpdatePlan();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    return editPlanMutation.mutate(data);
  };

  useEffect(() => {
    setValue("code", editPlan.code);
    setValue("name", editPlan.name);
  }, [editPlan]);

  useEffect(() => {
    if (editPlanMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [editPlanMutation.isSuccess]);

  return (
    <aside
      className="fixed z-50 top-0 left-0 w-full h-full  bg-black bg-opacity-80 flex justify-end "
      onClick={() => setEditStatus(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl text-textColor1 font-semibold">Edit Plan</h3>
          <HiXMark
            onClick={() => setEditStatus(false)}
            size={24}
            className="stroke-1 cursor-pointer"
          />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <InputForm
              name="code"
              label="Plan Code"
              id="code"
              placeholder="Type Plan Code"
              register={register}
              errors={errors}
            />
            <InputForm
              name="name"
              label="Plan Name"
              id="name"
              placeholder="Type Plan Name"
              register={register}
              errors={errors}
            />
          </div>
          {editPlanMutation.isError && (
            <p className="text-red-400">{editPlanMutation.error.message}</p>
          )}
          <button className="btn_primary mt-24 w-full font-semibold">
            {editPlanMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Edit
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EditPlan;
