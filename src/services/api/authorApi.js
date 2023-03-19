import { BASE_URL } from "./api_endpoint";
import { getToken } from "../../utils/getToken";

// ========================================== Book Author ======================================= //

// ========== Get all book author ========== //

export const fetchBookAuthor = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${BASE_URL}bookauthors`, requestOption);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// ========== Create book author ========== //

export const createBookAuthor = async (data) => {
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
    const response = await fetch(`${BASE_URL}bookauthors`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// ========== Update book author ========== //

export const updateBookAuthor = async (params) => {
  const { data, id } = params;
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
    const response = await fetch(`${BASE_URL}bookauthors/${id}`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// ========== Delete plan ========== //

export const deleteBookAuthor = async (id) => {
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
    const response = await fetch(`${BASE_URL}bookauthors/${id}`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// ========================================== Article Author ======================================= //

// ========== Get all book author ========== //

export const fetchArticleAuthor = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${BASE_URL}articleauthors`, requestOption);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// ========== Create Article author ========== //

export const createArticleAuthor = async (data) => {
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
    const response = await fetch(`${BASE_URL}articleauthors`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// ========== Update Article author ========== //

export const updateArticleAuthor = async (data) => {};

// ========== Delete plan ========== //

export const deleteArticleAuthor = async (id) => {};
