import React, { useState, useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Pagination from "../../../components/admin/Pagination";
import { useGetArticlesByAdmin } from "../../../hooks/useArticles";
import ArticleItem from "./ArticleItem";

const ArticleIndex = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	const {
		data: articles,
		isLoading,
		isSuccess,
	} = useGetArticlesByAdmin(currentPage, "", "", "", "", "", "l");

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};
	console.log(currentPage);
	useEffect(() => {
		if (isSuccess) {
			setPageCount(articles.meta.totalPages);
		}
	}, [isSuccess]);

	return (
		<div className="container mx-auto">
			<header className="flex justify-between font-poppins mb-8">
				<h2 className="text-2xl font-bold text-textColor1">
					Uploaded Articles
				</h2>
				<Link
					to={"/admin/articles/create"}
					className="btn_primary flex gap-2 items-center justify-center font-medium w-[15rem]">
					<AiFillPlusCircle size={18} />
					<span>Create Article</span>
				</Link>
			</header>
			{isLoading ? (
				<div className="col-span-12 mt-8 flex justify-center items-center">
					<ClipLoader size={32} />
				</div>
			) : (
				<ul>
					{articles.items.map((article, index) => (
						<ArticleItem
							key={article.slug}
							article={article}
							number={index + 1}
						/>
					))}
				</ul>
			)}
			{pageCount > 0 ? (
				<Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
			) : null}
		</div>
	);
};

export default ArticleIndex;
