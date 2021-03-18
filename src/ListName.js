import { useState } from "react";
import { EditIcon } from "./EditIcon";
import { ConfirmIcon } from "./ConfirmIcon";
import { ClearIcon } from "./ClearIcon";
import { DeleteIcon } from "./DeleteIcon";

export const ListName = ({
  selectedList,
  listname,
  listId,
  selectList,
  deleteList,
  editListName,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newListName, setNewListName] = useState("");

  function editList() {
    if (newListName.trim()) editListName(newListName, listId);
    setNewListName("");
    setIsEdit(false);
  }

  function resetListNameEdit() {
    setIsEdit(false);
    setNewListName("");
  }

  return (
    <>
      <div
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
            placeholder={listname}
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          ></input>
        ) : (
          <div className="list-name" onClick={() => selectList(listId)}>
            <p>{listname}</p>
          </div>
        )}
        <div className="icons">
          {isEdit ? (
            <ConfirmIcon confirmChange={editList} />
          ) : (
            <EditIcon edit={() => setIsEdit(!isEdit)} />
          )}
          {isEdit ? (
            <ClearIcon clearChange={resetListNameEdit} />
          ) : (
            <DeleteIcon deleteItem={() => deleteList(listId)} />
          )}
        </div>
      </div>
      {/* <hr></hr> */}
    </>
  );
};
