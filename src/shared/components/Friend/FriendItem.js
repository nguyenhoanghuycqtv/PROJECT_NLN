import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";

const FriendItem = (props) => {
  return (
    <div className="card">
      <div className="flex flex-row">
        <div className="w-4/12">
          <Avatar
            image={props.image}
            className={
              "w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            }
          />
        </div>
        <Link to={`/users/${props.id}`}>
          <div className="8/12 flex flex-col">
            <div className="font-extrabold text-xl">{props.name}</div>
            <div className="font-extrabold text-xl">{props.email}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FriendItem;
