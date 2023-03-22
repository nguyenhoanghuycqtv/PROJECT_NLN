import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { commentsAcions } from "../app/store/comments-slice";
import { socket } from "../socket";
const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
 
  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Feed;
