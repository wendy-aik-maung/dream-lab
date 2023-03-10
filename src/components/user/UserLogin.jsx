import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { HiXMark } from "react-icons/hi2";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import InputForm from "../form/InputForm";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
import { useRegisterModalContext } from "../../contexts/RegisterModalContext";
import { useUserLogin } from "../../hooks/useUserLogin";
import { useUserDataContext } from "../../contexts/UserDataContext";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LOGGING_IN = "loading";
const LOGIN_SUCCESS = "success";
const LOGIN_FAILED = "failed";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, isShow: false };

    case LOGIN_SUCCESS:
      return {
        ...state,
        msg: "Successfully logged in.",
        cls: "bg-green-400",
        isShow: true,
      };

    case LOGIN_FAILED:
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

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const userLoginMutation = useUserLogin();
  const [state, dispatch] = useReducer(reducer, {
    msg: "",
    cls: "",
    isShow: false,
  });

  const onSubmit = async (data) => {
    dispatch({ type: LOGGING_IN });
    userLoginMutation.mutate(data);
  };

  const { setIsUserLoginModalOpen } = useLoginModalContext();
  const { setIsUserRegisterModalOpen } = useRegisterModalContext();
  const { refreshUserData } = useUserDataContext();
  const handleLoginModalClose = () => {
    return setIsUserLoginModalOpen(false);
  };

  const handleRegisterModalOpen = () => {
    handleLoginModalClose();
    setIsUserRegisterModalOpen(true);
  };

  useEffect(() => {
    let timer;

    if (userLoginMutation.isSuccess) {
      dispatch({ type: LOGIN_SUCCESS });
      refreshUserData();
      timer = setTimeout(() => {
        handleLoginModalClose();
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [userLoginMutation.isSuccess]);

  useEffect(() => {
    if (userLoginMutation.isError) {
      dispatch({
        type: LOGIN_FAILED,
        payload: { message: userLoginMutation.error.message },
      });
    }
  }, [userLoginMutation.isError]);

  return (
    <div
      className="fixed top-0 w-screen h-full flex justify-center items-center z-10 bg-black bg-opacity-80 "
      onClick={handleLoginModalClose}
    >
      <div
        className="p-8 bg-white rounded-2xl relative max-w-[20rem] md:max-w-[425px] w-full flex flex-col items-center"
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
          <Link to="/" className="text-sm font-medium text-[#173358] mb-8">
            Forget Password?
          </Link>
          <button
            className="btn_primary font-medium text-lg  disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={userLoginMutation.isLoading}
          >
            {userLoginMutation.isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <ClipLoader color="white" size={24} />
                <span>Logging in</span>
              </div>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
        <div className="flex font-asap gap-1">
          <p className="text-textColor1 whitespace-nowrap">
            Don't have an account?
          </p>
          <span
            className="cursor-pointer font-bold text-[#173358] whitespace-nowrap"
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
