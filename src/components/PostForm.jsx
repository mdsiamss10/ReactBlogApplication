import { format } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostForm = ({ setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handlePostUpdate = (e) => {
    e.preventDefault();
    try {
      if (title === "" || description === "") {
        return;
      } else {
        const postObj = {
          id: new Date().getTime(),
          title: title,
          body: description,
          date: format(new Date(), "MMMM dd, yyyy pp"),
        };
        setPosts([postObj, ...posts]);
        alert("Post created.");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (err) {
      alert("Post created failed." + err.message);
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
