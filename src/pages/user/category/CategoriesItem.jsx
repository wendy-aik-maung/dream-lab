import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ id, setId, setSingleCategory, data }) => {
	const handleCategory = () => {
		setId(`${data.id}`);
		setSingleCategory(true);
	};
	return (
		<Link to={`/category/${id}`}>
			<div onClick={handleCategory}>
				<section className="bg-[#F8F8FC] rounded-lg px-4 py-2 flex items-center gap-4 justify-between shadow-lg shadow-slate-400">
					<img
						src={data.icon}
						alt="Category image"
						className="w-[5rem] h-[5rem]"
					/>
					<h4 className="text-xl font-medium capitalize grow">{data.name}</h4>
				</section>
			</div>
		</Link>
	);
};

export default CategoriesItem;
