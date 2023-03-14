import React from "react";
import PostForm from "./PostForm";

const Post = ({ setPosts, posts }) => {
  return (
    <>
      <div className="container d-flex justify-content-center pt-4 align-items-center">
        <PostForm setPosts={setPosts} posts={posts} />
      </div>
    </>
  );
};

export default Post;
