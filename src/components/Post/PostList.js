import React, { useEffect, useState } from "react";
import CommentForm from "../Comment/CommentForm";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { commentsAcions } from "../../app/store/comments-slice";
const PostList = (props) => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  return (
    <ul className={props.className}>
      {props.posts.map((post) => {
        return (
          <li key={post.id}>
            <PostItem
              post={post}
              image={post.image}
              title={post.title}
              content={post.content}
              comments={comments.filter(
                (comment) => comment.location.id === post.id
              )}
            />
            <CommentForm
              postId={post.id}
              postFormDataInput={props.postFormDataInput}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
