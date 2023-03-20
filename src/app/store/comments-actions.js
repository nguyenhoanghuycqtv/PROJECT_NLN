import axios from "axios";
import { commentsAcions } from "./comments-slice";
export const getAllCommentData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.get("http://localhost:5000/api/comments/");
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const comments = resData.comments;
      dispatch(commentsAcions.getAllComment(comments));
    } catch (err) {}
  };
};

