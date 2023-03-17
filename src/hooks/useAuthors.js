import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createBookAuthor,
  fetchBookAuthor,
  updateBookAuthor,
  deleteBookAuthor,
  createArticleAuthor,
  fetchArticleAuthor,
  updateArticleAuthor,
  deleteArticleAuthor,
} from "../services/api/authorApi";

// ========= Custom Hooks for Authors ========== //
// ========================================== Book Author ======================================= //

// ===== Get  Book Author ===== //

export const useGetBookAuthor = () => {
  return useQuery(["bookauthors"], fetchBookAuthor);
};

// ===== Create Book Author ===== //

export const useCreateBookAuthor = () => {
  return useMutation(createBookAuthor);
};

// ===== Update Book Author ===== //

export const useUpdateBookAuthor = () => {
  return useMutation(updateBookAuthor);
};

// ===== Delete Book Author ===== //

export const useDeleteBookAuthor = () => {
  return useMutation(deleteBookAuthor);
};

// ========================================== Article Author ======================================= //

// ===== Get  Article Author ===== //

export const useGetArticleAuthor = () => {
  return useQuery(["articleauthors"], fetchArticleAuthor);
};

// ===== Create Article Author ===== //

export const useCreateArticleAuthor = () => {
  return useMutation(createArticleAuthor);
};

// ===== Update Article Author ===== //

export const useUpdateArticleAuthor = () => {
  return useMutation(updateArticleAuthor);
};

// ===== Delete Article Author ===== //

export const useDeleteArticleAuthor = () => {
  return useMutation(deleteArticleAuthor);
};
