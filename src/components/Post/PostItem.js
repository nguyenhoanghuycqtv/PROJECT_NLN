import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../Comment/CommentList";
import UserList from "../User/UserList";
const PostItem = (props) => {
  const comments = useSelector((state) => state.comments.comments);
  const users = useSelector((state) => state.users.users);
  return (
    <div className='card w-9/12'>
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>

      <div>
        <CommentList
          comments={comments.filter((comment) => {
            return comment.location.id === props.id;
          })}
        />
      </div>
    </div>
  );
};

export default PostItem;
