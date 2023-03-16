// ========== User Subscribe ==========//
import { getToken } from "../../utils/getToken";
import { BASE_URL } from "./api_endpoint";

export const getUserSubscriptions = async (status, page, limit) => {
  const token = getToken();
  const isStatus = status ? `status=${status}` : "";
  const isPage = page ? `page=${page}` : "";
  const isLimited = limit ? `limited=${limit}` : "";

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
      `${BASE_URL}users/subscription/request?${isStatus}&${isPage}&${isLimited}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const userSubscriptionUpdate = async (user) => {
  const token = getToken();
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(user),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}users/subscribe/subscription/${user.id}`,
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
