import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  addBook,
  addChapter,
  deleteChapter,
  editChapter,
  getBooksByAdmin,
  getBooksByUsers,
  getPopularBooks,
  getSingleBook,
  updateBook,
} from "../services/api/bookApi";

export const useGetBooksByAdmin = (
  page,
  limit,
  search,
  status,
  authorId,
  isFree,
  sorting
) => {
  return useQuery(
    ["books", page, limit, search, status, authorId, isFree, sorting],
    () =>
      getBooksByAdmin(page, limit, search, status, authorId, isFree, sorting)
  );
};

export const useGetSingleBookByAdmin = (slug) => {
  return useQuery(["book", slug], () => getSingleBook(slug));
};

export const useAddBook = () => {
  const navigate = useNavigate();

  return useMutation(addBook, {
    onSuccess: (data) => {
      navigate(`/admin/books/edit/${data.slug}`);
    },
  });
};

export const useEditBook = () => {
  const navigate = useNavigate();
  return useMutation(updateBook, {
    onSuccess: () => {
      navigate(`/admin/books`);
    },
  });
};

export const useAddChapter = () => {
  return useMutation(addChapter);
};

export const useEditChapter = () => {
  return useMutation(editChapter);
};

export const useDeleteChapter = () => {
  return useMutation(deleteChapter);
};

export const useGetPopularBooks = () => {
  return useQuery(["popularbooks"], getPopularBooks);
};

export const useGetBooksByUsers = (
  page,
  limit,
  search,
  categoryIds,
  authorId,
  isFree,
  sorting
) => {
  return useQuery(
    ["userbooks", page, limit, search, categoryIds, authorId, isFree, sorting],
    () =>
      getBooksByUsers(
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
