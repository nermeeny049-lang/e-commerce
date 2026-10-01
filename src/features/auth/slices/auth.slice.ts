import { createSlice } from "@reduxjs/toolkit";

type user = {
  name: string;
  id?: string;
  email?: string;
  role: string;
};
export type InitialState = {
  isAuthenticated: boolean;
  userInfo: null | user;
};
const initialState: InitialState = {
  isAuthenticated: false,
  userInfo: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: function (state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userInfo = action.payload.userInfo;
    },
    logout: function (state) {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
