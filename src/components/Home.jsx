import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <>
      <div className="container py-3 d-flex flex-column justify-content-center">
        {posts.length ? (
          <ul>
            {posts.map((post) => (
              <Feed post={post} key={post.key} />
            ))}
          </ul>
        ) : (
          <p className="text-center">No posts found!</p>
        )}
      </div>
    </>
  );
};

export default Home;
