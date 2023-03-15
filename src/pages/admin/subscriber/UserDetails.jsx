import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ subscriber }) => {
  const { user, status, subscription, startDate } = subscriber;
  const handleStatus = () => {
    if (status === "p") {
      return { cls: "bg-[#C99206]", text: "request" };
    } else if (status === "e") {
      return { cls: "bg-[#BC3131]", text: "expired" };
    } else if (status === "c") {
      return { cls: "bg-[#BC3131]", text: "cancel" };
    } else if (status === "a") {
      return { cls: "bg-[#058F23]", text: "active" };
    }
  };
  const [currentStatus, setStatus] = useState(handleStatus());

  return (
    <>
      <article className="grid grid-cols-12 border-b  py-6">
        <span className="col-span-3 text-textColor1 font-semibold">
          {user.displayName || user.email}
        </span>
        <div className={`col-span-2`}>
          <span
            className={`px-4 py-2 text-white text-sm ${currentStatus?.cls} rounded-full `}
          >
            {currentStatus?.text}
          </span>
        </div>
        <span className="col-span-3  text-[#8E98B0] font-semibold ">
          {subscription.name}
        </span>
        <span className="col-span-2  text-[#8E98B0] font-semibold ">
          {startDate}
        </span>
        <span className="col-span-2 text-dreamLabColor1 font-semibold">
          <Link to={"/"}>View Details</Link>
        </span>
      </article>
    </>
  );
};

export default UserDetails;
