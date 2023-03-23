import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../app/store/auth-slice";
import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">SOCIAL-NETWORK</a>
    </div>
  );
};

export default Header;
