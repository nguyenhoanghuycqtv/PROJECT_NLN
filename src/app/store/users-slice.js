import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = { users: [], friends: [] };

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    getAllUser(state, action) {
      state.users = action.payload;
    },
    getUser(state, action) {
      state.users = [action.payload];
    },
    getAllFriend: (state, action) => {
      state.friends = action.payload;
    },
    addFriend: (state, action) => {
      state.friends = [...state.friends, action.payload];
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
