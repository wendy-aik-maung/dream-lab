import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChoosePlan = ({ selectPlan, setSelectPlan }) => {
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-70 flex justify-end "
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
        <div className="my-5 flex flex-col gap-5">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="" id="book" value="b" />
            <label
              htmlFor="book"
              className="font-semibold  text-textColor1 font-poppins text-lg mb-2"
            >
              Books plan
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="" id="video" value="v" />
            <label
              htmlFor="video"
              className="font-semibold text-textColor1 font-poppins text-lg mb-2"
            >
              Videos plan
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            {" "}
            <input type="checkbox" name="" id="article" value="a" />
            <label
              htmlFor="article"
              className="font-semibold  text-textColor1 font-poppins text-lg mb-2"
            >
              Articles plan
            </label>
          </div>
        </div>
        <button
          className="btn_primary mt-10 w-full py-2 font-bold  text-black text-lg"
          onClick={() => setSelectPlan(false)}
        >
          Done
        </button>
      </div>
    </aside>
  );
};

export default ChoosePlan;
