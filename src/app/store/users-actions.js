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

export const getUserDataByUserId = (userId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const user = resData.user;
      dispatch(usersActions.getUser(user));
    } catch (err) {}
  };
};

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
      dispatch(usersActions.getAllFriend(friends));
    } catch (err) {}
  };
};

export const addFriendData = (userId, friendId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.post(
        `http://localhost:5000/api/users/${userId}/add-friend`,
        { friendId },
        { headers: { "Content-Type": "application/json" } }
      );
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const friendAdded = resData.friendAdded;
      dispatch(usersActions.addFriend(friendAdded));
    } catch (err) {}
  };
};

export const deleteFriendData = (userId, friendId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.delete(
        `http://localhost:5000/api/users/${userId}/delete-friend`,
        { data: { friendId }, headers: { "Content-Type": "application/json" } }
      );
      const resData = res.data;
      return resData;
    };
    try {
      await sendRequest();
      dispatch(usersActions.deleteFriend(friendId));
    } catch (err) {}
  };
};


