import React from "react";

const FriendList = () => {
  const friends = [
    { name: "Anna", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 29 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Danh sách bạn bè</h2>
      <ul className="card border border-gray-300 divide-y divide-gray-300">
        {friends.map((friend, index) => (
          <li key={index} className="p-4 card m-2">
            <div className="font-bold">{friend.name}</div>
            <div>Tuổi: {friend.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
