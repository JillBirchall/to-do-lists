import React from "react";
import { ToDoItem } from "./ToDoItem";

export const CurrentList = ({ list }) => {
  return (
    <div className="current-list-container">
      <h2 className="current-list-name">Current List</h2>
      <div className="todolist">
        <div className="add-new-item">
          <input
            type="text"
            placeholder="Add a new item"
            className="input-box"
          />
          <span className="material-icons add-icon icon">add</span>
        </div>
        <div className="list">
          {list.items.map((item) => {
            if (!item.checked) {
              return (
                <ToDoItem
                  itemName={item.itemName}
                  checked={item.checked}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="completed-items">
        <h3 className="sub-heading">Completed Items</h3>
        <div className="list">
          {list.items.map((item) => {
            if (item.checked) {
              return (
                <ToDoItem
                  itemName={item.itemName}
                  checked={item.checked}
                  key={item.id}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="delete-btns">
        <button className="delete-all-btn btn">Clear All</button>
        <button className="delete-completed-btn btn">Clear Completed</button>
      </div>
    </div>
  );
};
