import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {AuthContext} from '../contexts/authContext'

const WatchListPage = () => {
  const authContext = useContext(AuthContext);
  const userName = authContext.userName;
  const [watchList, setLoadedWatchList] = useState([]);

  if (authContext.isAuthenticated){
    var WatchList = async() => {
      let movies = await authContext.getWatchListMovies(userName);
      console.log(movies)
      return movies;
    }
    WatchList().then(loadedWatchList => setLoadedWatchList(loadedWatchList))
  
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}

export default WatchListPage;