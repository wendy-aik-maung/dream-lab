import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import Profile from "../../../assets/profile.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileSchema = yup.object({
  displayname: yup.string().required(),
  email: yup.string().email().required(),
  phonenumber: yup.string().required(),
  profileImage: yup.mixed().required(),
  dob: yup.date().required(),
});

const MyAccount = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(ProfileSchema) });

  profileImage = watch("profileImage");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="px-10 lg:px-16 py-12 font-poppins">
      <form
        action=""
        className="max-w-[640px] w-full  mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex items-center gap-12">
          <div className="w-[8rem] h-[8rem]  grid place-items-center  border-slate-900  rounded-full  relative">
            <img src={Profile} alt="" className="w-full h-full object-cover" />
          </div>
          <label
            htmlFor="profileImage"
            className="text-white bg-dreamLabColor1  rounded-md py-2 px-4 cursor-pointer"
          >
            Upload a profile image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            className=" absolute top-10 hidden"
          />
        </fieldset>

        <InputForm
          register={register}
          errors={errors}
          label="Full name"
          placeholder="Type Full Name"
          name="displayname"
        />
        <InputForm
          register={register}
          type="email"
          errors={errors}
          label="Email Address"
          placeholder="Type Full Name"
          name="email"
          readOnly={true}
        />
        <InputForm
          register={register}
          errors={errors}
          label="Phone Number"
          placeholder="Type Phone number"
          name="phonenumber"
        />
        <InputForm
          register={register}
          errors={errors}
          label="Date of Birth"
          placeholder="Select date of birth"
          type="date"
          name="dob"
        />
        <button className="btn_primary mt-8 text-white">Update</button>
      </form>
    </section>
  );
};

export default MyAccount;
