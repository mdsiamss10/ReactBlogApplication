import React from "react";

const Feed = ({ post }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title" style={{ cursor: "pointer" }}>
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default Feed;
