import React, { useEffect, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PremiumIcon from "../../../assets/Premium_icon.svg";
import AYA from "../../../assets/AYA.png";
import AYAPAY from "../../../assets/AYAPAY.png";
import KBZ from "../../../assets/KBZ.png";
import KBZPAY from "../../../assets/KBZPAY.png";
import WAVEPAY from "../../../assets/WAVEPAY.png";
import { useGetSingleSubscription } from "../../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";
import { BsImage } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import { getToken } from "../../../utils/getToken";
import { useUserSubscribe } from "../../../hooks/useSubscriptions";
import { useLoginModalContext } from "../../../contexts/LoginModalContext";
import { useRegisterModalContext } from "../../../contexts/RegisterModalContext";
import UserRegister from "../../../components/user/UserRegister";
import UserLogin from "../../../components/user/UserLogin";
const bankInformations = [
  {
    id: "kbzpay",
    logo: KBZPAY,
    title: "DreamLab",
    phone: "09123456789",
  },
  {
    id: "wavepay",
    logo: WAVEPAY,
    title: "DreamLab",
    phone: "09123456789",
  },
  {
    id: "ayapay",
    logo: AYAPAY,
    title: "DreamLab",
    phone: "09123456789",
  },
  {
    id: "kbz",
    logo: KBZ,
    title: "DreamLab",
    phone: "09123456789",
  },
  {
    id: "aya",
    logo: AYA,
    title: "DreamLab",
    phone: "09123456789",
  },
];

const PENDING = "loading";
const SUCCESS = "success";
const FAILED = "failed";

const reducer = (state, action) => {
  switch (action.type) {
    case PENDING:
      return { ...state, isShow: false };

    case SUCCESS:
      return {
        ...state,
        msg: "Success! Thank you for your subscription!",
        cls: "bg-green-400",
        isShow: true,
      };

    case FAILED:
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

const PurchasePlan = () => {
  const navigate = useNavigate();

  const { isUserLoginModalOpen, setIsUserLoginModalOpen } =
    useLoginModalContext();
  const { isUserRegisterModalOpen } = useRegisterModalContext();

  const { subscriptionId } = useParams();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const {
    isLoading,
    isError,
    data: subscriptionData,
  } = useGetSingleSubscription(subscriptionId);

  const userSubscribeMutation = useUserSubscribe();
  const [state, dispatch] = useReducer(reducer, {
    msg: "",
    cls: "",
    isShow: false,
  });

  const refreshUserData = () => {
    reset();
  };

  const onSubmit = async () => {
    const token = getToken();
    if (!token) {
      setIsUserLoginModalOpen(true);
    } else {
      userSubscribeMutation.mutate({
        id: subscriptionId,
        image: bankSlip?.[0],
      });
    }
  };

  const handleRemoveImage = () => {
    reset();
  };

  const bankSlip = watch("bankslip");

  useEffect(() => {
    let timer;

    if (userSubscribeMutation.isSuccess) {
      dispatch({ type: SUCCESS });
      timer = setTimeout(() => {
        refreshUserData();
        dispatch({ type: PENDING });
        navigate("/pricing");
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [userSubscribeMutation.isSuccess]);

  useEffect(() => {
    if (userSubscribeMutation.isError) {
      dispatch({
        type: FAILED,
        payload: { message: userSubscribeMutation.error.message },
      });
    }
  }, [userSubscribeMutation.isError]);

  return (
    <section className="flex flex-col md:flex-row min-h-screen font-poppins">
      {/* first-col */}
      <div className="basis-1/2 bg-[#1e315f] px-4 md:px-6 xl:px-20 py-10 text-white">
        <Link
          to="/pricing"
          className="flex items-center gap-4 font-medium text-base md:text-lg"
        >
          <BsArrowLeft className="mt-1" />
          <span>Back To Dream Lab Pricing Page</span>
        </Link>
        <h2 className="flex gap-4 items-center my-10 md:my-16">
          <span className="text-lg lg:text-2xl xl:text-3xl font-semibold">
            Complete Purchase
          </span>
          <img src={PremiumIcon} alt="premiumicon" />
        </h2>

        <div className="flex justify-between flex-col xl:flex-row items-center bg-gradient-to-r from-[#FFFFFF25] to-[#FFFFFF1B] px-8 py-6 rounded max-w-[480px] w-full mb-20 gap-4">
          <div>
            <h3 className="text-lg mb-6 xl:block hidden">Select Plan</h3>
            {isLoading ? (
              <div className="flex justify-center">
                <ClipLoader color="white" size={20} />
              </div>
            ) : (
              <span className="font-semibold text-lg md:text-2xl">
                {subscriptionData?.name}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-lg mb-6 xl:block hidden">Total Price</h3>
            {isLoading ? (
              <div className="flex justify-center">
                <ClipLoader color="white" size={20} />
              </div>
            ) : (
              <span className="font-bold text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FDCF38F5] via-[#FCC426] to-[#C58F09]">
                {subscriptionData?.salePrice} Ks
              </span>
            )}
          </div>
        </div>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-12">
          Bank Information
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 px-10 md:px-0 ">
          {bankInformations.map((information) => (
            <BankInfoCard {...information} key={information.id} />
          ))}
        </div>

        <p className="lg:text-base xl:text-xl leading-9 lg:leading-9 xl:leading-[2.75rem]">
          * ငွေလွှဲပြီးသွားပြီဆိုရင်တော့ “ငွေလွှဲပြေစာ မှတဆင့် ငွေလွှဲထားတဲ့
          Screen Shoot လေးကို” ထည့်သွင်း၍ ပေးပို့အတည်ပြုနိုင်ပါတယ်။
          အကူညီလိုအပ်ပါက 09794461888 သို့ ဆက်သွယ်နိုင်ပါသည်။ (Office Hour: 9:00
          AM to 8:00 PM)
        </p>
      </div>
      {/* second-col */}
      <div className="px-4 md:px-6 xl:px-20 py-10  basis-1/2">
        <h2 className="text-xl lg:text-2xl font-semibold my-16">
          Enter Payment Details
        </h2>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col items-start gap-4 mb-20 relative">
            <label htmlFor="bankSlip" className="font-bold">
              ‌ငွေလွှဲပြေစာ
            </label>
            {bankSlip?.[0] ? (
              <div className="w-full  border border-dashed grid place-items-center  border-slate-900  rounded-lg  relative">
                <button
                  className="p-2 bg-red-200 rounded-md absolute top-4 right-4 hover:bg-red-300"
                  onClick={handleRemoveImage}
                >
                  <BsTrash className="text-red-700 text-lg" />
                </button>
                <img
                  src={URL.createObjectURL(bankSlip?.[0])}
                  alt="bankslip"
                  className="w-full h-full object-fill"
                />
              </div>
            ) : (
              <label
                htmlFor="bankSlip"
                className="w-full  border border-dashed grid place-items-center  border-slate-900 py-8 rounded-lg "
              >
                <BsImage className="text-[#8C8C8C] text-2xl mb-4" />
                <span className="text-[#8C8C8C] text-sm">
                  Upload your bank slip here
                </span>
              </label>
            )}

            {errors.bankslip ? (
              <span className="text-red-500">{errors.bankslip.message}</span>
            ) : null}
            <input
              type="file"
              id="bankSlip"
              name="bankslip"
              className=" absolute top-10 hidden"
              {...register("bankslip", { required: "BankSlip is required." })}
            />
          </fieldset>

          {state.isShow ? (
            <div
              className={`${state.cls}  w-full text-center py-4 my-4 rounded-md`}
            >
              <p className="text-white font-medium font-poppins">{state.msg}</p>
            </div>
          ) : null}

          <button
            type="submit"
            className="btn_primary w-full disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={userSubscribeMutation.isLoading}
          >
            {userSubscribeMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <ClipLoader size={16} color="white" />
                <span>Processing...</span>
              </div>
            ) : (
              <span>Buy Now</span>
            )}
          </button>
        </form>
      </div>
      {isUserLoginModalOpen ? <UserLogin /> : null}
      {isUserRegisterModalOpen ? <UserRegister /> : null}
    </section>
  );
};

const BankInfoCard = ({ logo, title, phone }) => {
  return (
    <article className=" bg-gradient-to-r from-[#FFFFFF25] to-[#FFFFFF1B] p-4 rounded flex items-center justify-between gap-4">
      <img src={logo} alt={title} className="object-scale-down max-w-[5rem]" />
      <div className="grow flex flex-col items-center">
        <h4 className="font-semibold text-base xl:text-xl mb-2">{title}</h4>
        <span className="font-normal text-sm">{phone}</span>
      </div>
    </article>
  );
};

export default PurchasePlan;
