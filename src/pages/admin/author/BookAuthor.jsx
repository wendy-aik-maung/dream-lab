import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AuthorItem from "./AuthorItem";
import CreateAuthor from "./CreateAuthor";
import DeleteModal from "./DeleteModal";
import EditAuthor from "./EditAuthor";

const BookAuthor = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  return (
    <section className="flex flex-col gap-4 ">
      <div className="absolute top-0 right-0">
        <button
          onClick={() => setCreateStatus(true)}
          className="btn_primary flex gap-2 items-center justify-center font-medium w-[15rem]"
        >
          <AiFillPlusCircle size={18} />
          <span>Create New</span>
        </button>
      </div>
      <AuthorItem
        setDeleteStatus={setDeleteStatus}
        setEditStatus={setEditStatus}
      />
      <AuthorItem
        setDeleteStatus={setDeleteStatus}
        setEditStatus={setEditStatus}
      />
      {createStatus ? <CreateAuthor setCreateStatus={setCreateStatus} /> : null}
      {editStatus ? <EditAuthor setEditStatus={setEditStatus} /> : null}
      {deleteStatus ? <DeleteModal setDeleteStatus={setDeleteStatus} /> : null}
    </section>
  );
};

export default BookAuthor;
