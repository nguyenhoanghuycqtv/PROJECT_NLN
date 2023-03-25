import React from "react";
import { Link } from "react-router-dom";

const FriendList = (props) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Danh sách bạn bè</h2>
      <ul className="card border border-gray-300 divide-y divide-gray-300">
        {props.friends.map((friend, index) => (
          <li key={index} className="p-4 card m-2">
            <Link to={`/users/${friend.id}`}>
              <div className="font-bold">{friend.name}</div>
            </Link>
            <div>Tuổi: {friend.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
