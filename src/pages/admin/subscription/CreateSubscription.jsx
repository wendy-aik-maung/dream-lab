import React from "react";
import { useState } from "react";
import Switch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import TextAreaForm from "../../../components/form/TextAreaForm";
import ChoosePlan from "./ChoosePlan";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateSubscription } from "../../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";
import ErrorMessage from "../../../components/form/ErrorMessage";

export const SubscriptionSchema = yup.object({
	name: yup.string().required(),
	stackTitle: yup.string().required(),
	originalPrice: yup.number().required(),
	salePrice: yup.number().required(),
	description: yup.string().required(),
	subscribeLength: yup.number().required(),
	subscribeType: yup.string().required(),
});

const CreateSubscription = () => {
	const [active, setActive] = useState(false);
	const [selectPlan, setSelectPlan] = useState(false);
	const [plans, setPlans] = useState([]);

	const createSubscriptionMutation = useCreateSubscription();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(SubscriptionSchema),
	});

	const onSubmit = async (data) => {
		if (active) {
			data["status"] = "a";
		} else {
			data["status"] = "p";
		}
		data["plans"] = plans;
		createSubscriptionMutation.mutate(data);
	};

	return (
		<div className="container mx-auto">
			<form action="" onSubmit={handleSubmit(onSubmit)} className="w-3/4 ">
				<header className=" flex justify-between font-poppins font-bold text-xl mb-10">
					<Link
						to={"/admin/subscriptions"}
						className="flex items-center text-dreamLabColor3">
						<BiArrowBack />
						<span className="pl-2"> Back</span>
					</Link>
					<div>
						<h2>Create Subscription</h2>
					</div>
				</header>
				<InputForm
					type="text"
					label="Subscription Name:"
					name="name"
					placeholder="Type name"
					errors={errors}
					register={register}
				/>
				<InputForm
					type="text"
					label="Stack Title:"
					name="stackTitle"
					placeholder="Type stack title"
					errors={errors}
					register={register}
				/>
				<InputForm
					type="number"
					label="Original Price:"
					name="originalPrice"
					placeholder="0 Ks"
					errors={errors}
					register={register}
				/>
				<InputForm
					type="number"
					label="Sale Price:"
					name="salePrice"
					placeholder="0 Ks"
					errors={errors}
					register={register}
				/>
				<div className="flex gap-x-10 justify-between">
					<InputForm
						type="number"
						label="Subscription Length"
						name="subscribeLength"
						placeholder="1"
						errors={errors}
						register={register}
					/>
					<section className="w-full">
						<label
							htmlFor="subscribeType"
							className="text-lg font-poppins text-textColor4 capitalize font-semibold my-2 block">
							Subscription Length Type
						</label>
						<select
							id="subscribeType"
							className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
							{...register("subscribeType")}>
							<option value="d" selected>
								Day
							</option>
							<option value="m">Month</option>
							<option value="y">Year</option>
						</select>
					</section>
					{errors["subscribeType"] && (
						<p className="text-red-500">{errors["subscribeType"]?.message}</p>
					)}
				</div>
				<TextAreaForm
					type="text"
					label="Description:"
					name="description"
					id="text"
					placeholder="Type Description"
					errors={errors}
					register={register}
				/>
				<section className="flex items-center gap-x-20 my-10">
					<p className="font-semibold text-lg">Active Status</p>
					<Switch onChange={() => setActive(!active)} checked={active} />
				</section>
				<div>
					<section
						className="rounded-md py-1.5 px-4 border-stoke border-2 w-full bg-white"
						onClick={() => setSelectPlan(true)}>
						Choose Plan
					</section>
					<p>0 Plan selected</p>
				</div>
				{createSubscriptionMutation.isError && (
					<ErrorMessage message={createSubscriptionMutation.error.message} />
				)}
				<button
					type="submit"
					className="btn_primary text-lg font-bold py-2 my-8 flex items-center justify-center gap-x-3 w-full">
					{createSubscriptionMutation.isLoading && (
						<ClipLoader color="white" size={20} />
					)}
					Create
				</button>
			</form>
			{selectPlan && (
				<ChoosePlan
					selectPlan={selectPlan}
					setSelectPlan={setSelectPlan}
					plans={plans}
					setPlans={plans}
				/>
			)}
		</div>
	);
};

export default CreateSubscription;
