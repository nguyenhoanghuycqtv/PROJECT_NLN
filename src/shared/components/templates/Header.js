import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../UI/Avatar";
import useInput from "../../hooks/use-input";
import { searchUsers } from "../../../app/store/users-actions";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    value: nameEntered,
    handleChange: nameChangeHandler,
    reset,
  } = useInput((nameEntered) => nameEntered.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(searchUsers(nameEntered));
    navigate(`/users/search/${nameEntered}`);

    reset();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <span className="font-extrabold text-4xl">GBK Social-Network</span>
        </Link>
      </div>
      <div className="flex flex-row">
        <div>
          <form onSubmit={formSubmitHandler} className="flex flex-row">
            <div>
              <label htmlFor="name" className="font-extrabold text-xl mx-2">
                Search by Name
              </label>
              <input
                onChange={nameChangeHandler}
                value={nameEntered}
                id="name"
                name="name"
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <div className="mx-2">
              <button
                type="submit"
                className="btn btn-accent font-extrabold text-xl"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {auth.isLoggedIn && (
          <React.Fragment>
            <div>
              <Avatar image={auth.image} className="w-16" />
            </div>
            <div className="font-extrabold text-xl mx-2">{auth.name}</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
