import React from "react";
import { useState } from "react";
import Switch from "react-switch";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import InputForm from "../../../components/form/InputForm";
import TextAreaForm from "../../../components/form/TextAreaForm";
import ChoosePlan from "./ChoosePlan";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const CreateSubscription = () => {
	const [active, setActive] = useState(false);
	const [selectPlan, setSelectPlan] = useState(false);

	return (
		<div className="container mx-auto">
			<form action="" className="w-1/2 my-10">
				<header className=" flex justify-between font-poppins font-bold text-xl mb-10">
					<Link
						to={"/admin/subscription"}
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
					placeholder="Type name"
				/>
				<InputForm
					type="text"
					label="Stack Title:"
					placeholder="Type stack title"
				/>
				<InputForm type="number" label="Original Price:" placeholder="0 Ks" />
				<InputForm type="number" label="Sale Price:" placeholder="0 Ks" />
				<div className="flex gap-x-10">
					<InputForm
						type="number"
						label="Subscription Length"
						placeholder="1"
					/>
					<section className="w-full">
						<label
							htmlFor="subscribeType"
							className="text-lg font-poppins text-textColor4 capitalize font-semibold my-2 block">
							Subscription Length Type
						</label>
						<select
							id="subscribeType"
							className="rounded-md py-1.5 px-4 border-stoke border-2 w-full">
							<option value="d" selected>
								Day
							</option>
							<option value="m">Month</option>
							<option value="y">Year</option>
						</select>
					</section>
				</div>
				<TextAreaForm
					type="text"
					label="Description:"
					id="text"
					placeholder="Type Description"
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
				<button className="btn_primary text-lg font-bold py-2 my-8 flex items-center justify-center gap-x-3 w-full">
					Create
				</button>
			</form>
			{selectPlan && (
				<ChoosePlan selectPlan={selectPlan} setSelectPlan={setSelectPlan} />
			)}
		</div>
	);
};

export default CreateSubscription;
