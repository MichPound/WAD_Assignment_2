import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import WatchListPage from './pages/watchListPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SimilarMoviesPage from './pages/similarMoviesPage'
import PopularMoviesPage from './pages/popularMoviesPage'
import NowPlayingPage from './pages/nowPlayingPage'
import Signup from './pages/signupPage'
import LoginPage from './pages/loginPage'
import "./main.css";
import AuthProvider from "./contexts/authContext"
import PrivateRoute from "./privateRoute"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider> 
        <div className="jumbotron main">
          <SiteHeader /> 
            <div className="container-fluid">
              <MoviesContextProvider>
                <GenresContextProvider>   
                  <Switch>
                   <Route exact path="/login" component={LoginPage} />
                   <Route exact path="/signup" component={Signup} />
                   <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                   <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                   <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                   <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                   <PrivateRoute path="/movies/:id/similar" component={SimilarMoviesPage} />
                   <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
                   <PrivateRoute exact path="/movies/now_playing" component={NowPlayingPage} />
                   <PrivateRoute exact path="/watchList" component={WatchListPage} />
                   <PrivateRoute path="/movies/:id" component={MoviePage} />
                   <PrivateRoute path="/" component={HomePage} />
                   <Redirect from="*" to="/" />
                  </Switch>
                </GenresContextProvider>   
              </MoviesContextProvider>
            </div>
        </div>
      </AuthProvider> 
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.getElementById("root"));