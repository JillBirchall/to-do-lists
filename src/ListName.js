import React from "react";

export const ListName = ({ listname }) => {
  return (
    <>
      <div className="list-name-container">
        <p className="list-name">{listname}</p>
        <div className="icons">
          <span className="material-icons icon edit-icon">edit</span>
          <span className="material-icons icon delete-icon">delete</span>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
