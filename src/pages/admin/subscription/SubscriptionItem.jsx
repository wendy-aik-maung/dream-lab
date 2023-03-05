import React from "react";

const SubscriptionItem = () => {
	return (
		<div className="container mx-auto border-2 shadow-lg  p-10 my-6">
			<h2>6Months Plan</h2>
			<section className="mt-3 flex">
				<p className="col-span-8">
					Lorem ipsum dolor sit amet consectetur. Rutrum porttitor sagittis
					ipsum consectetur cras. Varius nibh molestie fames integer leo proin
					netus vulputate nunc.
				</p>

				<div className="col-span-4 ml-5">
					<button className="btn text-dreamLabColor3">Edit</button>
					<button className="ml-4  text-red-600">Delete</button>
				</div>
			</section>
			<div className="mt-5 flex gap-x-5 ">
				<p className="line-through">90,000 Ks</p>
				<p className="text-dreamLabColor1 text-2xl font-semibold">49,000 Ks</p>
			</div>
		</div>
	);
};

export default SubscriptionItem;
// const styles = {
// 	subscriptionContainer: css`
// 		border: 1px solid red;
// 	`,
// };
