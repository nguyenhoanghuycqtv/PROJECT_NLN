import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/components/form/ImageUpload";
import useInput from "../../shared/hooks/use-input";
import { postPost } from "../../app/store/posts-actions";

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
    value: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitle,
  } = useInput();

  const {
    value: enteredContent,
    valueChangeHandler: contentChangeHandler,
    reset: resetContent,
  } = useInput();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(file.value, enteredTitle, enteredContent, userId);
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
            type="text"
            name="title"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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
            name="content"
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
          ></textarea>
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
