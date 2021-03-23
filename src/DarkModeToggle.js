import React from "react";

export const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <p
        className={isDarkMode ? "inactive" : "active"}
        onClick={toggleDarkMode}
      >
        Dark Mode
      </p>
      <p
        className={
          isDarkMode ? "light-mode-btn active" : "light-mode-btn inactive"
        }
        onClick={toggleDarkMode}
      >
        Light Mode
      </p>
    </div>
  );
};
