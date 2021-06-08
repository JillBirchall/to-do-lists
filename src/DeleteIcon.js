import React from "react";
import { MdDelete } from "react-icons/md";

export const DeleteIcon = ({ deleteItem }) => {
  return (
    <button
      className="icon delete-icon"
      onClick={deleteItem}
      aria-label="delete item from list"
    >
      <MdDelete />
    </button>
  );
};
