import axios from "axios";
import { usersActions } from "./users-slice";
export const getAllUserData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.get("http://localhost:5000/api/users/");
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const users = resData.users;
      dispatch(usersActions.getAllUser(users));
    } catch (err) {}
  };
};
