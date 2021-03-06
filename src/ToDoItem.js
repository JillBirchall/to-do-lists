import { useState } from "react";
import { EditIcon } from "./EditIcon";
import { ConfirmIcon } from "./ConfirmIcon";
import { ClearIcon } from "./ClearIcon";
import { DeleteIcon } from "./DeleteIcon";
import { useGlobalContext } from "./context";

export const ToDoItem = ({ itemName, isItemChecked, itemId }) => {
  const { editItem, deleteItem, toggleItemChecked } = useGlobalContext();
  const [isEdit, setIsEdit] = useState(false);
  const [newItemName, setNewItemName] = useState(itemName);

  function amendItem() {
    if (newItemName.trim()) editItem(itemId, newItemName);
    setIsEdit(false);
  }

  function clearEdit() {
    setIsEdit(false);
    setNewItemName(itemName);
  }

  return (
    <div className="todo-item-container">
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={() => toggleItemChecked(itemId, !isItemChecked)}
          checked={isItemChecked}
          className="checkbox"
        ></input>
        <span className="custom-checkbox"></span>
      </label>
      <div className="todo-item-text">
        {isEdit ? (
          <input
            type="text"
            maxLength="20"
            placeholder={itemName}
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyUp={(e) => {
              e.key === "Enter" && amendItem(e.target.value);
            }}
          />
        ) : (
          <p>{itemName}</p>
        )}
      </div>
      <div className="icons">
        {isEdit ? (
          <ConfirmIcon confirmChange={amendItem} />
        ) : (
          <EditIcon edit={() => setIsEdit(!isEdit)} />
        )}
        {isEdit ? (
          <ClearIcon clearChange={clearEdit} />
        ) : (
          <DeleteIcon deleteItem={() => deleteItem(itemId)} />
        )}
      </div>
    </div>
  );
};
