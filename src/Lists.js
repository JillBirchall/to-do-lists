import { ListName } from "./ListName";
import { AddItem } from "./AddItem";
import { useGlobalContext } from "./context";

export const Lists = () => {
  const { isListsMenuOpen, currentListId, lists, addList } = useGlobalContext();

  function addNewList(listName) {
    if (listName.trim()) addList(listName); //Only add a new list if the list name contains characters other than white-space
  }

  return (
    <div
      className={
        isListsMenuOpen
          ? "list-names-container show"
          : "list-names-container hidden"
      }
    >
      <h2
        className={
          isListsMenuOpen
            ? "list-names-heading heading hidden"
            : "list-names-heading heading"
        }
      >
        Lists
      </h2>
      <div className="add-new-list">
        <AddItem
          placeholderText={"Add a new list"}
          addNewItem={addNewList}
          ariaLabel={"add item to list"}
        />
      </div>
      {lists.length === 0 && (
        <p className="no-list-warning">
          You have no lists yet. Please create a list.
        </p>
      )}
      <ul className="lists">
        {lists.map((list) => {
          return (
            <ListName
              selectedList={list.id === currentListId ? true : false}
              listname={list.listName}
              key={list.id}
              listId={list.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
