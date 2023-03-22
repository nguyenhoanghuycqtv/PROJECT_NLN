import { useState } from "react";
import { loginHandler, signupHandler } from "../app/store/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../shared/hooks/use-input";
import ImageUpload from "../shared/components/form/ImageUpload";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [file, setFile] = useState({ value: null });
  const dispatch = useDispatch();
  const handleFileUpload = (pickedFile) => {
    const imageUploaded = { value: pickedFile };
    setFile(imageUploaded);
  };
  const navigate = useNavigate();

  const switchHandler = () => {
    setIsLogin((prev) => !prev);
  };
  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useInput();

  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput();

  const {
    value: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPassword,
  } = useInput();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const data = { email: enteredEmail, password: enteredPassword };
        dispatch(loginHandler(data));
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("name", enteredName);
        formData.append("image", file.value);
        formData.append("email", enteredEmail);
        formData.append("password", enteredPassword);
        dispatch(signupHandler(formData));
        navigate("/");
      } catch (err) {}
    }
  };
  return (
    <div className="card w-96 glass">
      <form
        onSubmit={formSubmitHandler}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {!isLogin && (
          <div>
            <label htmlFor="name" className="text-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type here"
              onChange={nameChangeHandler}
              className="input input-bordered input-error w-full max-w-xs"
            />
          </div>
        )}
        {!isLogin && (
          <div className="card w-100% glass">
            <ImageUpload id="image" onInput={handleFileUpload} />
          </div>
        )}
        <div>
          <label htmlFor="email" className="text-bold">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Type here"
            onChange={emailChangeHandler}
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-bold">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Type here"
            onChange={passwordChangeHandler}
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div className="text-center">
          {!isLogin && (
            <button type="submit" className="btn btn-info">
              Signup
            </button>
          )}
          {isLogin && (
            <button type="submit" className="btn btn-info">
              Login
            </button>
          )}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={switchHandler}
          >
            Switch
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
