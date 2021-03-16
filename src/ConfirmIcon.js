import React from "react";

export const ConfirmIcon = ({ confirmChange }) => {
  return (
    <span className="material-icons icon" onClick={confirmChange}>
      done
    </span>
  );
};
