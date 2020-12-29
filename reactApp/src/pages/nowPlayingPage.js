import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import OpenSimilarMoviesPage from '../components/buttons/openSimilarMoviesPage.js'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext) 
  const now = context.now;

  return (
      <PageTemplate
        title='Now Playing'
        movies={now}
        action={(movie) => {
          return <OpenSimilarMoviesPage movie={movie} /> ;
        }}
      />
  );
};

export default NowPlayingPage;