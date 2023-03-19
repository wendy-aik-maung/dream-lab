import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  useCreateArticleAuthor,
  useDeleteArticleAuthor,
  useGetArticleAuthor,
  useUpdateArticleAuthor,
} from "../../../hooks/useAuthors";
import { ClipLoader } from "react-spinners";
import AuthorItem from "./AuthorItem";
import CreateAuthor from "./CreateAuthor";
import DeleteModal from "./DeleteModal";
import EditAuthor from "./EditAuthor";

const ArticleAuthor = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const { isLoading, isError, error, data, refetch } = useGetArticleAuthor();
  const [editAuthor, setEditAuthor] = useState({
    id: "",
    name: "",
    status: "",
  });

  const [id, setId] = useState("");

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
            setId={setId}
          />
        ))
      )}

      {createStatus ? (
        <CreateAuthor
          setCreateStatus={setCreateStatus}
          refreshData={refreshData}
          useCreateAuthor={useCreateArticleAuthor}
        />
      ) : null}
      {editStatus ? (
        <EditAuthor
          editAuthor={editAuthor}
          setEditAuthor={setEditAuthor}
          setEditStatus={setEditStatus}
          refreshData={refreshData}
          useEditMutation={useUpdateArticleAuthor}
        />
      ) : null}
      {deleteStatus ? (
        <DeleteModal
          id={id}
          refreshData={refreshData}
          setDeleteStatus={setDeleteStatus}
          useAuthorDeleteMutation={useDeleteArticleAuthor}
        />
      ) : null}
    </section>
  );
};

export default ArticleAuthor;
