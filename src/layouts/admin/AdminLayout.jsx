import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
const AdminLayout = () => {
  return (
    <main>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
