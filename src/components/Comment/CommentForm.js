import useInput from "../../shared/hooks/use-input";
const CommentForm = (props) => {
  const {
    value: commentEntered,
    handleChange: commentChangeHandler,
    reset: resetComment,
  } = useInput((commentEntered) => commentEntered.trim() !== "");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(commentEntered);

    resetComment();
  };

  return (
    <div className="card w-full">
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="comment"></label>
        <textarea
          value={commentEntered}
          onChange={commentChangeHandler}
          name="comment"
          id="comment"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
