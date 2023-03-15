import React, { useState } from "react";
import { useGetUserSubscription } from "../../../hooks/useSubscribers";
import { BASE_URL } from "../../../services/api/api_endpoint";
import UserDetails from "./UserDetails";
import { ClipLoader } from "react-spinners";
const RequestSubscriber = () => {
  const [currentPage, setCurrentPage] = useState(
    `${BASE_URL}users/subscription/request?status=p`
  );

  const { isLoading, data, isError } = useGetUserSubscription(currentPage);

  return (
    <section className="flex flex-col ">
      {isLoading ? (
        <div className="col-span-12 mt-8 flex justify-center items-center">
          <ClipLoader size={32} />
        </div>
      ) : null}
      {!isLoading && !isError
        ? data.items.map((subscriber) => (
            <UserDetails subscriber={subscriber} key={subscriber.id} />
          ))
        : null}
    </section>
  );
};

export default RequestSubscriber;
