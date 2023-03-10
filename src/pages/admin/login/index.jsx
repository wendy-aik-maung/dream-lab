import React from "react";
import loginImg from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAdminLogin } from "../../../hooks/useAdminLogin";
import InputForm from "../../../components/form/InputForm";
const AdminLoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const AdminLogin = () => {
  const adminLoginMutation = useAdminLogin();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(AdminLoginSchema) });

  const onSubmit = (data) => {
    adminLoginMutation.mutate(data);
  };

  return (
    <main className="flex flex-row w-full h-screen font-poppins">
      {/* Login image section */}

      <div className=" md:flex flex-col items-center justify-center w-6/12 hidden bg-[#e6fbff]">
        <img src={loginImg} />
      </div>

      {/* form section */}
      <div className="  w-full md:w-1/2 flex flex-col items-center justify-center ">
        <figure className="pb-4">
          <img src={Logo2} className="object-cover object-center" />
        </figure>
        <h1 className="text-2xl font-bold py-5">Welcome To Dream Lab Admin</h1>
        <form className="w-9/12" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <InputForm
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              register={register}
              errors={errors}
            />
          </div>
          <div className="mb-4">
            <InputForm
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              register={register}
              errors={errors}
            />
          </div>
          {adminLoginMutation.isError ? (
            <p className="text-red-500 font-poppins">
              {adminLoginMutation.error.message}
            </p>
          ) : null}
          <div className="flex items-center justify-between mt-8">
            <button
              className="bg-dreamLabColor1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={adminLoginMutation.isLoading}
            >
              {adminLoginMutation.isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <ClipLoader color="white" size={24} />
                  <span>Logging in</span>
                </div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
