import { getToken } from "../../utils/getToken";
import { BASE_URL } from "./api_endpoint";

export const getArticlesByAdmin = async (
	page,
	limit,
	search,
	status,
	authorId,
	isFree,
	sorting
) => {
	const token = getToken();
	const isPage = page ? `page=${page}` : "";
	const isLimited = limit ? `limit=${limit}` : "";
	const isSearched = search ? `search=${search}` : "";
	const isStatus = status ? `status=${status}` : "";
	const isAuthorId = authorId ? `authorId=${authorId}` : "";
	const isFreeOrPremium = isFree ? `isFree=${isFree}` : "";
	const isSorting = sorting ? `sorting=${sorting}` : "";

	const requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${BASE_URL}articles/admin?${isStatus}&${isPage}&${isLimited}&${isSearched}&${isFreeOrPremium}&${isSorting}&${isAuthorId}`,
			requestOptions
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

export const getSingleArticle = async (slug) => {
	const token = getToken();

	const requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${BASE_URL}articles/admin/${slug}`,
			requestOptions
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

export const addArticle = async (data) => {
	const {
		title,
		readingTime,
		shortDesc,
		content,
		isFree,
		status,
		mainImage,
		categories,
		articleAuthors,
	} = data;

	const token = getToken();
	const formData = new FormData();

	formData.append("title", title);
	formData.append("readingTime", readingTime);
	formData.append("shortDesc", shortDesc);
	formData.append("content", content);
	formData.append("isFree", isFree);
	formData.append("status", status);
	formData.append("mainImage", mainImage[0]);
	formData.append("categories", JSON.stringify(categories));
	formData.append("articleAuthors", JSON.stringify(articleAuthors));

	const requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "POST",
		redirect: "follow",
		body: formData,
	};

	try {
		const response = await fetch(`${BASE_URL}articles`, requestOptions);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

export const updateArticle = async (data) => {
	const {
		id,
		title,
		defaultTitle,
		readingTime,
		shortDesc,
		content,
		isFree,
		status,
		mainImage,
		categories,
		articleAuthors,
	} = data;

	const token = getToken();
	const formData = new FormData();

	const image =
		typeof data?.mainImage === "string" ? data.mainImage : data.mainImage[0];

	if (title !== defaultTitle) {
		formData.append("title", title);
	}
	formData.append("readingTime", readingTime);
	formData.append("shortDesc", shortDesc);
	formData.append("content", content);
	formData.append("isFree", isFree);
	formData.append("status", status);
	formData.append("mainImage", image);
	formData.append("categories", JSON.stringify(categories));
	formData.append("articleAuthors", JSON.stringify(articleAuthors));

	const requestOptions = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "PATCH",
		redirect: "follow",
		body: formData,
	};

	try {
		const response = await fetch(`${BASE_URL}articles/${id}`, requestOptions);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

export const getArticlesByUsers = async (
	page,
	limit,
	search,
	categoryIds,
	authorId,
	isFree,
	sorting
) => {
	const isPage = page ? `page=${page}` : "";
	const isLimited = limit ? `limit=${limit}` : "";
	const isSearched = search ? `search=${search}` : "";
	const isCategoryIds = categoryIds
		? "categoryIds=" + encodeURIComponent(JSON.stringify(categoryIds))
		: "";
	const isAuthorId = authorId ? `authorId=${authorId}` : "";
	const isFreeOrPremium = isFree ? `isFree=${isFree}` : "";
	const isSorting = sorting ? `sorting=${sorting}` : "";

	const requestOptions = {
		mode: "cors",
		method: "GET",
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${BASE_URL}articles?${isCategoryIds}&${isPage}&${isLimited}&${isSearched}&${isFreeOrPremium}&${isSorting}&${isAuthorId}`,
			requestOptions
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};
