import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostData } from "../app/store/posts-actions";
import { getAllFriendData, getAllUserData } from "../app/store/users-actions";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const { userId } = useSelector((state) => state.auth);
  // console.log("Users from Feed", users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostData());
    dispatch(getAllUserData());
    dispatch(getAllFriendData(userId));
  }, []);

  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Feed;
