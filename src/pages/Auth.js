import { useState } from "react";
import { loginHandler, signupHandler } from "../app/store/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../shared/hooks/use-input";
import ImageUpload from "../shared/components/form/ImageUpload";
import { useNavigate } from "react-router-dom";
import Alert from "../shared/components/UI/Alert";

const defaultAccount = {
  email: "duongtanphuoc@gmail.com",
  password: "duongtanphuoc",
};

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
    value: nameEntered,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    handleChange: nameChangeHandler,
    handleBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((nameEntered) => nameEntered.trim() !== "");

  const {
    value: emailEntered,
    handleChange: emailChangeHandler,
    handleBlur: emailBlurHandler,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput((emailEntered) => emailEntered.trim().includes("@"));

  const {
    value: passwordEntered,
    handleChange: passwordChangeHandler,
    handleBlur: passwordBlurHandler,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    reset: resetPassword,
  } = useInput((passwordEntered) => passwordEntered.trim().length >= 6);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      if (
        emailEntered === defaultAccount.email &&
        passwordEntered === defaultAccount.password
      ) {
        const data = { email: emailEntered, password: passwordEntered };
        dispatch(loginHandler(data));
        resetEmail();
        resetPassword();
        navigate("/");
      } else {
        try {
          const data = { email: emailEntered, password: passwordEntered };
          dispatch(loginHandler(data));
          resetEmail();
          resetPassword();
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("name", nameEntered);
        formData.append("image", file.value);
        formData.append("email", emailEntered);
        formData.append("password", passwordEntered);
        dispatch(signupHandler(formData));
        resetName();
        resetEmail();
        resetPassword();
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
          <div className="m-2">
            <label htmlFor="name" className="font-extrabold text-xl ">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type here"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              className="input input-bordered input-error w-full max-w-xs"
            />
            {nameHasError && (
              <Alert type={"warning"} content={"Invalid name"} />
            )}
          </div>
        )}
        {!isLogin && (
          <div className="card w-100% glass m-2">
            <ImageUpload id="image" onInput={handleFileUpload} />
          </div>
        )}
        <div className="m-2">
          <label htmlFor="email" className="font-extrabold text-xl ">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Type here"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className="input input-bordered input-error w-full max-w-xs"
          />
          {emailHasError && (
            <Alert type={"warning"} content={"Invalid email"} />
          )}
        </div>
        <div className="m-2">
          <label htmlFor="password" className="font-extrabold text-xl ">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Type here"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className="input input-bordered input-error w-full max-w-xs"
          />
          {passwordHasError && (
            <Alert type={"warning"} content={"Invalid password"} />
          )}
        </div>
        <div className="text-center m-2">
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
        <div className="text-center m-2">
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
