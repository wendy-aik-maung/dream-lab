import React from "react";
import { Link } from "react-router-dom";

const AdminSidebarLink = ({ to, icon, title }) => {
  return (
    <>
      <Link to={`/admin${to}`} className="py-4 flex items-center">
       
          <figure>{icon}</figure>
          <p className="px-3  hover:text-white">{title}</p>
       
      </Link>
    </>
  );
};

export default AdminSidebarLink;
