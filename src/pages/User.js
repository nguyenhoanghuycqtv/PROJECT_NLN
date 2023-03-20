import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Stat from "../shared/components/UI/Stat";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import { postPosts } from "../app/store/posts-actions";
import { useDispatch } from "react-redux";
const User = (props) => {
  const userId = useParams().id;
  const users = useSelector((state) => state.users.users);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = users.filter((u) => {
    return u.id === userId;
  })[0];
  const handleDataInput = (fileValue, titleValue, contentValue) => {
    const formData = new FormData();
    formData.append("image", fileValue);
    formData.append("title", titleValue);
    formData.append("content", contentValue);
    formData.append("creator", user.id);
    console.log(token);
    dispatch(postPosts(formData, token));
  };
  return (
    <div className="card">
      {user && (
        <Stat image={user.image} posts={user.posts} comments={user.comments} />
      )}
      <PostForm dataInput={handleDataInput} />
      {user && (
        <PostList posts={user.posts} className="mt-4" />
      )}
    </div>
  );
};

export default User;
