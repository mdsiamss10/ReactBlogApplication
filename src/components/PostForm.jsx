import React, { useState } from "react";

const PostForm = ({ setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handlePostUpdate = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      return;
    } else {
      const postObj = {
        id: crypto.randomUUID(),
        title: title,
        body: description,
      };
      setPosts([postObj, ...posts]);
    }
  };
  return (
    <form style={{ width: "60%" }} onSubmit={handlePostUpdate}>
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
