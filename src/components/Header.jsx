import React from "react";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch, isLoading, isError, totalPost }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-light shadow-sm sticky-top"
      style={{ padding: "1em 0", zIndex: 1000 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BlOgSm
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/post" className="nav-link active" aria-current="page">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder={`Search Post (${totalPost})`}
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
