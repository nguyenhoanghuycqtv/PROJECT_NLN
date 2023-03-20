import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../app/store/auth-slice";
import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";
const Header = () => {
  const [user, setUser] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("userData") !== null && isLoggedIn) {
      const { name, image, isLoggedIn } = JSON.parse(
        localStorage.getItem("userData")
      );
      setUser({ name, image });
    }
  }, [isLoggedIn]);
  const logoutHandler = () => {
    setUser(null);
    dispatch(authActions.logout());
  };
  return (
    <div className="navbar bg-[#148c94]">
      <div className="flex-1">
        <Link to="/">
          <span className="text-bold text-4xl text-[#fc9434]">HOME</span>
        </Link>
      </div>
      {!isLoggedIn && (
        <div>
          <Link to="/auth">
            <button className="btn btn-info">Sign-in/Sign-up</button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex-none gap-2">
          {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user && <Avatar width={12} image={user.image} />}
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
