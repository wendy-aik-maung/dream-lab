import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
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

const SingleCategory = ({ id, data }) => {
	const location = useLocation();
	const tempPathName = location.pathname.split("/");
	console.log("single cate", data);
	console.log("id", id);
	console.log("find cate", data?.find((item) => item.id == id)?.name);
	return (
		<div>
			<section>
				<div className="flex items-center font-poppins text-lg font-bold">
					<h4 className=" text-dreamLabColor3">Category</h4>
					<span className="pl-2 text-black">
						<RxDoubleArrowRight />
					</span>
					<h4 className="pl-2 capitalize text-textColor4">
						{data?.find((item) => item.id == id)?.name}
					</h4>
				</div>
				<h3 className="flex justify-center font-bold text-lg font-poppins pl-2 my-2 capitalize text-textColor4">
					{data?.find((item) => item.id == id)?.name}
				</h3>
				<div className="flex justify-between items-center">
					<ul className="flex gap-6 mb-8">
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
