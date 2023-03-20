import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Stat from "../shared/components/UI/Stat";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import { postPost } from "../app/store/posts-actions";
import { useDispatch } from "react-redux";
const User = (props) => {
  const userId = useParams().id;
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users.users);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = users.filter((u) => {
    return u.id === userId;
  })[0];
  const handlePostFormDataInput = (fileValue, titleValue, contentValue) => {
    const formData = new FormData();
    formData.append("image", fileValue);
    formData.append("title", titleValue);
    formData.append("content", contentValue);
    formData.append("creator", user.id);
    console.log(token);
    dispatch(postPost(formData, token));
  };

  const handleCommentFormDataInput = (commentEntered) => {
    console.log(commentEntered);
  };

  return (
    <div className="card">
      {user && (
        <Stat image={user.image} posts={user.posts} comments={user.comments} />
      )}

      {auth.userId === userId && (
        <h1 className="text-bold text-4xl">Create a new post</h1>
      )}
      {auth.userId === userId && (
        <PostForm postFormDataInput={handlePostFormDataInput} />
      )}
      {user && (
        <PostList
          posts={user.posts}
          commentFormDataInput={handleCommentFormDataInput}
          className="mt-4"
        />
      )}
    </div>
  );
};

export default User;
