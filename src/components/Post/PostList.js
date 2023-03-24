import React, { useEffect, useState } from "react";
import CommentForm from "../Comment/CommentForm";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../../socket";
import { commentsAcions } from "../../app/store/comments-slice";
import UserList from "../User/UserList";
const PostList = (props) => {
  const dispatch = useDispatch();

  return (
    <ul className={props.className}>
      {props.posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <li key={post.id}>
              <PostItem
                post={post}
                image={post.image}
                title={post.title}
                content={post.content}
                postId={post.id}
                comments={post.comments}
                postOwner={post.creator._id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
