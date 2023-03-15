import React from "react";
import Feed from "./Feed";

const Home = ({ posts, setPosts }) => {
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    }
  };

  return (
    <>
      <div className="container py-3 d-flex flex-column justify-content-center">
        {posts.length !== 0 && (
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
        )}
        {posts.length === 0 && (
          <span className="text-center fs-4 fw-semibold">No posts found!</span>
        )}
      </div>
    </>
  );
};

export default Home;
