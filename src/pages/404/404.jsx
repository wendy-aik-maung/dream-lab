import React from "react";
import { Link } from "react-router-dom";
const NotFound = ({ to }) => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] md:text-[5rem] font-thin text-red-500 mb-2">
          404
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          This page does not exist!
        </p>
        <p className=" text-lg md:text-xl ">
          Go back to{" "}
          <Link
            className="underline hover:text-dreamLabColor1 font-bold"
            to={to}
          >
            Home page
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
