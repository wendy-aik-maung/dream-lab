import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/form/InputForm";
import Profile from "../../../assets/profile.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useAddAdditionalInformation,
  useGetUserInfo,
} from "../../../hooks/useUserInfo";
import { ClipLoader } from "react-spinners";
import { dateFormatter } from "../../../utils/dateFormatter";
import { useUserDataContext } from "../../../contexts/UserDataContext";
import { USER_DATA_LOCAL_STORAGE } from "../../../contexts/UserDataContext";
import { useNavigate } from "react-router-dom";

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
    setValue,
  } = useForm({ resolver: yupResolver(ProfileSchema) });

  const navigate = useNavigate();

  const { userData, setUserData } = useUserDataContext();

  const userInformationMuatation = useAddAdditionalInformation();

  const profileImage = watch("profileImage");

  const { isLoading, data: userInfo, isSuccess } = useGetUserInfo();

  const onSubmit = (data) => {
    const tempData = {
      displayName: data.displayname,
      phoneNumber: data.phonenumber,
      dob: dateFormatter(data.dob),
      profileImage: data.profileImage,
    };

    userInformationMuatation.mutate({ data: tempData, userId: userData.id });
  };

  useEffect(() => {
    if (isSuccess) {
      setValue("email", userInfo?.email);
      setValue("displayname", userInfo?.displayName || "");
      setValue("phonenumber", userInfo?.phoneNumber || "");
      setValue("dob", userInfo?.dob || "");
      setValue("profileImage", userInfo?.profileImage || []);
    }
  }, [setValue, isSuccess, userInfo]);

  useEffect(() => {
    if (userInformationMuatation.isSuccess) {
      const { data } = userInformationMuatation;

      const tempData = {
        ...userData,
        profileImage: data.profileImage,
        displayName: data.displayName,
        phoneNumber: data.phoneNumber,
        dob: data.dob,
      };

      setUserData(tempData);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(tempData));
      navigate("/");
    }
  }, [userInformationMuatation.isSuccess]);

  return (
    <section className="px-10 lg:px-16 py-12 font-poppins">
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="black" size={48} />
        </div>
      ) : (
        <form
          action=""
          className="max-w-[640px] w-full  mx-auto flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col md:flex-row items-center gap-12 ">
            <div className=" w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]  grid place-items-center  border-slate-900  rounded-full  ">
              {profileImage?.[0] ? (
                <img
                  src={
                    typeof profileImage === "string"
                      ? profileImage
                      : URL.createObjectURL(profileImage?.[0])
                  }
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src={Profile}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <label
              htmlFor="profileImage"
              className="text-white bg-dreamLabColor1  rounded-md py-2 px-4 cursor-pointer "
            >
              Upload a profile image
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className=" absolute hidden "
              {...register("profileImage")}
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
          <button className="btn_primary mt-8 text-white" type="submit">
            {userInformationMuatation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader size={16} color="white" />
                <span>Updating...</span>
              </div>
            ) : (
              <span>Update</span>
            )}
          </button>
        </form>
      )}
    </section>
  );
};

export default MyAccount;
