import React, { useState } from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import { useGetCategories } from "../../../hooks/useCategory";
import CategoryItem from "./CategoryItem";
import CreateCategory from "./CreateCategory";
import DeleteModal from "./DeleteModal";
import EditCategory from "./EditCategory";
import { ClipLoader } from "react-spinners";
const CategoryIndex = () => {
	const [createStatus, setCreateStatus] = useState();
	const [editStatus, setEditStatus] = useState(false);
	const [deleteStatus, setDeleteStatus] = useState(false);
	const [id, setId] = useState("");

	const { isLoading, data: categories, refetch, isError } = useGetCategories();

	const handleRefreshData = () => {
		refetch();
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<ClipLoader color="black" size={32} />
			</div>
		);
	}
	if (isError) {
		return <p className="text-red-500 font-poppins">{error.message}</p>;
	}

	return (
		<section>
			<CreatePageTitle
				title="Category"
				buttonTitle="Create New"
				setCreateStatus={setCreateStatus}
			/>
			<section className="flex flex-col gap-4 mt-12">
				{categories.map((category) => (
					<CategoryItem
						key={category.id}
						setId={setId}
						category={category}
						setEditStatus={setEditStatus}
						setDeleteStatus={setDeleteStatus}
					/>
				))}
			</section>
			{createStatus ? (
				<CreateCategory
					setCreateStatus={setCreateStatus}
					handleRefreshData={handleRefreshData}
				/>
			) : null}
			{editStatus ? (
				<EditCategory
					id={id}
					setEditStatus={setEditStatus}
					handleRefreshData={handleRefreshData}
				/>
			) : null}
			{deleteStatus ? (
				<DeleteModal
					id={id}
					setDeleteStatus={setDeleteStatus}
					handleRefreshData={handleRefreshData}
				/>
			) : null}
		</section>
	);
};

export default CategoryIndex;
