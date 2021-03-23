import React from "react";

export const AddIcon = ({ handleAdd, ariaLabel }) => {
  return (
    <button
      className="material-icons add-icon icon"
      onClick={handleAdd}
      aria-label={ariaLabel}
    >
      add
    </button>
  );
};
