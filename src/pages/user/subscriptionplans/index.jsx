import React, { useEffect, useState } from "react";
import { useGetUserSubscriptionHistory } from "../../../hooks/useUserInfo";
import { BiCrown } from "react-icons/bi";
import { TbCrownOff } from "react-icons/tb";
import { ClipLoader } from "react-spinners";
const SubscriptionPlans = () => {
  const { isLoading, data: planHistory } = useGetUserSubscriptionHistory();

  return (
    <section className="px-10 lg:px-16 py-12 font-poppins">
      <div className="flex flex-col items-center gap-6 mb-6">
        <BiCrown className="text-6xl    text-[#C58F09]" />
        <h2 className="text-2xl font-semibold text-textColor1">
          Subscription Plans
        </h2>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : planHistory.length <= 0 ? (
        <div className="flex justify-center items-center py-12">
          <div className="flex flex-col items-center gap-8">
            <TbCrownOff className="text-[4rem] text-slate-400" />
            <h2 className="text-2xl text-textColor1 font-medium">
              Currently no subscription plan added...!
            </h2>
          </div>
        </div>
      ) : (
        <ul className="max-w-[640px] w-full  mx-auto flex flex-col gap-4 h-[480px] overflow-auto scrollbar-hide md:scrollbar-default">
          {planHistory.map((plan) => (
            <PlanDetails key={plan.id} plan={plan} />
          ))}
        </ul>
      )}
    </section>
  );
};

const PlanDetails = ({ plan }) => {
  const handleStatus = () => {
    if (plan.status === "p") {
      setStatus({ cls: "bg-[#C99206]", text: "request" });
    } else if (plan.status === "e") {
      setStatus({ cls: "bg-[#BC3131]", text: "expired" });
    } else if (plan.status === "c") {
      setStatus({ cls: "bg-[#BC3131]", text: "cancel" });
    } else if (plan.status === "a") {
      setStatus({ cls: "bg-[#058F23]", text: "active" });
    }
  };

  const [currentStatus, setStatus] = useState({ cls: "", text: "" });

  useEffect(() => {
    handleStatus();
  }, [plan]);

  return (
    <article className="bg-white rounded p-9 mx-2 flex items-center justify-between shadow-lg">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl text-dreamLabColor1 font-semibold">
            {plan.subscription.name}
          </h4>
          <span>
            Expired date:
            <br className="block md:hidden" /> {plan.expiredDate}
          </span>
        </div>
        <span
          className={`px-4 py-2 text-white text-sm ${currentStatus.cls} rounded-full `}
        >
          {currentStatus.text}
        </span>
      </div>
    </article>
  );
};

export default SubscriptionPlans;
