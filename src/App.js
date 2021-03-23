import "./App.css";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";
import { DarkModeToggle } from "./DarkModeToggle";
import { useGlobalContext } from "./context";

function App() {
  const {
    lists,
    currentListId,
    isDarkMode,
    isListsMenuOpen,
    toggleDarkMode,
    toggleListsMenu,
  } = useGlobalContext();

  console.log(lists);

  return (
    <div className={isDarkMode ? "main-container dark-mode" : "main-container"}>
      <h1 className="main-heading">To Do Lists</h1>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="lists-container">
        <button className="lists-toggle-btn btn" onClick={toggleListsMenu}>
          Lists
          <span className="material-icons icon expand-arrow">
            {isListsMenuOpen ? "expand_less" : "expand_more"}
          </span>
        </button>
        <Lists />
        {currentListId ? (
          <CurrentList list={lists.find((list) => list.id === currentListId)} />
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
