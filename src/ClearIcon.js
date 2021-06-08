import React from "react";
import { MdClear } from "react-icons/md";

export const ClearIcon = ({ clearChange }) => {
  return (
    <button
      className="icon clear-icon"
      onClick={clearChange}
      aria-label="cancel edit"
    >
      <MdClear />
    </button>
  );
};
