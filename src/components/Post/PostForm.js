import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/components/form/ImageUpload";
import useInput from "../../shared/hooks/use-input";
import { postPost } from "../../app/store/posts-actions";
import Alert from "../../shared/components/UI/Alert";

const PostForm = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState({ value: null });
  const { userId, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleFileUpload = (pickedFile) => {
    const imageUploaded = { value: pickedFile };
    setFile(imageUploaded);
  };
  const {
    value: titleEntered,
    valueIsValid: titleIsValid,
    hasError: titleHasError,
    handleChange: titleChangeHandler,
    handleBlur: titleBlurHandler,
    reset: resetTitle,
  } = useInput((enteredTitle) => enteredTitle.trim() !== "");

  const {
    value: contentEntered,
    valueIsValid: contentIsValid,
    hasError: contentHasError,
    handleChange: contentChangeHandler,
    handleBlur: contentBlurHandler,
    reset: resetContent,
  } = useInput((enteredContent) => enteredContent.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(file.value, titleEntered, contentEntered, userId);
  };

  return (
    <div className="card bg-white">
      <form onSubmit={formSubmitHandler} className="py-6 m-4">
        <div className="mb-4">
          <ImageUpload id="image" onInput={handleFileUpload} />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            type="text"
            name="title"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {titleHasError && (
            <Alert type={"warning"} content={"Invalid title"} />
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            onChange={contentChangeHandler}
            onBlur={contentBlurHandler}
            name="content"
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
          ></textarea>
          {contentHasError && (
            <Alert type={"warning"} content={"Invalid content"} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
