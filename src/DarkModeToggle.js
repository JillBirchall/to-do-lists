import React from "react";

export const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="dark-mode-toggle-container">
      <p className="dark-mode-text">Dark Mode</p>
      <label className="dark-mode-toggle">
        <input type="checkbox" onClick={toggleDarkMode} checked={isDarkMode} />
        <span className="dark-mode-toggle-slider"></span>
      </label>
    </div>
  );
};
