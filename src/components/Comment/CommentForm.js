import useInput from "../../shared/hooks/use-input";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../app/store/comments-actions";
import { socket } from "../../socket";
import { useEffect } from "react";
import { commentsAcions } from "../../app/store/comments-slice";
const CommentForm = (props) => {
  const { userId, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    value: commentEntered,
    valueChangeHandler: commentChangeHandler,
    reset: resetComment,
  } = useInput();

  // useEffect(() => {
  //   socket.on("createComment", (commentCreated) =>
  //     dispatch(commentsAcions.addComment(commentCreated))
  //   );
  //   return () => socket.off("createComment");
  // }, []);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      content: commentEntered,
      creator: userId,
      location: props.postId,
    };
    dispatch(postComment(data));
    // postComment(data, token);
  };

  return (
    <div className="card w-12/12">
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="comment"></label>
        <textarea
          onChange={commentChangeHandler}
          name="comment"
          id="comment"
          className="textarea textarea-warning"
        ></textarea>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
