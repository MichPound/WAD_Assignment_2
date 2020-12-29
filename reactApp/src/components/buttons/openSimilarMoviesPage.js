import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const OpenSimilarMoviesPage = ({ movie }) => {

    return (
        <Link
          className="button btn w-100"
          to={{
            pathname: `/movies/${movie.id}/similar`,
            state: {
              movie: movie
            }
          }}
        >
          Similar Movies
        </Link>
      );
    };

export default OpenSimilarMoviesPage;