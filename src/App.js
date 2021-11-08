import { useEffect, useState } from "react";
import { moviesData } from "./Composants/MoviesData";
import AddMovie from "./Composants/AddMovie/AddMovie";
import MovieList from "./Composants/MoviesList";
import SearchMovie from "./Composants/SearchMovie/SearchMovie";
function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(null);

  const filterByName = () => {
    setMoviesList(
      moviesData.filter((el) =>
        el.name.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMoviesList(moviesData.filter((el) => el.rating === ratingSearch));
  };

  const addNewMovie = (newMovie) => {
    moviesData.push(newMovie);
    console.log(moviesData);
    setMoviesList([...moviesList, newMovie]);
  };

  useEffect(() => {
    filterByName();
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
  }, [ratingSearch]);

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MovieList moviesList={moviesList} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;

