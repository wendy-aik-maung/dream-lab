import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <main className=" font-poppins">
        <Header />
        <div className="flex flex-row ">
          <Sidebar/>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
