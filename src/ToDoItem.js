import { useState } from "react";

export const ToDoItem = ({
  itemName,
  checked,
  toggleItemChecked,
  deleteItem,
  changeItem,
  itemId,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  function amendItem(newName) {
    changeItem(itemId, newName);
    setIsEdit(false);
    setNewItemName("");
  }

  return (
    <div className="todo-item-container">
      <input
        type="checkbox"
        onChange={() => toggleItemChecked(itemId)}
        checked={checked}
      ></input>
      {isEdit ? (
        <input
          type="text"
          placeholder={itemName}
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
      ) : (
        <p className="todo-item-text">{itemName}</p>
      )}
      <div className="icons">
        {isEdit ? (
          <span
            className="material-icons icon"
            onClick={() => amendItem(newItemName)}
          >
            done
          </span>
        ) : (
          <span
            className="material-icons icon edit-icon"
            onClick={() => setIsEdit(!isEdit)}
          >
            edit
          </span>
        )}
        {isEdit ? (
          <span class="material-icons icon" onClick={() => setIsEdit(false)}>
            clear
          </span>
        ) : (
          <span
            className="material-icons icon delete-icon"
            onClick={() => deleteItem(itemId)}
          >
            delete
          </span>
        )}
      </div>
    </div>
  );
};
