import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <ul>
      {props.users?.map((user) => {
        return (
          <li key={user.id}>
            <UserItem
              id={user.id}
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

export default UserList;
