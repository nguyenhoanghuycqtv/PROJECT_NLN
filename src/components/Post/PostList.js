import React, { useEffect, useState } from "react";
import CommentForm from "../Comment/CommentForm";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { commentsAcions } from "../../app/store/comments-slice";
const PostList = (props) => {
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
              postId={post.id}
              comments={post.comments}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
