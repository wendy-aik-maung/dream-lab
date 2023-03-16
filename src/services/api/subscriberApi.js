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
