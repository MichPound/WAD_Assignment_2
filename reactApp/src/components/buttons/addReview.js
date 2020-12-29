import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const ReviewButton = ({ movie }) => {
  return (
    <Link
      className="button btn w-100"
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;