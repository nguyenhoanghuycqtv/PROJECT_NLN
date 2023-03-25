import { createSlice } from "@reduxjs/toolkit";

const initialFriendsSlice = {
  friends: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: initialFriendsSlice,
  reducers: {
    getAllFriend: (state, action) => {
      state.friends = action.payload;
    },
    addFriend: (state, action) => {
      state.friends = [...state.friends, action.payload];
    },
  },
});

export const friendsActions = friendsSlice.actions;

export default friendsSlice;
