import React from "react";
import { HiXMark } from "react-icons/hi2";
import InputForm from "../../../components/form/InputForm";
const EditPlan = ({ planCode, planName, setEditPlan, setEditStatus }) => {
  console.log(planCode, planName);

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
        <form action="">
          <div className="flex flex-col gap-8">
            <InputForm
              label="Plan Code"
              id="plan-code"
              placeholder="Type Plan Code"
            />
            <InputForm
              label="Plan Name"
              id="plan-name"
              placeholder="Type Plan Name"
            />
          </div>
          <button className="btn_primary mt-24 w-full font-semibold">
            Create
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EditPlan;
