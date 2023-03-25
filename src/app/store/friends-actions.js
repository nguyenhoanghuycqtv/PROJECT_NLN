import axios from "axios";
import { friendsActions } from "./friends-slice";

export const getAllFriendData = (userId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/${userId}/friends`
      );
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const friends = resData.friends;
      dispatch(friendsActions.getAllFriend(friends));
    } catch (err) {}
  };
};
