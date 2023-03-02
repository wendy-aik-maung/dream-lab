import { useContext, createContext } from "react";

const LoginModalContext = createContext();

export const useLoginModalContext = () => {
  return useContext(LoginModalContext);
};

export function LoginModalContextProvider({ children }) {
  const contextValue = {};

  return (
    <LoginModalContext.Provider value={contextValue}>
      {children}
    </LoginModalContext.Provider>
  );
}
