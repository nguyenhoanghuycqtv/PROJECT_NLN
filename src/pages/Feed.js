import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { commentsAcions } from "../app/store/comments-slice";
import { socket } from "../socket";
import { getAllPostData } from "../app/store/posts-actions";
import { getAllUserData } from "../app/store/users-actions";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  console.log('Users from Feed', users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostData());
    dispatch(getAllUserData());
  }, []);

  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Feed;
