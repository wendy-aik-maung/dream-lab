import React, { useState } from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import CreatePlan from "./CreatePlan";
import EditPlan from "./EditPlan";
import PlanItem from "../plan/PlanItem";
import DeleteModal from "./DeleteModal";
import { useGetPlans } from "../../../hooks/usePlans";
import { ClipLoader } from "react-spinners";
// FOR UI ONLY (need to delete)

const PlanIndex = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editPlan, setEditPlan] = useState({
    code: "",
    name: "",
  });
  const [planCode, setPlanCode] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const { isLoading, isError, error, data, refetch } = useGetPlans();

  const refreshData = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="white" size={24} />
      </div>
    );
  }
  if (isError) {
    return <p className="text-red-500 font-poppins">{error.message}</p>;
  }
  console.log(data);

  return (
    <section>
      <CreatePageTitle
        title="Created Plan"
        buttonTitle="Create New"
        setCreateStatus={setCreateStatus}
      />
      <section className="flex flex-col gap-4 mt-12">
        {data.map((plan) => (
          <PlanItem
            key={plan.code}
            plan={plan}
            setEditStatus={setEditStatus}
            setEditPlan={setEditPlan}
            setPlanCode={setPlanCode}
            setDeleteStatus={setDeleteStatus}
          />
        ))}
      </section>
      {createStatus ? (
        <CreatePlan
          setCreateStatus={setCreateStatus}
          refreshData={refreshData}
        />
      ) : null}
      {editStatus ? (
        <EditPlan
          editPlan={editPlan}
          setEditPlan={setEditPlan}
          setEditStatus={setEditStatus}
          refreshData={refreshData}
        />
      ) : null}
      {deleteStatus ? (
        <DeleteModal
          planCode={planCode}
          setDeleteStatus={setDeleteStatus}
          refreshData={refreshData}
        />
      ) : null}
    </section>
  );
};

export default PlanIndex;
