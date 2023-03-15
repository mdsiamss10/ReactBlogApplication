import React from "react";
import { Link, useLocation } from "react-router-dom";
import striptags from "striptags";
import BodyDetails from "../function/BodyDetails.js";

const SinglePostPage = () => {
  const location = useLocation();
  const post = location.state;
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
              <hr />
              <details className="my-2">
                <summary>Details</summary>
                <div className="card-body">
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      Reading time:{" "}
                      {
                        BodyDetails(post && striptags(post.post.body))
                          .readingTime
                      }{" "}
                      minutes
                    </li>
                    <li style={{ listStyle: "none" }}>
                      Words:{" "}
                      {BodyDetails(post && striptags(post.post.body)).wordCount}
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-danger my-2 float-end">Back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
