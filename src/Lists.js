import React from "react";
import { ListName } from "./ListName";

export const Lists = () => {
  return (
    <div className="list-names-container">
      <h2 className="list-names-heading heading">Lists</h2>
      <div className="add-new-list">
        <input type="text" placeholder="Add a new list" />
        <span className="material-icons add-icon icon">add</span>
      </div>
      <div className="lists">
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
      </div>
    </div>
  );
};
