import { ListName } from "./ListName";
import { AddItem } from "./AddItem";

export const Lists = ({
  isListsOpen,
  selectedListId,
  lists,
  createNewList,
  selectList,
  deleteList,
  editListName,
}) => {
  function addList(listName) {
    if (listName.trim()) createNewList(listName); //Only add a new list if the list name contains characters other than white-space
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
        <AddItem placeholderText={"Add a new list"} addItem={addList} />
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
      {lists.length === 0 && (
        <p className="no-list-warning">
          You have no lists yet. Please create a list.
        </p>
      )}
    </div>
  );
};
