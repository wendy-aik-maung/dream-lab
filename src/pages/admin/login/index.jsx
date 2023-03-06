import React from "react";
import loginImg from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";
import InputForm from "../../../components/form/InputForm";
const AdminLogin = () => {
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
        <form className="w-9/12">
          <div className="mb-4">
            <InputForm
              label="Email"
              id="email"
              type="email "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <InputForm
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              className="bg-dreamLabColor1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
