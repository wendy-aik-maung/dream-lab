import React from "react";
import { components } from "react-select";
import { useCategorySelectContext } from "../../../contexts/CategorySelectContext";

const NoOptionsMessageForCategory = (props) => {
  const { setCategoryModalOpen } = useCategorySelectContext();

  return (
    <components.NoOptionsMessage {...props} className="cursor-pointer">
      <div onClick={() => setCategoryModalOpen(true)}>
        No Options.Click here to add new category.
      </div>
    </components.NoOptionsMessage>
  );
};

export default NoOptionsMessageForCategory;
