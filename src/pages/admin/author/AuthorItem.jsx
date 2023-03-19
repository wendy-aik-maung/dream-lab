import React, { useEffect, useState } from "react";

const AuthorItem = ({
  setEditStatus,
  setDeleteStatus,
  author,
  setEditAuthor,
}) => {
  const [status, setStatus] = useState({ color: "", text: "" });
  const onClickEdit = () => {
    setEditAuthor(author);
    setEditStatus(true);
  };

  const onClickDelete = () => {
    setDeleteStatus(true);
  };
  const handleStatusChange = () => {
    if (author.status === "a") {
      setStatus({ color: "bg-[#058F23]", text: "active" });
    } else {
      setStatus({ color: "bg-[#C99206]", text: "pending" });
    }
  };

  useEffect(() => {
    handleStatusChange();
  }, [author]);

  return (
    <article className="bg-white rounded p-9 grid grid-cols-12 shadow-lg">
      <h4 className="text-xl font-medium capitalize col-span-4 ">
        {author.name}
      </h4>
      <div className="col-span-4 ">
        <span
          className={`px-4 py-2 text-white text-sm ${status?.color} rounded-full `}
        >
          {status?.text}
        </span>
      </div>
      <div className="flex gap-12 justify-end col-span-4">
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

export default AuthorItem;
