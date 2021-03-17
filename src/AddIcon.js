import React from "react";

export const AddIcon = ({ addItem }) => {
  return (
    <span className="material-icons add-icon icon" onClick={addItem}>
      add
    </span>
  );
};
