import React, { useEffect, useState } from "react";
import { GiCutDiamond } from "react-icons/gi";
import { Link } from "react-router-dom";
const ArticleItem = ({ article }) => {
	const { title, mainImage, isFree, status, categories, articleAuthors, slug } =
		article;

	const handleStatus = () => {
		if (status === "a") {
			setStatus({ cls: "bg-[#058F23]", text: "active" });
		} else {
			setStatus({ cls: "bg-[#C99206]", text: "pending" });
		}

		if (!isFree) {
			setCurrentIsFreeStatus("bg-[#1D3160]");
		} else {
			setCurrentIsFreeStatus("bg-green-600");
		}
	};
	const [currentStatus, setStatus] = useState({ cls: "", text: "" });
	const [currentIsFreeStatus, setCurrentIsFreeStatus] = useState("");

	useEffect(() => {
		handleStatus();
	}, [article]);

	return (
		<article className="grid grid-cols-12 border-b  py-6 items-center gap-4">
			<div className="col-span-1 text-textColor1 font-semibold">
				<img
					src={mainImage}
					className="max-w-[5rem] max-h-[7rem] object-cover"
				/>
			</div>

			<div className="col-span-2">
				<span className="font-medium  rounded-full text-textColor1">
					{title}
				</span>
			</div>

			<div className="col-span-2  text-textColors1 font-medium flex gap-2 whitespace-nowrap overflow-hidden ">
				{articleAuthors.map((author) => (
					<span key={author.id}>{author.name}</span>
				))}
			</div>

			<div className="col-span-2   flex gap-2">
				<div
					className={`w-1/2 bg-green-600 ${currentIsFreeStatus} py-1 flex justify-center items-center rounded`}>
					{isFree ? (
						<span className="text-white text-sm">Free</span>
					) : (
						<GiCutDiamond className="text-white" size={18} />
					)}
				</div>
				<span
					className={`w-1/2 py-1  text-white text-center rounded text-sm ${currentStatus.cls}`}>
					{currentStatus.text}
				</span>
			</div>
			<div className="col-span-3   flex gap-2 whitespace-nowrap overflow-hidden">
				{categories.map((category) => (
					<div
						key={category.id}
						className=" border-2 border-slate-900 p-1 flex justify-center items-center rounded-full text-sm">
						{category.name}
					</div>
				))}
			</div>

			<Link
				className=" col-span-1 btn_primary font-medium !py-1 block text-center "
				to={`/admin/articles/edit/${slug}`}>
				Edit
			</Link>
		</article>
	);
};

export default ArticleItem;
