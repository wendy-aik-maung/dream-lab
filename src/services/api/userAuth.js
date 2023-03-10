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
