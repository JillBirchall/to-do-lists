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
        placeholder={placeholderText}
        className="add-input-box"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <AddIcon addItem={handleAddItem} />
    </>
  );
};
