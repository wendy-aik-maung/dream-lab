import { useContext, createContext } from "react";

const RegisterModalContext = createContext();

export const useRegisterModalContext = () => {
  return useContext(RegisterModalContext);
};

export function RegisterModalContextProvider({ children }) {
  const contextValue = {};

  return (
    <RegisterModalContext.Provider value={contextValue}>
      {children}
    </RegisterModalContext.Provider>
  );
}
