import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import postApi from "./api/post.api";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import SinglePostPage from "./components/SinglePostPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const searchRegex = new RegExp(search, "i");
    const filteredSearchResults = posts.filter(
      ({ title, body }) => searchRegex.test(title) || searchRegex.test(body)
    );
    setSearchResults(filteredSearchResults.reverse());
  }, [search, posts]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await (await postApi.get("/items")).data;
        setTimeout(() => {
          setPosts(data);
          setIsLoading(false);
        }, 500);
        setIsError(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        console.log(err.message);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header
            totalPost={posts.length}
            search={search}
            setSearch={setSearch}
            isLoading={isLoading}
            isError={isError}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  posts={searchResults}
                  setPosts={setPosts}
                  isLoading={isLoading}
                  isError={isError}
                />
              }
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
