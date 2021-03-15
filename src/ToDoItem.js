import React from "react";

export const ToDoItem = () => {
  return (
    <div className="todo-item-container">
      <input type="checkbox"></input>
      <p className="todo-item-text">To Do Item</p>
      <div className="icons">
        <span className="material-icons-outlined icon">edit</span>
        <span className="material-icons-outlined icon">delete</span>
      </div>
    </div>
  );
};
