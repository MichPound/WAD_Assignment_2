import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {AuthContext} from '../contexts/authContext'

const FavoriteMoviesPage = () => {
  const authContext = useContext(AuthContext);
  const userName = authContext.userName;
  const [favorites, setLoadedFavorites] = useState([]);

  if (authContext.isAuthenticated){
    var favourites = async() => {
      let movies = await authContext.getFavoriteMovies(userName);
      console.log(movies)
      return movies;
    }
  favourites().then(loadedFavorites => setLoadedFavorites(loadedFavorites))
  
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}

export default FavoriteMoviesPage;