import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Stat from "../shared/components/UI/Stat";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import { postPost, getAllPostByUserId } from "../app/store/posts-actions";
import { useDispatch } from "react-redux";
import {
  addFriendData,
  getAllFriendData,
  getUserDataByUserId,
} from "../app/store/users-actions";
let isInitial = true;
const User = (props) => {
  const id = useParams().id;
  const [createNewPost, setCreateNewPost] = useState(false);
  const { userId, token } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.users.users);
  const friends = useSelector((state) => state.users.friends);
  const dispatch = useDispatch();
  console.log(userId, id);
  useEffect(() => {
    dispatch(getUserDataByUserId(id));
    dispatch(getAllPostByUserId(id));
  }, [id]);

  if (isInitial) {
    isInitial = false;
    return;
  }
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

  const createPostHandler = () => {
    setCreateNewPost((prevState) => !prevState);
  };

  const addFriendHandler = () => {
    dispatch(addFriendData(userId, id));
  };

  return (
    <div className="card">
      <Stat
        image={user[0]?.image}
        posts={user[0]?.posts}
        friends={user[0]?.friends}
        name={user[0]?.name}
        addFriend={addFriendHandler}
        userPageId={id}
      />
      {id === userId && (
        <React.Fragment>
          <div className="text-center">
            <button onClick={createPostHandler} className="btn btn-info w-6/12">
              <span className="font-extrabold text-xl inline-block">
                Share Your Thoughts
              </span>
            </button>
          </div>
          {createNewPost && <PostForm submitHandler={handleSubmitHandler} />}
        </React.Fragment>
      )}
      <PostList posts={posts} className="mt-4" />
    </div>
  );
};

export default User;
