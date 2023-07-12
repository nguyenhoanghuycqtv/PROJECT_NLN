import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentItem from "./CommentItem";
import { getAllCommentData } from "../../app/store/comments-actions";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments
        // .filter((comment) => comment.location.id === props.postId)
        .map((comment) => (
          <li key={comment.id}>
            <CommentItem
              name={comment.creator.name}
              email={comment.creator.email}
              image={comment.creator.image}
              content={comment.content}
            />
          </li>
        ))}
    </ul>
  );
};

export default CommentList;
