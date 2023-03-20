import React from "react";
import { useSelector } from "react-redux";
import UserTableItem from "./UserTableItem";
const UserTableList = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserTableItem
              image={user.image}
              name={user.name}
              email={user.email}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default UserTableList;
