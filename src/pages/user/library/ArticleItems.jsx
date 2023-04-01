import React from "react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import DreamLabLogo from "../../../assets/DreamLabLogo";

const ArticleItems = ({ data }) => {
	return (
		<article
			key={data.id}
			className="bg-[#F8F8FC] md:min-h-[10rem] shadow-md  shadow-slate-400 p-4 rounded-xl flex md:flex-col gap-4 md:gap-0">
			<div className="w-[100px] h-[130px] md:w-[100px] md:h-[150px] mx-auto">
				<img
					src={data.mainImage}
					alt={data.title}
					className="w-[100px] h-[130px] md:w-[100px] md:h-[150px] object-cover mx-auto rounded-lg"
				/>
			</div>
			<div className="flex flex-col gap-4 w-full h-full">
				<h3 className="mt-4 font-semibold text-base md:text-lg ">
					{data.title || "Testing Book title"}
				</h3>
				<span className="text-[#595959] text-sm md:text-base flex justify-start items-center">
					<DreamLabLogo /> <span className="pl-2">Dream Lab</span>
				</span>
				<div className="mt-auto flex justify-between">
					<div className="flex items-center gap-2 text-[#595959] text-sm md:text-base">
						<BsClock />
						<span>{data.readingTime}</span>
					</div>
					<Link
						to={`/articles/${data.slug}`}
						className="font-medium text-dreamLabColor1 text-sm md:text-base">
						View Now
					</Link>
				</div>
			</div>
		</article>
	);
};

export default ArticleItems;
