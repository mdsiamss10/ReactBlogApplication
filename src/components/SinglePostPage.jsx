import React from "react";
import { Link, useLocation } from "react-router-dom";

const SinglePostPage = () => {
  const location = useLocation();
  const post = location.state;
  // console.log(readingTime(post.post.body));
  return (
    <div className="container pt-3 my-3">
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
          <div className="card">
            <div className="card-body">
              <div
                dangerouslySetInnerHTML={{ __html: post.post.body }}
                style={{ fontSize: "18px", lineHeight: "1.5em" }}
                className="single-post-p"
              />
            </div>
          </div>
          {/* <details className="my-2">
            <summary>Details</summary>
            <ul>
              <li style={{ listStyle: "none" }}>Reading time: 1 minute</li>
              <li style={{ listStyle: "none" }}>Words: 138</li>
            </ul>
          </details> */}
          <Link to="/">
            <button className="btn btn-danger my-2 float-end">Back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
