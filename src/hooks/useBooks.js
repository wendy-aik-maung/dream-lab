import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  addBook,
  getBooksByAdmin,
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
