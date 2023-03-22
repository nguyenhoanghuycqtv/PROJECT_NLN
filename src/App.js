import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "./socket";
import { authActions } from "./app/store/auth-slice";
import { getAllUserData } from "./app/store/users-actions";
import { getAllPostData } from "./app/store/posts-actions";
import { getAllCommentData } from "./app/store/comments-actions";
import { commentsAcions } from "./app/store/comments-slice";
import Root from "./pages/Root";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import User from "./pages/User";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userId);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(getAllUserData());
    dispatch(getAllPostData());
    dispatch(getAllCommentData());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const { userId, token, name, image } = userData;
      dispatch(authActions.login({ userId, token, name, image }));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Feed /> },
        { path: "users", children: [{ path: ":id", element: <User /> }] },
        { path: "auth", element: <Auth /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
