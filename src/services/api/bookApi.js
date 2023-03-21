import { getToken } from "../../utils/getToken";
import { BASE_URL } from "./api_endpoint";

export const getBooksByAdmin = async (
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
      `${BASE_URL}books/admin?${isStatus}&${isPage}&${isLimited}&${isSearched}&${isFreeOrPremium}&${isSorting}&${isAuthorId}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
