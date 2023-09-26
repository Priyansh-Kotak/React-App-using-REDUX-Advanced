import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./LoginSlice";
import counterReducer from "./CounterSlice";
import hideCounterReducer from "./HideCounterSlice";
const store = configureStore({
  reducer: { auth: authReducer, counter: counterReducer, hideCounter: hideCounterReducer },
});

export default store;
