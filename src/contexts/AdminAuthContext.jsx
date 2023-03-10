import { useContext, createContext, useState, useEffect } from "react";
import { BASE_URL } from "../services/api/api_endpoint";
import { TOKEN_LOCAL_STORAGE } from "./UserDataContext";

export const ISADMIN_LOCAL_STORAGE = "isAdmin";

const AdminAuthContext = createContext();

export const useAdminAuthContext = () => {
  return useContext(AdminAuthContext);
};

export function AdminAuthContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem(ISADMIN_LOCAL_STORAGE)
  );
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_STORAGE));

  const checkAdmin = async () => {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      method: "GET",
    };
    const res = await fetch(`${BASE_URL}auths/isAdmin`, requestOptions);
    return res.status;
  };

  useEffect(() => {
    if (token) {
      checkAdmin().then((status) => {
        if (status === 200) {
          setIsAdmin(true);
          localStorage.setItem(ISADMIN_LOCAL_STORAGE, JSON.stringify(true));
        } else {
          setIsAdmin(false);
          localStorage.removeItem(ISADMIN_LOCAL_STORAGE, JSON.stringify(false));
        }
      });
    } else {
      setIsAdmin(false);
      localStorage.removeItem(ISADMIN_LOCAL_STORAGE, JSON.stringify(false));
    }
  }, [token]);

  const contextValue = { isAdmin, setIsAdmin };

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {children}
    </AdminAuthContext.Provider>
  );
}
