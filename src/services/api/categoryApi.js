import { BASE_URL } from "./api_endpoint";
import { getToken } from "../../utils/getToken";

// ========== Get all category ========== //

export const fetchCategories = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${BASE_URL}categories`, requestOption);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// ========== Create category ========== //

export const createCategory = async (data) => {
  const { name, icon } = data;

  const token = getToken();
  const formData = new FormData();

  formData.append("icon", icon[0]);
  formData.append("name", name);

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
    const response = await fetch(`${BASE_URL}categories`, requestOptions);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

// ========== Update  category ========== //

export const updateCategory = async (data) => {};

// ========== Delete category ========== //

export const deleteCategory = async (id) => {};
