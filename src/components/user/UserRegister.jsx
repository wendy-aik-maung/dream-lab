import React from "react";
import InputForm from "../form/InputForm";
import { HiXMark } from "react-icons/hi2";
import { useRegisterModalContext } from "../../contexts/RegisterModalContext";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import { FiChevronsLeft } from "react-icons/fi";
const UserRegister = () => {
  const { setIsUserRegisterModalOpen } = useRegisterModalContext();
  const { setIsUserLoginModalOpen } = useLoginModalContext();
  const handleRegisterModalClose = () => {
    return setIsUserRegisterModalOpen(false);
  };

  const handleLoginModalOpen = () => {
    handleRegisterModalClose();
    setIsUserLoginModalOpen(true);
  };

  return (
    <div
      className="fixed top-0 w-screen h-full flex justify-center items-center z-10 bg-black bg-opacity-80"
      onClick={handleRegisterModalClose}
    >
      <div
        className="p-8 bg-white rounded-2xl relative max-w-[20rem] md:max-w-[425px]  w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-start">
          <div
            onClick={handleLoginModalOpen}
            className="w-full font-asap text-sm cursor-pointer flex items-center gap-1"
          >
            <FiChevronsLeft size={18} className="stroke-2 text-[#22B686]" />
            <span>Back to Login</span>
          </div>
          <HiXMark
            className="absolute top-6 right-8 text-2xl stroke-1 cursor-pointer"
            onClick={handleRegisterModalClose}
          />
        </div>
        <h2 className="text-center font-bold font-asap text-2xl text-textColor1 my-4">
          Register
        </h2>
        <p className="text-center text-[#231F20] font-medium mb-8 font-asap">
          Register to find new experiences
        </p>
        <form action="" className="flex flex-col  mb-8">
          <InputForm placeholder="Email/Phone no" />
          <InputForm type="password" placeholder="Password" />
          <InputForm type="password" placeholder="Re-enter password" />

          <button className="btn_primary font-medium text-lg mt-8">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
