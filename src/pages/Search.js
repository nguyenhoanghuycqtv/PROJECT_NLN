import React from "react";
import { useSelector } from "react-redux";
import UserList from "../components/User/UserList";

const Search = (props) => {
  const users = useSelector((state) => state.users.users);

  return <UserList users={users} />;
};

export default Search;
