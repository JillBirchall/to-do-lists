import "./App.css";
import { useState } from "react";
import { Lists } from "./Lists";
import { CurrentList } from "./CurrentList";

function App() {
  return (
    <div className="main-container">
      <h1 className="main-heading">To Do Lists</h1>
      <div className="dark-mode-toggle">
        <p className="dark-mode active">Dark Mode</p>
        <p className="light-mode inactive">Light Mode</p>
      </div>
      <div className="lists-container">
        <button className="lists-toggle-btn btn">Lists</button>
        <Lists />
        <CurrentList />
      </div>
    </div>
  );
}

export default App;
