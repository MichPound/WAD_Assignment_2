import React, { useContext } from "react";
// import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import "./button.css";

const AddToWatchList = ({ movie }) => {
  // const context = useContext(MoviesContext);
  const context = useContext(AuthContext)
  const userName = context.userName;

  const handleAddToWatchList = e => {
    e.preventDefault();
    // context.addToWatchList(movie.id);
    context.addToWatchList(userName, movie.id);
  };
  return (
    <button
      type="button"
      className="button btn w-100"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchList;