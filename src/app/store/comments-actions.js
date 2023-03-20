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

export const postComment = (data, token) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/comments/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const resData = res.data;
      return resData;
    };
    try {
      const resData = await sendRequest();
      const comment = resData.comment;
      dispatch(commentsAcions.addComment(comment));
    } catch (err) {}
  };
};
