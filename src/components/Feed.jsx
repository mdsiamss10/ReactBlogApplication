import React from "react";

const Feed = ({ post, setPosts, handleDelete }) => {
  return (
    <div className="card my-2 position-relative">
      <div className="card-body">
        <h5 className="card-title">
          <span style={{ cursor: "pointer" }}>
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </span>
          <button
            className="btn btn-outline-danger rounded-5 m-2"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default Feed;
