import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import UserLogin from "../../components/user/UserLogin";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import { useRegisterModalContext } from "../../contexts/RegisterModalContext";
import UserRegister from "../../components/user/UserRegister";

const UserLayout = () => {
  const { isUserLoginModalOpen } = useLoginModalContext();
  const { isUserRegisterModalOpen } = useRegisterModalContext();

  return (
    <>
      <main
        className="max-w-[1440px] mx-auto font-poppins
      px-6 md:px-4 lg:px-2"
      >
        <Navbar />
        <Outlet />
      </main>
      <Footer />
      {isUserLoginModalOpen ? <UserLogin /> : null}
      {isUserRegisterModalOpen ? <UserRegister /> : null}
    </>
  );
};

export default UserLayout;
