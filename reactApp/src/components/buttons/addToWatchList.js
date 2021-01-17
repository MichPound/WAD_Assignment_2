import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./button.css";

const AddToWatchList = ({ movie }) => {
  const context = useContext(AuthContext)
  const userName = context.userName;

  const handleAddToWatchList = e => {
    e.preventDefault();
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