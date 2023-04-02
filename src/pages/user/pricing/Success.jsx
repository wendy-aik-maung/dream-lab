import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen px-4 font-poppins">
      <div className="flex flex-col items-center">
        <BsCheck2Circle className="text-[54px] md:text-[60px] text-dreamLabColor1 mb-1" />
        <h1 className="text-dreamLabColor1 font-bold text-2xl md:text-3xl mb-8">
          Success!
        </h1>
        <p className="text-center text-[#595959] font-medium text-lg md:text-xl mb-6">
          Thank you for your request. We are working hard to find the best
          service and deals for you.
        </p>
        <p className="text-center text-[#595959]  font-thin text-lg md:text-xl mb-6">
          Kindly check your email for confirmation.
        </p>
        <Link
          className=" bg-dreamLabColor1 max-w-[20rem] w-full text-white text-lg font-semibold py-2 rounded-lg text-center"
          to="/"
        >
          Go to Home Page
        </Link>
      </div>
    </section>
  );
};

export default Success;
