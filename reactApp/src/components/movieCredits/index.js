import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import "./credits.css";

const MovieCredits = ({ movie }) => {

  const [credits, setCredits] = useState([]);

      useEffect(() => {
        getMovieCredits(movie.id).then(credits => {
        setCredits(credits);
    });
  }, []);

    return (
         credits.map(credit => {
          return (
            <div className="col-sm-3">
              <div className="card">
                <img
                  className="card-img-tag center "
                  alt={credit.title}
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                      : "./film-poster-placeholder.png"
                  }
                />
                <div className="card-body">
                  <h4 className="card-title ">{credit.name}</h4>
                  <h4 className="card-title ">{credit.character}</h4>
                </div>
              </div>
              </div>
           );
          })
    );
  };
  
  export default MovieCredits;