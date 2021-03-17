import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const CurrentList = ({
  list,
  addItemToList,
  deleteItemFromList,
  changeItemName,
  toggleItemChecked,
  clearAllItems,
  clearCheckedItems,
}) => {
  const [itemInput, setItemInput] = useState("");

  function addItem(itemName) {
    if (itemName.trim()) addItemToList(itemName); //Only add a new item if the item contains characters other than white-space
    setItemInput("");
  }

  return (
    <div className="current-list-container">
      <h2 className="current-list-name">{list.listName}</h2>
      <div className="todolist">
        <div className="add-new-item">
          <input
            type="text"
            placeholder="Add a new item"
            className="input-box"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
          />
          <span
            className="material-icons add-icon icon"
            onClick={() => addItem(itemInput)}
          >
            add
          </span>
        </div>
        <div className="list">
          {list.items.map((item) => {
            if (!item.checked) {
              return (
                <ToDoItem
                  itemName={item.itemName}
                  checked={item.checked}
                  key={item.itemId}
                  toggleItemChecked={toggleItemChecked}
                  deleteItem={deleteItemFromList}
                  changeItem={changeItemName}
                  itemId={item.itemId}
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
                  key={item.itemId}
                  toggleItemChecked={toggleItemChecked}
                  deleteItem={deleteItemFromList}
                  changeItem={changeItemName}
                  itemId={item.itemId}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="delete-btns">
        <button className="delete-all-btn btn" onClick={clearAllItems}>
          Clear All
        </button>
        <button
          className="delete-completed-btn btn"
          onClick={clearCheckedItems}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};
