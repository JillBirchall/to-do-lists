import { useState } from "react";

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

  function editList(newName) {
    editListName(newName, listId);
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
            type="text"
            placeholder={listname}
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          ></input>
        ) : (
          <p className="list-name" onClick={() => selectList(listId)}>
            {listname}
          </p>
        )}
        <div className="icons">
          {isEdit ? (
            <span
              className="material-icons icon"
              onClick={() => editList(newListName)}
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
            <span
              class="material-icons icon"
              onClick={() => resetListNameEdit()}
            >
              clear
            </span>
          ) : (
            <span
              className="material-icons icon delete-icon"
              onClick={() => deleteList(listId)}
            >
              delete
            </span>
          )}
        </div>
      </div>
      <hr></hr>
    </>
  );
};
