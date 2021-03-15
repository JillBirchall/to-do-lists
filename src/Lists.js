import React from "react";
import { ListName } from "./ListName";

export const Lists = ({ isListsOpen }) => {
  return (
    <div
      className={
        isListsOpen
          ? "list-names-container show"
          : "list-names-container hidden"
      }
    >
      <h2
        className={
          isListsOpen
            ? "list-names-heading heading hidden"
            : "list-names-heading heading"
        }
      >
        Lists
      </h2>
      <div className="add-new-list">
        <input type="text" placeholder="Add a new list" className="input-box" />
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
