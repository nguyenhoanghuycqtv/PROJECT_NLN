import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./app/store/auth-slice";
import { getAllUserData } from "./app/store/users-actions";
import { getAllPostData } from "./app/store/posts-actions";
import { getAllCommentData } from "./app/store/comments-actions";
import Root from "./pages/Root";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(getAllUserData());
    dispatch(getAllPostData());
    dispatch(getAllCommentData());
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { userId, token, name, image } = userData;
    if ((userId, token, name, image)) {
      dispatch(authActions.login({ userId, token, name, image }));
    }
  }, []);

  console.log(isLoggedIn);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Feed /> },
        // { path: "/test", element: <UserTableItem /> },
        { path: "/auth", element: <Auth /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
