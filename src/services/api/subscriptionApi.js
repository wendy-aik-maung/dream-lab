import { BASE_URL } from "./api_endpoint";
import { getToken } from "../../utils/getToken";

// ========== Get all subscriptions ========== //

export const fetchSubscriptions = async () => {
	const token = getToken();
	var requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
		redirect: "follow",
	};
	try {
		const response = await fetch(`${BASE_URL}subscriptions`, requestOptions);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

// ========== Get Single subscription ==========//

export const fetchSubscription = async (id) => {
	const token = getToken();
	var requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
		redirect: "follow",
	};
	try {
		const response = await fetch(
			`${BASE_URL}subscriptions/${id}`,
			requestOptions
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

// ========== Create subscription ==========//

export const createSubscription = async (data) => {
	const token = getToken();
	var requestOptions = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "POST",
		body: JSON.stringify(data),
		redirect: "follow",
	};

	try {
		const response = await fetch(`${BASE_URL}subscriptions`, requestOptions);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

// ========== Update subscription ==========//

export const updateSubscription = async (data) => {
	const token = getToken();
	var requestOptions = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "PATCH",
		body: JSON.stringify(data),
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${BASE_URL}subscriptions/${data.id}`,
			requestOptions
		);
		const result = await response.json();

		if (!response.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

// ========== Delete subscription ==========//

export const deleteSubscription = async (id) => {
	const token = getToken();

	var requestOptions = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "DELETE",
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${BASE_URL}subscriptions/${id}`,
			requestOptions
		);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

// ========== Remove Plan ==========//

export const removePlan = async (planId) => {
	const token = getToken();
	var requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "DELETE",
		redirect: "follow",
	};
	try {
		const response = await fetch(
			`${BASE_URL}subscriptions/plan/${planId}`,
			requestOptions
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};
