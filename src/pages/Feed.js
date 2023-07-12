import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostData } from "../app/store/posts-actions";
import { getAllFriendData, getAllUserData } from "../app/store/users-actions";

const DUMMY_POSTS = [
  {
    id: "degea1",
    title: "Farewell",
    content:
      "Manchester will always be in my heart, Manchester has shaped me and will never leave me.We’ve seen it all. 🤘🏼❤️",
    image: "https://pbs.twimg.com/media/F0hJx4qXsAEFMbK?format=jpg&name=large",
    creator: {
      id: "degea",
      name: "David De Gea",
      email: "daviddegea@gmail.com",
      password: "123456789",
      image:
        "https://pbs.twimg.com/profile_images/1677677662570000384/IuKiZeNT_400x400.jpg",
    },
    comments: [],
  },
  {
    id: "garnacho1",
    title: "19",
    content: "19🥳👶🏼",
    image: "https://pbs.twimg.com/media/Fz9LrUxX0AABTYT?format=jpg&name=large",
    creator: {
      id: "garnacho",
      name: "Alejandro Garnacho",
      email: "alejandrogarnacho@gmail.com",
      password: "123456789",
      image:
        "https://pbs.twimg.com/profile_images/1635048434569822210/UzHEV8t0_400x400.jpg",
    },
    comments: [],
  },
];

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostData());
    dispatch(getAllUserData());
    dispatch(getAllFriendData(userId));
  }, []);

  return (
    <div>
      {posts && <PostList posts={posts} />}
      <PostList posts={DUMMY_POSTS} />
    </div>
  );
};

export default Feed;
