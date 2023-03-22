import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../components/Comment/CommentForm";
import CommentList from "../components/Comment/CommentList";
import PostItem from "../components/Post/PostItem";
import { postComment, getAllCommentData } from "../app/store/comments-actions";

const PostDetail = () => {
  const postId = useParams().id;
  const { userId, token } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = posts.find((post) => post.id === postId);
  const postComments = comments.filter(
    (comment) => comment.location.id === postId
  );
  const handleSubmitHandler = (commentEntered) => {
    const data = { content: commentEntered, creator: userId, location: postId };
    dispatch(postComment(data, token));
    // navigate(`/posts/${postId}`);
    // navigate("/");
  };
  return (
    <div className="card">
      {post && (
        <PostItem
          post={post}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      )}
      <CommentForm postId={postId} submitHandler={handleSubmitHandler} />
      <CommentList comments={postComments} />
    </div>
  );
};

export default PostDetail;
