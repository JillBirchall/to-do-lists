import { useState } from "react";
import { EditIcon } from "./EditIcon";
import { ConfirmIcon } from "./ConfirmIcon";
import { ClearIcon } from "./ClearIcon";
import { DeleteIcon } from "./DeleteIcon";
import { useGlobalContext } from "./context";

export const ListName = ({ selectedList, listname, listId }) => {
  const { editList, deleteList, selectList } = useGlobalContext();

  const [isEdit, setIsEdit] = useState(false);
  const [newListName, setNewListName] = useState("");

  function renameList() {
    if (newListName.trim()) editList(listId, newListName);
    setNewListName("");
    setIsEdit(false);
  }

  function resetListNameEdit() {
    setIsEdit(false);
    setNewListName("");
  }

  return (
    <li
      className={
        selectedList
          ? "list-name-container selected-list"
          : "list-name-container"
      }
    >
      {isEdit ? (
        <input
          className="edit-input-box"
          type="text"
          maxLength="20"
          placeholder={listname}
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          onKeyUp={(e) => {
            e.key === "Enter" && renameList(e.target.value);
          }}
        ></input>
      ) : (
        <div className="list-name" onClick={() => selectList(listId)}>
          {listname}
        </div>
      )}
      <div className="icons">
        {isEdit ? (
          <ConfirmIcon confirmChange={renameList} />
        ) : (
          <EditIcon edit={() => setIsEdit(!isEdit)} />
        )}
        {isEdit ? (
          <ClearIcon clearChange={resetListNameEdit} />
        ) : (
          <DeleteIcon deleteItem={() => deleteList(listId)} />
        )}
      </div>
    </li>
  );
};
