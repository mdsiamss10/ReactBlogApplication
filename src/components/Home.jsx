import React from "react";
import Feed from "./Feed";

const Home = ({ posts, setPosts }) => {
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete?")) {
      setTimeout(() => {
        setPosts(posts.filter((posts) => posts.id !== id));
      }, 500);
    }
  };
  return (
    <>
      <div className="container py-3 d-flex flex-column justify-content-center">
        {posts.length !== 0 ? (
          <ul>
            {posts.map((post) => (
              <Feed
                post={post}
                setPosts={setPosts}
                key={post.key}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        ) : (
          <span className="text-center fs-4 fw-semibold">No posts found!</span>
        )}
      </div>
    </>
  );
};

export default Home;
