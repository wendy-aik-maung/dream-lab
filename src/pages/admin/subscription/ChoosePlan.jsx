import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChoosePlan = ({ selectPlan, setSelectPlan }) => {
	return (
		<div
			className={`fixed top-0 bg-white h-full text-black right-0 z-50 bottom-0 w-[500px] shadow-lg p-10 ${
				selectPlan ? "block" : "hidden"
			}`}>
			<section className="flex justify-between items-center">
				<h2 className="font-semibold text-3xl">Select Plan</h2>
				<AiOutlineClose size={25} onClick={() => setSelectPlan(false)} />
			</section>
			<div className="my-5 flex flex-col gap-y-4">
				<div className="flex items-center gap-x-3">
					<input type="checkbox" name="" id="book" value="b" />
					<label htmlFor="book">Books plan</label>
				</div>
				<div className="flex items-center gap-x-3">
					<input type="checkbox" name="" id="video" value="v" />
					<label htmlFor="video">Videos plan</label>
				</div>
				<div className="flex items-center gap-x-3">
					{" "}
					<input type="checkbox" name="" id="article" value="a" />
					<label htmlFor="article">Articles plan</label>
				</div>
			</div>
			<button
				className="btn_primary w-full py-2"
				onClick={() => setSelectPlan(false)}>
				Done
			</button>
		</div>
	);
};

export default ChoosePlan;
