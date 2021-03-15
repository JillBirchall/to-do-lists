import "./App.css";
import { useState } from "react";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";
import { DarkModeToggle } from "./DarkModeToggle";

function App() {
  const [isListsMenuOpen, setIsListsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lists, setLists] = useState([
    {
      id: 123,
      listName: "Shopping List",
      items: [
        { itemId: 1, itemName: "Bread", checked: false },
        { itemId: 2, itemName: "Milk", checked: true },
        { itemId: 3, itemName: "Apples", checked: false },
      ],
    },
    {
      id: 456,
      listName: "To Do List",
      items: [
        { itemId: 4, itemName: "Shopping", checked: true },
        { itemId: 5, itemName: "Clean", checked: true },
        { itemId: 6, itemName: "Exercise", checked: false },
      ],
    },
  ]);
  const [currentListId, setCurrentListId] = useState(123);

  function toggleDarkMode(isDarkModeBtn) {
    if ((isDarkModeBtn && isDarkMode) || (!isDarkModeBtn && !isDarkMode))
      return;
    setIsDarkMode(!isDarkMode);
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
        <Lists isListsOpen={isListsMenuOpen} lists={lists} />
        <CurrentList list={lists.find((list) => list.id === currentListId)} />
      </div>
    </div>
  );
}

export default App;
