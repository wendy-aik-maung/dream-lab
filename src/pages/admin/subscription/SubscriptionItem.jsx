import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubscriptionItem = ({ setIsDelete }) => {
  return (
    <div className="container mx-auto border-2 shadow-lg  p-10 my-6">
      <h2 className="font-semibold text-xl pb-3">6Months Plan</h2>
      <section className="mt-3 grid grid-cols-5 gap-x-10">
        <p className="col-span-3">
          Lorem ipsum dolor sit amet consectetur. Rutrum porttitor sagittis
          ipsum consectetur cras. Varius nibh molestie fames integer leo proin
          netus vulputate nunc.Lorem ipsum dolor sit amet consectetur. Rutrum
          porttitor sagittis ipsum consectetur cras. Varius nibh molestie fames
          integer leo proin netus vulputate nunc.
        </p>
        <div className="col-span-1"></div>
        <div className="flex gap-x-5 col-span-1 self-end">
          <Link
            to={"/admin/subscriptions/edit"}
            className="btn_primary font-semibold text-lg"
          >
            Edit
          </Link>
          <button
            className="ml-4  text-red-600 font-semibold text-lg"
            onClick={() => setIsDelete(true)}
          >
            Delete
          </button>
        </div>
      </section>
      <div className="mt-5 flex items-end gap-x-5 ">
        <p className="line-through">90,000 Ks</p>
        <p className="text-dreamLabColor1 text-2xl font-semibold">49,000 Ks</p>
      </div>
    </div>
  );
};

export default SubscriptionItem;
