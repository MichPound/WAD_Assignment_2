import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter( m => m.watchList )

  return (
    <MovieListPageTemplate
      movies={upcoming}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListPage;