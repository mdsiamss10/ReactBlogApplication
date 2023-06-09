import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import striptags from "striptags";
import FirstCharUpperCase from "../function/FirstCharUpper";

const Feed = ({ post, handleDelete }) => {
  const bodyWithoutHTML = striptags(post.body);
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
            {post.title}
          </Link>
          <div className="button-stack d-flex align-items-center justify-content-center">
            <button
              className="btn btn-danger rounded-5 mx-1 d-flex justify-content-center align-items-center"
              onClick={() => handleDelete(post.id)}
            >
              <FaTrash />
            </button>
            <Link to={`/post/edit/${post.id}`} state={{ post }}>
              <button className="btn btn-primary rounded-5 mx-1 d-flex justify-content-center align-items-center">
                <FaEdit />
              </button>
            </Link>
          </div>
        </h5>
        {post.updated && (
          <>
            <span className="text-muted">(edited) - </span>
          </>
        )}
        <span style={{ fontSize: "14px" }} className="text-muted">
          {post.date}
        </span>
        <p className="card-text mt-0">
          {bodyWithoutHTML.length <= 250
            ? FirstCharUpperCase(bodyWithoutHTML).replace("&nbsp;", " ")
            : FirstCharUpperCase(bodyWithoutHTML)
                .slice(0, 250)
                .replace("&nbsp;", " ")}
          {bodyWithoutHTML.length >= 250 && (
            <>
              ...
              <Link to={`/post/${post.id}`} state={{ post }}>
                Read more
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Feed;
