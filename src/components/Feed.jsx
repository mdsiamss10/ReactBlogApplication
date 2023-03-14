import React from "react";
import { Link } from "react-router-dom";
import FirstCharUpperCase from "../function/FirstCharUpper";

const Feed = ({ post, handleDelete }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">
          <Link
            state={{ post }}
            style={{ cursor: "pointer" }}
            className="text-decoration-none"
            to={`/post/${post.id}`}
          >
            {FirstCharUpperCase(post.title)}
          </Link>
          <button
            className="btn btn-danger rounded-5 m-2"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </h5>
        <span style={{ fontSize: "14px" }} className="text-muted">
          {post.date}
        </span>
        <p className="card-text mt-2">
          {post.body.length <= 400
            ? FirstCharUpperCase(post.body)
            : FirstCharUpperCase(post.body).slice(0, 400)}
          ...{" "}
          <Link to={`/post/${post.id}`} state={{ post }}>
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Feed;
