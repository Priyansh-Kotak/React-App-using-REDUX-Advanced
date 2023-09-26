import { createSlice } from "@reduxjs/toolkit";

const Auth = { isAuthentication: true };
// jgjgjg
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: Auth,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },

    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
