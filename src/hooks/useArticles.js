import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
	addArticle,
	getArticlesByAdmin,
	getSingleArticle,
} from "../services/api/articleApi";

export const useGetArticlesByAdmin = (
	page,
	limit,
	search,
	status,
	authorId,
	isFree,
	sorting
) => {
	return useQuery(
		[" articles", page, limit, search, status, authorId, isFree, sorting],
		() =>
			getArticlesByAdmin(page, limit, search, status, authorId, isFree, sorting)
	);
};

export const useGetSingleArticleByAdmin = (slug) => {
	return useQuery(["article", slug], () => getSingleArticle(slug));
};

export const useAddArticle = () => {
	const navigate = useNavigate();

	return useMutation(addArticle, {
		onSuccess: (data) => {
			navigate(`/admin/articles`);
		},
	});
};
