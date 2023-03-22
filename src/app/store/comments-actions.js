import axios from "axios";
import { commentsAcions } from "./comments-slice";
import { socket } from "../../socket";
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
      // socket.on("createComment", (data) => {
      //   dispatch(commentsAcions.addComment(data));
      // });
      // return () => socket.off("createComment");
      dispatch(commentsAcions.addComment(comment));
    } catch (err) {}
  };
};

// export const postComment = async (data, token) => {
//   const sendRequest = async () => {
//     const res = await axios.post(
//       "http://localhost:5000/api/comments/",
//       data,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     const resData = res.data;
//     return resData;
//   };
//   try {
//     // const resData = await sendRequest();
// const comment = resData.comment;
// console.log(comment);
// dispatch(commentsAcions.addComment(comment));
//     await sendRequest();
//   } catch (err) {}
// };
