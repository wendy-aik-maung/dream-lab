import React from "react";
import { useAuthorSelectContext } from "../../../contexts/AuthorSelectContext";
import { components } from "react-select";

const NoOptionsMessageForAuthor = (props) => {
  const { setAuthorModalOpen } = useAuthorSelectContext();

  return (
    <components.NoOptionsMessage {...props} className="cursor-pointer">
      <div onClick={() => setAuthorModalOpen(true)}>
        No Options.Click here to add new author.
      </div>
    </components.NoOptionsMessage>
  );
};

export default NoOptionsMessageForAuthor;
