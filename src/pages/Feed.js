import React, { useEffect } from "react";
import PostList from "../components/Post/PostList";
import { useSelector, useDispatch } from "react-redux";
import { commentsAcions } from "../app/store/comments-slice";
import { socket } from "../socket";
import { getAllPostData } from "../app/store/posts-actions";
import { getAllUserData } from "../app/store/users-actions";
import { getAllFriendData } from "../app/store/friends-actions";
const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const { userId } = useSelector((state) => state.auth);
  const friends = useSelector((state) => state.friends.friends);
  // console.log("Users from Feed", users);
  const dispatch = useDispatch();
  console.log(userId);
  console.log("Friend from Feed", friends);

  useEffect(() => {
    dispatch(getAllPostData());
    dispatch(getAllUserData());
    dispatch(getAllFriendData(userId));
  }, [userId]);

  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Feed;
