import React from "react";
import PostItem from "./PostItem";


const PostList = (props) => {

  return (
    <ul className={props.className}>
      {props.posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <li key={post.id}>
              <PostItem
                post={post}
                image={post.image}
                title={post.title}
                content={post.content}
                postId={post.id}
                comments={post.comments}
                postOwner={post.creator._id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
