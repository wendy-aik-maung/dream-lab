import { useContext, createContext, useState } from "react";

const RegisterModalContext = createContext();

export const useRegisterModalContext = () => {
  return useContext(RegisterModalContext);
};

export function RegisterModalContextProvider({ children }) {
  const [isUserRegisterModalOpen, setIsUserRegisterModalOpen] = useState(false);

  const contextValue = { isUserRegisterModalOpen, setIsUserRegisterModalOpen };

  return (
    <RegisterModalContext.Provider value={contextValue}>
      {children}
    </RegisterModalContext.Provider>
  );
}
