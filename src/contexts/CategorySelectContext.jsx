import { useContext, createContext, useState } from "react";

const CategorySelectContext = createContext();

export const useCategorySelectContext = () => {
  return useContext(CategorySelectContext);
};

export function CategorySelectContextProvider({ children }) {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const contextValue = { categoryModalOpen, setCategoryModalOpen };

  return (
    <CategorySelectContext.Provider value={contextValue}>
      {children}
    </CategorySelectContext.Provider>
  );
}
