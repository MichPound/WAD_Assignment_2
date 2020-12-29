import React from "react";
import SimilarMovies from "../components/similarMoviesTemplate";

const SimilarMoviesPage = props => {
  return <div className="row movies bg-info">
    <SimilarMovies movie={props.location.state.movie}></SimilarMovies>
  </div>
};

export default SimilarMoviesPage;