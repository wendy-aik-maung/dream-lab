import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDataContext = createContext();

export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

export const TOKEN_LOCAL_STORAGE = "dreamlab_token";
export const USER_DATA_LOCAL_STORAGE = "dreamlab_user_data";

export const UserDataContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE));
    setUserData(userData);
  }, []);

  const refreshUserData = () => {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE));
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE);
    localStorage.removeItem(USER_DATA_LOCAL_STORAGE);
    refreshUserData();
    navigate("/");
  };

  const contextValue = { userData, logout, setUserData, refreshUserData };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};
