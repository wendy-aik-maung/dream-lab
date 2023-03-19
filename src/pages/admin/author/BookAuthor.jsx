import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGetBookAuthor } from "../../../hooks/useAuthors";
import AuthorItem from "./AuthorItem";
import CreateAuthor from "./CreateAuthor";
import DeleteModal from "./DeleteModal";
import EditAuthor from "./EditAuthor";
import { ClipLoader } from "react-spinners";

const BookAuthor = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editAuthor, setEditAuthor] = useState({
    id: "",
    name: "",
    status: "",
  });
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const { isLoading, isError, error, data, refetch } = useGetBookAuthor();

  const refreshData = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="white" size={24} />
      </div>
    );
  }
  if (isError) {
    return <p className="text-red-500 font-poppins">{error.message}</p>;
  }

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
      {data.length === 0 ? (
        <section className="mt-48 text-center">
          <div className="flex justify-center">
            <EmptyView />
          </div>
          <p className="mt-5">You have no authors inserted yet</p>
        </section>
      ) : (
        data.map((author) => (
          <AuthorItem
            key={author.id}
            author={author}
            setDeleteStatus={setDeleteStatus}
            setEditStatus={setEditStatus}
            setEditAuthor={setEditAuthor}
          />
        ))
      )}

      {createStatus ? (
        <CreateAuthor
          setCreateStatus={setCreateStatus}
          refreshData={refreshData}
        />
      ) : null}
      {editStatus ? (
        <EditAuthor
          editAuthor={editAuthor}
          setEditAuthor={setEditAuthor}
          setEditStatus={setEditStatus}
          refreshData={refreshData}
        />
      ) : null}
      {deleteStatus ? <DeleteModal setDeleteStatus={setDeleteStatus} /> : null}
    </section>
  );
};

export default BookAuthor;
