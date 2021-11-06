import "./SearchMovie.css";
import { useState } from "react";
import Rate from "../Rate";
const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    setNameSearch(event.target.value);
  };
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type movie name to search"
        />
        <div className="rating-search">
          <Rate
            rating={ratingSearch}
            setRatingSearch={setRatingSearch}
            setText={setText}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
