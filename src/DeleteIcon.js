import React from "react";

export const DeleteIcon = ({ deleteItem }) => {
  return (
    <span className="material-icons icon delete-icon" onClick={deleteItem}>
      delete
    </span>
  );
};
