import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
const UserLayout = () => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto font-poppins">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
