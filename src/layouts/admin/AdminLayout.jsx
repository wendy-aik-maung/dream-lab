import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <main className="relative font-poppins">
        <Header />
        <div className="flex flex-row ">
          <Sidebar />
          <div className="ml-80 mt-20  w-full p-12 font-poppins">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
