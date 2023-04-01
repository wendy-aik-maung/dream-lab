import React from "react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { stringConcat } from "../../../utils/stringConcat";

const BookItem = ({ data }) => {
	return (
		<section className="bg-[#F8F8FC] min-h-[20rem] shadow-md shadow-slate-400 p-4 rounded-xl flex flex-row md:flex-col">
			<div className="md:relative h-[5rem] w-[5rem] md:h-[15rem] mb-4 mr-4">
				<img
					src={data.mainImage}
					alt={data.title}
					className="md:absolute md:w-full md:h-full object-contain"
				/>
			</div>
			<div className="">
				<h3 className="mt-4 font-semibold text-lg mb-3">
					{data.title || "Testing Book title"}
				</h3>
				<span className="text-[#595959] mb-3">
					by{" "}
					{data.bookAuthors?.length > 0
						? stringConcat(data.bookAuthors)
						: data?.bookAuthors?.length == 0
						? "Spencer Rascoff and Stan Humphries"
						: data?.bookAuthors}
				</span>
				<div className="mt-auto flex justify-between">
					<div className="flex items-center gap-2 text-[#595959]">
						<BsClock />
						<span>{data.readingTime}</span>
					</div>
					<Link
						to={`/books/${data.slug}`}
						className="font-medium text-dreamLabColor1">
						View Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BookItem;
