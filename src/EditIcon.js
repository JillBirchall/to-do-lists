import React from "react";

export const EditIcon = ({ edit }) => {
  return (
    <button
      className="material-icons icon edit-icon"
      onClick={edit}
      aria-label="edit the item text"
    >
      edit
    </button>
  );
};
