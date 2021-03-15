import React from "react";

export const ToDoItem = () => {
  return (
    <div className="todo-item-container">
      <input type="checkbox"></input>
      <p className="todo-item-text">To Do Item</p>
      <div className="icons">
        <span className="material-icons icon edit-icon">edit</span>
        <span className="material-icons icon delete-icon">delete</span>
      </div>
    </div>
  );
};
