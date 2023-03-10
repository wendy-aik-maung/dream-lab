import React from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import EmptyView from "../../../assets/EmptyView";
import SubscriptionItem from "./SubscriptionItem";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";
import { useGetSubscriptions } from "../../../hooks/useSubscriptions";
const SubscriptionIndex = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [subscription, setSubscription] = useState([1, 2]);

  const { isLoading, isError, error, data, refetch } = useGetSubscriptions();

  const refreshData = () => {
    refetch();
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-between font-poppins">
        <h2 className="font-bold text-2xl  text-textColor1">
          Subscription Plan Lists
        </h2>
        <Link
          to={"/admin/subscriptions/create"}
          className="btn_primary flex justify-center items-center py-2 px-10 gap-2 font-medium text-lg w-[264px]"
        >
          <AiFillPlusCircle size={18} /> Create Subscription
        </Link>
      </header>
      {subscription.length === 0 ? (
        <section className="mt-48 text-center">
          <div className="flex justify-center">
            <EmptyView />
          </div>
          <p className="mt-5">You have no plans created yet</p>
        </section>
      ) : (
        <div>
          <SubscriptionItem isDelete={isDelete} setIsDelete={setIsDelete} />
        </div>
      )}
      {isDelete && (
        <DeleteModal
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          refreshData={refreshData}
        />
      )}
    </div>
  );
};

export default SubscriptionIndex;
