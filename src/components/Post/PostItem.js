import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import UserList from "../User/UserList";
const PostItem = (props) => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="card w-9/12 mb-12">
      <div>
        <UserList
          users={users.filter((user) => user.id === props.post.creator.id)}
        />
      </div>
      <figure>
        <img src={`http://localhost:5000/${props.image}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        <div className="card-actions justify-start">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <p>{props.post.comments.length}</p>
        </div>
      </div>
      <div>
        {props.postId && (
          <Link to={`/posts/${props.postId}`}>
            <button className="btn btn-primary">Detail post and Comment</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostItem;
