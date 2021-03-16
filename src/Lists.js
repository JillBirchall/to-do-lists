import { useState } from "react";
import { ListName } from "./ListName";

export const Lists = ({
  isListsOpen,
  selectedListId,
  lists,
  createNewList,
  selectList,
  deleteList,
  editListName,
}) => {
  const [listNameInput, setListNameInput] = useState("");

  function addList(listName) {
    createNewList(listName);
    setListNameInput("");
  }

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
        <input
          type="text"
          placeholder="Add a new list"
          className="input-box"
          value={listNameInput}
          onChange={(e) => setListNameInput(e.target.value)}
        />
        <span
          className="material-icons add-icon icon"
          onClick={(e) => addList(listNameInput)}
        >
          add
        </span>
      </div>
      <div className="lists">
        {lists.map((list) => {
          return (
            <ListName
              selectedList={list.id === selectedListId ? true : false}
              listname={list.listName}
              key={list.id}
              listId={list.id}
              selectList={selectList}
              deleteList={deleteList}
              editListName={editListName}
            />
          );
        })}
      </div>
    </div>
  );
};
