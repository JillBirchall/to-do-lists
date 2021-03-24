import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  let tempLists;

  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuidv4(), listName: action.payload, items: [] },
        ],
      };
    case "EDIT_LIST":
      tempLists = state.lists.map((list) => {
        if (action.payload.id === list.id) {
          list.listName = action.payload.newListName;
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
        currentListId:
          action.payload === state.currentListId ? null : state.currentListId,
      };
    case "SELECT_LIST":
      return { ...state, currentListId: action.payload };
    case "ADD_ITEM":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items.push({
            itemId: uuidv4(),
            itemName: action.payload,
            checked: false,
          });
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "EDIT_ITEM":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items.map((item) => {
            if (item.itemId === action.payload.id) {
              item.itemName = action.payload.newItemName;
            }
            return item;
          });
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "DELETE_ITEM":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items = list.items.filter(
            (item) => item.itemId !== action.payload
          );
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "TOGGLE_ITEM_CHECKED":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items.map((item) => {
            if (item.itemId === action.payload) {
              item.checked = !item.checked;
            }
            return item;
          });
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "DELETE_ALL_ITEMS":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items = [];
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "DELETE_CHECKED_ITEMS":
      tempLists = state.lists.map((list) => {
        if (state.currentListId === list.id) {
          list.items = list.items.filter((item) => item.checked === false);
        }
        return list;
      });
      return { ...state, lists: tempLists };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "TOGGLE_LISTS_MENU":
      return { ...state, isListsMenuOpen: !state.isListsMenuOpen };
    case "LOAD_LISTS":
      return { ...state, lists: action.payload };
    default: {
      throw new Error("Action Type Not Found");
    }
  }
};

export default reducer;
