import "./App.css";
import { useState } from "react";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";
import { DarkModeToggle } from "./DarkModeToggle";

function App() {
  const [isListsMenuOpen, setIsListsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <Lists isListsOpen={isListsMenuOpen} />
        <CurrentList />
      </div>
    </div>
  );
}

export default App;
