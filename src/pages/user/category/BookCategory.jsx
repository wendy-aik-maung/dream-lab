import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useGetBooksByUsers } from "../../../hooks/useBooks";
import BookItem from "../library/BookItem";
import Pagination from "../../../components/admin/Pagination";

const BookCategory = ({ id }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	const { isLoading, data, isSuccess } = useGetBooksByUsers(
		currentPage,
		8,
		"",
		[id],
		"",
		"",
		""
	);
	console.log(data);
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	useEffect(() => {
		if (isSuccess) {
			setPageCount(data.meta.totalPages);
		}
	}, [isSuccess, data]);
	console.log(pageCount);
	return (
		<div className="font-poppins px-2 md:px-6 lg:px-20 py-20 text-textColor1">
			{isLoading ? (
				<div className="flex justify-center items-center py-12">
					<ClipLoader color="black" size={48} />
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{data?.items?.map((item, index) => (
						<BookItem key={item?.id} data={item} number={index + 1} />
					))}
				</div>
			)}
			{pageCount > 0 ? (
				<Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
			) : null}
		</div>
	);
};

export default BookCategory;
