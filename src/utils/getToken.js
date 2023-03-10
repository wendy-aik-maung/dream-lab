import { TOKEN_LOCAL_STORAGE } from "../contexts/UserDataContext";

export const getToken = () => {
  return localStorage.getItem(TOKEN_LOCAL_STORAGE);
};
