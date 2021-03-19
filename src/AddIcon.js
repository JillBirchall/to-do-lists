import React from "react";

export const AddIcon = ({ addItem }) => {
  return (
    <button
      className="material-icons add-icon icon"
      onClick={addItem}
      aria-label="add item to list"
    >
      add
    </button>
  );
};
