import React from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import EmptyView from "../../../assets/EmptyView";
import SubscriptionItem from "./SubscriptionItem";
const SubscriptionIndex = () => {
	const [subscription, setSubscription] = useState([1, 2]);

	return (
		<div className="container mx-auto">
			<header className="flex justify-between">
				<h3 className="font-semibold text-xl ">Subscription Plan Lists</h3>
				<div className="btn-dreamLabColor2 flex items-center py-2 px-10 gap-x-2 font-normal text-lg ">
					<AiFillPlusCircle /> Create Subscription
				</div>
			</header>
			{subscription.length === 0 ? (
				<section className="mt-48 text-center">
					<div className="flex justify-center">
						<EmptyView />
					</div>
					<p className="mt-5">You have no plans created yet</p>
				</section>
			) : (
				<div>
					<SubscriptionItem />
				</div>
			)}
		</div>
	);
};

export default SubscriptionIndex;
