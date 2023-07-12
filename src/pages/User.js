import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Stat from "../shared/components/UI/Stat";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import { postPost, getAllPostByUserId } from "../app/store/posts-actions";
import { useDispatch } from "react-redux";
import {
  addFriendData,
  deleteFriendData,
  getAllFriendData,
  getUserDataByUserId,
} from "../app/store/users-actions";
import { usersActions } from "../app/store/users-slice";

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

const DUMMY_USERS = [
  {
    id: "degea",
    name: "David De Gea",
    email: "daviddegea@gmail.com",
    password: "123456789",
    image:
      "https://pbs.twimg.com/profile_images/1677677662570000384/IuKiZeNT_400x400.jpg",
  },
  {
    id: "garnacho",
    name: "Alejandro Garnacho",
    email: "alejandrogarnacho@gmail.com",
    password: "123456789",
    image:
      "https://pbs.twimg.com/profile_images/1635048434569822210/UzHEV8t0_400x400.jpg",
  },
];

let isInitial = true;
const User = (props) => {
  const id = useParams().id;

  const dummyUser = DUMMY_USERS.find((u) => u.id === id);
  const dummyPosts = DUMMY_POSTS.filter((p) => p.creator.id === id);

  const [createNewPost, setCreateNewPost] = useState(false);
  const { userId, token } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.users.users);
  const { friends, isFriend } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataByUserId(id));
    dispatch(getAllPostByUserId(id));
    dispatch(usersActions.isFriend(id));
  }, [id, friends]);

  if (isInitial) {
    isInitial = false;
    return;
  }
  const handleSubmitHandler = (
    enteredFile,
    enteredTitle,
    enteredContent,
    enteredUserId
  ) => {
    const formData = new FormData();
    formData.append("image", enteredFile);
    formData.append("title", enteredTitle);
    formData.append("content", enteredContent);
    formData.append("creator", enteredUserId);
    dispatch(postPost(formData, token));
    setCreateNewPost((prevState) => !prevState);
  };

  const createPostHandler = () => {
    setCreateNewPost((prevState) => !prevState);
  };

  const addFriendHandler = () => {
    dispatch(addFriendData(userId, id));
  };
  const deleteFriendHandler = () => {
    dispatch(deleteFriendData(userId, id));
  };

  return (
    <div className="card">
      {dummyUser ? (
        <Stat
          image={dummyUser.image}
          posts={dummyUser.posts}
          friends={dummyUser.friends}
          name={dummyUser.name}
          addFriend={addFriendHandler}
          deleteFriend={deleteFriendHandler}
          userPageId={id}
          isFriend={isFriend}
        />
      ) : (
        <Stat
          image={user[0]?.image}
          posts={user[0]?.posts}
          friends={user[0]?.friends}
          name={user[0]?.name}
          addFriend={addFriendHandler}
          deleteFriend={deleteFriendHandler}
          userPageId={id}
          isFriend={isFriend}
        />
      )}
      {id === userId && (
        <React.Fragment>
          <div className="text-center">
            <button onClick={createPostHandler} className="btn btn-info w-6/12">
              <span className="font-extrabold text-xl inline-block">
                Share Your Thoughts
              </span>
            </button>
          </div>
          {createNewPost && <PostForm submitHandler={handleSubmitHandler} />}
        </React.Fragment>
      )}
      <PostList posts={posts} className="mt-4" />
      <PostList posts={dummyPosts} className="mt-4" />
    </div>
  );
};

export default User;
