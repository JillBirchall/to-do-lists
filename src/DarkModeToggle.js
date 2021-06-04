import React from "react";

export const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle-container">
      <p className="dark-mode-text">Dark Mode</p>
      <label className="dark-mode-toggle">
        <input type="checkbox" onClick={toggleDarkMode} />
        <span className="dark-mode-toggle-slider"></span>
      </label>
    </div>
  );
};
