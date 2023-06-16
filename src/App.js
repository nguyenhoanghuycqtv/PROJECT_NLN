import React, { useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./app/store/auth-slice";
import { getAllFriendData } from "./app/store/users-actions";
import Root from "./pages/Root";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import User from "./pages/User";
import PostDetail from "./pages/PostDetail";
import Search from "./pages/Search";
function App() {
  const { userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  let logoutTimerRef = useRef(null);

  useEffect(() => {
    dispatch(getAllFriendData(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const { userId, token, name, image } = userData;
      dispatch(authActions.login({ userId, token, name, image }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      logoutTimerRef.current = setTimeout(() => {
        dispatch(authActions.logout());
      }, 5000);
      return () => {
        clearTimeout(logoutTimerRef.current);
      };
    }
    console.log("Test Auto Logout")
  },[dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Feed /> },
        {
          path: "users",
          children: [
            { path: ":id", element: <User /> },
            { path: "search/:name", element: <Search /> },
          ],
        },
        {
          path: "posts",
          children: [{ path: ":postId", element: <PostDetail /> }],
        },
        { path: "auth", element: <Auth /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
