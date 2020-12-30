import express from 'express';
import { getMovieReviews } from '../tmdb-api';
import upcomingMovieModel from './upcomingMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingMovieModel.find().then(upcomingMovies => res.status(200).send(upcomingMovies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  upcomingMovieModel.findByMovieDBId(id).then(upcomingMovies => res.status(200).send(upcomingMovies)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;