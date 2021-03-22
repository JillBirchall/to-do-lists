import { ToDoItem } from "./ToDoItem";
import { AddItem } from "./AddItem";

export const CurrentList = ({
  list,
  addItemToList,
  deleteItemFromList,
  changeItemName,
  toggleItemChecked,
  clearAllItems,
  clearCheckedItems,
}) => {
  function addItem(itemName) {
    if (itemName.trim()) addItemToList(itemName); //Only add a new item if the item contains characters other than white-space
  }

  return (
    <div className="current-list-container">
      <h2 className="current-list-name heading">{list.listName}</h2>
      <div className="todolist">
        <div className="add-new-item">
          <AddItem placeholderText={"Add a new item"} addItem={addItem} />
        </div>
        <div className="list">
          {list.items
            .filter((item) => item.checked === false)
            .map((item) => {
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
            })}
        </div>
      </div>
      <div className="completed-items">
        <h3 className="sub-heading">Completed Items</h3>
        <div className="list">
          {list.items
            .filter((item) => item.checked === true)
            .map((item) => {
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
