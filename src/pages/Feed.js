import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { commentsAcions } from "../app/store/comments-slice";
import { socket } from "../socket";
import { getAllPostData } from "../app/store/posts-actions";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostData());
  }, []);

  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Feed;
