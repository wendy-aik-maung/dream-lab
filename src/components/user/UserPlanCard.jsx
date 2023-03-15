import React from "react";
import { Link } from "react-router-dom";

const UserPlanCard = ({ subscription }) => {
  const { id, name, originalPrice, salePrice, description } = subscription;

  return (
    <article className=" shadow-md py-4 px-6 rounded-xl flex flex-col min-h-[20rem]">
      <h3 className="font-bold text-2xl text-textColor1 mb-5">{name}</h3>
      <p className="leading-7 mb-8">{description}</p>
      <div className="flex items-center gap-2">
        <span className="text-[#595959] text-lg font-medium line-through">
          {originalPrice} Ks
        </span>
        <span className="text-[#1D3160] text-2xl font-bold">
          {salePrice} Ks
        </span>
      </div>
      <Link
        className="btn_primary mt-auto font-semibold text-center"
        to={`/pricing/purchaseplan/${id}`}
      >
        Purchase Now
      </Link>
    </article>
  );
};

export default UserPlanCard;
