import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import commentsSlice from "./comments-slice";
import friendsSlice from "./friends-slice";
import postsSlice from "./posts-slice";
import usersSlice from "./users-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    users: usersSlice.reducer,
    friends: friendsSlice.reducer,
  },
});

export default store;
