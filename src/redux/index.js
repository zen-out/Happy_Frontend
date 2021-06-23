import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { sliceOfHappiness } from "./happy";
import { configureStore } from "@reduxjs/toolkit";

let happinessReducer = sliceOfHappiness.reducer;
const rootReducer = combineReducers({
  happyStore: happinessReducer,
});
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
// export const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk),
//     applyMiddleware(logger)
//   )
// );
