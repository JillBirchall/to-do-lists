import React from "react";

export const DeleteIcon = ({ deleteItem }) => {
  return (
    <button
      className="material-icons icon delete-icon"
      onClick={deleteItem}
      aria-label="delete item from list"
    >
      delete
    </button>
  );
};
