import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../form/InputForm";
import { HiXMark } from "react-icons/hi2";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import { useRegisterModalContext } from "../../contexts/RegisterModalContext";
const UserLogin = () => {
  const { setIsUserLoginModalOpen } = useLoginModalContext();
  const { setIsUserRegisterModalOpen } = useRegisterModalContext();
  const handleLoginModalClose = () => {
    return setIsUserLoginModalOpen(false);
  };

  const handleRegisterModalOpen = () => {
    handleLoginModalClose();
    setIsUserRegisterModalOpen(true);
  };

  return (
    <div
      className="fixed top-0 w-screen h-full flex justify-center items-center z-10 bg-black bg-opacity-80"
      onClick={handleLoginModalClose}
    >
      <div
        className="p-8 bg-white rounded-2xl relative max-w-[425px] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center font-bold font-asap text-2xl text-textColor1 my-4">
          Login
        </h2>
        <p className="text-center text-[#231F20] font-medium mb-8 font-asap">
          Login to find new experiences
        </p>
        <HiXMark
          className="absolute top-6 right-8 text-2xl stroke-1 cursor-pointer"
          onClick={handleLoginModalClose}
        />
        <form action="" className="flex flex-col  mb-8">
          <InputForm placeholder="Email/Phone no" />
          <InputForm type="password" placeholder="Password" />
          <Link to="/" className="text-sm font-medium text-[#173358] mb-8">
            Forget Password?
          </Link>
          <button className="btn_primary font-medium text-lg">Login</button>
        </form>
        <div className="flex font-asap gap-1">
          <p className="text-textColor1">Don't have an account?</p>
          <span
            className="cursor-pointer font-bold text-[#173358]"
            onClick={handleRegisterModalOpen}
          >
            Request Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
