import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import OpenSimilarMoviesPage from '../components/buttons/openSimilarMoviesPage.js'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext) 
  const popular = context.popular;

  return (
      <PageTemplate
        title='Popular Movies'
        movies={popular}
        action={(movie) => {
          return <OpenSimilarMoviesPage movie={movie} /> ;
        }}
      />
  );
};

export default PopularMoviesPage;