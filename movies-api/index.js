import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import popularMoviesRouter from './api/popularMovies';
import upcomingMoviesRouter from './api/upcomingMovies';
import nowPlayingMoviesRouter from './api/nowPlayingMovies';
import genresRouter from './api/genres';
import bodyParser from 'body-parser';
import usersRouter from './api/users';
import session from 'express-session';
import {loadUsers, loadMovies, loadPopularMovies, loadUpcomingMovies, loadNowPlayingMovies} from './seedData';
import passport from './authenticate';

dotenv.config();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadPopularMovies();
  loadUpcomingMovies();
  loadNowPlayingMovies();
}

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// initialise passport
app.use(passport.initialize());

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));

app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movies/:id', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/popularMovies', passport.authenticate('jwt', {session: false}), popularMoviesRouter);
app.use('/api/upcomingMovies', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
app.use('/api/nowPlayingMovies', passport.authenticate('jwt', {session: false}), nowPlayingMoviesRouter);
app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});