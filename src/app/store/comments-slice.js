import { createSlice } from "@reduxjs/toolkit";

const initialCommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentsState,
  reducers: {
    addComment(state, action) {
      state.comments = state.comments.push(action.payload);
    },
    getAllComment(state, action) {
      state.comments = action.payload;
    },
  },
});

export const commentsAcions = commentsSlice.actions;

export default commentsSlice;
