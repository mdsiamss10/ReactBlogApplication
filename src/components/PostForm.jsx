import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import postApi from "../api/post.api";
import getDate from "../function/getDate";

const PostForm = ({ setPosts, posts }) => {
  const editPost = useLocation().state;
  const [title, setTitle] = useState(!editPost ? "" : editPost.post.title);
  const [description, setDescription] = useState(
    !editPost ? "" : editPost.post.body
  );
  const navigate = useNavigate();
  const handlePostUpdate = async (e) => {
    e.preventDefault();
    const postObj = {
      id: new Date().getTime(),
      title: title,
      body: description,
      date: getDate(),
      updated: false,
    };
    try {
      if (!editPost) {
        if (title === "" || description === "") {
          return;
        } else {
          const response = await postApi.post("/items", postObj);
          setPosts([...posts, response.data]);
          alert("Post created.");
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
      } else {
        if (title === "" || description === "") {
          return;
        } else {
          const newPostObj = {
            id: editPost.post.id,
            title,
            body: description,
            date: getDate(),
            updated: true,
          };
          await postApi.put("/items/" + editPost.post.id, newPostObj);
          setPosts(
            posts.map((post) =>
              post.id === editPost.post.id ? newPostObj : post
            )
          );
          alert("Post Updated.");
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
      }
    } catch (err) {
      alert("Operation failed due to " + err.message);
    }
  };
  return (
    <form
      style={{ width: "60%" }}
      className="postFrom"
      onSubmit={handlePostUpdate}
    >
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input
          type="text"
          className="form-control"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={7}
          style={{ resize: "none" }}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mb-5">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
