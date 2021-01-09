import React, { useContext } from "react";
// import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import "./button.css";


const AddToFavoriteButton = ({ movie }) => {
  // const context = useContext(MoviesContext);
  const context = useContext(AuthContext)
  const userName = context.userName;

  const handleAddToFavorite = e => {
    e.preventDefault();
    // context.addToFavorites(movie.id);
    context.addToFavorites(userName, movie.id);
    console.log(context.getFavoriteMovies(userName));
  };

  return (
    <button
      type="button"
      className="button btn w-100 "
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;