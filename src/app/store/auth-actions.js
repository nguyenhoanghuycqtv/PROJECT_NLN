import axios from "axios";
import { authActions } from "./auth-slice";
export const loginHandler = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      dispatch(
        authActions.login({
          userId: resData.userId,
          token: resData.token,
          name: resData.name,
          image: resData.image,
        })
      );
        
    } catch (err) {}
  };
};

export const signupHandler = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        data
      );
      const resData = res.data;
      return resData;
    };

    try {
      const resData = await sendRequest();
      dispatch(
        authActions.login({
          userId: resData.userId,
          token: resData.token,
          name: resData.name,
          image: resData.image,
        })
      );
    } catch (err) {}
  };
};
