import React from "react";
import { useGetSubscriptionsForUser } from "../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";
import UserPlanCard from "./UserPlanCard";

const ChooseMemberShip = () => {
  const {
    isLoading,
    data: subscriptionPlans,
    isError,
  } = useGetSubscriptionsForUser();

  return (
    <section className="px-2 md:px-6 lg:px-20 py-20 ">
      <h2 className="text-3xl font-semibold text-textColor1 text-center mb-20">
        Choose Your Membership
      </h2>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : null}
      {!isLoading && !isError ? (
        <div className="grid grid-cols-3 gap-8">
          {subscriptionPlans.map((subscription) => (
            <UserPlanCard key={subscription.id} subscription={subscription} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default ChooseMemberShip;
