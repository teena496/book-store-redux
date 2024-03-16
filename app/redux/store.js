import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers"; // Assuming you have a reducers file named reducers.js

const rootReducer = combineReducers({
  books: bookReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
