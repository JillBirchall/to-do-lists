import "./App.css";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";
import { DarkModeToggle } from "./DarkModeToggle";
import { useGlobalContext } from "./context";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function App() {
  const {
    lists,
    currentListId,
    isDarkMode,
    isListsMenuOpen,
    toggleDarkMode,
    toggleListsMenu,
  } = useGlobalContext();

  return (
    <div className={isDarkMode ? "main-container dark-mode" : "main-container"}>
      <h1 className="main-heading">To Do Lists</h1>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="lists-container">
        <button className="lists-toggle-btn btn" onClick={toggleListsMenu}>
          Lists
          <span className="icon expand-arrow">
            {isListsMenuOpen ? <MdExpandLess /> : <MdExpandMore />}
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
