import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./LoginSlice";
import counterReducer from "./CounterSlice";
import hideCounterReducer from "./HideCounterSlice";
import cartSliceReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    hideCounter: hideCounterReducer,
    cart: cartSliceReducer,
  },
});

export default store;
