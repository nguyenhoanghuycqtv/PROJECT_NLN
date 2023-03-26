import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";
import FriendItem from "./FriendItem";
const FriendList = (props) => {
  return (
    <div className="card m-2">
      <div className="font-extrabold text-2xl text-left">Your Friends</div>
      <ul>
        {props.friends?.map((friend) => (
          <li key={friend._id}>
            <FriendItem
              image={friend.image}
              name={friend.name}
              email={friend.email}
              id={friend.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
