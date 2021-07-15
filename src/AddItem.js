import { useState } from "react";
import { AddIcon } from "./AddIcon";

export const AddItem = ({ addNewItem, placeholderText, ariaLabel }) => {
  const [itemInput, setItemInput] = useState("");

  function handleAdd() {
    addNewItem(itemInput);
    setItemInput("");
  }

  return (
    <>
      <input
        type="text"
        maxLength="20"
        placeholder={placeholderText}
        className="add-input-box"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        onKeyUp={(e) => {
          e.key === "Enter" && handleAdd();
        }}
      />
      <AddIcon handleAdd={handleAdd} ariaLabel={ariaLabel} />
    </>
  );
};
