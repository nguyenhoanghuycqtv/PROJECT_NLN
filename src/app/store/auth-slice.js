import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isLoggedIn: false,
  userId: null,
  token: null,
  name: null,
  image: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.image = action.payload.image;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: state.userId,
          token: state.token,
          name: state.name,
          image: state.image,
        })
      );
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.token = null;
      state.name = null;
      state.image = null;
      localStorage.removeItem("userData");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
