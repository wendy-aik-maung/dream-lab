import React from "react";

const AuthorItem = ({ setEditStatus, setDeleteStatus }) => {
  const onClickEdit = () => {
    setEditStatus(true);
  };

  const onClickDelete = () => {
    setDeleteStatus(true);
  };

  return (
    <article className="bg-white rounded p-9 flex items-center  justify-between shadow-lg">
      <h4 className="text-xl font-medium capitalize ">Author Name</h4>
      <div className="text-sm grow  ">
        <span className="py-2 px-4 rounded-full bg-red-400 ml-12">status</span>
      </div>
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

export default AuthorItem;
