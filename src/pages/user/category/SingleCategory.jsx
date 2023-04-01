import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useGetCategories } from "../../../hooks/useCategory";
const allLinks = [
	{
		name: "Books",
		to: "books",
	},
	{
		name: "Articles",
		to: "articles",
	},
];

const SingleCategory = () => {
	const { id: categoryId } = useParams();
	const location = useLocation();
	const tempPathName = location.pathname.split("/");

	const { isLoading, data } = useGetCategories();
	console.log("single cate id", categoryId);
	console.log("data", data);
	console.log(
		"find cate",
		data?.find((item) => item?.id == categoryId)
	);
	return (
		<div>
			<section>
				<div className="flex items-center font-poppins text-lg pl-1 md:pl-2 lg:px-20 mt-3 lg:mt-0 font-bold">
					<Link to={`/category`}>
						<h4 className=" text-dreamLabColor3">Category</h4>
					</Link>
					<span className="pl-2 text-black">
						<RxDoubleArrowRight />
					</span>
					<h4 className="pl-2 capitalize text-textColor4">
						{data?.find((item) => item.id == categoryId)?.name}
					</h4>
				</div>
				<h3 className="flex justify-center font-bold text-lg font-poppins pl-2 mt-3 md:my-2 capitalize text-textColor4">
					{data?.find((item) => item.id == categoryId)?.name}
				</h3>
				<div className="flex justify-center items-center mt-3">
					<ul className="flex gap-6">
						{allLinks.map((link) => (
							<CustomLink to={link.to} key={link.name}>
								{link.name}
							</CustomLink>
						))}
					</ul>
				</div>
				<Outlet />
			</section>
		</div>
	);
};

const CustomLink = ({ to, children }) => {
	const location = useLocation();
	const tempPathName = location.pathname.split("/");
	let isActive =
		tempPathName[tempPathName.length - 1] === to ||
		tempPathName[tempPathName.length - 1] === "";

	return (
		<Link
			to={to}
			className={` font-semibold text-[#8E98B0] text-lg ${
				isActive
					? "!text-dreamLabColor1 border-b-4 border-dreamLabColor1"
					: null
			}`}>
			{children}
		</Link>
	);
};

export default SingleCategory;
