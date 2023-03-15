// ========== User Subscribe ==========//

import { getToken } from "../../utils/getToken";

export const getUserSubscriptions = async (currentPage) => {
  const token = getToken();
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };

  console.log(currentPage);

  try {
    const response = await fetch(currentPage, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
