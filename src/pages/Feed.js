import React from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../app/store/comments-actions";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const { userId, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleCommentFormDataInput = (commentEntered, postId) => {
    const data = { content: commentEntered, creator: userId, location: postId };
    console.log(data);
    // dispatch(postComment(data, token));
  };
  return (
    <div>
      <PostList
        posts={posts}
        commentFormDataInputAndPostId={handleCommentFormDataInput}
      />
    </div>
  );
};

export default Feed;
