import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Stat from "../shared/components/UI/Stat";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import { postPost, getAllPostByUserId } from "../app/store/posts-actions";
import { useDispatch } from "react-redux";
import { getUserDataByUserId } from "../app/store/users-actions";
const User = (props) => {
  const userId = useParams().id;
  useEffect(() => {
    dispatch(getUserDataByUserId(userId));
    dispatch(getAllPostByUserId(userId));
  }, [userId]);
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.users.users);
  console.log(user);
  console.log("User from UserPage", user);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleSubmitHandler = (
    enteredFile,
    enteredTitle,
    enteredContent,
    enteredUserId
  ) => {
    const formData = new FormData();
    formData.append("image", enteredFile);
    formData.append("title", enteredTitle);
    formData.append("content", enteredContent);
    formData.append("creator", enteredUserId);
    console.log("Token in form data", token);
    dispatch(postPost(formData, token));
  };
  return (
    <div className="card">
      <Stat image={user[0]?.image} posts={user[0]?.posts} />
      <PostForm userId={userId} submitHandler={handleSubmitHandler} />
      <PostList posts={posts} className="mt-4" />
    </div>
  );
};

export default User;
