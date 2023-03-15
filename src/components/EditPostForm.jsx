import React from "react";
import Post from "./Post";

const EditPostForm = ({ setPosts, posts }) => {
  return <Post setPosts={setPosts} posts={posts} />;
};

export default EditPostForm;
