import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = { users: [] };

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    getAllUser(state, action) {
      state.users = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
