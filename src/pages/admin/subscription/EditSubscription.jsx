import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import Switch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import TextAreaForm from "../../../components/form/TextAreaForm";
import { SubscriptionSchema } from "./CreateSubscription";
import ChoosePlan from "./ChoosePlan";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useGetSingleSubscription,
  useRemovePlan,
  useUpdateSubscription,
} from "../../../hooks/useSubscriptions";
import { HiXMark } from "react-icons/hi2";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { ClipLoader } from "react-spinners";
const EditSubscription = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(SubscriptionSchema) });

  const {
    isLoading,
    isSuccess: subscriptionSuccess,
    data: subscriptionData,
    refetch,
  } = useGetSingleSubscription(id);

  const editSubscriptionMutation = useUpdateSubscription();

  const [active, setActive] = useState(false);
  const [getPlans, setGetPlans] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectPlan, setSelectPlan] = useState(false);

  const onSubmit = async (data) => {
    data["id"] = subscriptionData.id;
    if (active) {
      data["status"] = "a";
    } else {
      data["status"] = "p";
    }
    data["plans"] = plans;
    editSubscriptionMutation.mutate(data);
  };

  const removePlanMutation = useRemovePlan();

  const handlePlanRemove = async (planId) => {
    removePlanMutation.mutate(planId);
  };

  useEffect(() => {
    if (removePlanMutation.isSuccess) {
      refetch();
    }
  }, [removePlanMutation.isSuccess]);

  useEffect(() => {
    if (subscriptionSuccess) {
      setValue("name", subscriptionData?.name);
      setValue("stackTitle", subscriptionData?.stackTitle);
      setValue("originalPrice", subscriptionData?.originalPrice);
      setValue("salePrice", subscriptionData?.salePrice);
      setValue("description", subscriptionData?.description);
      setValue("subscribeLength", subscriptionData?.subscribeLength);
      setValue("subscribeType", subscriptionData?.subscribeType);
      setActive(subscriptionData?.status === "a" ? true : false);
      setGetPlans(subscriptionData?.subscriptionPlans);
    }
  }, [subscriptionSuccess, setValue, subscriptionData]);

  return (
    <div className="container mx-auto">
      <form action="" className="w-3/4 " onSubmit={handleSubmit(onSubmit)}>
        <header className=" flex justify-between font-poppins font-bold text-xl mb-10">
          <Link
            to={"/admin/subscriptions"}
            className="flex items-center text-dreamLabColor3"
          >
            <BiArrowBack />
            <span className="pl-2"> Back</span>
          </Link>
          <div>
            <h2>Edit Subscription</h2>
          </div>
        </header>
        <InputForm
          type="text"
          label="Subscription Name:"
          name="name"
          id="text"
          placeholder="Type name"
          register={register}
          errors={errors}
        />
        <InputForm
          type="text"
          label="Stack Title:"
          name="stackTitle"
          id="text"
          placeholder="Type stack title"
          register={register}
          errors={errors}
        />
        <InputForm
          type="number"
          label="Original Price:"
          name="originalPrice"
          id="text"
          placeholder="0 Ks"
          register={register}
          errors={errors}
        />
        <InputForm
          type="number"
          label="Sale Price:"
          name="salePrice"
          id="text"
          placeholder="0 Ks"
          register={register}
          errors={errors}
        />
        <div className="flex justify-between gap-x-10 ">
          <InputForm
            type="number"
            label="Subscription Length"
            name="subscribeLength"
            id="number"
            placeholder="1"
            register={register}
            errors={errors}
          />
          <section className="w-full">
            <label
              htmlFor="subscribeType"
              className="text-lg font-poppins text-textColor4 capitalize font-semibold my-2 block"
            >
              Subscription Length Type
            </label>
            <select
              id="subscribeType"
              className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
              {...register("subscribeType")}
              defaultValue="d"
            >
              <option value="d">Day</option>
              <option value="m">Month</option>
              <option value="y">Year</option>
            </select>
            {errors["subscribeType"] && (
              <p className="text-red-500">{errors["subscribeType"]?.message}</p>
            )}
          </section>
        </div>
        <TextAreaForm
          type="text"
          label="Description:"
          id="text"
          placeholder="Type Description"
          name="description"
          register={register}
          errors={errors}
        />
        <section className="flex items-center gap-x-20 my-10">
          <p className="font-semibold text-lg">Active Status</p>
          <Switch onChange={() => setActive(!active)} checked={active} />
        </section>
        <div>
          <section
            className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
            onClick={() => setSelectPlan(true)}
          >
            Choose Plan
          </section>
          <p>{plans.length + getPlans.length} plans Selected.</p>
          <div className="mt-4 flex gap-4">
            {getPlans.map((plan) => (
              <div
                key={plan.plan.code}
                className="rounded-full py-1.5 px-4 shadow w-max  border flex gap-4 items-center"
              >
                <span>{plan.plan.name}</span>
                <HiXMark
                  className="cursor-pointer"
                  onClick={() => handlePlanRemove(plan.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {editSubscriptionMutation.isError && (
          <ErrorMessage message={editSubscriptionMutation.error.message} />
        )}
        {
          <div className="flex items-center justify-between mt-8">
            <button
              className="btn_primary text-lg font-bold py-2 my-8 flex items-center justify-center gap-x-3 w-full disabled:cursor-not-allowed disabled:bg-opacity-75"
              disabled={
                editSubscriptionMutation.isLoading || !subscriptionSuccess
              }
            >
              {editSubscriptionMutation.isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <ClipLoader color="white" size={24} />
                  <span>Saving...</span>
                </div>
              ) : (
                <span>Save</span>
              )}
            </button>
          </div>
        }
      </form>
      {selectPlan && (
        <ChoosePlan
          setSelectPlan={setSelectPlan}
          getPlans={getPlans}
          plans={plans}
          setPlans={setPlans}
        />
      )}
    </div>
  );
};

export default EditSubscription;
