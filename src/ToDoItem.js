import { useState } from "react";
import { EditIcon } from "./EditIcon";
import { ConfirmIcon } from "./ConfirmIcon";
import { ClearIcon } from "./ClearIcon";
import { DeleteIcon } from "./DeleteIcon";

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

  function amendItem() {
    if (newItemName.trim()) changeItem(itemId, newItemName);
    setIsEdit(false);
    setNewItemName("");
  }

  function clearEdit() {
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
        <div className="todo-item-text">
          <p>{itemName}</p>
        </div>
      )}
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