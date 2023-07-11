import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  users: [
    {
      name: "David De Gea",
      email: "daviddegea@gmail.com",
      password: "123456789",
      image:
        "https://pbs.twimg.com/profile_images/1677677662570000384/IuKiZeNT_400x400.jpg",
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
