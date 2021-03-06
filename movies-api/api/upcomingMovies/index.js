import express from 'express';
import upcomingMovieModel from './upcomingMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingMovieModel.find().then(upcomingMovies => res.status(200).send(upcomingMovies)).catch(next);
});

export default router;