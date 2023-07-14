import axios from "axios";
import { authActions } from "./auth-slice";
export const loginHandler = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      if (
        data.email === "duongtanphuoc@gmail.com" &&
        data.password === "duongtanphuoc"
      ) {
        return {
          userId: "phuoc",
          token: "0848436360",
          name: "Dương Tấn Phước",
          image:
            "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/358373169_2457093727799619_92048581873651681_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MdaVncGJ9EkAX-ou-5C&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfBbO1R41n1VivStWLW4eibxpQ8U-lJ8RBaSgPKQXRttLw&oe=64B52ED8",
        };
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/users/login",
          data
        );
        const resData = res.data;
        return resData;
      }
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
