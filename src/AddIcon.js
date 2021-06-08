import React from "react";
import { MdAdd } from "react-icons/md";

export const AddIcon = ({ handleAdd, ariaLabel }) => {
  return (
    <button
      className="add-icon icon"
      onClick={handleAdd}
      aria-label={ariaLabel}
    >
      <MdAdd />
    </button>
  );
};
