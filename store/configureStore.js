import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./reducers/listReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  list: listReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
