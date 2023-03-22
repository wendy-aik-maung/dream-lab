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

export const getSingleBook = async (slug) => {
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
      `${BASE_URL}books/admin/${slug}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const addBook = async (data) => {
  const {
    title,
    readingTime,
    shortDesc,
    page,
    isFree,
    status,
    mainImage,
    categories,
    bookAuthors,
  } = data;

  const token = getToken();
  const formData = new FormData();

  formData.append("title", title);
  formData.append("readingTime", readingTime);
  formData.append("shortDesc", shortDesc);
  formData.append("page", page);
  formData.append("isFree", isFree);
  formData.append("status", status);
  formData.append("mainImage", mainImage[0]);
  formData.append("categories", JSON.stringify(categories));
  formData.append("bookAuthors", JSON.stringify(bookAuthors));

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
    const response = await fetch(`${BASE_URL}books`, requestOptions);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (data) => {
  const {
    id,
    title,
    defaultTitle,
    readingTime,
    shortDesc,
    page,
    isFree,
    status,
    mainImage,
    categories,
    bookAuthors,
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
  formData.append("page", page);
  formData.append("isFree", isFree);
  formData.append("status", status);
  formData.append("mainImage", image);
  formData.append("categories", JSON.stringify(categories));
  formData.append("bookAuthors", JSON.stringify(bookAuthors));

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
    const response = await fetch(`${BASE_URL}books/${id}`, requestOptions);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
