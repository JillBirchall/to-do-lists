import React from "react";

export const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <p
        className={isDarkMode ? "inactive" : "active"}
        onClick={() => toggleDarkMode(true)}
      >
        Dark Mode
      </p>
      <p
        className={
          isDarkMode ? "light-mode-btn active" : "light-mode-btn inactive"
        }
        onClick={() => toggleDarkMode(false)}
      >
        Light Mode
      </p>
    </div>
  );
};
