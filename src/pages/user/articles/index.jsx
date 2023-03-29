import React from "react";
import { Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Articles;
