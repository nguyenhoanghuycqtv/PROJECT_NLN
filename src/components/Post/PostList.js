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
                id={post.id}
                image={post.image}
                title={post.title}
                content={post.content}
                postId={post.id}
                commentFormDataInputAndPostId={props.commentFormDataInputAndPostId}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
