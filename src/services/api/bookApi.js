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

// Chapters

export const getChapters = async (id) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(
      `${BASE_URL}books/chapters/${id}`,
      requestOption
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const addChapter = async (data) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${BASE_URL}books/chapter`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const editChapter = async (data) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(
      `${BASE_URL}books/chapter/${data.id}`,
      requestOption
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteChapter = async (id) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "DELETE",
  };
  try {
    const response = await fetch(
      `${BASE_URL}books/chapter/${id}`,
      requestOption
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const getPopularBooks = async () => {
  const requestOptions = {
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}books/get/popular`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getBooksByUsers = async (
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
      `${BASE_URL}books?${isCategoryIds}&${isPage}&${isLimited}&${isSearched}&${isFreeOrPremium}&${isSorting}&${isAuthorId}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getSingleBookByUser = async (slug) => {
  const token = getToken();

  if (!token) {
    return "Unauthorized";
  }

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(`${BASE_URL}books/${slug}`, requestOptions);
    const data = await response.json();

    if (!response.ok && data.statusCode === 422) {
      throw new Error("Sorry, Book does not exist!");
    }

    if (!response.ok) {
      console.log(data);
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const getRecommendedBooks = async () => {
  const token = getToken();

  if (!token) {
    return "Unauthorized";
  }

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
      `${BASE_URL}books/get/recommended`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
