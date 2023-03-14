import React from "react";
import { Link, useLocation } from "react-router-dom";

const SinglePostPage = () => {
  const location = useLocation();
  const post = location.state;
  return (
    <div className="container pt-3 my-2">
      {!post ? (
        <div className="not-found-div text-center">
          <h2>Post not found!</h2>
          <span className="mx-2">Well, that's disappointing.</span>
          <Link to="/">Visit our HomePage</Link>
        </div>
      ) : (
        <>
          <div className="heading">
            <h1>{post.post.title}</h1>
          </div>
          <h6 className="my-2 mb-4">{post.post.date}</h6>
          <div className="body">
            <p className="first-letter-big">{post.post.body}</p>
          </div>
          <Link to="/">
            <button className="btn btn-danger">Back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
