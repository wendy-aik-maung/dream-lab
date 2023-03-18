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

// ========== Get Single category ==========//

export const fetchCategory = async (id) => {
  var requestOptions = {
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(`${BASE_URL}categories/${id}`, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

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

export const updateCategory = async (params) => {
  const { data, id } = params;

  const token = getToken();
  const formData = new FormData();

  const icon = typeof data?.icon === "string" ? data.icon : data.icon?.[0];

  formData.append("icon", icon);
  formData.append("name", data?.name);

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
    const response = await fetch(`${BASE_URL}categories/${id}`, requestOptions);
    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};

// ========== Delete category ========== //

export const deleteCategory = async (id) => {
  const token = getToken();

  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "DELETE",
    redirect: "follow",
  };

  try {
    const response = await fetch(`${BASE_URL}categories/${id}`, requestOptions);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
