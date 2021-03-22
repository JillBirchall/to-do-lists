import { useState } from "react";
import { AddIcon } from "./AddIcon";

export const AddItem = ({ addItem, placeholderText }) => {
  const [itemInput, setItemInput] = useState("");

  function handleAddItem() {
    addItem(itemInput);
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
      />
      <AddIcon addItem={handleAddItem} />
    </>
  );
};
