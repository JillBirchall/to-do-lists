import { ToDoItem } from "./ToDoItem";
import { AddItem } from "./AddItem";
import { useGlobalContext } from "./context";

export const CurrentList = ({ list }) => {
  const { addItem, deleteCheckedItems, deleteAllItems } = useGlobalContext();

  function addItemToList(itemName) {
    if (itemName.trim()) addItem(itemName); //Only add a new item if the item contains characters other than white-space
  }

  return (
    <div className="current-list-container">
      <h2 className="current-list-name heading">{list.listName}</h2>
      <div className="todolist">
        <div className="add-new-item">
          <AddItem
            placeholderText={"Add a new item"}
            addNewItem={addItemToList}
            ariaLabel={"Add a New Item to the List"}
          />
        </div>
        <div className="list">
          {list.items
            .filter((item) => item.checked === false)
            .map((item) => {
              return (
                <ToDoItem
                  itemName={item.itemName}
                  isChecked={item.checked}
                  key={item.itemId}
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
                  isChecked={item.checked}
                  key={item.itemId}
                  itemId={item.itemId}
                />
              );
            })}
        </div>
      </div>
      <div className="delete-btns">
        <button className="delete-all-btn btn" onClick={deleteAllItems}>
          Clear All
        </button>
        <button
          className="delete-completed-btn btn"
          onClick={deleteCheckedItems}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};
