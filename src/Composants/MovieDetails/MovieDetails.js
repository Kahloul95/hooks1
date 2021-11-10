import React, { useEffect } from "react";
import "./MovieDetails.css";
import { Redirect, useHistory, useParams } from "react-router-dom";

const MovieDetails = (props) => {
  console.log(useParams());
  console.log(useHistory());
  const { goBack, push } = useHistory();
  const { id } = useParams();
  //console.log(props);
  const movie = props.movies.find(
    //(movie) => movie.id === +props.match.params.id
    (movie) => movie.id === +id // using useParams to extract the id from url
  );
  console.log(movie);

  if (!movie) {
    return <Redirect to="/error" />;
  }

  return (
    <div className="MovieDetails">
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h2>Overview</h2>
        {movie.description}
      </div>
      <button
        onClick={() => {
          //props.history.goBack();
          push("/"); // using useHistory
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default MovieDetails;
