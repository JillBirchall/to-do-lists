import React from "react";

export const ListName = () => {
  return (
    <>
      <div className="list-name-container">
        <p className="list-name">List Name</p>
        <div className="icons">
          <span className="material-icons icon edit-icon">edit</span>
          <span className="material-icons icon delete-icon">delete</span>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
