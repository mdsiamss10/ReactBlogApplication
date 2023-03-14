import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import SinglePostPage from "./components/SinglePostPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchRegex = new RegExp(search, "i");
    const filteredSearchResults = posts.filter(
      ({ title, body }) => searchRegex.test(title) || searchRegex.test(body)
    );
    setSearchResults(filteredSearchResults);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header search={search} setSearch={setSearch} />
          <Routes>
            <Route
              path="/"
              element={<Home posts={searchResults} setPosts={setPosts} />}
            />
            <Route
              path="/post"
              element={<Post setPosts={setPosts} posts={posts} />}
            />
            <Route
              path={`/post/:id`}
              element={<SinglePostPage posts={posts} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
