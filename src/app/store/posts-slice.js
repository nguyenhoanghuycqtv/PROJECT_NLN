import { createSlice } from "@reduxjs/toolkit";
const initialPostsSlice = {
  posts: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsSlice,
  reducers: {
    addPost(state, action) {
      // state.posts = [...state.posts, ...action.payload];
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    deletePost(state, action) {
      // const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      console.log("PostafterDelete", state.posts);
    },
    getAllPost(state, action) {
      // state.posts = [...state.posts, action.payload];
      state.posts = action.payload;
    },
  },
});

export const postsAcions = postsSlice.actions;

export default postsSlice;
