import { useQuery } from "@tanstack/react-query";
import { getBooksByAdmin } from "../services/api/bookApi";

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
    ["subscribers", page, limit, search, status, authorId, isFree, sorting],
    () =>
      getBooksByAdmin(page, limit, search, status, authorId, isFree, sorting)
  );
};
