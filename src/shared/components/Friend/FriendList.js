import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";
import FriendItem from "./FriendItem";
const FriendList = (props) => {
  return (
    <div className="card">
      <ul>
        {props.friends?.map((friend) => (
          <li>
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
