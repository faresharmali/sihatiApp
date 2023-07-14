import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const combinedReducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;

export type MyThunkDispatch = typeof store.dispatch;
