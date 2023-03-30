import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../contexts/UserDataContext";
import {
  addBook,
  addChapter,
  deleteChapter,
  editChapter,
  getBooksByAdmin,
  getBooksByUsers,
  getChapters,
  getPopularBooks,
  getRecommendedBooks,
  getSingleBook,
  getSingleBookByUser,
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

export const useGetChapters = (id) => {
  return useQuery(["bookchapters", id], () => getChapters(id));
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

export const useGetSingleBookByUser = (slug) => {
  return useQuery(["userbook", slug], {
    queryFn: () => getSingleBookByUser(slug),
    retry: false,
  });
};

export const useGetRecommendedBooks = () => {
  return useQuery(["recommendedbooks"], {
    queryFn: getRecommendedBooks,
    retry: false,
  });
};
