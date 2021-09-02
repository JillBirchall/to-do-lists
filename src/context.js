import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const LOCAL_STORAGE_KEY_LISTS = "Lists.ToDoLists";
const LOCAL_STORAGE_DARK_MODE_KEY = "Lists.ToDoLists.DarkMode";

const initialState = {
  lists: [],
  currentListId: null,
  isDarkMode: false,
  isListsMenuOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addList = (listName) => {
    dispatch({ type: "ADD_LIST", payload: listName });
  };

  const editList = (id, newListName) => {
    dispatch({ type: "EDIT_LIST", payload: { id, newListName } });
  };

  const deleteList = (id) => {
    dispatch({ type: "DELETE_LIST", payload: id });
  };

  const selectList = (id) => {
    dispatch({ type: "SELECT_LIST", payload: id });
  };

  const addItem = (itemName) => {
    dispatch({ type: "ADD_ITEM", payload: itemName });
  };

  const editItem = (id, newItemName) => {
    dispatch({ type: "EDIT_ITEM", payload: { id, newItemName } });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const toggleItemChecked = (id, isChecked) => {
    dispatch({ type: "TOGGLE_ITEM_CHECKED", payload: { id, isChecked } });
  };

  const deleteAllItems = () => {
    dispatch({ type: "DELETE_ALL_ITEMS" });
  };

  const deleteCheckedItems = () => {
    dispatch({ type: "DELETE_CHECKED_ITEMS" });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  const toggleListsMenu = () => {
    dispatch({ type: "TOGGLE_LISTS_MENU" });
  };

  // //Retrieve the lists and settings from local storage when the page loads
  useEffect(() => {
    const storedDarkMode = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY)
    );
    if (storedDarkMode) dispatch({ type: "TOGGLE_DARK_MODE" });
    const storedToDoLists = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_LISTS)
    );
    if (storedToDoLists) {
      dispatch({ type: "LOAD_LISTS", payload: storedToDoLists });
    }
  }, []);

  // //Save the lists each time a change is made
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LISTS, JSON.stringify(state.lists));
  }, [state.lists]);

  //Save dark mode settings each time it changes
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_DARK_MODE_KEY,
      JSON.stringify(state.isDarkMode)
    );
  }, [state.isDarkMode]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addList,
        editList,
        deleteList,
        selectList,
        addItem,
        editItem,
        deleteItem,
        toggleItemChecked,
        deleteAllItems,
        deleteCheckedItems,
        toggleDarkMode,
        toggleListsMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
