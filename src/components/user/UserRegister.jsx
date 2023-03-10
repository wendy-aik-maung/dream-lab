import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { HiXMark } from "react-icons/hi2";
import { FiChevronsLeft } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import InputForm from "../form/InputForm";
import { useRegisterModalContext } from "../../contexts/RegisterModalContext";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import { useUserRegister } from "../../hooks/useUserRegister";
import { useUserDataContext } from "../../contexts/UserDataContext";

const RegisterSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password did not match!"),
});

const REGISTERING = "loading";
const REGISTER_SUCCESS = "success";
const REGISTER_FAILED = "failed";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTERING:
      return { ...state, isShow: false };

    case REGISTER_SUCCESS:
      return {
        ...state,
        msg: "Successfully registered.",
        cls: "bg-green-400",
        isShow: true,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        msg: action.payload.message,
        cls: "bg-red-600",
        isShow: true,
      };

    default:
      return state;
  }
};

const UserRegister = () => {
  const { setIsUserRegisterModalOpen } = useRegisterModalContext();
  const { setIsUserLoginModalOpen } = useLoginModalContext();
  const { refreshUserData } = useUserDataContext();
  const [state, dispatch] = useReducer(reducer, {
    msg: "",
    cls: "",
    isShow: false,
  });

  const handleRegisterModalClose = () => {
    return setIsUserRegisterModalOpen(false);
  };

  const handleLoginModalOpen = () => {
    handleRegisterModalClose();
    setIsUserLoginModalOpen(true);
  };

  // ========== Auth ========== //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const userRegisterMutation = useUserRegister();

  const onSubmit = async (data) => {
    dispatch({ type: REGISTERING });
    userRegisterMutation.mutate(data);
  };

  useEffect(() => {
    let timer;
    if (userRegisterMutation.isSuccess) {
      dispatch({ type: REGISTER_SUCCESS });
      timer = setTimeout(() => {
        handleRegisterModalClose();
        refreshUserData();
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [userRegisterMutation.isSuccess]);

  useEffect(() => {
    if (userRegisterMutation.isError) {
      dispatch({
        type: REGISTER_FAILED,
        payload: { message: userRegisterMutation.error.message },
      });
    }
  }, [userRegisterMutation.isError]);

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
        {state.isShow ? (
          <div
            className={`${state.cls}  w-full text-center py-4 my-4 rounded-md`}
          >
            <p className="text-white font-medium font-poppins">{state.msg}</p>
          </div>
        ) : null}
        <form
          action=""
          className="flex flex-col  mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm
            placeholder="Email"
            type="email"
            register={register}
            name="email"
            errors={errors}
          />
          <InputForm
            type="password"
            placeholder="Password"
            register={register}
            name="password"
            errors={errors}
          />
          <InputForm
            type="password"
            placeholder="Confirm password"
            name="confirmpassword"
            register={register}
            errors={errors}
          />

          <button
            className="btn_primary font-medium text-lg mt-8 disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={userRegisterMutation.isLoading}
          >
            {userRegisterMutation.isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <ClipLoader color="white" size={24} />
                <span>Registering</span>
              </div>
            ) : (
              <span>Register</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
