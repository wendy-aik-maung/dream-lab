import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useGetArticlesByUsers } from "../../../hooks/useArticles";
import Pagination from "../../../components/user/Paginations";
import ArticleItems from "../library/ArticleItems";
import { useParams } from "react-router-dom";
const ArticleCategory = () => {
	const { id: categoryid } = useParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	const { isLoading, data, isSuccess } = useGetArticlesByUsers(
		currentPage,
		8,
		"",
		[categoryid],
		"",
		"",
		""
	);
	console.log("att", data);
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	useEffect(() => {
		if (isSuccess) {
			setPageCount(data.meta.totalPages);
		}
	}, [isSuccess, data]);
	console.log("cate g", categoryid);
	return (
		<div className="font-poppins px-2 md:px-6 lg:px-20 py-10 text-textColor1">
			{isLoading ? (
				<div className="flex justify-center items-center py-12">
					<ClipLoader color="black" size={48} />
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{data?.items?.map((item, index) => (
						<ArticleItems key={item?.id} data={item} number={index + 1} />
					))}
				</div>
			)}
			{pageCount > 1 ? (
				<Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
			) : null}
		</div>
	);
};

export default ArticleCategory;
