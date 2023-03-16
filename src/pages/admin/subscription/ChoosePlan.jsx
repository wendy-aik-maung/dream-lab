import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { useGetPlans } from "../../../hooks/usePlans";

const ChoosePlan = ({ setSelectPlan, getPlans, plans, setPlans }) => {
  const [selectPlans, setSelectPlans] = useState(plans);

  const { isLoading, data, isError, error } = useGetPlans();

  const checkHandle = (e) => {
    const planCode = e.target.value;
    const selectedPlan = data?.find((plan) => plan.code === planCode);

    if (e.currentTarget.checked) {
      setSelectPlans([
        ...selectPlans,
        { planCode, applyAll: false, plan: selectedPlan },
      ]);
    } else {
      setSelectPlans(selectPlans.filter((plan) => plan.planCode !== planCode));
    }
  };

  const handleDone = () => {
    setPlans(selectPlans);
    setSelectPlan(false);
  };

  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-end "
      onClick={() => setSelectPlan(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex justify-between items-center mb-10">
          <h3 className="font-bold text-black text-2xl">Select Plan</h3>
          <AiOutlineClose size={25} onClick={() => setSelectPlan(false)} />
        </section>
        {isLoading ? (
          <article className="flex items-center justify-center h-full">
            <ClipLoader />
          </article>
        ) : (
          <div className="my-5 flex flex-col gap-5">
            {data?.map((plan) => (
              <div className="flex items-center gap-x-3" key={plan.code}>
                <input
                  type="checkbox"
                  name=""
                  id={plan.code}
                  value={plan.code}
                  onClick={checkHandle}
                  checked={
                    getPlans?.some((data) => data.planCode === plan.code) ||
                    selectPlans.some((data) => data.planCode === plan.code)
                  }
                />
                <label
                  htmlFor={plan.code}
                  className="font-semibold  text-textColor1 font-poppins text-lg mb-2"
                >
                  {plan.name}
                </label>
              </div>
            ))}
          </div>
        )}

        <button
          className="btn_primary mt-10 w-full py-2 font-bold  text-black text-lg"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </aside>
  );
};

export default ChoosePlan;
