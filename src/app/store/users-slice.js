import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  users: [
    {
      id: "degea",
      name: "David De Gea",
      email: "daviddegea@gmail.com",
      password: "123456789",
      image:
        "https://pbs.twimg.com/profile_images/1677677662570000384/IuKiZeNT_400x400.jpg",
      posts: [{ id: "degea1" }],
    },
    {
      id: "garnacho",
      name: "Alejandro Garnacho",
      email: "alejandrogarnacho@gmail.com",
      password: "123456789",
      image:
        "https://pbs.twimg.com/profile_images/1635048434569822210/UzHEV8t0_400x400.jpg",
      posts: [{ id: "garnacho1" }],
    },
  ],
  friends: [],
  isFriend: undefined,
};

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
      console.log("From Add Friend", state.friends);
    },
    deleteFriend: (state, action) => {
      const friendId = action.payload;
      state.friends = state.friends.filter((friend) => friend._id !== friendId);
      console.log("From delete friend", state.friends);
    },
    isFriend: (state, action) => {
      const myFriends = state.friends;
      const myFriendsId = myFriends.map((friend) => friend._id);
      state.isFriend = myFriendsId.includes(action.payload);
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
