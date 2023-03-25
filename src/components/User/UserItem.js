import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UI/Avatar";

function UserItem(props) {
  return (
    <Link to={`/users/${props.id}`}>
      <div className="flex items-center space-x-4 m-2">
        <Avatar image={props.image} className={"w-16"} />
        <div className="text-gray-800">
          <h3 className="font-bold">{props.name}</h3>
          <p className="text-sm">{props.email}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserItem;
