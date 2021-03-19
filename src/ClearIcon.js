import React from "react";

export const ClearIcon = ({ clearChange }) => {
  return (
    <button
      className="material-icons icon clear-icon"
      onClick={clearChange}
      aria-label="cancel edit"
    >
      clear
    </button>
  );
};
