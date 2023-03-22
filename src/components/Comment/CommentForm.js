import useInput from "../../shared/hooks/use-input";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../app/store/comments-actions";
import { socket } from "../../socket";
import { useEffect } from "react";
import { commentsAcions } from "../../app/store/comments-slice";
import { useNavigate } from "react-router-dom";
const CommentForm = (props) => {
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
    // dispatch(postComment(data));
    props.submitHandler(commentEntered);
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
