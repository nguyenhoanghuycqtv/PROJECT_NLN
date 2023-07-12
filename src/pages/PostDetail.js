import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../components/Comment/CommentForm";
import CommentList from "../components/Comment/CommentList";
import PostItem from "../components/Post/PostItem";
import {
  postComment,
  getAllCommentDataByPostId,
} from "../app/store/comments-actions";
import { getPostByPostId } from "../app/store/posts-actions";

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
    comments: [
      {
        id: "1",
        content: "Nice",
        creator: {
          id: "degea",
          email: "daviddegea@gmail.com",
          image:
            "https://pbs.twimg.com/profile_images/1677677662570000384/IuKiZeNT_400x400.jpg",
        },
      },
    ],
  },
];

const PostDetail = () => {
  const { postId } = useParams();
  const { userId, token } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  // const comments = useSelector(state => state.comments.comments)
  // const comments = useSelector((state) => {
  //   console.log(state.comments.comments);
  //   return state.comments.comments.filter(
  //     (comment) => comment.location?.id === postId
  //   );
  // });

  const dummyPost = DUMMY_POSTS.find((p) => p.id === postId);

  useEffect(() => {
    dispatch(getPostByPostId(postId));
    dispatch(getAllCommentDataByPostId(postId));
  }, []);

  const comments = useSelector((state) => state.comments.comments);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitHandler = (commentEntered) => {
    const data = { content: commentEntered, creator: userId, location: postId };

    dispatch(postComment(data, token, postId));
  };

  console.log(posts);
  return (
    <div className="card">
      {posts &&
        posts.map((p) => (
          <PostItem
            postId={postId}
            comments={comments}
            post={p}
            image={p.image}
            title={p.title}
            content={p.content}
            postOwner={p.creator._id}
          />
        ))}
      {
        <PostItem
          postId={postId}
          comments={dummyPost.comments}
          post={dummyPost}
          image={dummyPost.image}
          title={dummyPost.title}
          content={dummyPost.content}
          postOwner={dummyPost.creator.id}
        />
      }
      <CommentForm postId={postId} submitHandler={handleSubmitHandler} />
      {comments.length != 0 && (
        <CommentList
          // comments={comments.filter((comment) => comment.location.id === postId)}
          comments={comments}
          // postId={postId}
        />
      )}
      {dummyPost && <CommentList comments={dummyPost.comments} />}
    </div>
  );
};

export default PostDetail;
