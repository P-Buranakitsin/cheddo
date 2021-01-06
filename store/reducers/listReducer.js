import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isTyping: false,
  term: "",
  prevTerm: "",
  items: [],
  isEditing: false,
  selectedListID: undefined,
  activities: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_TYPING:
      return { ...state, isTyping: false };

    case actionTypes.HANDLE_CHANGE:
      return { ...state, isTyping: true };

    case actionTypes.STORE_TEXT:
      return { ...state, term: action.term };

    case actionTypes.STORE_ITEM:
      return {
        ...state,
        items: [...state.items, state.term],
        activities: [...state.activities, ["CREATE", state.term]],
        term: "",
      };

    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        items: action.items,
        activities: [
          ...state.activities,
          ["UPDATE", state.term, state.prevTerm], // has three elements because need to store previous term
        ],
        prevTerm: "",
        term: "",
        isEditing: false,
      };

    case actionTypes.SHOW_TEXT:
      return {
        ...state,
        term: action.term,
        prevTerm: action.term,
        isEditing: true,
        selectedListID: action.selectedListID,
        selectedElement: action.selectedElement,
      };

    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: action.items,
        term: "",
        activities: [...state.activities, ["DELETE", state.prevTerm]],
        selectedListID: undefined,
        isEditing: false,
      };

    case actionTypes.STORE_JSON:
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default listReducer;
