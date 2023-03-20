import { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostData } from "../../app/store/posts-actions";

let isInitial = true;
const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllPostData());
  // }, []);

  if (isInitial) {
    isInitial = false;
    return;
  }
  console.log(posts);
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostItem
              post={post}
              id={post.id}
              image={post.image}
              title={post.title}
              content={post.content}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
