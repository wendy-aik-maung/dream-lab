import React from "react";

const PlanItem = ({
  plan,
  setEditStatus,
  setEditPlan,
  setPlanCode,

  setDeleteStatus,
}) => {
  const onClickEdit = () => {
    setEditStatus(true);
    setEditPlan(plan);
  };

  const onClickDelete = () => {
    setDeleteStatus(true);
    setPlanCode(plan.code);
  };

  return (
    <article className="bg-white rounded p-9 flex items-center justify-between shadow-lg">
      <h4 className="text-xl font-medium capitalize">{plan.name}</h4>
      <div className="flex gap-12">
        <button
          className="btn_primary font-medium text-textColor1 w-[6rem]"
          onClick={onClickEdit}
        >
          Edit
        </button>
        <button className="font-medium text-red-500" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default PlanItem;
