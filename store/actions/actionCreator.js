import * as actionTypes from "./actionTypes";
import { debounce } from "../../functions/Debounce";

export const handleChange = () => {
  return { type: actionTypes.HANDLE_CHANGE };
};

export const handleTyping = () => {
  return { type: actionTypes.HANDLE_TYPING };
};

// Middleware(Thunk) will call dispatched function with dispatch
// method as the first argument
export const handleThunk = () => {
  return function (dispatch) {
    dispatch(handleChange());
    debouncedHandleTyping(dispatch);
  };
};

export const storeText = (event) => {
  return { type: actionTypes.STORE_TEXT, term: event.target.value };
};

export const storeItem = (event) => {
  return { type: actionTypes.STORE_ITEM };
};

export const showText = (event) => {
  return {
    type: actionTypes.SHOW_TEXT,
    term: event.target.innerText,
    selectedListID: parseInt(event.target.getAttribute("listid")),
  };
};

export const deleteItem = (newItems) => {
  return {
    type: actionTypes.DELETE_ITEM,
    items: newItems,
  };
};

export const deleteItemThunk = () => {
  return function (dispatch, getState) {
    const state = getState().list;
    if (state.isEditing) {
      const newItems = state.items.filter(
        (item = undefined, index) => index !== state.selectedListID
      );
      dispatch(deleteItem(newItems));
    }
  };
};

export const submitButtonThunk = () => {
  return function (dispatch, getState) {
    const state = getState().list;
    if (!state.isEditing) {
      dispatch(storeItem());
    } else {
      // Shallow copy using .slice
      const updatedItems = state.items.slice(0);
      updatedItems[state.selectedListID] = state.term;
      dispatch(updateItem(updatedItems));
    }
  };
};

export const updateItem = (updatedItems) => {
  return { type: actionTypes.UPDATE_ITEM, items: updatedItems };
};

export const storeJSON = (todos) => {
  return { type: actionTypes.STORE_JSON, items: todos };
};

// Create inner function
const debouncedHandleTyping = debounce((dispatch) => {
  dispatch(handleTyping());
}, 500);
