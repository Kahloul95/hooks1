import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="NotFound">
      404 Not Found
      <Link to="/movies" className="movies">
        movies
      </Link>
    </div>
  );
};

export default NotFound;
