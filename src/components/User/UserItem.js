import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UI/Avatar";

function UserItem(props) {
  return (
    <div className="flex items-center space-x-4 m-2">
      <Avatar image={props.image} width={10} />
      <div className="text-gray-800">
        <Link to={`/users/${props.id}`}>
          <h3 className="font-bold">{props.name}</h3>
        </Link>
        <p className="text-sm">{props.email}</p>
      </div>
    </div>
  );
}

export default UserItem;
