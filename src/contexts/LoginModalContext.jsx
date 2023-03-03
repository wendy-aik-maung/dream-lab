import { useContext, createContext, useState } from "react";

const LoginModalContext = createContext();

export const useLoginModalContext = () => {
  return useContext(LoginModalContext);
};

export function LoginModalContextProvider({ children }) {
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] = useState(false);

  const contextValue = { isUserLoginModalOpen, setIsUserLoginModalOpen };

  return (
    <LoginModalContext.Provider value={contextValue}>
      {children}
    </LoginModalContext.Provider>
  );
}
