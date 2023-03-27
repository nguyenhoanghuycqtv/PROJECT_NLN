import useInput from "../../shared/hooks/use-input";
const CommentForm = (props) => {
  const {
    value: commentEntered,
    valueChangeHandler: commentChangeHandler,
    reset: resetComment,
  } = useInput();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(commentEntered);
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
