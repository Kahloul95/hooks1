import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to The Movie App</h1>
      <Link to="/movies" className="movies">
        movies
      </Link>
    </div>
  );
};

export default Home;