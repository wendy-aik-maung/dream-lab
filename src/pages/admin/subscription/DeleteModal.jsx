import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ isDelete, setIsDelete }) => {
	return (
		<section
			className={`fixed top-1/4 right-1/3 z-50 bg-white shadow-xl flex flex-col items-center w-[400px] py-8 rounded-md rounded-t-md px-5 ${
				isDelete ? "block" : "hidden"
			}`}>
			<RiDeleteBin6Line size={80} className="text-start" />
			<p className="font-medium text-xl text-center my-5">
				Are you sure want to delete this subscription plan?
			</p>

			<div className="flex gap-x-7">
				<button
					className="bg-grey6 rounded-md py-2 px-4"
					onClick={() => setIsDelete(false)}>
					Cancel
				</button>
				<button className="bg-red-600 rounded-md text-white py-2 px-4 flex items-center gap-x-3">
					Delete
				</button>
			</div>
		</section>
	);
};

export default DeleteModal;
