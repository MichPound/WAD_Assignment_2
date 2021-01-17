import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./button.css";


const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(AuthContext)
  const userName = context.userName;

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(userName, movie.id);
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