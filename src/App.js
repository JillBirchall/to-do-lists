import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useState, useEffect } from "react";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";
import { DarkModeToggle } from "./DarkModeToggle";

function App() {
  const [isListsMenuOpen, setIsListsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lists, setLists] = useState([]);
  const [currentListId, setCurrentListId] = useState();
  const LOCAL_STORAGE_KEY_LISTS = "Lists.ToDoLists";
  const LOCAL_STORAGE_DARK_MODE_KEY = "Lists.ToDoLists.DarkMode";
  const LOCAL_STORAGE_KEY_CURRENT_LIST = "Lists.CurrentListId";

  //Retrieve the lists and settings from local storage when the page loads
  useEffect(() => {
    const storedDarkMode = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY)
    );
    if (storedDarkMode) setIsDarkMode(true);
    const storedToDoLists = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_LISTS)
    );
    if (storedToDoLists) {
      setLists(storedToDoLists);
    }
    const storedCurrentListId = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_CURRENT_LIST)
    );
    if (storedCurrentListId) {
      setCurrentListId(storedCurrentListId);
    }
  }, []);

  //Save the lists each time a change is made
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LISTS, JSON.stringify(lists));
  }, [lists]);

  //Save the current list ID each time it changes
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CURRENT_LIST,
      JSON.stringify(currentListId)
    );
  }, [currentListId]);

  //Save the dark mode settings
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_DARK_MODE_KEY,
      JSON.stringify(isDarkMode)
    );
  }, [isDarkMode]);

  function toggleDarkMode(isDarkModeBtn) {
    if ((isDarkModeBtn && isDarkMode) || (!isDarkModeBtn && !isDarkMode))
      return;
    setIsDarkMode(!isDarkMode);
  }

  function selectList(newListId) {
    setCurrentListId(newListId);
    setIsListsMenuOpen(false);
  }

  function createNewList(newListName) {
    setLists([...lists, { id: uuidv4(), listName: newListName, items: [] }]);
  }

  function deleteList(listIdToDelete) {
    setLists(lists.filter((list) => list.id !== listIdToDelete));
    if (currentListId === listIdToDelete) setCurrentListId();
  }

  function editListName(newName, listId) {
    let newListsArray = lists.map((list) => {
      if (listId === list.id) {
        list.listName = newName;
      }
      return list;
    });
    setLists(newListsArray);
  }

  function addItemToList(itemName) {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items.push({ itemId: uuidv4(), itemName, checked: false });
      }
      return list;
    });
    setLists(newListsArray);
  }

  function toggleItemChecked(itemId) {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items.map((item) => {
          if (item.itemId === itemId) {
            item.checked = !item.checked;
          }
          return item;
        });
      }
      return list;
    });
    setLists(newListsArray);
  }

  function deleteItemFromList(itemId) {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items = list.items.filter((item) => item.itemId !== itemId);
      }
      return list;
    });
    setLists(newListsArray);
  }

  function changeItemName(itemId, newItemName) {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items.map((item) => {
          if (item.itemId === itemId) {
            item.itemName = newItemName;
          }
          return item;
        });
      }
      return list;
    });
    setLists(newListsArray);
  }

  function clearAllItems() {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items = [];
      }
      return list;
    });
    setLists(newListsArray);
  }

  function clearCheckedItems() {
    let newListsArray = lists.map((list) => {
      if (currentListId === list.id) {
        list.items = list.items.filter((item) => item.checked === false);
      }
      return list;
    });
    setLists(newListsArray);
  }

  return (
    <div className={isDarkMode ? "main-container dark-mode" : "main-container"}>
      <h1 className="main-heading">To Do Lists</h1>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="lists-container">
        <button
          className="lists-toggle-btn btn"
          onClick={() => setIsListsMenuOpen(!isListsMenuOpen)}
        >
          Lists
          <span className="material-icons icon expand-arrow">
            {isListsMenuOpen ? "expand_less" : "expand_more"}
          </span>
        </button>
        <Lists
          isListsOpen={isListsMenuOpen}
          selectedListId={currentListId}
          lists={lists}
          createNewList={createNewList}
          selectList={selectList}
          deleteList={deleteList}
          editListName={editListName}
        />
        {currentListId ? (
          <CurrentList
            list={lists.find((list) => list.id === currentListId)}
            addItemToList={addItemToList}
            deleteItemFromList={deleteItemFromList}
            changeItemName={changeItemName}
            toggleItemChecked={toggleItemChecked}
            clearAllItems={clearAllItems}
            clearCheckedItems={clearCheckedItems}
          />
        ) : (
          <p className="sub-heading no-selected-list-warning">
            Please select a List.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
