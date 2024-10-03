import { createSlice } from "@reduxjs/toolkit";

const authUsersSlice = createSlice({
  name: "authUsers",
  initialState: {
    user: null,
    isAuthenticated: false,
    isGoogle: false,
    loading: false,
    error: null,
  },
  reducers: {
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    emailLoginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isGoogle = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.isGoogle = false;
      state.error = action.payload;
    },
    requestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { requestStart, emailLoginSuccess, loginFailure, requestFailure, resetError } =
  authUsersSlice.actions;

export default authUsersSlice.reducer;
