import { createSlice } from "@reduxjs/toolkit";

const initialCommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentsState,
  reducers: {
    addComment(state, action) {
      // console.log(action.payload);
      state.comments = [...state.comments, action.payload];
    },
    getAllComment(state, action) {
      state.comments = action.payload
    },
  },
});

export const commentsAcions = commentsSlice.actions;

export default commentsSlice;
