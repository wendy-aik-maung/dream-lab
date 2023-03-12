import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiXMark } from "react-icons/hi2";
import InputForm from "../../../components/form/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreatePlan } from "../../../hooks/usePlans";
import { ClipLoader } from "react-spinners";

const PlanSchema = yup.object({
  code: yup.string().required(),
  name: yup.string().required(),
});

const CreatePlan = ({ setCreateStatus,refreshData}) => {
  const createPlanMutation = useCreatePlan();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
    
  } = useForm({
    resolver: yupResolver(PlanSchema),
  });
  

  const onSubmit = (data) => {
    
    createPlanMutation.mutate(data);
  };
  useEffect(() => {
    if (createPlanMutation.isSuccess) {
      reset({ code: "", name: "" });
      refreshData();
      setCreateStatus(false);
    }
  }, [createPlanMutation.isSuccess]);


  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80 flex justify-end "
      onClick={() => setCreateStatus(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl text-textColor1 font-semibold">
            Create New Plan
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
              name="code"
              label="Plan Code"
              id="code"
              placeholder="Type Plan Code"
              register={register}
              errors={errors}
            />
            <InputForm
              type="text"
              name="name"
              label="Plan Name"
              id="name"
              placeholder="Type Plan Name"
              register={register}
              errors={errors}
            />
          </div>
          {createPlanMutation.isError && (
            <p className="text-red-400">{createPlanMutation.error.message}</p>
          )}
          <button className="btn_primary mt-24 w-full font-semibold">
            {createPlanMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Create
          </button>
        </form>
      </div>
    </aside>
  );
};

export default CreatePlan;
