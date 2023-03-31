import React from "react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { stringConcat } from "../../../utils/stringConcat";

const BookItem = ({ data }) => {
	return (
		<section className="bg-[#F8F8FC] min-h-[28rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex flex-col">
			<img
				src={data.mainImage}
				alt={data.title}
				className="w-full h-[15rem] object-contain"
			/>
			<h3 className="mt-4 font-semibold text-lg mb-4">
				{data.title || "Testing Book title"}
			</h3>
			<span className="text-[#595959]">
				{data.bookAuthors?.length > 0
					? stringConcat(data.bookAuthors)
					: data.bookAuthors}
			</span>
			<div className="mt-auto flex justify-between">
				<div className="flex items-center gap-2 text-[#595959]">
					<BsClock />
					<span>{data.readingTime}</span>
				</div>
				<Link to="/pricing" className="font-medium text-dreamLabColor1">
					View Now
				</Link>
			</div>
		</section>
	);
};

export default BookItem;
