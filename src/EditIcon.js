import React from "react";
import { MdEdit } from "react-icons/md";

export const EditIcon = ({ edit }) => {
  return (
    <button
      className="icon edit-icon"
      onClick={edit}
      aria-label="edit the item text"
    >
      <MdEdit />
    </button>
  );
};
