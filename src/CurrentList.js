import React from "react";

export const CurrentList = () => {
  return (
    <div className="current-list-container">
      <h2 className="current-list-name">Current List</h2>
      <div className="todolist"></div>
      <div className="completed-items">
        <h3 className="sub-heading">Completed Items</h3>
      </div>
      <div className="delete-btns">
        <button className="delete-all-btn btn">Clear All</button>
        <button className="delete-completed-btn btn">Clear Completed</button>
      </div>
    </div>
  );
};
