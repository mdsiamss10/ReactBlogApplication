import React from "react";
import FirstCharUpperCase from "../function/FirstCharUpper";

const Feed = ({ post, handleDelete }) => {
  return (
    <div className="card my-2 position-relative">
      <div className="card-body">
        <h5 className="card-title">
          <span style={{ cursor: "pointer" }}>
            {FirstCharUpperCase(post.title)}
          </span>
          <button
            className="btn btn-danger rounded-5 m-2"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </h5>
        <p className="card-text">{FirstCharUpperCase(post.body)}</p>
      </div>
    </div>
  );
};

export default Feed;
