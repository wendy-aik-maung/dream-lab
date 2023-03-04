import React from "react";
import loginImg from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";

const AdminLogin = () => {
  return (
    <main className="flex flex-row w-full h-screen ">
      {/* Login image section */}
      
        <div className="bg-[#E6FBFF] md:flex flex-col items-center justify-center w-6/12 hidden">
          <img src={loginImg} />
        </div>
    

      {/* form section */}
      <div className="  w-full md:w-1/2 flex flex-col items-center justify-center bg-white ">
        <figure className="pb-4">
          <img src={Logo2} className="object-cover object-center" />
        </figure>
        <h1 className="text-2xl font-bold py-5">Welcome To Dream Lab Admin</h1>
        <form className="w-9/12">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
