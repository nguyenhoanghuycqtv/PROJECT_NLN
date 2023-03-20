import React from "react";
import PostList from "../components/Post/PostList";
import { useSelector } from "react-redux";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Feed;
