import React from "react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import DreamLabLogo from "../../../assets/DreamLabLogo";

const ArticleItems = ({ data }) => {
	return (
		<section className="bg-[#F8F8FC] min-h-[24rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex flex-col">
			<img
				src={data.mainImage}
				alt={data.title}
				className="w-full h-[15rem] object-contain"
			/>
			<h3 className="mt-4 font-semibold text-lg mb-4">
				{data.title || "Testing Book title"}
			</h3>
			<div className="flex justify-start items-center">
				<DreamLabLogo /> <span className="pl-2">Dream Lab</span>
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-2 text-[#595959]">
					<BsClock />
					<span>{data.readingTime}</span>
				</div>
				<Link
					to={`/articles/${data.slug}`}
					className="font-medium text-dreamLabColor1">
					View Now
				</Link>
			</div>
		</section>
	);
};

export default ArticleItems;
