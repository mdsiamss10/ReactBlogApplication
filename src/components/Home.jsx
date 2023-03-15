import React from "react";
import postApi from "../api/post.api";
import Feed from "./Feed";

const Home = ({ posts, setPosts, isLoading, isError }) => {
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      try {
        const newPosts = posts.filter((posts) => posts.id !== id);
        await postApi.delete("/items/" + id);
        setTimeout(() => {
          setPosts(newPosts);
        }, 500);
      } catch (err) {
        alert("Couldn't delete the item.");
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <div className="container py-3 d-flex flex-column justify-content-center">
        {isLoading && (
          <p className="text-center fs-4 fw-semibold">Loading...</p>
        )}
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
        {!isLoading && posts.length === 0 && !isError && (
          <span className="text-center fs-4 fw-semibold">No posts found!</span>
        )}
        {isError && (
          <span className="text-center fs-4 fw-semibold">
            Something went wrong...
          </span>
        )}
      </div>
    </>
  );
};

export default Home;
