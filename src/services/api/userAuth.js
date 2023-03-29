import { getToken } from "../../utils/getToken";
import { BASE_URL } from "./api_endpoint";

export const userRegister = async (data) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    method: "POST",
  };

  try {
    const res = await fetch(`${BASE_URL}auths/signup`, requestOptions);
    const result = await res.json();
    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (data) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    method: "POST",
  };

  try {
    const res = await fetch(`${BASE_URL}auths/signin`, requestOptions);
    const result = await res.json();
    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserSubscriptionHistory = async () => {
  const token = getToken();
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
      method: "GET",
    },
  };

  try {
    const res = await fetch(
      `${BASE_URL}users/subscription/history`,
      requestOptions
    );
    const result = await res.json();
    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async () => {
  const token = getToken();
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "cors",
      method: "GET",
    },
  };

  try {
    const res = await fetch(`${BASE_URL}users/me`, requestOptions);
    const result = await res.json();
    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const addAdditionalInformation = async (params) => {
  const { data, userId } = params;

  const token = getToken();
  const formData = new FormData();

  const profileImage =
    typeof data?.profileImage === "string"
      ? data.profileImage
      : data.profileImage?.[0];

  formData.append("displayName", data.displayName);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("dob", data.dob);
  formData.append("profileImage", profileImage);

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
    const response = await fetch(`${BASE_URL}users/${userId}`, requestOptions);
    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};
