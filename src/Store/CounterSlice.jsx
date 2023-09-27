import { createSlice } from "@reduxjs/toolkit";

const counter = { counter: 0 };

const CounterSlice = createSlice({
  name: "Counter",
  initialState: counter,
  reducers: {
    counter(state) {
      state.counter = state.counter + 1;
    },
  },
});

export const CounterActions = CounterSlice.actions;
export default CounterSlice.reducer;
