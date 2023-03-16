import React from "react";

const DetailsSidebar = ({ setIsSidebarOpen, userId }) => {
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-end "
      onClick={() => setIsSidebarOpen(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Hello</h1>
      </div>
    </aside>
  );
};

export default DetailsSidebar;
