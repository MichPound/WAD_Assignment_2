import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./similar.css";

export default ({movie}) => {

  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then(similarMovie => {
      setSimilarMovie(similarMovie);
    });
  }, []);
return(
  similarMovie.map(similar =>{
  return (
    <div className="col-sm-3">
      <div className="card">
      <Link to={`/movies/${similar.id}`}>
        <img
          className="card-img-tag center "
          alt={similar.title}
          src={
            similar.poster_path
              ? `https://image.tmdb.org/t/p/w500/${similar.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{similar.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {similar.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {similar.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
 
   );
  })
)
};