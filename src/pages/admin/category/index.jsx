import React, { useState } from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import CategoryItem from "./CategoryItem";
import CreateCategory from "./CreateCategory";
import DeleteModal from "./DeleteModal";
import EditCategory from "./EditCategory";

const CategoryIndex = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  return (
    <section>
      <CreatePageTitle
        title="Category"
        buttonTitle="Create New"
        setCreateStatus={setCreateStatus}
      />
      <section className="flex flex-col gap-4 mt-12">
        <CategoryItem
          setEditStatus={setEditStatus}
          setDeleteStatus={setDeleteStatus}
        />
        <CategoryItem
          setEditStatus={setEditStatus}
          setDeleteStatus={setDeleteStatus}
        />
        <CategoryItem
          setEditStatus={setEditStatus}
          setDeleteStatus={setDeleteStatus}
        />
      </section>
      {createStatus ? (
        <CreateCategory setCreateStatus={setCreateStatus} />
      ) : null}
      {editStatus ? <EditCategory setEditStatus={setEditStatus} /> : null}
      {deleteStatus ? <DeleteModal setDeleteStatus={setDeleteStatus} /> : null}
    </section>
  );
};

export default CategoryIndex;
