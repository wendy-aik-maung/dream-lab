import { useContext, createContext, useState } from "react";

const AuthorSelectContext = createContext();

export const useAuthorSelectContext = () => {
  return useContext(AuthorSelectContext);
};

export function AuthorSelectContextProvider({ children }) {
  const [authorModalOpen, setAuthorModalOpen] = useState(false);

  const contextValue = { authorModalOpen, setAuthorModalOpen };

  return (
    <AuthorSelectContext.Provider value={contextValue}>
      {children}
    </AuthorSelectContext.Provider>
  );
}
