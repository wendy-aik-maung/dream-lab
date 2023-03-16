import React, { useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useDeletePlan } from "../../../hooks/usePlans";
const DeleteModal = ({ planCode, setDeleteStatus, refreshData }) => {
  const deletePlanMutation = useDeletePlan();

  const onRemoveHandle = () => {
    deletePlanMutation.mutate(planCode);
  };

  useEffect(() => {
    if (deletePlanMutation.isSuccess) {
      refreshData();
      setDeleteStatus(false);
    }
  }, [deletePlanMutation.isSuccess]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center items-center "
      onClick={() => setDeleteStatus()}
    >
      <div
        className="bg-white rounded-lg p-8 flex flex-col items-center w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <RiDeleteBin5Line size={96} fill={"#bfbfbf"} className="mb-8" />
        <p className="font-medium text-xl text-center mb-12 text-[#333]">
          Are you sure want to delete this plan?
        </p>
        {deletePlanMutation.isError && (
          <p className="text-red-400">{deletePlanMutation.error.message}</p>
        )}
        <div className="flex gap-4">
          <button
            className="font-medium bg-[#E4E4E4] px-4 py-2 rounded"
            onClick={() => setDeleteStatus(false)}
          >
            Cancel
          </button>
          <button
            className="font-medium bg-[#BC3131] px-4 py-2 rounded text-white disabled:cursor-not-allowed disabled:bg-opacity-75"
            disabled={deletePlanMutation.isLoading}
            onClick={onRemoveHandle}
          >
            {deletePlanMutation.isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <ClipLoader color="white" size={24} />
                <span>Deleting...</span>
              </div>
            ) : (
              <span>Delete</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
