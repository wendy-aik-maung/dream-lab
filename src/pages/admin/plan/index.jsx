import React, { useState } from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import CreatePlan from "./CreatePlan";
import EditPlan from "./EditPlan";
import PlanItem from "../plan/PlanItem";
import DeleteModal from "./DeleteModal";
import { useGetPlans } from "../../../hooks/usePlans";

// FOR UI ONLY (need to delete)
const tempPlans = [
  {
    id: 1,
    planCode: "videoCode",
    planName: "Videos",
  },
  {
    id: 2,
    planCode: "articleCode",
    planName: "Articles",
  },
  {
    id: 3,
    planCode: "bookCode",
    planName: "Bookd",
  },
  ,
];

const PlanIndex = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editPlan, setEditPlan] = useState({
    planCode: "",
    planName: "",
  });
  const [planCode, setPlanCode] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const { refetch } = useGetPlans();

  const refreshData = () => {
    refetch();
  };

  return (
    <section>
      <CreatePageTitle
        title="Created Plan"
        buttonTitle="Create New"
        setCreateStatus={setCreateStatus}
      />
      <section className="flex flex-col gap-4 mt-12">
        {tempPlans.map((plan) => (
          <PlanItem
            key={plan.id}
            planName={plan.planName}
            planCode={plan.planCode}
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
          {...editPlan}
          setEditPlan={setEditPlan}
          setEditStatus={setEditStatus}
          refreshData={refreshData}
        />
      ) : null}
      {deleteStatus ? (
        <DeleteModal
          setDeleteStatus={setDeleteStatus}
          refreshData={refreshData}
        />
      ) : null}
    </section>
  );
};

export default PlanIndex;
