import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
          setPosts([...posts, postObj]);
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
          minLength={5}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <ReactQuill
          placeholder="Write your description here..."
          required
          value={description}
          onChange={setDescription}
        />
      </div>
      {editPost && (
        <div className="row">
          <div className="col-6">
            <Link to="/" className="btn btn-outline-danger w-100 mb-2">
              Cancel
            </Link>
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Submit
            </button>
          </div>
        </div>
      )}
      {!editPost && (
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Submit
        </button>
      )}
    </form>
  );
};

export default PostForm;
