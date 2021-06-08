import React from "react";
import { MdDone } from "react-icons/md";

export const ConfirmIcon = ({ confirmChange }) => {
  return (
    <button
      className="icon confirm-icon"
      onClick={confirmChange}
      aria-label="confirm edit"
    >
      <MdDone />
    </button>
  );
};
