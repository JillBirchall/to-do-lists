import React from "react";

export const ClearIcon = ({ clearChange }) => {
  return (
    <span className="material-icons icon" onClick={clearChange}>
      clear
    </span>
  );
};
