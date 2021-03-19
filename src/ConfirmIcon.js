import React from "react";

export const ConfirmIcon = ({ confirmChange }) => {
  return (
    <button
      className="material-icons icon confirm-icon"
      onClick={confirmChange}
      aria-label="confirm edit"
    >
      done
    </button>
  );
};
