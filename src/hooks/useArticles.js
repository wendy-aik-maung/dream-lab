import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
	addArticle,
	getArticleContentByUser,
	getArticlesByAdmin,
	getArticlesByUsers,
	getSingleArticle,
	getSingleArticleByUser,
	updateArticle,
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

export const useEditArticle = () => {
	const navigate = useNavigate();
	return useMutation(updateArticle, {
		onSuccess: () => {
			navigate(`/admin/articles`);
		},
	});
};

export const useGetArticlesByUsers = (
	page,
	limit,
	search,
	categoryIds,
	authorId,
	isFree,
	sorting
) => {
	return useQuery(
		[
			"userarticles",
			page,
			limit,
			search,
			categoryIds,
			authorId,
			isFree,
			sorting,
		],
		() =>
			getArticlesByUsers(
				page,
				limit,
				search,
				categoryIds,
				authorId,
				isFree,
				sorting
			)
	);
};

export const useGetSingleArticleByUser = (slug) => {
	return useQuery(["userarticle", slug], {
	  queryFn: () => getSingleArticleByUser(slug),
	  retry: false,
	});
  };
  
  export const useGetArticleContentByUser = (slug) => {
	return useQuery(["articlecontent", slug], {
	  queryFn: () => getArticleContentByUser(slug),
	  retry: false,
	});
  };