import { createSlice } from "@reduxjs/toolkit";

const hideCounter = { hidecounter: false };

const hideCounterSlice = createSlice({
  name: "HideCounter",
  initialState: hideCounter,
  reducers: {
    hidingCounter(state) {
      state.hidecounter = !state.hidecounter;
    },
  },
});

export const hideCounterActions = hideCounterSlice.actions;

export default hideCounterSlice.reducer;
